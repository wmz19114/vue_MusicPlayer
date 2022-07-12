import { createApp } from "vue";
import App from './App'
import router from './router'
import "./assets/css/common.css"
import api from "./api/index";

let app = createApp(App);
app.config.globalProperties.$api = api;

app.use(router).mount('#app')