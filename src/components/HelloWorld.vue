<template>
  <div class="common-layout">
    <el-container>
      <el-header style="height:210px">
        <el-image style="width: 200px; height: 200px; border-radius: 50%; border: 5px solid #409EFF;" :src="asset" />
      </el-header>
      
      <el-main>
        <h1 class="myname">{{ msg }}</h1>
        <p>Full Stack Developer | SysAdmin | Cyber Security Graduate</p>
      </el-main>
    </el-container>
  </div>
    <el-divider>
      <el-icon><star-filled /></el-icon>
      </el-divider>


</template>


<script>
const asset = require('./../assets/logo.jpeg')
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{ 
      asset }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #282828;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

</style>
