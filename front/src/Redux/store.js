import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './Slices/themeSlice';
import networkSlice from './Slices/networkSlice';

export default configureStore({
	reducer: {
		theme: themeReducer,
		network: networkSlice,
	},
});
