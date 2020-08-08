import Vue from 'vue'
// 引入VueRouter类
import VueRouter from 'vue-router'

// Router：VueRouter 路由对象，提供一系列方法操作路由例如this.$router.push等等；
// Route：路径对象，提供路径的一些参数，例如this.$route.query等等；
Vue.use(VueRouter)

// 创建路由规则
const routes =[
    {
        path:'http://vebcoder.cn:9527/api/goodList',
        name:'list',
        componet:List
    },

]
// 创建路由对象
const router = new VueRouter({
    routes
})
export default router