module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#1b1a1a",
                paper: "#171717",
                white: "#FEFFFE",
                purple: "#531640",
                player: "#181818",
                gray: "#b4b5b5",
                primary: "#1627ba",
            },
        },
        fontFamily: {
            sans: ["Montserrat", "sans-serif"],
        },
    },
    variants: {
        extend: {},
    },
};
