const express = require('express');
const createUuid = require('./Utils/uuidGenerator');
const games = require('./games');
const { enviroment, serverPort, gamesApi } = require('./envSelector');
const { gamePostValidation, gamePutValidation, gameGetValidation } = require('./Utils/validations');
const path = require('path');
const cors = require('cors');

/*----------------*\
|   Backend App    |
\-----------------*/
const app = express();

app.use(express.json());
app.use(cors());

app.get(gamesApi, (req, res) => {
	res.send(games);
});

app.get(gamesApi + '/:gameId', gameGetValidation, (req, res) => {
	const { gameId } = req.params;
	res.send(games[gameId]);
});

app.post(gamesApi, gamePostValidation, (req, res) => {
	const { boardState, turnState, winState } = req.body;
	const gameId = createUuid(10);
	games[gameId] = { gameId, boardState, turnState, winState };
	res.status(201).send(games[gameId]);
});

app.put(gamesApi + '/:gameId', gamePutValidation, (req, res) => {
	const { boardState, turnState, winState } = req.body;
	const { gameId } = req.params;
	games[gameId] = { gameId, boardState, turnState, winState };
	res.status(201).send(games[gameId]);
});

app.delete(gamesApi, (req, res) => {
	Object.keys(games).forEach(key => {
		delete games[key];
	});
	res.send(games);
});

const PORT = serverPort;
app.listen(PORT, () => enviroment === 'developement' && console.log(`Listening for requests on port ${PORT}...`));

/*-----------------*\
|   Frontend App    |
\------------------*/

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
