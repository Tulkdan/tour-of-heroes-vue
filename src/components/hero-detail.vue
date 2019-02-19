<template>
  <div>
    <h2>{{ hero.name }}</h2>
    <div>
      <span>id: </span>{{ hero.id }}
    </div>
    <div>
      <label>name:
        <input
          v-model="hero.name"
          name="name"
          type="text">
      </label>
    </div>
    <button
      class="btn save"
      @click="back">
      Save
    </button>
  </div>
</template>

<script>
import herois from '../mock-heroes';

export default {
  name: 'HeroDetail',
  computed: {
    hero() {
      return herois.getters.getHero(Number(this.$route.params.id));
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" src="../assets/style/hero-detail.scss"></style>
