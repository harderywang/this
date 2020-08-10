<template>
  <div id="shopCat">
    <h1 v-if="shopCatList.length==0">你的购物车是空的</h1>
    <div v-else>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" v-model='allCheck' @change="changeAll"/>全选
            </th>
            <th>商品名称</th>
            <th>单价</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in shopCatList" :key="index" :class="{active:item.isCheck}">
            <td>
              <input type="checkbox" v-model="checkCat" :value='item' @change="onChange(item)"/>
            </td>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>
              <button @click="reduceCount(item)">-</button>
              <span>{{item.count}}</span>
              <button @click="addCount(item)">+</button>
            </td>
            <td>
              <button @click="deletShopCatItem(item,index)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        总价钱
        <span>{{totalPrice}}</span>
        <button>结算</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ShopCatList"],
  data() {
    return {
      shopCatList: [],
      show: true,
      totalPrice: 0,
      checkCat:[],
      allCheck:false,
    };
  },
  created() {
    // 初始化获取购物车列表树
    let shopCatListStorage = localStorage.getItem("shopCatList");
    if (shopCatListStorage != null) {
      this.shopCatList = JSON.parse(shopCatListStorage);
    }
  },
  methods: {
    deletShopCatItem(item, index) {
      console.log(item, index);
      this.shopCatList = this.shopCatList.filter((ele) => {
        return ele.shopCatID != item.shopCatID;
      });
      // 修改localstorage 中shopCatList\
      // localStorage.setItem('shopCatList',JSON.stringify(this.shopCatList))
    },
    reduceCount(item) {
      --item.count;
      if (item.count <= 0) {
        item.count = 0;
        this.shopCatList=this.shopCatList.filter((ele)=>{
            return ele.id !=item.id
        })
      }
    },
    addCount(item) {
      ++item.count;
    },
    onChange(item){
        item.isCheck=!item.isCheck;
        if(this.checkCat.length===this.shopCatList.length){
            this.allCheck=true
        }else{
            this.allCheck=false
        }
        // 计算价格
        this.checkCat.forEach((ele)=>{
            this.totalPrice+=ele.price*ele.count
        })
    },
    changeAll(){
        if(this.allCheck){
            this. shopCatList.forEach((ele)=>{
                ele.isCheck=true
            })
            this.checkCat=this.shopCatList
        }else{
             this.shopCatList.forEach((ele)=>{
                ele.isCheck=false
            })
            this.checkCat=[]
        }
    }
  },
  watch: {
    ShopCatList: function (val) {
      this.shopCatList = val;
    },
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.active{
    color: blue;
}
</style>