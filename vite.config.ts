import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Pages from 'vite-plugin-pages' // https://www.npmjs.com/package/vite-plugin-pages

// https://vite.dev/config/
export default defineConfig({
  base: './', // Needed for building production
  plugins: [
    react(),
    tailwindcss(),
    Pages({
      dirs: ['src/_pages'],
    }),
  ],
})
