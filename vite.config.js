import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      lib: fileURLToPath(new URL("./lib", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
        additionalData: `@use '@/assets/style/variable.scss' as *;@use "@/assets/style/common.scss" as *;@use '@/assets/style/global.scss' as *;`,
      },
    },
  },
});
