import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {  // Yeh endpoint frontend se request ko backend pe bhej dega
        target: 'http://localhost:5000',  // Backend ka URL
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '') // "/api" ko hata kar request send karega
      }
    }
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
