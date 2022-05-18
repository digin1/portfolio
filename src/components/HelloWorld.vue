<template>
  <div class="common-layout">

        <img style="width: 200px; height: 200px; border-radius: 50%; border: 5px solid #409EFF;" :src="asset" />

        <h2 class="myname">{{ msg }}</h2>
        <p>Full Stack Developer | SysAdmin | Cyber Security Graduate</p>

  </div>
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

h2{
  margin-top: 10px;
}

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

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

</style>
