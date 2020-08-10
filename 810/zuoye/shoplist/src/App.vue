
<template>
  <div id="app">
    <shop-list :shoplist='shoplist'></shop-list>
  </div>
</template>

<script>
import ShopList from './views/shoplist'
export default {
  data(){
    return {
      shoplist:[]
    }
  },
  created(){
    this.axios.get('http://vebcoder.cn:9527/api/goodList?page=1').then((response)=>{
      this.shoplist = response.data;
      console.log(response)
    }).catch((error)=>{
      console.log(error)
    })
  },
  components:{
    ShopList
  }
}
</script>

<style>
</style>