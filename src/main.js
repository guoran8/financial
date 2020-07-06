import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'

import './utils/hotcss'
import 'normalize.css/normalize.css'

// router
import routes from '@/router'

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
