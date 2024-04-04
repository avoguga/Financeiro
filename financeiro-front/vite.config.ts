import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), libInjectCss(), dts({ include: ['src'] })],
})
