const Joi = require('joi');
const games = require('../games');

module.exports.gameGetValidation = (req, res, next) => {
	const validationsSuite = [matchGameId];
	if (hasPassedValidations(validationsSuite, req, res)) next();
};

module.exports.gamePostValidation = (req, res, next) => {
	const validationsSuite = [validateGameState, validateNewGame];
	if (hasPassedValidations(validationsSuite, req, res)) next();
};

module.exports.gamePutValidation = (req, res, next) => {
	const validationsSuite = [validateGameState, matchGameId];
	if (req.body?.isBlankGame) {
		validationsSuite.push(validateNewGame);
	}
	if (hasPassedValidations(validationsSuite, req, res)) next();
};

const hasPassedValidations = (validationsSuite, req, res) => {
	for (const validation of validationsSuite) {
		const { error, customStatus, customMessage } = validation(req);
		if (error) {
			res.status(customStatus || 202).send(customMessage || error.details?.[0]?.message || 'Unknown Error');
			return false;
		}
	}
	return true;
};

const validateGameState = req => {
	const rowScema = Joi.array().length(3).required().items(false, Joi.string().valid('X', 'O'));

	const playersScema = Joi.object()
		.keys({
			nickname: Joi.string().min(3).required(),
			mark: Joi.valid('X', 'O').required(),
		})
		.required();

	const schema = Joi.object({
		gameId: Joi.string().allow(),
		isBlankGame: Joi.boolean().required(),
		boardState: Joi.array().length(3).required().items(rowScema),
		startingPlayer: Joi.string().valid('X', 'O').required(),
		turnState: Joi.string().valid('X', 'O').required(),
		winState: Joi.valid('X', 'O', 'Tie', false).required(),
		gameMode: Joi.string().valid('local', 'remote').required(),
		playerOne: Joi.when('gameMode', { is: 'remote', then: playersScema }),
	}).required();
	return schema.validate(req.body);
};

const matchGameId = req => {
	const schema = Joi.object({
		gameId: Joi.string()
			.valid('', ...Object.keys(games))
			.required(),
	}).required();
	return { ...schema.validate(req.params), customMessage: '"gameId" must equal an existing gameId' };
};

const validateNewGame = req => {
	let errorMessage = '';
	if (req.body?.startingPlayer !== req.body?.turnState) {
		errorMessage = 'startingPlayer must equal turnState on new games.';
	}

	const blankBoardSchema = Joi.array().length(3).required().items(Joi.array().length(3).required().items(false));
	const result = blankBoardSchema.validate(req.body?.boardState);
	if (result.error) {
		errorMessage = 'boardState must be a blankBoard on new games.';
	}
	if (errorMessage) {
		return { error: true, customMessage: errorMessage };
	} else {
		return {};
	}
};
