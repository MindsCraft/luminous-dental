import type { Config } from 'tailwindcss';

/** @type {Config} */
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",   // Scans all components and pages inside the app folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
