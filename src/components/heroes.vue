<template>
  <div class="hello">
    <ul>
      <router-link v-for="hero in HEROES" :key="hero.id" class="heroes" :to="'/detail/'+hero.id" tag="li">
        <span class="badge">{{ hero.id }}</span> {{ hero.name }}
      </router-link>
    </ul>
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
  width: 20%;
}
.heroes {
  list-style-type: none;
  margin-bottom: 10px;
  background-color: #cce;
  padding: 0.7em 0;
  cursor: pointer;
  border-radius: 0.4em 0.3em 0.3em 0.4em;
  max-height: 50px;
}
.heroes:hover {
  background-color: #ccc;
}
.heroes .badge {
  padding: 0.7em 0.5em;
  margin-right: 5px;
  border-radius: 0.3em 0 0 0.3em;
  background-color: #ccc;
}
</style>
