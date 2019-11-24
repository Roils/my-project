import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/home.vue'
import Order from '../pages/order/order.vue'
import Person from '../pages/person/person.vue'
import Login from '../pages/login/login.vue'
import Indexcity from '../pages/indexcity/indexcity.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
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
      path: '/',
      redirect: '/home'
    },
    {
      path:'/login',
      component:Login,
    },
    {
      path:'/indexcity',
      component:Indexcity,
    }
  ]
})
