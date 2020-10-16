<template>

    <div id="app">
    <demo-nav />
    <router-view />
  </div>
</template>

<script>
import DemoNav from './components/DemoNav';
export default {
  components: { DemoNav },
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body{background-color:#f7f8fa}
</style>
