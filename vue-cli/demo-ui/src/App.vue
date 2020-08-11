<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body{
  /* 设置100%容易有bug  100%是有最大值 100%=100vh=视图窗口宽度 
    解决用 min-windth */
  width: 100%;
  height: 100%;
}
</style>