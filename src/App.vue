<template>
<div id="App">
  <div v-if="loading">
      <div class="spinner-border m-5" role="status">
  </div></div>
  <div class="container" v-else>
        <HeaderPage :user="user" />
        <div class="border-top my-3"></div>
        <AboutMe :user="user"/>
        <div class="border-top my-3"></div>
        <EducationExperience :user="user"/>
        <div class="border-top my-3"></div>
        Portfolio created with <a href="https://github.com/digin1/portfolio"><b-icon-github></b-icon-github>Vue.js</a> | 2022 &copy; <a href="https://linkedin.com/in/digin">Digin Dominic</a>
  </div>
</div>
</template>

<script>

import HeaderPage from './components/HeaderPage.vue'
import AboutMe from './components/AboutMe.vue'
import EducationExperience from './components/EducationExperience.vue';

import { bucket } from "./cosmic.js";


export default {
  name: 'App',
  components: {
    AboutMe,
    HeaderPage,
    EducationExperience,
},
  data: () => ({
      loading: false,
      posts: null,
      user: {},
  }),
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.error = this.user = null
      this.loading = true
      bucket.getObjects({
        query: {
          type: 'user'
        },
        props: 'slug,title,content,metadata' // Limit the API response data by props
      }).then(data => {
        const user = data.objects
        this.loading = false
        this.user = user
      })
    },
  }
}
</script>

<style>

@import url("https://fonts.googleapis.com/css?family=Merriweather:400,300,700");

#app {
  font-family: 'Merriweather', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
.wrapper{
  height: 100%;
}
a{
  text-decoration: none;
  color: #409EFF;
}

</style>
