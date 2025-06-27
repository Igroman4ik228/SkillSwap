/// <reference types="vite/client" />
/// <reference types="vite-react-svg" />

import type {
	AppDispatch as StoreAppDispatch,
	RootState as StoreRootState,
} from '@/app/store';

declare global {
	type RootState = StoreRootState;
	type AppDispatch = StoreAppDispatch;
}

export {};
