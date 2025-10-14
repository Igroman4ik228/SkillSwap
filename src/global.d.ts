/// <reference types="vite/client" />
/// <reference types="vite-react-svg" />

import type {
	RootState,
	AppDispatch as StoreAppDispatch,
	RootState as StoreRootState,
} from '@/app/store';
import type { DeepPartial } from '@/shared';

declare global {
	type RootState = StoreRootState;
	type AppDispatch = StoreAppDispatch;
}

declare module '@storybook/react-vite' {
	interface Parameters {
		[name: string]: unknown;
		initialState?: DeepPartial<RootState>;
	}
}

export {};
