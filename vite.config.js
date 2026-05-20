import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Keep large media as separate files (cacheable), don't inline into JS
    assetsInlineLimit: 4096,
  },
})
