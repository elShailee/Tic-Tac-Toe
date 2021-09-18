const Joi = require('joi');

const validations = {
	'/api/games': {
		POST: reqBody => {
			const rowScema = Joi.array().length(3).required().items(false, Joi.string().valid('X', 'O'));
			const schema = Joi.object({
				state: Joi.array().length(3).required().items(rowScema),
			});
			return schema.validate(reqBody);
		},
		GET: () => {
			return {};
		},
	},
};

module.exports = req => {
	const url = req.url;
	const method = req.method;
	if (!validations[url] || !validations[url][method]) {
		console.log(`No Validations for ${url} ${method} requests!`);
		return {};
	}
	return validations[url][method](req.body);
};
