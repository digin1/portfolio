<template>

  <div class="common-layout bg-white p-3 rounded-3 shadow-sm m-1 mt-2">
    <h2>About Me</h2>
        <div class="border-top my-3"></div>
    <div class="row justify-content-center">
      <div class="col-md-6 mr-auto card-mobile">
        <div class="paragraph">
            <h4 class="text-start "><strong>Who Am I?</strong></h4>
            <p class="text-start text-justify">I am a software developer with a passion for creating innovative tools and solutions that enhance efficiency and drive meaningful results. I currently work on a variety of projects ranging from data visualization to automation and image processing, with a particular focus on scientific research applications. One of my key contributions is developing tools that support human brain synaptome mapping, enabling seamless data manipulation and sophisticated 3D visualizations.

I specialize in building end-to-end solutions using technologies such as Docker, Python, Flask, Django, and cloud platforms like AWS. My expertise extends to 3D graphics using Three.js, where I develop advanced visualization tools for complex datasets, as well as image segmentation applications that leverage intuitive interfaces and powerful backend processing.

In addition to software development, I also work on system configuration, including NAS and RAID setups, to optimize storage and performance. I have a strong foundation in Linux administration, scripting, and hardware configurations, which allows me to manage high-performance server environments, including GPU-enabled setups for computationally intensive tasks.

Earlier in my career, I worked extensively in system administration, where I gained solid experience with virtualization technologies such as Xen, KVM, and OpenVZ/Virtuozzo. I manage various Linux distributions and Windows Server environments, and I am proficient with tools like Plesk, DirectAdmin, aaPanel, and Webmin. My background in shell scripting and troubleshooting complex Linux issues further strengthens my ability to ensure system stability.

I also have hands-on experience with configuration management tools like Ansible and monitoring solutions such as Nagios, Grafana, and Prometheus, from my previous roles where I maintained system uptime and monitored performance.
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
