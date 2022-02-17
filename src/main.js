import { createApp } from 'vue'
import App from './App.vue'
// 路由
import router from './router'
import './prommis.js'
// vuex
import store from './store'
// 格式化全局样式
import '@/style/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 屏幕适配
import '@/utils/rem.js'
// 国际化vue-i18n
import I18n from '@/vueI18n/vueI18n.js'
// createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
I18n(app)
