import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/blackhorse-project/', // Set the base URL to the repository name
  build: {
    outDir: 'dist', // Output directory for build files
    rollupOptions: {
      input: '/src/main.jsx', // Ensure this path is correct
    }
  }
})
