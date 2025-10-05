import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";  // ✅ important

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // ✅ enable Tailwind
  ],
});
