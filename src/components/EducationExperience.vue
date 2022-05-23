<template>
    <div class="common-layout bg-white p-3 rounded-3 shadow-sm m-1 mt-2">
        <h5><b>Experience</b></h5>
        <div class="border-top my-3"></div>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-sm-5 p-1">
                    <div class="card text-start">
                        <div class="card-header">
                            <b>PROFESSIONAL</b>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li v-for="item in user[0].metadata.experience.professional" :key="item.id" class="list-group-item">
                                <p>{{item.job}}</p>
                                <footer class="blockquote-footer">{{item.company}}, {{item.year}}</footer>
                            </li>   
                        </ul>
                    </div>
                </div>
                <div class="col-sm-5 p-1">
                    <div class=" card text-start">
                        <div class="card-header">
                            <b>EDUCATION</b>
                        </div>
                        <ul class="list-group list-group-flush"> 
                            <li v-for="item in user[0].metadata.experience.education" :key="item.id" class="list-group-item">
                                <p>{{item.degree}}</p>
                                <footer class="blockquote-footer">{{item.place}}, {{item.year}}</footer>
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
    name: 'EducationExperience',
    props: ["user"],
}

</script>

<style scoped>
</style>