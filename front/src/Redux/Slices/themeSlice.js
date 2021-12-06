import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		themeState: 'dark',
	},
	reducers: {
		switchThemes: state => {
			const { themeState } = state;
			state.themeState = themeState === 'dark' ? 'light' : 'dark';
		},
	},
});

export const { switchThemes } = themeSlice.actions;

export default themeSlice.reducer;
