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
      <button class="btn" @click="saveHero">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroDetail',
  props: ['hero'],
  methods: {
    saveHero: function () {
      this.$emit('save-hero')
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
  background-color: green;
  color: white;
  padding: 5px 15px;
}
</style>
