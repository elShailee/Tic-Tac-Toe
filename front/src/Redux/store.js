import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './Slices/themeSlice';
import networkSlice from './Slices/networkSlice';
import gameSlice from './Slices/gameSlice';

export default configureStore({
	reducer: {
		theme: themeReducer,
		network: networkSlice,
		game: gameSlice,
	},
});
