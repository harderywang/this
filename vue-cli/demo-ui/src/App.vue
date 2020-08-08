<template>

  <div id="app">
    <!-- 使用组件 -->
    <First :nam="list"  @onfirst='firstHandle' />
    <!--@ontxt='txtHandle   @onTxt 自定义事件 txtHandle 是onTxt的事件处理函数 
       txtHandle 是通过 this.$emit('onTxt') 触发的  -->
    <xiu :msg='msg' @ontxt='txtHandle' :first='firstTxt' />

    <p>{{txt}}</p>
    <div class="wang">{{firstTxt}}父亲</div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// 导入子组件模板
import First from '../first'
import xiu from '../second'

// 暴露模块
export default {
  name: 'App',
  data:function(){
    return {
    list:[{name:'王'},{name:'王2'},{name:'王3'}],
    msg:'秀儿',
    txt:'',
    firstTxt:'',
  }
  },
  methods:{
    txtHandle(data){
      this.txt=data
      console.log(data,)
    },
    firstHandle(data){
      this.firstTxt=data;
      console.log(this.firstTxt,'======')
    }
  },
  
  components: {//在app.vue中注册私有组件
    // HelloWorld,
    First,
    xiu
  }
}
</script>

<style lang="scss">


</style>
