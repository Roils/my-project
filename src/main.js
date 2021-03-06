// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import "./util/rem"
import "./assets/css/reset.css"
import Vant from 'vant'
import 'vant/lib/index.css'
import Axios from 'axios'
import Vuex from 'vuex'
 
Vue.use(Vuex)

Vue.prototype.$http=Axios

Vue.use(Vant);
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
