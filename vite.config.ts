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
          primary: "#cac5e9",
          primaryDark: "#570267",
          primaryDarkest: "#3c343d",
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
