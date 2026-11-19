import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: "#060810",
          900: "#0A0D18",
          850: "#0E1322",
          800: "#13192E",
          700: "#1B233D",
          600: "#263152",
        },
        gold: {
          50: "#FDFBF7",
          100: "#FBF7ED",
          200: "#F5ECD3",
          300: "#EBD9A7",
          400: "#DFC27A",
          500: "#C6A152",
          600: "#A8833B",
          700: "#84652B",
        },
        lavender: {
          50: "#FAF8FC",
          100: "#F2EEF8",
          200: "#E3DBEF",
          300: "#CFC2E3",
          400: "#B6A3D4",
          500: "#9C83C3",
          600: "#8065AB",
        },
        rose: {
          50: "#FCF8F8",
          100: "#F7EEF0",
          200: "#EDD9DC",
          300: "#DFBCC1",
          400: "#CB949C",
          500: "#B3717B",
          600: "#96555F",
        },
        ivory: {
          50: "#FDFBF7",
          100: "#FAF7F2",
          200: "#F4EFE6",
          300: "#EAE0CF",
          400: "#DCCEBA",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        editorial: ["var(--font-editorial)", "Cinzel", "Playfair Display", "serif"],
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-reverse": "floatReverse 9s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
