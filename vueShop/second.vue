<template>
  <div id="app">
      <h2>{{msg}}second</h2>
      <button @click='on'>给父亲</button>
     
     <p>{{first}}second</p>
  </div>
</template>

<script>
export default {
    name:'second',
    props:['msg','first'],
    data:function(){
        return{
            txt:'我是子组件second中的内容'
        }
    },
    methods:{
        on(){
            // this.$emit('父级组件事件名称','传递内容被父组件中处理函数的形参接收')
            this.$emit('ontxt',this.txt)
        }
    },
    // created(){
    //     console.log(first,'))))))))')
    // }
}
</script>

<style>

</style>