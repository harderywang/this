<template>
  <div id="login">
    <el-form :btnFont='btnFont'></el-form>
  </div>
</template>

<script>
import ElForm from '../../components/form/el-form'
export default {
  data(){
    return{
      btnFont:'登录'
    }
  },
  components:{
    ElForm
}
}
</script>

<style>

</style>