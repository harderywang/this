<template>
  <div>
    <h1>个人中心</h1>

    <div v-if='token'>登录成功</div>
    <div v-else>您好没有登录</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return {
    }
  },
  created(){
  //  this.token=this.$store.getters.getUserInfo.token;
  //   console.log(this.$store.getters.getUserInfo.token)
  

  },
  computed:{
    ...mapGetters({token:'getToken'})
  }
}
</script>

<style>

</style>