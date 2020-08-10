<template>
  <div id="app">
      <add-shop @onShopList="shopListHandle" ></add-shop>
      <shop-list :setShopList='shoplist' @onShopCatList='ShopCatListHandle'></shop-list>
      <shop-cat :ShopCatList='ShopCatList'></shop-cat>
  </div>
</template>

<script>
import AddShop from './views/addShop';//默认找到index.vue
import ShopList from   './views/shopLIst';
import ShopCat from './views/shopCat';
export default {
    name:'App',
    data(){
        // let da = fetch('http://vebcoder.cn:9527/api/goodList').then(res=>{
        //     return res.json()
        // }).then(res=>{
        //     return res
        // })
        return{
            // list:da
            shoplist:[],
            ShopCatList:[]
        }
    },
    methods:{
       shopListHandle (val){
           this.shoplist=val
        //    console.log(val)
       },
       ShopCatListHandle(val){
           this.ShopCatList=val
       }
    },
    // mounted(){
    //     console.log(this)  //this指向组件实例
    //     console.log(this.list)
    // },
    components:{
        AddShop,
        ShopCat,
        ShopList
    }
}
</script>

<style>
    
</style>