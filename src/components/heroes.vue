<template>
  <div class="hello">
    <ul class="heroes">
      <router-link
        v-for="hero in HEROES"
        :key="hero.id"
        :to="'/detail/'+hero.id"
        class="heroes"
        tag="li" >
        <span class="badge">{{ hero.id }}</span> {{ hero.name }}
      </router-link>
    </ul>
  </div>
</template>

<script>
import herois from '../mock-heroes';

export default {
  name: 'Heroes',
  data() {
    return {
      selectedHero: null,
    };
  },
  computed: {
    HEROES() {
      return herois.getters.getHeroes;
    },
  },
};
</script>

<style lang="scss" src="../assets/style/heroes.scss"></style>
