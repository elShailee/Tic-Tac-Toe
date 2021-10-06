const Joi = require('joi');
const games = require('../games');

module.exports = {
	createLocal: (req, res, next) => {
		const validationsSuite = [validateBlankGame, validateLocal];
		if (hasPassedValidations(validationsSuite, req, res)) next();
	},
	loadLocal: (req, res, next) => {
		const validationsSuite = [matchGameId, validateLocalMatch];
		if (hasPassedValidations(validationsSuite, req, res)) next();
	},
	moveLocal: (req, res, next) => {
		const validationsSuite = [matchGameId, validateLocalMatch, validateLocal, validateGameData];
		if (hasPassedValidations(validationsSuite, req, res)) next();
	},
	deleteLocal: (req, res, next) => {
		const validationsSuite = [matchGameId, validateLocalMatch];
		if (hasPassedValidations(validationsSuite, req, res)) next();
	},
	renameLocal: (req, res, next) => {
		const validationsSuite = [matchGameId, validateLocalMatch, validateLocal];
		if (hasPassedValidations(validationsSuite, req, res)) next();
	},

	createRemote: (req, res, next) => {
		const validationsSuite = [validateBlankGame, validateRemote];
		if (hasPassedValidations(validationsSuite, req, res)) next();
	},
	joinRemote: (req, res, next) => {
		const validationsSuite = [matchGameId, validateRemoteMatch, validateRemote, validateJoiningPlayer];
		if (hasPassedValidations(validationsSuite, req, res)) next();
	},
	moveRemote: (req, res, next) => {
		const validationsSuite = [matchGameId, validateRemoteMatch];
		if (hasPassedValidations(validationsSuite, req, res)) next();
	},
	leaveRemote: (req, res, next) => {
		const validationsSuite = [matchGameId, validateRemoteMatch];
		if (hasPassedValidations(validationsSuite, req, res)) next();
	},
	renameRemote: (req, res, next) => {
		const validationsSuite = [matchGameId, validateRemoteMatch];
		if (hasPassedValidations(validationsSuite, req, res)) next();
	},

	renamePlayer: (req, res, next) => {
		const validationsSuite = [matchGameId, validateGameMode];
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
	remotePlayer: Joi.object().keys({
		nickname: Joi.string().min(3).required(),
		mark: Joi.valid('X', 'O').required(),
	}),
};

const validateLocal = req => {
	const schema = Joi.object({
		gameMode: Joi.string().valid('local').required(),
		playerOne: Joi.string().required(),
		playerTwo: Joi.string().required(),
	})
		.required()
		.unknown();

	return schema.validate(req.body);
};

const validateRemote = req => {
	const schema = Joi.object({
		gameMode: Joi.string().valid('remote').required(),
		playerOne: schemas.remotePlayer,
		playerTwo: schemas.remotePlayer,
		userPlayer: [schemas.remotePlayer.required(), Joi.string().required()],
	})
		.required()
		.unknown();
	return schema.validate(req.body);
};

const validateBlankGame = req => {
	const schema = Joi.object({
		boardState: Joi.array().length(3).required().items(Joi.array().length(3).required().items(false)),
		startingPlayer: Joi.string().valid('X', 'O').required(),
		turnState: Joi.string()
			.when('startingPlayer', { is: Joi.exist(), then: Joi.equal(Joi.ref('startingPlayer')) })
			.required(),
		winState: Joi.valid(false).required(),
		gameMode: Joi.string().valid('remote', 'local').required(),
		playerOne: Joi.when('gameMode', { is: 'remote', then: schemas.remotePlayer.required() }),
		userPlayer: Joi.when('gameMode', { is: 'remote', then: Joi.equal(Joi.ref('playerOne')).required() }),
	})
		.required()
		.unknown();

	return schema.validate(req.body);
};

const matchGameId = req => {
	const schema = Joi.object({
		gameId: Joi.string()
			.valid('', ...Object.keys(games))
			.required(),
	}).required();
	return { ...schema.validate(req.params), customMessage: '"gameId" must equal an existing gameId of same game mode.' };
};

const validateLocalMatch = req => {
	const { gameId } = req.params;
	if (games[gameId].gameMode === 'local') {
		return true;
	} else {
		return { error: true, customMessage: '"gameId" must equal an existing gameId of same game mode.' };
	}
};

const validateRemoteMatch = req => {
	const { gameId } = req.params;
	if (games[gameId].gameMode === 'remote') {
		return true;
	} else {
		return { error: true, customMessage: '"gameId" must equal an existing gameId of same game mode.' };
	}
};

const validateGameData = req => {
	const rowScema = Joi.array().length(3).required().items(false, Joi.string().valid('X', 'O'));
	const schema = Joi.object({
		boardState: Joi.array().length(3).required().items(rowScema),
		startingPlayer: Joi.string().valid('X', 'O').required(),
		turnState: Joi.string().valid('X', 'O').required(),
		winState: Joi.valid('X', 'O', 'Tie', false).required(),
	})
		.required()
		.unknown();
	return schema.validate(req.body);
};

const validateJoiningPlayer = req => {
	const schema = Joi.object({
		userPlayer: Joi.string(),
	})
		.required()
		.unknown();
	return schema.validate(req.body);
};
