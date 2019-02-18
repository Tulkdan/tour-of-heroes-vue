// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Axios from 'axios';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Axios.defaults.baseURL = process.env.API_ENDPOINT;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
