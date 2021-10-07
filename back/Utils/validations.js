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
		const validationsSuite = [matchGameId, validateRemoteMatch, validateRemote];
		if (hasPassedValidations(validationsSuite, req, res)) next();
	},
	moveRemote: (req, res, next) => {
		const validationsSuite = [
			matchGameId,
			validateRemoteMatch,
			validateRemote,
			validateGameData,
			validateRemotePlayerActive,
		];
		if (hasPassedValidations(validationsSuite, req, res)) next();
	},
	leaveRemote: (req, res, next) => {
		const validationsSuite = [matchGameId, validateRemoteMatch, validateRemote, validateRemotePlayerActive];
		if (hasPassedValidations(validationsSuite, req, res)) next();
	},
	renameRemote: (req, res, next) => {
		const validationsSuite = [matchGameId, validateRemoteMatch, validateRemote, validateRemotePlayerActive];
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
		id: Joi.string().length(10).required(),
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
		userPlayer: Joi.object({
			nickname: Joi.string().min(3).required(),
			mark: Joi.valid('X', 'O'),
			id: Joi.string().length(10),
		}).required(),
	})
		.required()
		.unknown();
	return schema.validate(req.body);
};

const validateBlankGame = req => {
	const schema = Joi.object({
		startingPlayer: Joi.string().valid('X', 'O').required(),
		gameMode: Joi.string().valid('remote', 'local').required(),
		userPlayer: Joi.when('gameMode', {
			is: 'remote',
			then: Joi.object({
				nickname: Joi.string().required(),
				mark: Joi.string().valid('X', 'O').required(),
			}).required(),
		}),
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
	})
		.required()
		.unknown();
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
		winState: Joi.valid('X', 'O', 'Tie', false).required(),
	})
		.required()
		.unknown();
	return schema.validate(req.body);
};

const validateRemotePlayerActive = req => {
	const { gameId } = req.params;

	const schema = Joi.object({
		userPlayer: schemas.remotePlayer.required(),
	})
		.required()
		.unknown();

	if (schema.validate(req.body).error) {
		return schema.validate(req.body);
	}

	const { userPlayer } = req.body;

	if (games[gameId]?.playerOne?.id === userPlayer.id || games[gameId]?.playerTwo?.id === userPlayer.id) {
		return true;
	} else {
		return { error: true, customMessage: "userPlayer isn't an active player" };
	}
};
