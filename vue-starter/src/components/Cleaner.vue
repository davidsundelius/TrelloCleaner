<template>
  <div>
    <h1>TrelloCleaner</h1>
    <div v-if="success" class="green">Lyckades rensa!</div>
    <div v-if="error" class="red">Fel uppstod vid rensning.</div>
    <br>
    <button @click="cleanDone()">Rensa upp Trellobräda</button>
  </div>
</template>

<script>
export default {
  name: 'Cleaner',
  data: function() {
    return {
      error: false,
      success: false
    }
  },
  methods: {
    cleanDone: function() {
      fetch('https://clc3301rm0.execute-api.eu-north-1.amazonaws.com/prod/', {
      method: 'GET'
      }).then(() => {
        this.success = true;
        this.error = false;
      }).catch(() => {
        this.success = false;
        this.error = true;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.green {
  color: green;
}
.red {
  color: red;
}
</style>
