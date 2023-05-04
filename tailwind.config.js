/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				smobile: '360px',
				sm: '640px',
				md: '768px',
			},
		},
	},
	plugins: [],
};
