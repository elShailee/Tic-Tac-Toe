const Joi = require('joi');
const games = require('../games');

module.exports.gameGetValidation = (req, res, next) => {
	const validationsSuite = [matchGameId];
	if (hasPassedValidations(validationsSuite, req, res)) next();
};

module.exports.gamePostValidation = (req, res, next) => {
	const validationsSuite = [validateGameState];
	if (hasPassedValidations(validationsSuite, req, res)) next();
};

module.exports.gamePutValidation = (req, res, next) => {
	const validationsSuite = [validateGameState, matchGameId];
	if (hasPassedValidations(validationsSuite, req, res)) next();
};

const hasPassedValidations = (validationsSuite, req, res) => {
	for (const validation of validationsSuite) {
		const { error, customStatus, customMessage } = validation(req);
		if (error) {
			res.status(customStatus ?? 400).send(customMessage || error.details?.[0]?.message || 'Unknown Error');
			return false;
		}
	}
	return true;
};

const validateGameState = req => {
	const rowScema = Joi.array().length(3).required().items(false, Joi.string().valid('X', 'O'));
	const schema = Joi.object({
		boardState: Joi.array().length(3).required().items(rowScema),
		turnState: Joi.string().valid('X', 'O').required(),
		winState: Joi.valid('X', 'O', 'Tie', false).required(),
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
