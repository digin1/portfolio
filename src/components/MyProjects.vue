

<template>
  <div class="common-layout bg-white p-3 rounded-3 shadow-sm m-1 mt-2">
    <h5><b>My Projects</b></h5>
    <div class="border-top my-3"></div>
<div class="container">
    <div class="row justify-content-center">
        <div class="col">
                    <div id="content">
                        <ul class="timeline" >
                            <li class="event" v-for="item in user[0].metadata.projects" :key="item.id" :data-date="item.date">
                                <div class="card">
                                    <div class="card-header bg-success text-light">
                                        <b>{{item.name}}</b>
                                    </div>

                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">{{item.description}}</li>
                                            <li class="list-group-item"><img class="img-fluid mb-1" :src="item.image" /></li>
                                            <li class="list-group-item">URL: <a :href="item.url">{{item.url}}</a></li>
                                        </ul>


                                </div>
                            </li>
                        </ul>
                    </div>
        </div>
    </div>
</div>
  </div>
</template>


<script>

export default {
  name: 'MyProjects',
  props: ["user"],
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body{margin-top:20px;}
.timeline {
    border-left: 3px solid #2c3e50;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    /* background: rgba(114, 124, 245, 0.09); */
    /* background: #f8f9fa;  */
    margin: 0 auto;
    letter-spacing: 0.2px;
    position: relative;
    line-height: 1.4em;
    font-size: 1.03em;
    padding-left: 50px;
    padding-top: 50px;
    padding-bottom:50px;
    list-style: none;
    text-align: left;
    max-width: 100%;
}

@media (max-width: 767px) {
    .timeline {
        max-width: 100%;
        padding-left: 25px;
        padding-bottom:25px;
    }
}

.timeline h1 {
    font-weight: 300;
    font-size: 1.4em;
}

.timeline h2,
.timeline h3 {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 10px;
}

.timeline .event {
    border-bottom: 1px dashed #e8ebf1;
    padding-bottom: 25px;
    margin-bottom: 25px;
    position: relative;
}

@media (max-width: 767px) {
    .timeline .event {
        padding-top: 30px;
    }
}

.timeline .event:last-of-type {
    padding-bottom: 0;
    margin-bottom: 0;
    border: none;
}

.timeline .event:before,
.timeline .event:after {
    position: absolute;
    display: block;
    top: 0;
}

.timeline .event:before {
    left: -207px;
    content: attr(data-date);
    text-align: right;
    font-weight: 100;
    font-size: 0.9em;
    min-width: 120px;
}

@media (max-width: 767px) {
    .timeline .event:before {
        left: 0px;
        text-align: left;
    }
}

.timeline .event:after {
    -webkit-box-shadow: 0 0 0 3px #2c3e50;
    box-shadow: 0 0 0 3px #2c3e50;
    left: -55.8px;
    background: #fff;
    border-radius: 50%;
    height: 9px;
    width: 9px;
    content: "";
    top: 5px;
}

@media (max-width: 767px) {
    .timeline .event:after {
        left: -31.8px;
    }
}

.rtl .timeline {
    border-left: 0;
    text-align: right;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border-right: 3px solid #2c3e50;
}

.rtl .timeline .event::before {
    left: 0;
    right: -170px;
}

.rtl .timeline .event::after {
    left: 0;
    right: -55.8px;
}

</style>

