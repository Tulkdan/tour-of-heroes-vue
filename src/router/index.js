import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';

import Heroes from '../components/heroes.vue';
import HeroDetail from '../components/hero-detail.vue';

Vue.use(Router);
Vue.use(Vuex);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/list',
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
