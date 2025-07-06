import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	base: './',
	plugins: [react()],
	build: {
		minify: 'terser',
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'react-dom'],
				},
			},
		},
	},
	publicDir: 'public',
	assetsInclude: ['**/*.svg', '**/*.png', '**/*.woff2', '**/*.webp'],
});
