<template>
  <div id="index">
    <div class="index-nav">
      <div class="index-nav-top">
        <div class="logoImg">
          <img src="../../assets/logo copy.png" alt />
        </div>
        <top-search></top-search>
      </div>
      <div class="index-nav-list">
        <router-link
          v-if="true"
          @click.native="indexNavHandle($event)"
          tag="div"
          :to="{name:'home'}"
        >首页</router-link>
       
        <router-link
          v-if="show1"
          @click.native="indexNavHandle($event)"
          tag="div"
          :to="{name:'login'}"
        >登录</router-link>
        <router-link
          v-else
          @click.native="indexNavHandle($event)"
          tag="div"
          :to="{name:'shopCat'}"
        >购物车</router-link>
        <router-link
          v-if="show1"
          @click.native="indexNavHandle($event)"
          tag="div"
          :to="{name:'register'}"
        >注册</router-link>
         <router-link
          v-else
          @click.native="indexNavHandle($event)"
          tag="div"
          :to="{name:'exitLogin'}"
        >退出登录</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <el-cover v-show="coverShow"></el-cover>
    
  </div>
</template>

<script>
import TopSearch from "./TopSearch";
import ElCover from "../../components/cover/cover";
import { mapActions,mapGetters } from "vuex";

export default {
  data() {
    return {
      show1: true,
      coverShow: false,
    };
  },
  computed:{
      ...mapGetters({show:'getShow'})
  },
  created(){
    this.show1=this.show
  },
  methods: {
    ...mapActions(["noticeHomeShow"]),
    indexNavHandle(e) {
      this.coverShow = true;
      console.log(e.target, "======");
      let timer = setTimeout(() => {
        this.coverShow = false;
        clearTimeout(timer);
      }, 1000);
      if (e.target.innerText === "登录") {
        this.noticeHomeShow({
          listShow: true,
          classListShow: false,
        });
      }
    },
  },
  components: {
    TopSearch,
    ElCover,
   
  },
};
</script>

<style>
.index-nav {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px 10%;
  box-shadow: rgb(153, 153, 153) 0px 2px 6px;
}
.index-nav > .index-nav-top {
  display: flex;
  justify-content: space-between;
}
.index-nav > .index-nav-top > .logoImg {
  width: 200px;
  height: 70px;
}
.index-nav > .index-nav-top > .logoImg > img {
  width: 100%;
  height: 100%;
}
#topSearchBox {
  position: absolute;
  top: 25px;
  right: 10%;
}
.index-nav > .index-nav-list {
  width: 30%;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
}
.index-nav >.index-nav-list>div:hover{
  color: purple;
border-bottom: 2px solid purple;
}
.index-nav > .index-nav-list > .router-link-active {
  color: purple;
  border-bottom: 2px solid purple;
}
.index-nav > .index-nav-list > div {
  width: 80px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  font-size: 16px;
  font-weight: bolder;
  padding-bottom: 10px;
}
</style>