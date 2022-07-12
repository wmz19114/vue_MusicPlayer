 //进行axios二次封装
 import axios from "axios";
 import QS from "qs";

 const errorHandle = (status, info) => {
     switch (status) {
         case 400:
             console.log("400");
             break;
         case 401:
             console.log("401");
             break;
         case 403:
             console.log("403");
             break;
         case 404:
             console.log("404)");
             break;
         case 500:
             console.log("500");
             break;
         case 503:
             console.log("503");
             break;
         default:
             console.log(info);
             break;
     }
 }



 //创建axios实例进行配置
 const instance = axios.create({
     baseURL: "/api",
     timeout: 5000,
 })

 // 处理并发请求方法
 instance.all = axios.all;
 instance.spread = axios.spread

 // 全局配置
 instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

 instance.interceptors.request.use((config) => {
     //config是配置对象，其中的header请求头很重要
     return config

 }, (error) => {
     return Promise.reject(new Error('false'))
 });

 instance.interceptors.response.use(
     response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
     error => {
         const { response } = error;
         if (response) {
             /**
              * 错误信息以状态码为主
              */
             errorHandle(response.status, response.data);
             return Promise.reject(response);
         } else {
             console.log("请求被中断");
         }
     }
 )

 axios.interceptors.response.use(response => {
         if (response.data == null && response.config.responseType === 'json' && response.request.responseText != null) {
             try {
                 response.data = JSON.parse(response.data);
             } catch (e) {
                 //ignore
             }
         }
         return response;
     })
     //提供get和post请求方法
 export function get(url, params) {
     return new Promise((resolve, reject) => {
         instance.get(url, {
             params
         }).then(res => {
             resolve(res);
         }).catch(err => {
             reject(err);
         })
     })
 }

 export function post(url, params) {
     return new Promise((resolve, reject) => {
         instance.post(url, params).then(res => {
             resolve(res.data)
         }).catch(err => {
             reject(err.data)
         })
     })
 }

 export default instance