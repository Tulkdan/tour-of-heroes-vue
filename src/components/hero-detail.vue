<template>
  <div class="details">
    <div class="row">
      <label for="id">Id</label>
      <input
        v-model="hero.id"
        type="text"
        name="id"
        disabled>
    </div>
    <div class="row">
      <label for="name">Name</label>
      <input
        v-model="hero.name"
        type="text"
        name="name" >
    </div>
    <div class="row">
      <button
        class="btn save"
        @click="back">
        Save
      </button>
    </div>
  </div>
</template>

<script>
import herois from '../mock-heroes';

export default {
  name: 'HeroDetail',
  computed: {
    hero() {
      return herois.state.heroes.filter(hero => hero.id === Number(this.$route.params.id))[0];
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.row {
  margin-bottom: 10px;
}
.btn {
  border: 0;
  padding: 7px 15px;
  border-radius: 0.3em;
  cursor: pointer;
}
.btn.save {
  background-color: green;
  color: white;
}
.btn.save:hover {
  background-color: rgb(0, 121, 0);
}
</style>
