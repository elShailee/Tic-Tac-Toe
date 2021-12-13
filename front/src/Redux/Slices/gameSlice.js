import { createSlice } from '@reduxjs/toolkit';
import { clone } from 'Utils/utilFuncs';
export const gameSlice = createSlice({
	name: 'game',
	initialState: {
		gameState: {},
	},
	reducers: {
		setGameState: (state, action) => {
			state.gameState = action.payload;
		},
	},
});

export const { setGameState } = gameSlice.actions;

export const gameStateSelector = state => clone(state.game.gameState);
export default gameSlice.reducer;
