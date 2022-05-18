<template>
<div class="container">
      <HeaderPage msg="DIGIN DOMINIC"/>
      <div class="border-top my-3"></div>
      <AboutMe/>
      <div class="border-top my-3"></div>
      Powered by Vue.js | 2022 &copy; Digin Dominic <a href="https://linkedin.com/in/digin">LinkedIn</a>
</div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue'
import AboutMe from './components/AboutMe.vue'

//import { bucket } from "./cosmic.js";

export default {
  name: 'App',
  components: {
    AboutMe,
    HeaderPage
  },
}
</script>

<style>
#app {
  font-family: 'Merriweather', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper{
  height: 100%;
}

</style>
