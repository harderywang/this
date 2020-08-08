
<template>
  <!--d 简写 -->
  <div class="app" >
    <h1 v-for="(item,index) in nam" :key="index">{{item.name}}</h1> 
  </div>
</template>

<script>
export default {
  name:'First',
  props:['nam'],
  created(){
    this.$emit('onfirst',this.message)
    console.log(this.nam)
  },
  data(){
    return{
      message:'我是first中的内容'
    }
  },
  
}
</script>

<style>

</style>