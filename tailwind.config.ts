import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#159ECA",
      gray: "#23272F",
      white: "#F6F7F9",
    },
    extend: {
      gridTemplateColumns: {
        "auto-fit-350": "repeat(auto-fit, minmax(200px, 350px))",
      },
    },
  },
  fontFamily: {
    sans: ["Inter", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },
  plugins: [],
};
export default config;
