<template>
  <div>
    <h1>发现</h1>
    <h2>{{userInfo.userName}}</h2>
    <button @click="add">add</button>
    <span>{{count}}</span>
    <span>{{n}}</span>
    <button @click="reduce">reduce</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      n:0
    }
  },
  methods:{
    add(){
      this.$store.dispatch('noticeCount',++this.n)
    },
    reduce(){
        console.log(this.count)
      this.$store.dispatch('noticeCount',--this.n)
    }
  },
  computed:{
    userInfo:function(){
    
      return this.$store.getters.getUserInfo
    },
    count:function(){
      console.log(this.$store.getters.getCount)
      return this.$store.getters.getCount
    }
  }
}
</script>

<style>

</style>