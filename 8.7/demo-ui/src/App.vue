<template>
  <div id="app">
    <btn-slot>
      <template v-slot:header>
        <div>头</div>
      </template>
      <template v-slot:default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>
      <template v-slot:footer>
        <div>脚</div>
      </template>
      <template v-slot:wang>
        <p>我笑了</p>
      </template>
    </btn-slot>

    <!-- 指定插入某一个 -->

    <!-- 使用alert -->
    <y-alert :open="true" ref="wang">
      <template v-slot:title>标题内容</template>
      <!-- 简写 -->
      <template #contxt>主体内容</template>
      <template #sure>
        <y-button ref="btn">确定</y-button>
      </template>
      <template #concel>
        <y-button>取消</y-button>
      </template>
    </y-alert>
    <y-button>SDK</y-button>
   
  </div>
</template>

<script>

import BtnSlot from "./components/btnSlot";
import YAlert from "./knowle/alert";
import YButton from "./components/button";
export default {
  data: function () {
    return {
      data1: "data",
    };
  },
  components: {
    BtnSlot,
    YAlert,
    YButton,
   
  },
  created() {
    // 在created获取不到
    // console.log(this.$refs.wang);
  },
  mounted() {
    //获取当前组件对象
    // console.log(this.$refs.wang);
    // this.$refs.wang.$el 获取组件的root元素
    // console.log(this.$refs.wang.$el);
    // console.log(this.$refs.btn.$el);

    // this.$children获取当前组件的子组件集合（没有孙子） 访问子组件的内容
    // console.log(this.$children)
    // this.$parent获取当前组件父组件  （没有祖父）
    // console.log(this.$parent)

    console.log(this.$data); //获取当前组件的data数据
    console.log(this.$children[2].$el);
  },
};
</script>

<style>
</style>
