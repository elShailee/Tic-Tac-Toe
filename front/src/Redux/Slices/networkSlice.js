import { createSlice } from '@reduxjs/toolkit';

export const networkSlice = createSlice({
	name: 'network',
	initialState: {
		connectionMode: 'polling',
	},
	reducers: {
		switchConnectionMode: state => {
			const { connectionMode } = state;
			state.connectionMode = connectionMode === 'polling' ? 'socket' : 'polling';
		},
	},
});

export const { switchConnectionMode } = networkSlice.actions;
export const connectionModeSelector = state => state.network.connectionMode;

export default networkSlice.reducer;
