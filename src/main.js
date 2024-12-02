import { createApp } from 'vue'
import './components/Card.vue'
import router from './router'
import App from './components/App.vue'
import './stylesheet.css'


createApp(App).use(router).mount('#app')
