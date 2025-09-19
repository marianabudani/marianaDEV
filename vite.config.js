import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'

// https://tailwindcss.com/docs/guides/vite
const postcssPlugins = [tailwindcss, autoprefixer]

postcss(postcssPlugins)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
