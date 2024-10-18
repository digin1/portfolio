<template>
  <div class="common-layout bg-white p-3 rounded shadow m-2">
    <img :src="defaultImage" class="profile-image mt-4" />
    <h1 class="username">{{ user[0].metadata.name }}</h1>
    <p class="role"><b>System Engineer & Web Developer</b> <br> University of Edinburgh</p>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  props: ["user"],
  data() {
    return {
      defaultImage: require('@/assets/digin.jpeg'),
    }
  }
}
</script>

<style scoped>
.centered-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
}

.profile-image {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 3px solid #ddd;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.username {
  font-size: 1.8rem;
  margin-top: 15px;
  font-weight: bold;
  color: #333;
}

.role {
  font-size: 1rem;
  color: #666;
  margin-top: 10px;
}
</style>
