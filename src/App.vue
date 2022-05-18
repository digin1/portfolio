
<template>
<div class="container">
      <HelloWorld msg="DIGIN DOMINIC"/>
      <div class="border-top my-3"></div>
      <AboutMe/>
      <div class="border-top my-3"></div>
      Powered by Vue.js | 2022 &copy; Digin Dominic <a href="https://linkedin.com/in/digin">LinkedIn</a>
</div>


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
