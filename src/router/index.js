import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MobileHome from "@/views/mobile/MobileHome";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mobile',
    name: 'mobileHome',
    component: MobileHome
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
