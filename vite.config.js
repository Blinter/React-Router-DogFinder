// https://vitejs.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/React-Router-DogFinder/',
  server: {
    middlewareMode: 'html'
  },
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        '404': '404.html'
      }
    }
  }
})