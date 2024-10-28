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
        primary: "#FD6262", // Button and logo color
        background: "#000000", // Dark background color
        foreground: "#FFFFFF", // Main text color
        muted: "#888888", // Muted text color
        accent: "#4A4A4A", // Accent elements or borders
        card: "#2A2A2A", // Card or container backgrounds
        link: "#FD6262", // Links can match the primary button color
        hover: "#FF8989", // Hover effect for buttons/links
      },
      lineHeight: {
        custom: "1.3", // Custom line height for extra spacing
      },
    },
  },
  plugins: [],
};
export default config;
