import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import CKEditor from 'ckeditor4-vue'

import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(CKEditor)

app.mount('#app')
