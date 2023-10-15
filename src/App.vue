<template>
  <TopBar />
</template>

<script>
import TopBar from './components/TopBar.vue'

export default {
  name: 'App',
  components: {
    TopBar
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  font-size: 16px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
