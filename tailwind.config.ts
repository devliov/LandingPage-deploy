import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        greenS: "#BFCE01",
        greenS100: "#7DC4B4",
        greenS200: "#56B3B8",
        greenS300: "#017477",
        greenS400: "#005F62",
        greenS500: "#003242",
        grayS: "#E0E0E0",
        grayS100: "#EDF2F6",
        grayS200: "#B0C7CE",
        grayS300: "#EBEEF2",
        grayS400: "#3A3541",
      },
    },
  },
  plugins: [],
};
export default config;
