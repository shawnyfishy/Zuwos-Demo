/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter Tight', 'sans-serif'],
                mono: ['monospace'], // Adjust as needed
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            }
        },
    },
    darkMode: 'class', // As used in App.tsx
    plugins: [],
}
