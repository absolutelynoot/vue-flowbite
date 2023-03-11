import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// add this
import './index.css'

import { createPinia } from 'pinia'

createApp(App).use(createPinia()).use(router).mount('#app')
