const express = require('express');
const moment = require('moment');
const createUuid = require('./Utils/uuidGenerator');
const { getOppositeMark } = require('./Utils/utilFuncs');
const games = require('./games');
const { enviroment, serverPort, API } = require('./envSelector');
const validations = require('./Utils/validations');
const path = require('path');
const cors = require('cors');
const { makePlayerLeave } = require('./Utils/gameActions');

/*----------------*\
|   Backend App    |
\-----------------*/
const app = express();

app.use(express.json());
app.use(cors());

let siteViews = 0;
let resumeViews = 0;

//games api calls
app.post(API.resetGame + ':gameId', validations.resetGame, (req, res) => {
	const { gameId } = req.params;
	games[gameId].boardState = [
		[false, false, false],
		[false, false, false],
		[false, false, false],
	];
	if (games[gameId].winState) {
		games[gameId].startingPlayer = getOppositeMark(games[gameId].startingPlayer);
	}
	games[gameId].turnState = games[gameId].startingPlayer;
	games[gameId].winState = false;

	if (games[gameId].gameMode === 'local') {
		res.send(games[gameId]);
	} else {
		const { userPlayer } = req.body;
		res.send({ ...games[gameId], userPlayer });
	}
});

//local-games api calls
app.post(API.createLocal, validations.createLocal, (req, res) => {
	const gameId = createUuid(10);
	const { startingPlayer, gameMode, playerOne, playerTwo } = req.body;
	games[gameId] = {
		gameId,
		boardState: [
			[false, false, false],
			[false, false, false],
			[false, false, false],
		],
		startingPlayer,
		turnState: startingPlayer,
		winState: false,
		gameMode,
		playerOne,
		playerTwo,
	};
	res.status(201).send(games[gameId]);
});

app.get(API.loadLocal + ':gameId', validations.loadLocal, (req, res) => {
	const { gameId } = req.params;
	res.send(games[gameId]);
});

app.post(API.moveLocal + ':gameId', validations.moveLocal, (req, res) => {
	const { gameId } = req.params;
	const { boardState, winState } = req.body;

	if (winState === games[gameId].playerOne.mark) {
		games[gameId].playerOne.winCount++;
	}
	if (winState === games[gameId].playerTwo.mark) {
		games[gameId].playerTwo.winCount++;
	}

	games[gameId] = {
		...games[gameId],
		boardState,
		turnState: getOppositeMark(games[gameId].turnState),
		winState,
	};
	res.status(201).send(games[gameId]);
});

//
app.delete(API.deleteLocal + ':gameId', validations.deleteLocal, (req, res) => {
	const { gameId } = req.params;
	delete games[gameId];
	res.send({});
});

//
app.post(API.renameLocal + ':gameId', validations.renameLocal, (req, res) => {
	const { gameId } = req.params;
	const { playerOne, playerTwo } = req.body;
	games[gameId] = { ...games[gameId], playerOne, playerTwo };
	res.send(games[gameId]);
});

//remote-games api calls
app.post(API.createRemote, validations.createRemote, (req, res) => {
	const gameId = createUuid(10);
	const { startingPlayer, gameMode, userPlayer } = req.body;
	const playerId = createUuid(10);

	userPlayer.id = playerId;
	games[gameId] = {
		gameId,
		boardState: [
			[false, false, false],
			[false, false, false],
			[false, false, false],
		],
		startingPlayer,
		turnState: startingPlayer,
		winState: false,
		gameMode,
	};
	if (userPlayer.mark === 'O') {
		games[gameId].playerOne = userPlayer;
	} else {
		games[gameId].playerTwo = userPlayer;
	}

	res.status(201).send({ ...games[gameId], userPlayer });
});

app.get(API.getRemote + ':gameId', (req, res) => {
	const { gameId } = req.params;
	const targetGame = games[gameId];
	let numOfPlayers = 0;
	if (games[gameId]?.playerOne) {
		numOfPlayers++;
	}
	if (games[gameId]?.playerTwo) {
		numOfPlayers++;
	}

	if (targetGame?.gameMode !== 'remote' || numOfPlayers !== 1) {
		res.send('noGame');
	} else {
		res.send(games[gameId]);
	}
});

app.post(API.joinRemote + ':gameId', validations.joinRemote, (req, res) => {
	const { gameId } = req.params;
	const { userPlayer } = req.body;
	const freeSlot = games[gameId].playerOne ? 'playerTwo' : 'playerOne';
	const occupiedSlot = freeSlot === 'playerOne' ? 'playerTwo' : 'playerOne';
	if (!games[gameId][freeSlot]) {
		userPlayer.mark = getOppositeMark(games[gameId][occupiedSlot].mark);
		userPlayer.id = createUuid(10);
		games[gameId][freeSlot] = userPlayer;
		res.send({ ...games[gameId], userPlayer });
	} else {
		res.status(202).send('Target game is full, try againg later.');
	}
});

