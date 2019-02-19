<template>
  <div class="grid grid-pad">
    <router-link
      v-for="hero in HEROES"
      :key="hero.id"
      :to="'/detail/'+hero.id"
      class="col-1-4"
      tag="a" >
      <div class="module hero">
        <h4>{{ hero.name }}</h4>
      </div>
    </router-link>
  </div>
</template>

<script>
import herois from '../mock-heroes';

export default {
  name: 'Dashboard',
  computed: {
    HEROES() {
      return herois.getters.getHeroes.slice(0, 4);
    },
  },
};
</script>

<style lang="scss" src="../assets/style/dashboard.scss"></style>
