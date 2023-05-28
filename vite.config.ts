import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': 'src', // I changed it because it did not work on my machine, change back if needed
    }
  },
  plugins: [react()]
})
