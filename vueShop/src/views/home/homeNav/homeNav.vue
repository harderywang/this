<template>
  <div id="homeNav">
      <div v-for="(item,index) in list" :key="index"  @click='listHandle($event)'>{{item}}</div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
// import fromVue from '../../../components/from/from.vue'
export default {
  data(){
    return{
      list:['咖啡','饮食','正餐','男装','女装','眼镜','鞋靴']
    }
  },
  methods:{
    ...mapActions(['noticeClassList','noticeHomeShow']),
    listHandle(e){
      // console.log(e,'-------')
      this.noticeClassList(e.target.innerText)
      e.target.style.background='purple'
      e.target.style.color='white'
      this.noticeHomeShow({
        listShow:false,
        classListShow:true
      })
    }
  },
}
</script>

<style>
#homeNav{
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
#homeNav>div{
  width: 100px;
  height: 30px;
  border-radius: 20px;
  text-align: center;
  margin: 10px;
  /* background: brown; */
}
#homeNav>div:hover{
  background: purple;
  color: white;
}
</style>