// 请求二次封装
// import Vue from 'vue'
import Axios from 'axios'

// Vue.use(Axios)
let axios = Axios.create({
    // 配置接口根路径
    baseURL:"https://www.ekings.net/xggy/a",
    timeout:1000,//请求超过1000毫秒后请求失败
})


export default axios