const express = require('express');
const uuid = require('./Utils/uuidGenerator');

const app = express();

app.use(express.json());

const games = {};

app.get('/api/games', (req, res) => {
	return res.send(games);
});

app.post('/api/games/', (req, res) => {
	const state = req.body.state;
	const id = uuid(10);
	games[id] = state;
	const response = {};
	response[id] = state;
	return res.send(response);
});

app.get('/api/:id', (req, res) => {
	const gameId = req.params.id;
	if (!games[gameId]) {
		return res.status(404).send(`game ${gameId} doesn't exist.`);
	}
	res.send(`Hello!/nYou Entered Game No.${gameId}`);
});

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
