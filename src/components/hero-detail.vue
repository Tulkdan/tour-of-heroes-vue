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

<style lang="scss">
/* HeroDetailComponent's private CSS styles */
label {
  display: inline-block;
  width: 3em;
  margin: .5em 0;
  color: #607D8B;
  font-weight: bold;
}
input {
  height: 2em;
  font-size: 1em;
  padding-left: .4em;
}
button {
  margin-top: 20px;
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;

  &:hover {
    background-color: #cfd8dc;
  }

  &:disabled {
    background-color: #eee;
    color: #ccc;
    cursor: auto;
  }
}
</style>
