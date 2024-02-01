import TodoApp from "@/components/TodoApp.vue"
import Galleryart from "@/components/Galleryart.vue"
import { createRouter, createWebHistory } from "vue-router"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: TodoApp },
        { path: '/galleryart', component: Galleryart }
    ]
})
export default router
