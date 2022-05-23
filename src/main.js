import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import "devicon"


import App from './App.vue'
// createApp(App).mount('#app')
const app = createApp(App)
app.use(BootstrapIconsPlugin);
app.mount('#app')














