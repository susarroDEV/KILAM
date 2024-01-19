/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        primary: '#007474',
        secondary: '#4997AD',
        terciary: '#C6FF99',
        quaternary: '#5462DD',
        quinary: '#F44748',
    },
    fontFamily: {
      kilam: ['ITC Avant Garde Pro'],
    },
    backgroundImage: {
      kilamHome: "url('./public/KILAMHome.png')",
    }

	},
	plugins: [],
}
}
