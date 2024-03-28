import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

const pathResolve = () => {
  return resolve(__dirname, './src')
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置 @ 路径
  resolve: {
    alias: {
      "@": pathResolve()
    }
  }
})
