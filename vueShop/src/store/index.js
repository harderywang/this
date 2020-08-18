import Vue from 'vue'
import Vuex from   'vuex'


Vue.use(Vuex)
let store =new Vuex.Store({
    state:{
        // 分类导航数据
        classList:'',
        // home中的分类和首页的显示隐藏
        homeShow:{
            listShow:true,
            classListShow:false
        },
        // 登录与购物车的展示与隐藏
       show:true
    },
    mutations:{
        setClassList(state, data) {
            state.classList = data
        },
        setHomeShow(state,data){
            state.homeShow=data
        },
        setShow(state,data){
            state.user=data
        },
    },
    actions:{
        noticeClassList({ commit }, data) {
            commit('setClassList', data)
        },
        noticeHomeShow({commit},data){
            commit('setHomeShow',data)
        },
        noticeShow({commit},data){
            commit('setShow',data)
        },
    },
    getters:{
        getClassList(state) {
            return state.classList
        },
        getHomeShow(state){
            return state.homeShow
        },
        getShow(state){
            return state.user
        },
    }
})
export default store