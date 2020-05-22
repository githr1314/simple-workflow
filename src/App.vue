<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import './assets/css/base.scss'
export default {
  created() {
    document.body.style.fontSize = '100px';
  }
}
</script>

<style lang="scss">

body {
  padding: 0;
  margin: 0;
}

#app {
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
