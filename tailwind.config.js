module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				custom1: ["poppinsregular", "sans-serif"],
			},
			keyframes: {
				wiggle: {
					from: { transform: "translateY(17px)" },
					to: { transform: "translateY(0px)" },
				},
				opa: {
					from: { opacity: "0" },
					to: {
						opacity: "1",
					},
				},
			},
			animation: {
				wiggle: "wiggle 0.4s ease-in-out",
				opa: "opa 0.1s linear",
			},
		},
		screens: {
			sm: "330px",
			md: "361px",
			lg: "481px",
			xl: "541px",
			"2xl": "641px",
			"3xl": "769px",
			"4xl": "981px",
			"5xl": "1081px",
		},
	},
	plugins: [],
};
