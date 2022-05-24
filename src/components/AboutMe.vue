<template>

  <div class="common-layout bg-white p-3 rounded-3 shadow-sm m-1 mt-2">
    <h2>About Me</h2>
        <div class="border-top my-3"></div>
    <div class="row justify-content-center">
      <div class="col-md-6 mr-auto card-mobile">
        <div class="paragraph">
            <h4 class="text-start "><strong>Who Am I?</strong></h4>
            <p class="text-start text-justify">{{ user[0].metadata.about}}
              </p>
        </div>
      </div>
      
      <div class="col-md-4 card-mobile">
        <div class="contact paragraph text-start">
              <p><b>Email:</b> {{user[0].metadata.email}}</p>
              <p><b>Phone:</b> {{user[0].metadata.phone}}</p>
              <p><b>City:</b> {{user[0].metadata.city}}</p>
              <p><b>Languages:</b> {{user[0].metadata.languages}}</p>
              <div class="social">
                    <a :href="user[0].metadata.facebook"><b-icon-facebook class="m-1"></b-icon-facebook></a>
                    <a :href="user[0].metadata.instagram"><b-icon-instagram class="m-1"></b-icon-instagram></a>
                    <a :href="user[0].metadata.linkedin"><b-icon-linkedin class="m-1"></b-icon-linkedin></a>
                    <a :href="user[0].metadata.github"><b-icon-github class="m-1"></b-icon-github></a>
                    <a :href="user[0].metadata.twitter"><b-icon-twitter class="m-1"></b-icon-twitter></a>
              </div>
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

.social{
    font-size: 25px;
}
.contact.paragraph.text-start{
     line-height:90%;
}
a{ 
  color:inherit;
}
a:hover {
  color: black;
  padding-bottom:7px;
  border-bottom:1px solid black;
}
</style>
