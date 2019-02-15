<template>
  <div class="details">
    <div class="row">
      <label for="id">Id</label>
      <input type="text" name="id" v-model="hero.id" disabled>
    </div>
    <div class="row">
      <label for="name">Name</label>
      <input type="text" name="name" v-model="hero.name">
    </div>
    <div class="row">
      <button class="btn back" @click="back">Voltar</button>
      <button class="btn save" @click="back">Save</button>
    </div>
  </div>
</template>

<script>
import herois from '../mock-heroes.js'

export default {
  name: 'HeroDetail',
  methods: {
    back: function () {
      this.$router.go(-1)
    }
  },
  computed: {
    hero () {
      return herois.state.heroes.filter(hero => hero.id === Number(this.$route.params.id))[0]
    }
  }
}
</script>

<style>
.row {
  margin-bottom: 10px;
}
.btn {
  border: 0;
  padding: 5px 15px;
}
.btn.save {
  background-color: green;
  color: white;
}
.btn.back {
  background-color: red;
  color: white;
}
</style>
