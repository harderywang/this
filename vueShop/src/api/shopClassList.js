import axios from '../plugins'

// 获取全部商品信息
export function getShopClassList(){
    return axios.get(`goodList`)
}
// 获取每一页的信息
export function getShopList(data){
    let obj ={
        page:data
    };
    return axios.get(`goodList`,{
        params:obj
    })
}
// 注册
export function setUser(name,pass,toke){
    let obj ={
        'userName':name,
            'password':pass,
            'token':toke
    }
    return axios.get('register',{
        params:obj
    })
}
// 登录
export function getUser(name,pass){
    let obj ={
        'userName':name,
        'password':pass
    }
    return axios.get('login',{
        params:obj
    })
}
// 详情
export function getdetail(id){
    let obj ={
        goodId:id,
    }
    return axios.get('detail',{
        params:obj
    })
}