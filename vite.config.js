import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],

  // ⚙️ Build configuration (Add this part)
  build: {
    chunkSizeWarningLimit: 2000, // 👈 Increase from default 500 KB to 2 MB
  },
})
