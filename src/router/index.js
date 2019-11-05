import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Error404 from '../views/Error404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/product-detail/:product_id',
    name: 'product',
    component: () => import('../components/ProductDetail'),
    props (route) {
      return {
        product_id: route.params.product_id
      }
    }
  },
  {
    path: '*',
    name: 'error404',
    component: Error404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
