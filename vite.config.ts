import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import sveltePreprocess from 'svelte-preprocess';

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: [sveltePreprocess({ typescript: true })]
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern'
			}
		}
	}
});