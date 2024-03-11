import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [vue()],
  build: {
    outDir: 'dist', // Specify the output directory
    rollupOptions: {
      input: '/src/main.js' // Specify the entry point of your application
    }
  }
})