import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'

import 'uno.css'
import '~/assets/css/main.css'
import '@unocss/reset/tailwind.css'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(generatedRoutes),
})
app.use(pinia)
app.use(router)
app.mount('#app')
