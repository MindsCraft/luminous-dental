import type { Config } from 'tailwindcss';

/** @type {Config} */
const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",   // Scans all components and pages inside the app folder
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Helvetica Neue"', 'sans-serif'
        ],
      },
    },
  },
  plugins: [],
};

export default config;
