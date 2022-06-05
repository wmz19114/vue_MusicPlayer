import Vue from "vue";
import { createApp } from "vue";
import App from './App.vue'
import router from './router'
import "./assets/css/common.css"
import api from "./api/index";

// Vue.config.productionTip = false;
let app = createApp(App);
app.config.globalProperties.$api = api;

app.use(router).mount('#app')