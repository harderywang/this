import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/font_aodytdkymah/iconfont.css'
import './assets/font-icon字体图标库/css/font-awesome.min.css';
import './assets/font_cyl24kt6068/iconfont.css';
import  './assets/font_36b55gsu3vm/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
