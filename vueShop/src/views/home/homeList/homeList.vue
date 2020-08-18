<template>
  <div id="shopClassList-content">
    <div class="shopClassList-content-typeOne" v-for="(item,index) in shoplistdata" :key="index">
      <div class="shopType-two">{{item.type_two}}</div>
      <div class="shop-list">
        <div v-for="(ele,i) in item.list" :key="i">
          <div class="shopImg">
            <img :src="ele.img_list_url" alt />
          </div>
          <div class="shopTitle">{{ele.title}}</div>
          <div class="hotSale">
            <span class="shopPrice">￥{{ele.price}}</span>
            <span v-html="ele.mack"></span>
          </div>
        </div>
      </div>
    </div>
    <el-cover v-if="coverShow"></el-cover>
  </div>
</template>

<script>
import { getShopClassList } from "../../../api/shopClassList";
import { mapGetters } from "vuex"; 
import ElCover from '../../../components/cover/cover';
// import { getClassList } from "../../../store";
export default {
  data() {
    return {
      shoplistdata: [],
      coverShow:true,
      text:'',
    };
  },
  computed:{
    ...mapGetters({
      classList:'getClassList',
    })
  },
  methods:{
     funClassList() { 
       this.shoplistdata=[];
        getShopClassList().then((res) => {
          this.coverShow=false;
          this.text=this.classList
      // 选出是type-one数组
      let arr = res.data.filter((ele) => {
        return ele.type_one === this.text;
      });
      // 去重
      let obj = {};
      arr.forEach((ele) => {
        if (obj[ele.type_two]) {
          obj[ele.type_two]++;
        } else {
          obj[ele.type_two] = 1;
        }
      });
      // 重构
      for (let key in obj) {
        let obj1 = {};
        obj1.type_two = key;
        obj1.list = arr.filter((ele) => {
          return ele.type_two === key;
        });
        this.shoplistdata.push(obj1);
      }
    });
    }
  },
  created() {
    this.funClassList()
  },
  updated(){
    this.funClassList()
  },
  // watch:{
  //   // $route:function(){
  //   //   console.log(this.classList)
  //   //     this.funClassList()
  //   // }
  // },
  // mounted(){
  //    this.funClassList()
  // },
  components:{
    ElCover,
  }
};
</script>

<style>
.shopClassList-content-typeOne > .shopType-two {
  font-size: 25px;
  font-weight: bolder;
  text-align: center;
}
.shop-list{
    display: flex;
    flex-wrap: wrap;
}
.shopImg {
  width: 211px;
  height: 220px;
}
.shopImg > img{
  width: 100%;
  height: 100%;
}
.shopTitle{
    font-weight: bolder;
}
.hotSale{
    display: flex;
    justify-content: space-between;
}
.shopPrice{
    font-weight: bolder;
    color: red;
}
</style>