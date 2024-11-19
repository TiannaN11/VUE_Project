import { createApp } from 'vue'
import './components/Card.vue'
import router from './router'
import App from './components/App.vue'
// import './style.css'

createApp(App).use(router).mount('#app')
