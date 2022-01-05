const { resolve } = require('path')
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "./root",
  build: {
    manifest: true,
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'root/index.html'),
        masu: resolve(__dirname, 'root/masu/index.html'),
        baggi: resolve(__dirname, 'root/baggi/index.html'),
        modamasu: resolve(__dirname, 'root/moda-masu/index.html'),
        corolle: resolve(__dirname, 'root/corolle/index.html'),
        hexagonal: resolve(__dirname, 'root/hexagonal/index.html'),
        kata: resolve(__dirname, 'root/kata/index.html'),
      }
    }
  }
});
