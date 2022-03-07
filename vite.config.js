import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    // deps: { inline: ['@vue', 'vue', 'jsdom'] },
    coverage: {
      reporter: ['html', 'text'],
      include: ['src/**.{js,vue}', 'src/**/**.{js,vue}'],
      exclude: ['src/**.test.js', 'src/**/**.test.js', 'src/__tests__', 'src/**/__tests__'],
      clean: true,
      all:true,
    },
    root: 'src',
  },
})
