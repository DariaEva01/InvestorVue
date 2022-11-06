import { fileURLToPath, URL } from "node:url";
import Unocss from "unocss/vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      theme: {
        colors: {
          primary: "#d3afd9",
          primaryDark: "#b57ac6",
          primaryLight: "#f2d6f0",
          primaryH: "#d992ed",
          primaryBg: "#e4d1e7",
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "localhost",
    port: 3000,
  },
});
