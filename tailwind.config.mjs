/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primero': '#000047',
				'segundo': '#ffdf5a',
				'tercero': '#e5e5e5'
			},
			backgroundImage: {
				"hero-car": "url('/banner-hero-fondo.webp')",
				"fondo-corferias": "url('/fondo-corferias.webp')",
			}
		},
	},
	plugins: [],
}
