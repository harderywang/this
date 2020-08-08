<template>
  <div>
      <div>{{list}}</div>
  </div>
</template>

<script>
export default {
    props:['list'],
    methods:{
    },
    mounted(){
        console.log(this.list)
    }
}
</script>

<style>

</style>