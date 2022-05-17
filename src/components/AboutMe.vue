<template>
  <div class="common-layout">
    <el-container>      
          <el-main>
            <div class="whoami">
            <h3>WHO AM I?</h3>
            <p>I am a Well-qualified Software Engineer familiar with wide range of
              programming utilities and languages. Knowledgeable of backend and
              frontend development requirements. Handles any part of process with
              ease. Collaborative team player with strong technical skills and over a
              year of relevant experience.
              </p>
            </div>

          </el-main>
          <el-aside width="40%">
            <div class="info">
              <h1>DIGIN DOMINIC</h1>
              <p><b>Email:</b> digin13dominic@gmail.com</p>
              <p><b>Phone:</b> +447424003671</p>
              <p><b>City:</b> Nottingham</p>
              <p><b>Languages: English, Malayalam</b></p>
            </div>
          </el-aside>
    </el-container>
  </div>
  <el-divider />
</template>


<script>

export default {
  name: 'AboutMe',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.whoami{
  width:80%;
  text-align: left;
  margin-left: auto;
}
.info{
  text-align: left;
  margin-left: auto;
}

</style>
