<template>

  <div class="container-fluid">
    <h2>About Me</h2>
        <div class="border-top my-3"></div>
    <div class="row justify-content-center">
      <div class="col-md-7 mr-auto card-mobile">
        <div class="paragraph">
            <h4 class="text-start "><strong>WHO AM I?</strong></h4>
            <p class="text-start text-justify">{{ this.user[0].metadata.about}}
              </p>
        </div>
      </div>
      
      <div class="col-md-4 card-mobile">
        <div class="paragraph text-start">
              <p><b>Email:</b> {{this.user[0].metadata.email}}</p>
              <p><b>Phone:</b> {{this.user[0].metadata.phone}}</p>
              <p><b>City:</b> {{this.user[0].metadata.city}}</p>
              <p><b>Languages:</b> {{this.user[0].metadata.languages}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutMe',
  props: ["user"],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
