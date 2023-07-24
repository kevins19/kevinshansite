import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/kevinshansite',
  plugins: [react()],
})
