<template>
  <div id="app">
    <list :list="listdata"></list>
  </div>
</template>

<script>
import List from "./components/list";
export default {
  data() {
    return {
      listdata:'',
    };
  },
  methods: {},
  created() {
    fetch("http://vebcoder.cn:9527/api/goodList")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.listdata=res
        return res;
      });
  },
  components: {
    List,
  },
};
</script>

<style>
</style>
