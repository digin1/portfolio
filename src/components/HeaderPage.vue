<template>
  <div class="common-layout">
        <img :src="user[0].metadata.photo.imgix_url" />
        <h2 class="myname"><strong><h1>{{ user[0].metadata.name}}</h1></strong></h2>
        <p>{{user[0].metadata.status}}</p>
  </div>
</template>


<script>
//const asset = require('./../assets/logo.jpeg')
export default {
  name: 'HeaderPage',
  props: ["user"],
  data(){
    return{ 
      //asset
    }
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h2{
  margin-top: 20px;
}
img{
  border-radius: 50%; 
  border: 5px solid #409EFF;
}
</style>
