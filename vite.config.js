import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      ...copy({
        targets: [{ src: "app-ads.txt", dest: "dist" }],
        hook: "writeBundle", // run the plugin after vite build
      }),
      enforce: "post",
    },
  ],
});
