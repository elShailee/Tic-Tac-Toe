const express = require('express');
const createUuid = require('./Utils/uuidGenerator');
const games = require('./games');
const { enviroment, serverPort, API } = require('./envSelector');
const validations = require('./Utils/validations');
const path = require('path');
const cors = require('cors');

/*----------------*\
|   Backend App    |
\-----------------*/
const app = express();

app.use(express.json());
app.use(cors());

app.post(API.createGame, validations.createGame, (req, res) => {
	const gameId = createUuid(10);
	const { boardState, startingPlayer, turnState, winState, gameMode, playerOne, playerTwo } = req.body;
	games[gameId] = { gameId, boardState, startingPlayer, turnState, winState, gameMode, playerOne };
	if (gameMode === 'local') {
		games[gameId].playerTwo = playerTwo;
	}
	res.status(201).send(games[gameId]);
});

/*app.post(API.renamePlayer + ':gameId', validations.renamePlayer, (req, res) => {});

app.post(API.moveLocal + ':gameId', validations.moveLocal, (req, res) => {});

app.post(API.moveRemote + ':gameId', validations.moveRemote, (req, res) => {});
*/
app.delete(API.deleteLocal + ':gameId', validations.deleteLocal, (req, res) => {
	const { gameId } = req.params;
	games[gameId] = undefined;
	res.send({});
});

app.get(API.loadLocal + ':gameId', validations.loadLocal, (req, res) => {
	const { gameId } = req.params;
	res.send(games[gameId]);
});
/*
app.post(API.joinRemote + ':gameId', validations.joinRemote, (req, res) => {});

app.post(API.leaveRemote + ':gameId', validations.leaveRemote, (req, res) => {});
*/
app.get(API.getGames, (req, res) => {
	res.send(games);
});

app.delete(API.deleteGames, (req, res) => {
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
