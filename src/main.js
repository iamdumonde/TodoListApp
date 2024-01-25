
import { createApp } from 'vue'
import "./style.css"
import App from './App.vue'
//import de router
import router from './router' 

const app = createApp(App)
app.use(router)
app.mount('#app')

// app.use(createPinia())
// import { createPinia } from 'pinia'