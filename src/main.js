
import { createApp } from 'vue'
import "./style.css"
import App from './App.vue'
import router from './router' 
import { pinia } from './stores';
import { useTodoStore } from './stores';
import piniaPersist from 'pinia-plugin-persist';

const app = createApp(App)
app.use(router)
app.use(pinia);
app.mount('#app')
app.provide(useTodoStore)
// const pinia = createPinia();
pinia.use(piniaPersist);

