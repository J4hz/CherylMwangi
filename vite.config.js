import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Mobile-first, lightweight SPA. No extra runtime JS beyond React + Router.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
})
