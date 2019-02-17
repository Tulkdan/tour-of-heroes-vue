import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';

import Dashboard from '../components/dashboard.vue';
import Heroes from '../components/heroes.vue';
import HeroDetail from '../components/hero-detail.vue';

Vue.use(Router);
Vue.use(Vuex);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/list',
      name: 'heroes',
      component: Heroes,
    },
    {
      path: '/detail/:id',
      name: 'hero-detail',
      component: HeroDetail,
    },
  ],
});
