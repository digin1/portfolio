<template>
  <div class="common-layout bg-white p-2 rounded-3 shadow-sm m-1">
        <img :src="user[0].metadata.photo.imgix_url" class="mt-4 shadow-sm border border-secondary border-2" />
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

.common-layout{
  background-image: url("../assets/headerbackground.jpeg");
  background-size: cover;
}
h2{
  margin-top: 20px;
}
img{
  border-radius: 50%; 
}
</style>
