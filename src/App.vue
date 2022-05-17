
<template>

      <HelloWorld msg="DIGIN DOMINIC"/>
      <AboutMe/>
      Powered by Vue.js | Element Plus | 2022 &copy; Digin Dominic <a href="https://linkedin.com/in/digin">LinkedIn</a>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AboutMe from './components/AboutMe.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AboutMe
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
