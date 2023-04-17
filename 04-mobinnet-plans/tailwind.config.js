/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				sm: "468px",
				lg: "1200px"
			}
		}
	},
	plugins: []
};
