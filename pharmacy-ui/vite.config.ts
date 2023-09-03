import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
  server: {
      proxy: {
          '/api': {
              target: 'http://localhost:5135',
              changeOrigin: true,
              secure: false,
              rewrite: (path) => path.replace(/^\/api/, '')
          }
      },
      port: 5173,
  }
})