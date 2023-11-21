import { globSync } from "glob";
import { resolve } from "path";
import kirby from "vite-plugin-kirby";
import removeConsole from "vite-plugin-remove-console";
import ViteRestart from 'vite-plugin-restart'
import progress from 'vite-plugin-progress'

const input = ["src/index.js", ...globSync("src/templates/*/index.js")].map(
  (path) => resolve(process.cwd(), path)
);

export default ({ mode }) => ({
  root: "src",
  base: mode === "development" ? "/" : "/dist/",

  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },

  build: {
    outDir: resolve(process.cwd(), "public/dist"),
    emptyOutDir: true,
    rollupOptions: { input },
  },

  plugins: [
    kirby(),
    progress(),
    removeConsole(),
    ViteRestart({
      restart: [
        'my.config.js',
      ]
    })
  ],
});
