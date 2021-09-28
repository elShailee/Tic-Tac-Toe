const express = require('express');
const createUuid = require('./Utils/uuidGenerator');
const games = require('./games');
const { gamePostValidation, gamePutValidation, gameGetValidation } = require('./Utils/validations');
const path = require('path');

/*----------------*\
|   Backend App    |
\-----------------*/
const backApp = express();

backApp.use(express.json());
backApp.use((req, res, next) => {
	res.setHeader('access-control-allow-origin', '*');
	res.setHeader('access-control-allow-headers', '*');
	res.setHeader('access-control-allow-methods', '*');
	next();
});

backApp.get('/api/game', (req, res) => {
	res.send(games);
});

backApp.get('/api/game/:gameId', gameGetValidation, (req, res) => {
	const { gameId } = req.params;
	res.send(games[gameId]);
});

backApp.post('/api/game', gamePostValidation, (req, res) => {
	const { boardState, turnState, winState } = req.body;
	const gameId = createUuid(10);
	games[gameId] = { gameId, boardState, turnState, winState };
	res.send(games[gameId]);
});

backApp.put('/api/game/:gameId', gamePutValidation, (req, res) => {
	const { boardState, turnState, winState } = req.body;
	const { gameId } = req.params;
	games[gameId] = { gameId, boardState, turnState, winState };
	res.send(games[gameId]);
});

backApp.delete('/api/game', (req, res) => {
	Object.keys(games).forEach(key => {
		delete games[key];
	});
	res.send(games);
});

const BACK_PORT = process.env.PORT ?? 8888;
backApp.listen(BACK_PORT, () => console.log(`Listening for back  requests on port ${BACK_PORT}...`));

/*-----------------*\
|   Frontend App    |
\------------------*/

const frontApp = express();

frontApp.use(express.static(path.join(__dirname, 'build')));

frontApp.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const FRONT_PORT = 80;
frontApp.listen(FRONT_PORT, () => console.log(`listening for front requests on port ${FRONT_PORT}...`));
