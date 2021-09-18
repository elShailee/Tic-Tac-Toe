const express = require('express');
const uuid = require('./Utils/uuidGenerator');
const games = require('./games');
const { gamePostValidation, gamePutValidation } = require('./Utils/validations');

const app = express();

app.use(express.json());

app.get('/api/game', (req, res) => {
	res.send(games);
});

app.post('/api/game', gamePostValidation, (req, res) => {
	const gameState = req.body.gameState;
	const id = uuid(10);
	games[id] = gameState;
	const response = {};
	response[id] = gameState;
	res.send(response);
});

app.get('/api/game/:gameId', (req, res) => {
	const gameId = req.params.gameId;
	if (!games[gameId]) {
		res.status(404).send(`game ${gameId} doesn't exist.`);
	}
	res.send(`gameState for game ${gameId}.`);
});

app.put('/api/game/:gameId', gamePutValidation, (req, res) => {
	const gameState = req.body.gameState;
	const id = req.params.gameId;
	games[id] = gameState;
	const response = {};
	response[id] = gameState;
	res.send(response);
});

app.delete('/api/game', (req, res) => {
	Object.keys(games).forEach(key => {
		delete games[key];
	});
	res.send(games);
});

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
