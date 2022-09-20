import { resolve } from 'path'
import fs from 'fs'
import kirby from 'vite-plugin-kirby'

const root = 'src'
const templateDir = resolve(__dirname, `${root}/templates`)
const templates = fs
  .readdirSync(templateDir)
  .filter(file => !(/^\./).test(file))
  .filter(file => fs.statSync(`${templateDir}/${file}`).isDirectory())

const input = Object.fromEntries([
  ...templates.map(template => [
    template,
   `${templateDir}/${template}/index.js`
  ]),
  ['shared', resolve(__dirname, `${root}/index.js`)] 
])

export default ({ mode }) => ({
  root: 'src',
  base: mode === 'development' ? '/' : '/dist/',

  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  },  

  build: {
    outDir: resolve(process.cwd(), 'public/dist'),
    emptyOutDir: true,
    rollupOptions: { input }
  },

  plugins: [kirby()]
})