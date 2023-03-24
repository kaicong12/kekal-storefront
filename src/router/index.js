import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MobileHome from "@/views/mobile/MobileHome";
import ProductList from "@/views/mobile/ProductList";
import ProductPage from "@/views/mobile/ProductPage";

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
    component: ProductList
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductPage,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
