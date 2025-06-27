import '@/app/styles/index.scss';
import type { Preview } from '@storybook/react-vite';
import {
	MemoryRouteDecorator,
	StoreDecorator,
} from '../src/shared/utils/decorators';

const preview: Preview = {
	decorators: [StoreDecorator(), MemoryRouteDecorator()],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: 'todo',
		},
	},
};

export default preview;
