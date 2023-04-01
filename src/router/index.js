import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MobileHome from "@/views/mobile/MobileHome";
import ProductList from "@/views/mobile/ProductList";
import ProductPage from "@/views/mobile/ProductPage";
import ServicesPage from "@/views/mobile/ServicesPage";

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
    name: 'ProductPage',
    component: ProductPage,
    props: true,
  },
  {
    path: '/services',
    name: 'servicesPage',
    component: ServicesPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
