const { withAccountKitUi, createColorSet } = require("@account-kit/react/tailwind");

const config = {
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

module.exports = withAccountKitUi(config, {
    colors: {
        "btn-primary": createColorSet("#E82594", "#FF66CC"),
        "fg-accent-brand": createColorSet("#E82594", "#FF66CC"),
    },
});
