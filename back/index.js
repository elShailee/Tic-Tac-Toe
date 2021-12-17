const express = require('express');
const { games, wsConnections } = require('./data');
const { enviroment, pollingPort, socketPort, API } = require('./envSelector');
const validations = require('./Utils/validations');
const path = require('path');
const cors = require('cors');
const { apiActions } = require('./Utils/gameActions');
const { WebSocketServer } = require('ws');
const HTTP = require('http');
const { socketConnectionHandler, socketCloseHandler, socketMessageHandler } = require('./Utils/socketUtils');

/*----------------*\
|   Polling App    |
\-----------------*/
const app = express();

app.use(express.json());
app.use(cors());

//games api calls
app.post(API.resetGame + ':gameId', validations.resetGame, (req, res) => {
	res.send(apiActions.resetGame(req.body));
});

//local-games api calls
app.post(API.createLocal, validations.createLocal, (req, res) => {
	res.status(201).send(apiActions.createLocal(req.body));
});

app.get(API.loadLocal + ':gameId', validations.loadLocal, (req, res) => {
	const { gameId } = req.params;
	res.send(games[gameId]);
});

app.post(API.moveLocal + ':gameId', validations.moveLocal, (req, res) => {
	const { gameId } = req.params;
	res.status(201).send(apiActions.moveLocal({ gameId, ...req.body }));
});

app.delete(API.deleteLocal + ':gameId', validations.deleteLocal, (req, res) => {
	const { gameId } = req.params;
	delete games[gameId];
	res.send({});
});

app.post(API.renameLocal + ':gameId', validations.renameLocal, (req, res) => {
	const { gameId } = req.params;
	res.send(apiActions.renameLocal({ gameId, ...req.body }));
});

//remote-games api calls
app.post(API.createRemote, validations.createRemote, (req, res) => {
	res.status(201).send(apiActions.createRemote(req.body));
});

app.get(API.getRemote + ':gameId', (req, res) => {
	res.send(apiActions.getRemote({ gameId: req.params.gameId }));
});

app.post(API.joinRemote + ':gameId', validations.joinRemote, (req, res) => {
	const { gameId } = req.params;
	const { status, data } = apiActions.joinRemote({ gameId, ...req.body });
	res.status(status).send(data);
});

app.post(API.refreshRemote + ':gameId', validations.refreshRemote, (req, res) => {
	const { gameId } = req.params;
	res.send(apiActions.refreshRemote({ gameId, ...req.body }));
});

app.post(API.moveRemote + ':gameId', validations.moveRemote, (req, res) => {
	const { gameId } = req.params;
	const { status, data } = apiActions.moveRemote({ gameId, ...req.body });
	res.status(status).send(data);
});

app.post(API.leaveRemote + ':gameId', validations.leaveRemote, (req, res) => {
	const { gameId } = req.params;
	res.send(apiActions.leaveRemote({ gameId, ...req.body }));
});

app.post(API.renameRemote + ':gameId', validations.renameRemote, (req, res) => {
	const { gameId } = req.params;
	return apiActions.renameRemote({ gameId, ...req.body });
});

//dev api calls
app.get(API.getGames, (req, res) => {
	res.send(games);
});

app.get(API.getWsConnections, (req, res) => {
	const result = {};
	for (const gameId in wsConnections) {
		result[gameId] = Object.keys(wsConnections[gameId]);
	}
	res.send(result);
});

app.delete(API.deleteGames, (req, res) => {
	res.send(apiActions.deleteGames());
});

//general api calls
app.get(API.getResume, (req, res) => {
	res.setHeader('Content-disposition', 'inline; filename=Shailee Eliyahu.pdf');
	res.sendFile(path.join(__dirname, 'Shailee Eliyahu.pdf'));
});

app.listen(
	pollingPort,
	() => enviroment === 'developement' && console.log(`Listening for Polling requests on port ${pollingPort}...`),
);

/*------------------*\
|   WebSocket App    |
\-------------------*/

const httpServer = HTTP.createServer();
httpServer.listen(socketPort, () => console.log(`Listening for Socket requests on port ${socketPort}...`));
const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', ws => {
	socketConnectionHandler(ws);

	ws.on('close', () => {
		socketCloseHandler(ws);
	});

	ws.on('message', message => {
		socketMessageHandler(ws, message);
	});
});

/*-----------------*\
|   Frontend App    |
\------------------*/

app.get('/', function (req, res) {
	res.redirect('http://Shailee-Eliyahu.com/Tic-Tac-Toe');
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/tic-tac-toe', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
