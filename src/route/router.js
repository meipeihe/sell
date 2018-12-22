import Vue from 'vue'
import VueRouter from 'vue-router'
import goods from '../components/goods/goods'
import seller from '../components/seller/seller'
import ratings from '../components/ratings/ratings'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    redirect: goods
  }, {
    path: '/goods',
    component: goods
  }, {
    path: '/seller',
    component: seller
  }, {
    path: '/ratings',
    component: ratings
  }]
})

export default router
