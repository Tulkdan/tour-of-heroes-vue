import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

import heroes from '@/components/heroes'
import HeroDetail from '@/components/hero-detail'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/list'
    },
    {
      path: '/list',
      name: 'heroes',
      component: heroes
    },
    {
      path: '/detail/:id',
      name: 'hero-detail',
      component: HeroDetail
    }
  ]
})
