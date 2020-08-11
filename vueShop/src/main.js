import Vue from 'vue'
import router from './router'
import App from './App.vue'

new Vue({
  el:'#app',
  router,
  // render方法实质就是生成一个template模板
  // 为什么使用render而不时使用template ? template渲染的是一个写死的模板
  // 为什么使用render而不时使用template ? template渲染的是一个写死的模板
  render:h=>h(App)
})