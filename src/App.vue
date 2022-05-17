
<template>
  <div class="common-layout">
    <el-container>
      <el-header></el-header>
      <el-main><HelloWorld msg="DIGIN DOMINIC"/></el-main>
      <el-footer>2022 &copy; Digin Dominic</el-footer>
    </el-container>
  </div>
</template>

  
  


<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
