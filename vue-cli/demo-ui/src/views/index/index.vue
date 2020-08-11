<template>
  <div class="nav">
    <router-view></router-view>
    <nav>
      <router-link   to='/index/home'>首页</router-link>
      <router-link   to='/index/find'>发现</router-link>
      <router-link   to='/index/adress'>通信地址</router-link>
      <router-link   to='/index/mine'>个人中心</router-link>

    </nav>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .nav nav {
    width: 100%;
    /* height: 100%; */
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    background: #cccccc;
    position: fixed;
    bottom: 0px;
  }


</style>