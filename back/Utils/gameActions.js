const games = require('../games');

module.exports.makePlayerLeave = ({ player, gameId }) => {
	if (!player) return null;

	games[gameId].boardState = [
		[false, false, false],
		[false, false, false],
		[false, false, false],
	];
	games[gameId].winState = false;

	if (!games[gameId].playerTwo?.id && games[gameId].playerTwo?.id === player.id) {
		delete games[gameId];
		return {};
	} else if (games[gameId]?.playerOne.id === player.id && !games[gameId].playerTwo) {
		delete games[gameId];
		return {};
	} else if (games[gameId]?.playerOne.id === player.id && games[gameId].playerTwo) {
		delete games[gameId].playerOne;
		games[gameId].playerTwo.winCount = 0;
		games[gameId].turnState = games[gameId].playerTwo.mark;
		games[gameId].startingPlayer = games[gameId].playerTwo.mark;
		return games[gameId];
	} else if (games[gameId]?.playerOne && games[gameId].playerTwo.id === player.id) {
		delete games[gameId].playerTwo;
		games[gameId].playerOne.winCount = 0;
		games[gameId].turnState = games[gameId].playerOne.mark;
		games[gameId].startingPlayer = games[gameId].playerOne.mark;
		return games[gameId];
	}
};
