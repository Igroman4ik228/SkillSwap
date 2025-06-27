import { userReducer } from '@/entities';
import { configureStore } from '@reduxjs/toolkit';

export const rootReducer = {
	user: userReducer,
};

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
