<template>
  <div id="topSearchBox">
    <input class="searchIpt input" type="text" name id placeholder="请输入想要输入的商品" />
    <button class="searchBtn button">
      <span class="iconfont icon-sousuo"></span>搜索
      <span></span>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style>
#topSearchBox {
  display: flex;
  position: absolute;
  right: 100px;
  top: 45px;
}
#topSearchBox > .searchIpt {
    padding-left: 10px;
  border: 1px solid #dcdfe6;
  color: #606266;
  height: 40px;
  line-height: 40px;
  width: 300px;
  border-radius: 5px 0 0 5px;
}
#topSearchBox > .searchBtn {
  border: 1px solid #dcdfe6;
  color: #606266;
  border-left: none;
  height: 40px;
  width: 70px;
  position: relative;
  border-radius: 0 5px 5px 0;
}
#topSearchBox > .searchBtn > .icon-sousuo {
  position: absolute;
  top: 12px;
  left: 3px;
}
</style>
