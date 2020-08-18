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
            children:[
                {path:'home',name:'home',component:()=>import('../views/home')},
                {path:'login',name:'login',component:()=>import('../views/login')},
                {path:'register',name:'register',component:()=>import('../views/register')},
                {path:'shopCat',name:'shopCat',component:()=>import('../views/shopCat')},
                {path:'exitLogin',name:'exitLogin',component:()=>import('../views/exitLogin')},
                {path:'detail', name:'detail', component:()=>import('../views/detail')},
                {path:'',name:'home',redirect:'home'},
            ]
        },
    ],
})

export default router
