import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import reactSVG from 'vite-react-svg';

export default defineConfig({
	plugins: [react(), reactSVG()],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	server: {
		open: true, // Открывает браузер при старте dev-сервера
	},
});
