/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#7a00ec",
                "on-primary": "#ffffff",
                secondary: "#512190",
                "on-secondary": "#e0c9ff",
                tertiary: "#a80088",
                "on-tertiary": "#ffffff",
                error: "#93000a",
                "on-error": "#ffdad6",
                surface: "#16111d",
                "surface-container": "#221d29",
                "outline": "#3d3744",
                "on-surface": "#e9dff0",
                "on-surface-nv": "#cec2d9",
                "muted": "#978da2",
            },
            fontFamily: {
                "default": ['"Nunito Sans"', "sans-serif"],
                "display": ['"Ubuntu Mono"', "monospace"]
            }
        },
    },
    plugins: [],
}

