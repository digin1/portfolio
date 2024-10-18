<template>
  <div class="common-layout bg-white p-3 rounded shadow m-2">
    <h5><b>Skills</b></h5>
    <div class="border-top my-3"></div>
    <div class="container-fluid">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-9">
                    <div class="row">
                            <div class="col" v-for="(value, key) in user[0].metadata.skills" :key="value.id"> 
                                <img :src="'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/'+key+'/'+key+'-original.svg'" />
                                <p>{{value}}</p>
                            </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'SkillSet',
  props: ["user"],
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

i{
    font-size: 100px;
}
img{
    width:60px;
    height:auto;
}

</style>
