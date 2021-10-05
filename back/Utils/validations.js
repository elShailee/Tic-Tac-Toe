const Joi = require('joi');
const games = require('../games');

module.exports = {
	// gameGetValidation: (req, res, next) => {
	// 	const validationsSuite = [matchGameId];
	// 	if (hasPassedValidations(validationsSuite, req, res)) next();
	// },
	// gamePostValidation: (req, res, next) => {
	// 	const validationsSuite = [validateGameState, validateNewGame];
	// 	if (hasPassedValidations(validationsSuite, req, res)) next();
	// },
	// gamePutValidation: (req, res, next) => {
	// 	const validationsSuite = [validateGameState, matchGameId];
	// 	if (req.body?.isBlankGame) {
	// 		validationsSuite.push(validateNewGame);
	// 	}
	// 	if (hasPassedValidations(validationsSuite, req, res)) next();
	// },
	createGame: (req, res, next) => {
		const validationsSuite = [validateBlankGame, validateGameMode];
		if (hasPassedValidations(validationsSuite, req, res)) next();
	},
	changeNickname: (req, res, next) => {
		const validationsSuite = [matchGameId];
		if (hasPassedValidations(validationsSuite, req, res)) next();
	},
	playerMove: (req, res, next) => {
		const validationsSuite = [matchGameId];
		if (hasPassedValidations(validationsSuite, req, res)) next();
	},
	deleteLocal: (req, res, next) => {
		const validationsSuite = [matchGameId];
		if (hasPassedValidations(validationsSuite, req, res)) next();
	},
	loadLocal: (req, res, next) => {
		const validationsSuite = [matchGameId];
		if (hasPassedValidations(validationsSuite, req, res)) next();
	},
	joinRemote: (req, res, next) => {
		const validationsSuite = [matchGameId];
		if (hasPassedValidations(validationsSuite, req, res)) next();
	},
	leaveRemote: (req, res, next) => {
		const validationsSuite = [matchGameId];
		if (hasPassedValidations(validationsSuite, req, res)) next();
	},
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

const schemas = {
	playersScema: Joi.object()
		.keys({
			nickname: Joi.string().min(3).required(),
			mark: Joi.valid('X', 'O').required(),
		})
		.required(),
};
// const validateGameState = req => {
// 	const rowScema = Joi.array().length(3).required().items(false, Joi.string().valid('X', 'O'));

// 	const schema = Joi.object({
// 		gameId: Joi.string().allow(),
// 		boardState: Joi.array().length(3).required().items(rowScema),
// 		startingPlayer: Joi.string().valid('X', 'O').required(),
// 		turnState: Joi.string().valid('X', 'O').required(),
// 		winState: Joi.valid('X', 'O', 'Tie', false).required(),
// 		gameMode: Joi.string().valid('local', 'remote').required(),
// 		playerOne: Joi.when('gameMode', { is: 'remote', then: playersScema }),
// 	}).required();
// 	return schema.validate(req.body);
// };

const matchGameId = req => {
	const schema = Joi.object({
		gameId: Joi.string()
			.valid('', ...Object.keys(games))
			.required(),
	}).required();
	return { ...schema.validate(req.params), customMessage: '"gameId" must equal an existing gameId' };
};

const validateBlankGame = req => {
	const schema = Joi.object({
		boardState: Joi.array().length(3).required().items(Joi.array().length(3).required().items(false)),
		startingPlayer: Joi.string().valid('X', 'O').required(),
		winState: Joi.valid(false).required(),
		turnState: Joi.string()
			.when('startingPlayer', { is: Joi.exist(), then: Joi.equal(Joi.ref('startingPlayer')) })
			.required(),
	})
		.required()
		.unknown();

	return schema.validate(req.body);
};

const validateGameMode = req => {
	const schema = Joi.object({
		gameMode: Joi.string().valid('local', 'remote').required(),
		playerOne: Joi.when('gameMode', { is: 'remote', then: schemas.playersScema }),
	})
		.required()
		.unknown();
	return schema.validate(req.body);
};
