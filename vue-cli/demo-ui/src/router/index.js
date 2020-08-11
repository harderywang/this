import Vue from 'vue'//导入vue
import VueRouter from 'vue-router' //引入vue-router
// 注意：开发规范；页面组件异步加载，其他组件同步架子啊
// 因为页面组件是由多个小组件构成；组件太多；同步容易阻塞。所以；使用异步加载
// ---> 路由懒加载 可以解决首屏卡顿问题


Vue.use(VueRouter)//在vue上面挂载vue-router插件


// 创建路由
let router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index/home'
        },
        {
            path: '/index',
            // 异步加载组件 路由懒加载
            component: () => import('../views/index'),
            children: [
                {
                    path: 'home',
                    component: () => import('../views/home')
                },
                {
                    path: 'find',
                    component: () => import('../views/find')
                },
                {
                    path: 'adress',
                    component: () => import('../views/adress')
                }, {
                    path: 'mine',
                    component: () => import('../views/mine')
                },
            ]
        },
        {
            path: '/register',
            // 异步加载组件 路由懒加载
            component: () => import('../views/register')
        },
    ]
})

// 暴露路由
export default router