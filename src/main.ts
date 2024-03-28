import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// 引入 pinia 状态管理器
import { createPinia } from 'pinia'
const pinia = createPinia()

// 引入 elementplus  ui框架
import Elementplus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入  elementplus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  createApp(App).component(key, component)
}


createApp(App).use(pinia).use(Elementplus).mount('#app')
