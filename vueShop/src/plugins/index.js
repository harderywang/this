import Axios from 'axios'

let axios = Axios.create({
    // baseURL:'http://192.168.1.155/api/'||'http://49.232.47.192:9527/api/'||"http://localhost:3000/api/",
    baseURL:'http://49.232.47.192:9527/api/',
})
export default axios


