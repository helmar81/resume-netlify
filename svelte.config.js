/* eslint-disable @typescript-eslint/no-unused-vars */
import preprocess from 'svelte-preprocess'

import { vitePreprocess } from '@sveltejs/kit/vite'

// eslint-disable-next-line no-redeclare
import adapter from '@sveltejs/adapter-node';




/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true,
		}),
	],

	kit: {

		
		
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),

		
	},
}

export default config
