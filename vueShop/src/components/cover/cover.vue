<template>
  <div id="cover">
    <div class="cover-img">
     <img src="../../assets/loading.jpg" alt="">
    </div>
     
  </div>
</template>

<script>
export default {

}
</script>

<style>
#cover{
    width: 100vw;
    height: 100vh;
    background: #eeeeee;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 999;
}
#cover>.cover-img{
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
#cover>.cover-img>img{
  width:100%;
  height: 100%;
}
</style>