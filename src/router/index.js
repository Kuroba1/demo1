import Vue from 'vue'
import Router from 'vue-router'

import LogUp from './../components/LogUp'
import home from './../components/home'
import login from './../components/login'
import shopcar from './../components/shopcar'
import detail from './../components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/logup',
      component: LogUp
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/shopcar',
      component: shopcar
    },
    {
      path: '/detail',
      component: detail
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
