/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                bglight: "url(/images/body-bg.jpg)",
                bgdark: "url(/images/dark-bg-long.jpg)",
            }),
            color: (theme) => ({
                darkcolor: "#000",
                lightcolor: "#fff",
            }),
        },
    },
    plugins: [require("flowbite/plugin")],
};