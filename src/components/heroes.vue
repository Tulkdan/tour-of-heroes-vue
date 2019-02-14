<template>
  <div class="hello">
    <ul>
      <li v-for="hero in HEROES" :key="hero.id" class="heroes" @click="selectedHero = hero">
        <span class="badge">{{ hero.id }}</span> {{ hero.name }}
      </li>
    </ul>

    <hero-detail
      v-if="selectedHero"
      :hero="selectedHero"
      @save-hero="saveHero"
    />

  </div>
</template>

<script>
import HeroDetail from './hero-detail.vue'
import herois from '../mock-heroes.js'

export default {
  name: 'heroes',
  data () {
    return {
      selectedHero: null
    }
  },
  methods: {
    saveHero: function () {
      this.selectedHero = null
    }
  },
  components: {
    HeroDetail
  },
  computed: {
    HEROES () {
      return herois.state.heroes
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  margin: 0;
  padding: 0;
}
.heroes {
  list-style-type: none;
  margin-bottom: 10px;
  background-color: #cce;
  padding: 5px 0;
  cursor: pointer;
}
.heroes:hover {
  background-color: #ccc;
}
.heroes .badge {
  padding: 5px;
  background-color: #ccc;
}
</style>
