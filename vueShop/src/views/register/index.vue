<template>
  <div id="register">
    <el-form :btnFont='btnFont' ></el-form>
  </div>
</template>

<script>
import ElForm from '../../components/form/el-form'
export default {
  data(){
    return{
      btnFont:'注册'
    }
  },
  mounted(){  
    // console.log(this.$children[0].$refs.sumbit)
  },
  methods:{
    
  },
  computed:{
    
  },
  components:{
    ElForm
  }
}
</script>

<style>

</style>