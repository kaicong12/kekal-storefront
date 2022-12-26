import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MobileHome from "@/views/mobile/MobileHome";
import MobileProduct from "@/views/mobile/MobileProduct";

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
  {
    path: '/products',
    name: 'mobileProduct',
    component: MobileProduct
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
