// 此文档写的是所有home 发送的请求
// 注意只发请求 每一个函数只发一个请求 

import axios from '../plugins/axios'

export function getStudent(data){
    // data必须是对象
    return axios.post('/weixinview/grxx',data)
}
