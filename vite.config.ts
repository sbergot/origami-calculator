const { resolve } = require('path')
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "./root",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'root/index.html'),
        masu: resolve(__dirname, 'root/masu/index.html'),
        baggi: resolve(__dirname, 'root/baggi/index.html'),
      }
    }
  }
});
