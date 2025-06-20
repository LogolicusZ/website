import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'comico':			['comico', 			 'sans-serif']
      		},
		}
	},

	daisyui: {
		themes: [
			{
				light: {
					primary: '#50C878',
					'primary-content': '#00090e',
					secondary: '#8762d1',
					'secondary-content': '#e5e7eb',
					accent: '#006fff',
					'accent-content': '#f3f4f6',
					neutral: '#090909',
					'neutral-content': '#c6c6c6',
					'base-100': '#FFFEF7',
					'base-200': '#d9d8d2',
					'base-300': '#bfbeba',
					'base-content': '#181816',
					info: '#00bbe8',
					'info-content': '#000d13',
					success: '#00cc89',
					'success-content': '#000f07',
					warning: '#ff841f',
					'warning-content': '#160600',
					error: '#db3646',
					'error-content': '#110102'
				}
			},
			{
				dark: {
					primary: '#50C878',
					'primary-content': '#00090e',
					secondary: '#a9d980',
					'secondary-content': '#111827',
					accent: '#006fff',
					'accent-content': '#f3f4f6',
					neutral: '#090909',
					'neutral-content': '#c6c6c6',
					'base-100': '#1e1e1e',
					'base-200': '#282826',
					'base-300': '#33332f',
					'base-content': '#FFFFFF',
					info: '#00bbe8',
					'info-content': '#000d13',
					success: '#00cc89',
					'success-content': '#000f07',
					warning: '#ff841f',
					'warning-content': '#160600',
					error: '#db3646',
					'error-content': '#110102'
				}
			}
		]
	},

	plugins: [require('daisyui')]
} satisfies Config;
