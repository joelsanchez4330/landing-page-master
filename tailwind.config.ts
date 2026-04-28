import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw"; // 1. Add this import

// 2. Wrap the whole object with withUt(...)
const config = withUt({
  darkMode: "class",
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // ... keep all the shadcn stuff that's already here
    }
  },
  plugins: [require("tailwindcss-animate")],
}) satisfies Config;

export default config;
