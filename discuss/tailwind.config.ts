import type { Config } from "tailwindcss";
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
     //  this entire section right here of content is telling tailwind where to go to find all the different
    // class names that we are using inside of our project.
    // So you'll notice that we are telling tailwind to go and look inside of our app directory and go and
    // find all the different JavaScript, TTS, JSX, TSX files inside there.
    // Same thing with the components directory.
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
