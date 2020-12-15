<template>
  <div id="app">
    <Cleaner/>
  </div>
</template>

<script>
import Cleaner from './components/Cleaner.vue'

export default {
  name: 'TrelloCleaner',
  components: {
    Cleaner
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
