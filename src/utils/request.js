 //进行axios二次封装
 import axios from "axios";
 import QS from "qs";

 //创建axios实例进行配置
 const request = axios.create({
     baseURL: "/api",
     timeout: 5000,
 })

 request.interceptors.request.use((config) => {
     //config是配置对象，其中的header请求头很重要
     return config

 }, (error) => {
     return Promise.reject(new Error('false'))
 });


 export default request;