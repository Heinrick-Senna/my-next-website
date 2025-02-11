import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        backgroundOpacity: "rgba(var(--background))",
        foreground: "rgb(var(--foreground))",
        foregroundOpacity: "rgba(var(--foreground))",
      },
    },
  },
  plugins: [],
} satisfies Config;
