<template>
  <div class="common-layout bg-white p-4 rounded-3 shadow-sm m-1 mt-2">
    <div class="row">
      <div class="col-lg-8">
        <h2 class="mb-4">About Me</h2>
        <div class="border-top my-3"></div>
        <div class="text-gray-600 leading-relaxed">
          <p class="text-justify">
            I am a <strong>software developer</strong> with a passion for creating <strong>innovative tools and
              solutions</strong> that enhance efficiency and drive meaningful results. I currently work on a variety of
            projects ranging from <strong>data visualization</strong> to <strong>automation</strong> and <strong>image
              processing</strong>, with a particular focus on <strong>scientific research applications</strong>. One of
            my key contributions is developing tools that support <strong>human brain synaptome mapping</strong>,
            enabling seamless <strong>data manipulation</strong> and sophisticated <strong>3D visualizations</strong>.
            My work has been included in <strong>scientific papers</strong>, with more publications forthcoming in
            <strong>scientific journals</strong>.
          </p>

          <p class="text-justify">
            I specialize in building <strong>end-to-end solutions</strong> using technologies such as <strong>Docker,
              Python, Flask, Django, AWS</strong>, and frontend frameworks like <strong>Bootstrap, Vue.js and
              React.js</strong>. I
            also utilize <strong>Chart.js</strong> for interactive data visualizations. My expertise extends to
            <strong>3D graphics using Three.js</strong>, where I develop advanced visualization tools for complex
            datasets, as well as <strong>image segmentation applications</strong> that leverage intuitive interfaces and
            powerful backend processing. Additionally, I have developed an <strong>ND2 to TIFF conversion tool using the
              RadiantKit library</strong> and a <strong>CZI to TIFF conversion tool</strong>.
          </p>

          <p class="text-justify">
            I played a key role in enhancing and operating a<strong>web application that generates heatmaps based on the
              Allen Brain Atlas</strong>. I enhanced its performance and
            migrated it to run efficiently as a web application.
          </p>

          <p class="text-justify">
            Furthermore, I contribute to the <strong>Grant Lab Docker Swarm cluster system</strong>, where I help manage
            a distributed computing environment that utilizes <strong>Docker, Dask, Celery, MySQL, Redis, and
              NGINX</strong> for large-scale data processing and application deployment.
          </p>

          <p class="text-justify">
            In addition to software development, I also work on <strong>system configuration</strong>, including
            <strong>NAS and RAID setups</strong>, to optimize storage and performance. I have a strong foundation in
            <strong>Linux administration, scripting, and hardware configurations</strong>, which allows me to manage
            <strong>high-performance server environments</strong>, including <strong>GPU-enabled setups</strong> for
            computationally intensive tasks.
          </p>

          <p class="text-justify">
            I hold a <strong>Master's degree in Cyber Security</strong> from <strong>Nottingham Trent
              University</strong>, where I received the <strong>Best Project Award</strong> for my course work. This
            academic foundation provided me with a deep understanding of security principles and
            techniques, which I have integrated into my work as a software developer.
          </p>


          <p class="text-justify">
            Earlier in my career, I worked extensively in <strong>system administration</strong>, where I gained solid
            experience with <strong>virtualization technologies</strong> such as Xen, KVM, and OpenVZ/Virtuozzo. I
            manage various <strong>Linux distributions and Windows Server environments</strong>, and I am proficient
            with tools like Plesk, DirectAdmin, aaPanel, and Webmin. My background in <strong>shell scripting</strong>
            and troubleshooting complex Linux issues further strengthens my ability to ensure system stability.
          </p>

          <p class="text-justify">
            I also have hands-on experience with <strong>configuration management tools</strong> like Ansible and
            <strong>monitoring solutions</strong> such as Nagios, Grafana, and Prometheus, from my previous roles where
            I maintained system uptime and monitored performance.
          </p>


        </div>
      </div>

      <div class="col-lg-4">
        <div class="contact text-start">
          <h4 class="mb-3">Contact Information</h4>
          <p><b>Email:</b> {{ user[0].metadata.email }}</p>
          <p><b>Phone:</b> {{ user[0].metadata.phone }}</p>
          <p><b>City:</b> {{ user[0].metadata.city }}</p>
          <p><b>Languages:</b> {{ user[0].metadata.languages }}</p>
          <div class="social mt-4">
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

<style scoped>
h2 {
  font-size: 2rem;
  font-weight: bold;
}

h4 {
  font-size: 1.5rem;
  font-weight: bold;
}

p {
  margin-bottom: 1.2rem;
  line-height: 1.5;
}

.social {
  font-size: 25px;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: black;
  padding-bottom: 3px;
  border-bottom: 1px solid black;
}

.contact {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
}

.card-mobile {
  margin-bottom: 20px;
}

.text-justify {
  text-align: justify;
}

@media (max-width: 768px) {

  .col-lg-8,
  .col-lg-4 {
    margin-top: 20px;
  }
}
</style>
