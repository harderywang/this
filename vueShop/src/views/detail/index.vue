<template>
  <div id="detail">
    <div class="shopShow">
      <div class="return">返回</div>
      <div class="description" v-for="(item,index) in data" :key="index">

        <div class="img-div">

          <div class="big-enlarge-img">
            <div class="bigImg">
              <img :src="item.img_list_url" alt  ref="img"/>
              <div class="mark"></div>
              <div class="mantle"></div>
            </div>
            <div class="enlarge">
              <img :src="item.img_url" alt />
            </div>
          </div>

          <div class="smallImg">
            <div class="smallImg-itme" v-for="(ele,index) in (JSON.parse(item.imgs)) " :key="index">
                <img :src="ele" alt="">
            </div>
          </div>
        </div>

        <div class="shopInfo">
          <div class="shopInfoItem">
            <div class="title">{{item.title}}</div>
            <div class="supplier">{{item.sopplier}}</div>
            <div class="price">{{item.price}}</div>
            <div class="addShopCat">添加到购物车</div>
          </div>
        </div>


      </div>
    </div>
    <div class="similar"></div>
  </div>
</template>

<script>
import { getdetail } from "../../api/shopClassList";
export default {
  data() {
    return {
      data: [],
    };
  },
  created() {
    // console.log(this.$route.query.userId);
    let id = this.$route.query.userId;
    getdetail(id).then((res) => {
      this.data = res.data;
      console.log(this.data);
    });
  },
};
</script>

<style>
#detail {
  padding: 0 10%;
}
.return {
  height: 40px;
  width: 85px;
  line-height: 40px;
  text-align: center;
  border: 2px solid #eeeeee;
  color: rgb(136, 131, 131);
  margin-top: 10px;
  font-weight: bold;
  cursor: pointer;
}
.description {
  display: flex;
  flex-wrap: wrap;
}
.img-div{
    display: flex;
    flex-wrap: wrap;
}




.shopInfo{
    float: right;
    right: 10px;
    top: 10px;
}
/* .img-div {
  position: relative;
}

.bigImg {
  width: 400px;
  height: 400px;
}
.bigImg > img {
  width: 100%;
  height: 100%;
}
.bigImg > .mark {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0px;
  left: 0px;
  background: rgb(228, 226, 226);
}
.bigImg > .mantle {
  width: 400px;
  height: 400px;
  background: transparent;
  position: absolute;
  top: 0px;
  left: 0px;
}
.enlarge {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 0px;
  left: 500px;
}
.enlarge > img {
  width: 100%;
  height: 100%;
}
.shopInfo {
  width: 300px;
  height: 220px;
  background: tomato;
  position: absolute;
  top: 0px;
  right: 300px;
} */
</style>