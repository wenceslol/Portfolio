import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Substitua pelo nome exato do seu repositório
  build: {
    outDir: 'dist',
  }
})
