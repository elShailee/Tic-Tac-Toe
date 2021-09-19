const express = require('express');
const createUuid = require('./Utils/uuidGenerator');
const games = require('./games');
const { gamePostValidation, gamePutValidation, gameGetValidation } = require('./Utils/validations');

const app = express();

app.use(express.json());

app.get('/api/game', (req, res) => {
	res.send(games);
});

app.get('/api/game/:gameId', gameGetValidation, (req, res) => {
	const { gameId } = req.params;
	res.send(games[gameId]);
});

app.post('/api/game', gamePostValidation, (req, res) => {
	const { gameState: newGameState } = req.body;
	const gameId = createUuid(10);
	games[gameId] = newGameState;
	res.send({ [gameId]: newGameState });
});

app.put('/api/game/:gameId', gamePutValidation, (req, res) => {
	const { gameState: newGameState } = req.body;
	const gameId = req.params.gameId;
	games[gameId] = newGameState;
	res.send(newGameState);
});

app.delete('/api/game', (req, res) => {
	Object.keys(games).forEach(key => {
		delete games[key];
	});
	res.send(games);
});

const PORT = process.env.PORT ?? 8888;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
