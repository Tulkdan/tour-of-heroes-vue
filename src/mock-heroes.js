import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

const RESOURCE_NAME = '/heroes';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heroes: [],
  },
  mutations: {
    listarHerois() {
      Axios.get(RESOURCE_NAME)
        .then((res) => {
          this.state.heroes = res.data;
        });
    },
  },
  getters: {
    getHeroes: state => state.heroes,
    getHero: state => id => state.heroes.filter(hero => hero.id === id)[0],
  },
  actions: {
    getHerois(context) {
      context.commit('listarHerois');
    },
  },
});
