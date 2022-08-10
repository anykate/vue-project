import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: Home,
  },
  {
    path: '/about',
    name: 'AboutView',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
