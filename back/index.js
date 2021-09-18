const express = require('express');
const uuid = require('./Utils/uuidGenerator');
const validate = require('./Utils/validations');

const app = express();

app.use(express.json());

// app.use((req, res, next) => {
// 	const { error } = validate(req);
// 	if (error) {
// 		return res.status(400).send(error);
// 	}
// 	next();
// });

let games = {};

app.get('/api/game', (req, res) => {
	return res.send(games);
});

app.post('/api/game', (req, res) => {
	const gameState = req.body.gameState;
	const id = uuid(10);
	games[id] = gameState;
	const response = {};
	response[id] = gameState;
	return res.send(response);
});

app.get('/api/game/:id', (req, res) => {
	const gameId = req.params.id;
	if (!games[gameId]) {
		return res.status(404).send(`game ${gameId} doesn't exist.`);
	}
	res.send(`gameState for game ${gameId}.`);
});

app.put('/api/game/:id', (req, res) => {
	const gameState = req.body.gameState;
	const id = req.params.id;
	games[id] = gameState;
	const response = {};
	response[id] = gameState;
	return res.send(response);
});

app.delete('/api/game', (req, res) => {
	games = {};
	return res.send(games);
});

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
