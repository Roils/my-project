import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/home.vue'
import Order from '../pages/order/order.vue'
import Person from '../pages/person/person.vue'
import Search from '../pages/search/search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/person',
      component: Person
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
