<template>
  <div id="backTop" ref="backTop">
    <div @click="backTop">返回顶部</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let timer = setInterval(() => {
        //   console.log(document.documentElement.scrollTop)
        if (document.documentElement.scrollTop >= 700) {
            this.$refs.backTop.style.display='block'
        }else{
            // console.log(this.$refs)
             this.$refs.backTop.style.display='none'
        }
        clearInterval(timer)
      }, 1000);
    },
    backTop() {
    // let height=  document.documentElement.scrollTop
    //  window.scroll({top:height,behavior:'smooth'});
     document.documentElement.scrollTop=0
    },
  },
};
</script>

<style>
#backTop {
  width: 50px;
  height: 50px;
  line-height: 25px;
  font-size: 20px;
  color: white;
  background: purple;
  text-align: center;
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: none;
}
/* @keyframes slidein{
    from{

    }
    to{
        
    }
} */
</style>