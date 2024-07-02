import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'client',
  plugins: [react()],
  optimizeDeps: {
    include: ['js-cookie'],
  },
  publicDir: 'client/public',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: 'client/index.html',
    },
  },
})
