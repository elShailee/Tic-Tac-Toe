export const checkForWins = boardState => {
	let winner = false;

	for (let i = 0; i < 3; i++) {
		if (boardState[0][i] === boardState[1][i] && boardState[1][i] === boardState[2][i] && boardState[0][i])
			winner = boardState[i][i];
		if (boardState[i][0] === boardState[i][1] && boardState[i][1] === boardState[i][2] && boardState[i][0])
			winner = boardState[i][i];
	}
	if (boardState[0][0] === boardState[1][1] && boardState[1][1] === boardState[2][2] && boardState[1][1])
		winner = boardState[1][1];
	if (boardState[2][0] === boardState[1][1] && boardState[1][1] === boardState[0][2] && boardState[1][1])
		winner = boardState[1][1];

	return winner;
};
