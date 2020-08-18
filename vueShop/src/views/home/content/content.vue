<template>
  <div id="homeConten">
    <div class="block">
      <el-carousel>
        <el-carousel-item v-for="item in src" :key="item">
          <!-- <h3 class="small">{{ item }}</h3> -->
          <img :src="item" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- <img src="../../../assets/a.jpg" alt=""> -->

    <div class="shop-list">
      <div
        v-for="ele in  shoplistdata"
        :key="ele.Id"
        @click="$router.push({path:'/index/detail', query:{ userId:ele.Id }})"
      >
        <div class="shopImg">
          <img :src="ele.img_list_url" />
        </div>
        <div class="shopTitle">{{ele.title}}</div>
        <div class="hotSale">
          <span class="shopPrice">￥{{ele.price}}</span>
          <span v-html="ele.mack"></span>
        </div>
      </div>
    </div>
    <el-cover v-if="coverShow"></el-cover>
  </div>
</template>

<script>
import { getShopList } from "../../../api/shopClassList";
import ElCover from '../../../components/cover/cover'
export default {
  data() {
    return {
      src: [
        require("@/assets/a.jpg"),
        require("@/assets/b.jpg"),
        require("@/assets/c.jpg"),
        require("@/assets/d.jpg"),
        require("@/assets/e.jpg"),
      ],
      page: 1,
      shoplistdata: [],
      coverShow:false
    };
  },
  created() {
    getShopList(this.page)
      .then(({ data }) => {
        this.shoplistdata = data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (
        document.documentElement.scrollHeight ===
        document.documentElement.clientHeight +
          document.documentElement.scrollTop
      ) {
        this.page++;
       this.coverShow=true
        getShopList(this.page)
          .then(({ data }) => {
              this.coverShow=false
            data.forEach(ele=>{
              this.shoplistdata.push(ele)
            })
           
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    // detail(data,e){
    //   console.log(e.currentTarget)
    //   console.log(data)
    // }
  },
  components:{
    ElCover
  }
};
</script>

<style>
#homeConten .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item {
  border-radius: 10px;
}
#homeConten .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

#homeConten .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item > img {
  width: 100%;
  height: 100%;
}

.el-carousel__container {
  height: 500px;
}
.shop-list {
  display: flex;
  flex-wrap: wrap;
}
.shopImg {
  width: 211px;
  height: 220px;
}
.shopImg > img {
  width: 100%;
  height: 100%;
}
.shopTitle {
  font-weight: bolder;
}
.hotSale {
  display: flex;
  justify-content: space-between;
}
.shopPrice {
  font-weight: bolder;
  color: red;
}
</style>