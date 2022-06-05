import Vue from "vue";
import { createApp } from "vue";
import App from './App.vue'
import router from './router'
import "./assets/css/common.css"
import api from "./api/index";
import { getMusicList } from "@/api";

getMusicList().then(console.log);

let app = createApp(App);
// app.config.globalProperties.$api = api;

app.use(router).mount('#app')