import Vue from 'vue'
import Router from 'vue-router'
import BitCoins from './views/BitCoins.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bitCoins',
      name: 'bitCoins',
      component: BitCoins
    },
  ]
})
