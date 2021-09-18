const Joi = require('joi');
const games = require('../games');

module.exports.gamePostValidation = (req, res, next) => {
	const validationsSuite = [validateGameState];
	if (hasPassedValidations(validationsSuite, req, res)) next();
};

module.exports.gamePutValidation = (req, res, next) => {
	const validationsSuite = [validateGameState, validateGameId];
	if (hasPassedValidations(validationsSuite, req, res)) next();
};

const hasPassedValidations = (validationsSuite, req, res) => {
	let passed = true;
	validationsSuite.forEach(validation => {
		const { error } = validation(req);
		if (error) {
			res.status(400).send(error.details[0].message);
			passed = false;
		}
	});
	return passed;
};

const validateGameState = req => {
	const rowScema = Joi.array().length(3).required().items(false, Joi.string().valid('X', 'O'));
	const schema = Joi.object({ gameState: Joi.array().length(3).required().items(rowScema) }).required();
	return schema.validate(req.body);
};

const validateGameId = req => {
	const schema = Joi.object({
		gameId: Joi.string()
			.valid('', ...Object.keys(games))
			.required(),
	}).required();
	const result = schema.validate(req.params);
	if (result.error) result.error.details[0].message = '"gameId" must equal an existing gameId';
	return result;
};
