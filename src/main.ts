import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from './router'

const app = createApp(App);
app.use(router);
app.use(store);
app.use(ElementPlus)
app.mount('#app');
