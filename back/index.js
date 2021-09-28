const express = require('express');
const createUuid = require('./Utils/uuidGenerator');
const games = require('./games');
const { gamePostValidation, gamePutValidation, gameGetValidation } = require('./Utils/validations');
const path = require('path');
const cors = require('cors');

/*----------------*\
|   Backend App    |
\-----------------*/
const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/game', (req, res) => {
	res.send(games);
});

app.get('/api/game/:gameId', gameGetValidation, (req, res) => {
	const { gameId } = req.params;
	res.send(games[gameId]);
});

app.post('/api/game', gamePostValidation, (req, res) => {
	const { boardState, turnState, winState } = req.body;
	const gameId = createUuid(10);
	games[gameId] = { gameId, boardState, turnState, winState };
	res.send(games[gameId]);
});

app.put('/api/game/:gameId', gamePutValidation, (req, res) => {
	const { boardState, turnState, winState } = req.body;
	const { gameId } = req.params;
	games[gameId] = { gameId, boardState, turnState, winState };
	res.send(games[gameId]);
});

app.delete('/api/game', (req, res) => {
	Object.keys(games).forEach(key => {
		delete games[key];
	});
	res.send(games);
});

const BACK_PORT = process.env.PORT || 3000;
app.listen(BACK_PORT, () => console.log(`Listening for back  requests on port ${BACK_PORT}...`));

/*-----------------*\
|   Frontend App    |
\------------------*/

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
