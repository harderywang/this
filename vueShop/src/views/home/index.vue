<template>
  <div id="home">
    <home-nav ></home-nav>
    <!-- 有轮播图 -->
    <home-content v-show="homeShow.listShow"></home-content>
<!-- 分类 -->
    <home-list v-show="homeShow.classListShow"></home-list>
    <back-top></back-top>
  </div>
</template>

<script>
import HomeNav from './homeNav/homeNav';
import HomeList from  './homeList/homeList'
import HomeContent from './content/content'
import BackTop from '../../components/backTop/backTop'
import {mapGetters}from 'vuex'
export default {
  created(){
    console.log(this.homeShow)
  },
  computed:{
    ...mapGetters({
      homeShow:'getHomeShow'
    })
  },
  components:{
    HomeNav,
    HomeList,
    HomeContent,
     BackTop
  }
}
</script>

<style>
#home{
  padding: 0 10%;
  box-sizing: border-box;
}
</style>