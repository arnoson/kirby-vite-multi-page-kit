import { resolve } from "path";
import { readdirSync, existsSync } from "fs";
import kirby from "vite-plugin-kirby";

const templates = readdirSync("src/templates")
  .filter((name) => !/^\./.test(name))
  .filter((name) => existsSync(`src/templates/${name}/index.js`));

const input = Object.fromEntries([
  ...templates.map((name) => [name, `src/templates/${name}/index.js`]),
  ["shared", resolve(__dirname, `${root}/index.js`)],
]);

export default ({ mode }) => ({
  root: "src",
  base: mode === "development" ? "/" : "/dist/",

  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },

  build: {
    outDir: "public/dist",
    emptyOutDir: true,
    rollupOptions: { input },
  },

  plugins: [kirby()],
});
