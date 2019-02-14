import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import heroes from '@/components/heroes'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'heroes',
      component: heroes
    }
  ]
})