app.post(API.refreshRemote + ':gameId', validations.refreshRemote, (req, res) => {
	const { gameId } = req.params;
	const { userPlayer } = req.body;

	userPlayer.lastCheckIn = moment();
	if (games[gameId].playerOne?.id === userPlayer.id) {
		games[gameId].playerOne = userPlayer;
		if (
			games[gameId].playerTwo?.lastCheckIn &&
			moment(moment().diff(games[gameId].playerTwo?.lastCheckIn)).seconds() > 2
		) {
			makePlayerLeave({ player: games[gameId].playerTwo, gameId });
		}
	}
	if (games[gameId].playerTwo?.id === userPlayer.id) {
		games[gameId].playerTwo = userPlayer;
		if (
			games[gameId].playerOne?.lastCheckIn &&
			moment(moment().diff(games[gameId].playerOne.lastCheckIn)).seconds() > 2
		) {
			makePlayerLeave({ player: games[gameId].playerOne, gameId });
		}
	}

	res.send({ ...games[gameId], userPlayer });
});

app.post(API.moveRemote + ':gameId', validations.moveRemote, (req, res) => {
	const { gameId } = req.params;
	const { boardState, winState, userPlayer } = req.body;
	const { turnState, playerOne, playerTwo } = games[gameId];

	if (winState === userPlayer.mark) {
		userPlayer.winCount++;
		if (games[gameId].playerOne?.id === userPlayer.id) {
			games[gameId].playerOne = userPlayer;
		}
		if (games[gameId].playerTwo?.id === userPlayer.id) {
			games[gameId].playerTwo = userPlayer;
		}
	}

	if (userPlayer.mark === turnState && playerOne && playerTwo) {
		games[gameId] = {
			...games[gameId],
			boardState,
			turnState: getOppositeMark(turnState),
			winState,
		};
		res.status(201).send({
			...games[gameId],
			userPlayer,
		});
	} else if (userPlayer.mark !== turnState) {
		res.status(202).send('cannot move out of turn.');
	} else {
		res.status(202).send('game must contain both players in order to play.');
	}
});

app.post(API.leaveRemote + ':gameId', validations.leaveRemote, (req, res) => {
	const { gameId } = req.params;
	const { userPlayer } = req.body;

	const result = makePlayerLeave({ player: userPlayer, gameId });
	res.send(result);
});

app.post(API.renameRemote + ':gameId', validations.renameRemote, (req, res) => {
	const { gameId } = req.params;
	const { playerOne, playerTwo, userPlayer } = req.body;

	if (userPlayer.id === games[gameId].playerOne?.id) {
		games[gameId].playerOne.nickname = playerOne.nickname;
		userPlayer.nickname = playerOne.nickname;
		res.send({ ...games[gameId], userPlayer });
	} else if (userPlayer.id === games[gameId].playerTwo?.id) {
		games[gameId].playerTwo.nickname = playerTwo.nickname;
		userPlayer.nickname = playerTwo.nickname;
		res.send({ ...games[gameId], userPlayer });
	}
});

//dev api calls
app.get(API.getGames, (req, res) => {
	res.send(games);
});

app.delete(API.deleteGames, (req, res) => {
	Object.keys(games).forEach(key => {
		delete games[key];
	});
	res.send(games);
});

app.get(API.getSiteViews, (req, res) => {
	res.send({ siteViews });
});

app.get(API.getResumeViews, (req, res) => {
	res.send({ resumeViews });
});

//general api calls
app.get(API.getResume, (req, res) => {
	resumeViews++;
	res.setHeader('Content-disposition', 'inline; filename=Shailee Eliyahu.pdf');
	res.sendFile(path.join(__dirname, 'Shailee Eliyahu.pdf'));
});

const PORT = serverPort;
app.listen(
	PORT,
	() => enviroment === 'developement' && console.log(`Listening for requests on port ${PORT}...`),
);

/*-----------------*\
|   Frontend App    |
\------------------*/

app.get('/', function (req, res) {
	res.redirect('http://Shailee-Eliyahu.com/Tic-Tac-Toe');
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/Tic-Tac-Toe/manifest.json', function (req, res) {
	siteViews++;
	res.sendFile(path.join(__dirname, 'build', 'manifest.json'));
});

app.get('/Tic-Tac-Toe/favicon.ico', function (req, res) {
	siteViews++;
	res.sendFile(path.join(__dirname, 'build', 'favicon.ico'));
});

app.get('/Tic-Tac-Toe/logo192.png', function (req, res) {
	siteViews++;
	res.sendFile(path.join(__dirname, 'build', 'logo192.png'));
});

app.get('/Tic-Tac-Toe/logo512.png', function (req, res) {
	siteViews++;
	res.sendFile(path.join(__dirname, 'build', 'logo512.png'));
});

app.get('/Tic-Tac-Toe/', function (req, res) {
	siteViews++;
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
