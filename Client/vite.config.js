import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // Все запросы к /api
        target: "http://localhost:3000", // Будет перенаправляться на этот адрес
        changeOrigin: true, // Меняет заголовок Origin
      },
    },
  },
});