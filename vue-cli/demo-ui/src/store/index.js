import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// vuex 存数据
let store = new Vuex.Store({
    // state存数据
    state:{
        userInfo:{
            userName:'',
            password:'',
            iphone:'',
        },
        count:0,
        token:'',
    },
    //key值为函数  修改state中的函数 state的一个key对应一个mutations的函数
    mutations:{
        setUserInfo(state,data){
            // 修改
            state.userInfo=data
        },
        setCount(state,data){
            state.count=data
        },
        // setToken({token},data){
        //     token=data
        // }
        setToken(state,data){
            state.token=data
        }
    },
    //通知mutations 修改state 也是函数
    actions:{
        noticeUserInfo(store,data){

            console.log(store)
            store.commit('setUserInfo',data)
            // 通知mutations  store.commit('mutations中的函数',要修改的data数据)
        },
        noticeCount(store,data){
            store.commit('setCount',data)
        },
        noticeToken({commit},data){
            commit('setToken',data)
        }
    },
    //获取 state 也是函数 每个函数都有return返回值
    getters:{
        // 参数state中所有的数据
        getUserInfo(state){
            return  state.userInfo
        },
        getCount(state){
            return state.count
        },
        getToken(state){
            return state.token
        }
    }//
})

// bug 不要v-model 直接绑定vuex 中的数据？？
export default store
// Vuex特点是什么? 响应式数据 单项数据流 