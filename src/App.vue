<template>
  <div id="app">
    <nav>
      <router-link :to="'/dashboard'">Dashboard</router-link>
      <router-link :to="'/list'">Heroes</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import herois from './mock-heroes';

export default {
  name: 'App',
  created() {
    herois.dispatch('getHerois');
  },
};
</script>

<style lang="scss" src="./assets/style/app.scss"></style>
