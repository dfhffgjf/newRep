import { createApp } from 'vue'
import Works from './Works.vue'
import '@/assets/css/global.css'
import Router from './router/router'

window.webWorks = createApp(Works).use(Router).mount('#works_app')
