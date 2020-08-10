<template>
  <div id="shopList">
    <table>
      <thead>
        <tr>
          <td>序号</td>
          <td>商品名称</td>
          <td>商品价格</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in shopList" :key="index">
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>
            <button @click="addShopCatList(item,index)">加入购物车</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["setShopList"],
  data() {
    return {
      shopList: [], // 商品列表
      shopCatList: [], // 购物车列表
      cartFlag: false, // true 购物车刘表中在；false 不存在
    };
  },
  created() {
    // 初始化获取商品列表数据
    let shopListStorage = localStorage.getItem("shopList");
    shopListStorage = JSON.parse(shopListStorage);
    this.shopList = shopListStorage; // 初始化更新商品列表数据
    // 初始化获取购物车刘表数据
    let shopCatListStorage = localStorage.getItem("shopCatList");
    if (shopCatListStorage === null) {
      localStorage.setItem("shopCatList", JSON.stringify(this.shopCatList));
    } else {
      this.shopCatList = JSON.parse(shopCatListStorage);
    }
     this.$emit('onShopCatList',this.shopCatList)
  },
  methods: {
    addShopCatList(item) {
      // console.log('1111')
      // 添加数据前 做 判断购物车中是否由这个商品 id 判断；由 count+1
      for (let i = 0; i < this.shopCatList.length; i++) {
        if (this.shopCatList[i].id === item.id) {
          this.cartFlag = true;
          this.shopCatList[i].count++;
          break;
        } else {
          this.cartFlag = false;
        }
      }
      if (!this.cartFlag) {
        this.shopCatList.push({
          ...item,
          count: 1,
          shopCatID: item.id + "shopCartId",
          isCheck: false, // 表示没由被选中
        });
      }
      // console.log(this.shopCatList)
      localStorage.setItem("shopCatList", JSON.stringify(this.shopCatList));
      this.$emit('onShopCatList',this.shopCatList)
    },

  },
//  computed: {
//     shoplist: function () {
//          return  this.setShopList
//     },
//   },
  watch: {
    // 只有改变数组长度后；才会触发 ？？？
    setShopList:function(val){
        console.log(val)
       this.shopList=val
    }
  },
};
</script>

<style>
table {
  border: 1px solid #cccccc;
  border-collapse: collapse;
}
td {
  min-width: 150px;
  text-align: center;
  border: 1px solid #cccccc;
}
tr {
  min-height: 55px;
  height: 55px;
}
td > button {
  outline: none;
  appearance: none;
  border: none;
  background-color: rgb(59, 230, 102);
  color: #d4f5e4;
  height: 35px;
  line-height: 25px;
  text-align: center;
  padding: 5px 15px;
}
</style>