import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


let router = new VueRouter({
    // routes 是所有router的集合
    routes:[
        {
            path:'/',
            redirect:'/index',
        },
        {
            path:'/index',
            name:'index',
            component:()=>import('../views/index'),
        },
    
    ],
})

export default router
