<template>
  <div id="app">
    <list :list='list'> </list>
  </div>
</template>

<script>
import List from  './components/list'
export default {
  data() {
    return {list:fetch("http://vebcoder.cn:9527/api/goodList")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res)
        // console.log(JSON.stringify(res))
        res=JSON.stringify(res);
        return res
      })}
  },
  methods: {},
  mounted(){console.log(this.list)},
  components: {
    List,
  },
};
</script>

<style>
</style>
