const express = require('express');
const uuid = require('./Utils/uuidGenerator');
const games = require('./games');
const { gamePostValidation, gamePutValidation, gameGetValidation } = require('./Utils/validations');

const app = express();

app.use(express.json());

app.get('/api/game', (req, res) => {
	res.send(games);
});

app.get('/api/game/:gameId', gameGetValidation, (req, res) => {
	const { gameId } = req.params;
	//no need, the caller knows the id he used.
	const response = {};
	response[gameId] = games[gameId];
	res.send(response);
});

app.post('/api/game', gamePostValidation, (req, res) => {
	//change name
	const { gameState } = req.body;
	const gameId = uuid(10);
	games[gameId] = gameState;
	//same as 16
	const response = {};
	response[gameId] = gameState;
	res.send(response);
});

app.put('/api/game/:gameId', gamePutValidation, (req, res) => {
	//cahnge name
	const { gameState } = req.body;
	const gameId = req.params.gameId;
	games[gameId] = gameState;
	//same as 16
	const response = {};
	response[gameId] = gameState;
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
