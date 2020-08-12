<template>
  <div>
    <h1>我的</h1>
    <router-link to="/register">注册</router-link>
  </div>
</template>

<script>
// import axios from '../../plugins/axios'
import { getStudent } from "../../api/home";
export default {
  created() {
    // http://vebcoder.cn:9527/api/goodList?page=1
    // console.log(axios);
    //  axios.post('http://musicapi.leanapp.cn/artist/list',{}).then((res)=>{
    //   console.log(res.data)
    // }).catch((err)=>{
    //   console.log(err,'---------------err')
    // })
    getStudent({ logoinname: "123124" }).then((res) => {
      console.log(res);
    });
    
  },
};
</script>

<style>
</style>