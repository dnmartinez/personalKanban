/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				moveLeftRight: {
					'0%': { transform: 'translateX(0)' },
					'33%': { transform: 'translateX(-10px)' },
					'66%': { transform: 'translateX(10px)' },
					'100%': { transform: 'translateX(0)' },
				},
			},
			animation: {
				'left-right-center': 'moveLeftRight 1s ease-in-out',
			},
		},
	},
	plugins: [require('daisyui')],
}
