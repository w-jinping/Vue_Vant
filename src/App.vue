<template>

    <div id="app">
    <demo-nav />
    <router-view />
    <tabbar />
  </div>
</template>

<script>
import DemoNav from './components/DemoNav';
import tabbar from './components/tabbar'
export default {
  components: { DemoNav,tabbar},
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
