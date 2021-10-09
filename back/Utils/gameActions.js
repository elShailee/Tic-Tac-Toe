const games = require('../games');

module.exports.makePlayerLeave = ({ player, gameId }) => {
	if (!player) return null;

	games[gameId].boardState = [
		[false, false, false],
		[false, false, false],
		[false, false, false],
	];
	games[gameId].turnState = games[gameId].startingPlayer;
	games[gameId].winState = false;

	if (games[gameId].playerTwo?.id === player.id) {
		delete games[gameId].playerTwo;
		return games[gameId];
	} else if (games[gameId].playerOne.id === player.id && games[gameId].playerTwo) {
		games[gameId].playerOne = games[gameId].playerTwo;
		delete games[gameId].playerTwo;
		return games[gameId];
	} else if (games[gameId].playerOne.id === player.id && !games[gameId].playerTwo) {
		delete games[gameId];
		return {};
	}
};
