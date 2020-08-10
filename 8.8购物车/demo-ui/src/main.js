// 项目入口文件
import Vue from 'vue'//声明一个Vue变量导入node_module下的vue包


import App from './App.vue'//导入.vue文件
// 导入路由
// import router from './router'

// 数组为开发环境
Vue.config.productionTip = false



// 实例化vue对象 整个项目 一般情况下只有vue实例
new Vue({
  // vue实例中注入路由
  // router,
  render: h => h(App),//渲染 app.vue组件
}).$mount('#app')//同 el
