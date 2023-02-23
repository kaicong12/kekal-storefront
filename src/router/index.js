import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MobileHome from "@/views/mobile/MobileHome";
import MobileProduct from "@/views/mobile/MobileProduct";
import MobileTest from "@/views/mobile/MobileTest";

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'mobileHome',
    component: MobileHome
  },
  {
    path: '/products',
    name: 'mobileProduct',
    component: MobileProduct
  },
  {
    path: '/test',
    name: 'mobileTest',
    component: MobileTest
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
