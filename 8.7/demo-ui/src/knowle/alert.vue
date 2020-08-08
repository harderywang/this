<template>
  <div class="alert" v-if='open'>
    <!-- 实现一个alter小封装 

    -->

    <transition>
      <div class="alert-mark"></div>
    </transition>

    <transition>
      <div class="alert-contnet">
        <div class="alert-content-header">
          <slot name='title'></slot>
        </div>
        <div class="alert-content-contxt">
          <slot name='contxt'></slot>
        </div>
        <div class="aler-control">
          <slot name="sure"></slot>
          <slot name="concel"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props:['open'],
  data(){
    return{
    data2:'alert的data数据'
  }
  }
};
</script>

<style>
  .alert{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    margin: 0;
  }
  .alert-mark{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
  }
  .alert-contnet{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-100%);
    background-color: aliceblue;
    min-width: 350px;
    padding: 10px 20px ;
  }
  .alert-content-header{
    font-weight: 900;
    font-size: 16px;
    padding: 10px 0px;
  }
  .alert-content-contxt{
    font-weight: 700;
    font-size: 15px;
      padding: 0px 0px 10px 0px;
      color: rgb(119, 115, 115);
  }
  .aler-control{
   padding: 10px 0px;
   text-align: center;
   display: flex;
   justify-content: flex-end;
  }
</style>