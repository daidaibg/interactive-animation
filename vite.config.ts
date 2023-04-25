import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: "public",
  base: './',
  server: {
    host: '0.0.0.0',
    port: 999,
    open: false,
    strictPort: false,
    proxy: {// 跨域代理
      '/apis': {
        target: 'https://gpt.mskjai.com', // 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apis/, '')
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
