import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    heroes: [
      { id: 1, name: 'Fred' },
      { id: 2, name: 'Lucas' },
      { id: 3, name: 'Supa-man' },
      { id: 4, name: 'Iron Man' },
      { id: 5, name: 'Thor' },
      { id: 6, name: 'Green Lantern' },
      { id: 7, name: 'Batman' }
    ]
  }
})
