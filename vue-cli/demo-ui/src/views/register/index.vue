<template>
  <div class="register">
    <!-- <h1>注册</h1>
    <router-link to='/index/mine'>个人中心</router-link> -->

      <form action>
      <h1>注册页面</h1>
      <div class="form-control">
        <label for>用户名：</label>
        <input type="text" v-model="userName" />
      </div>
      <div class="form-control">
        <label for>手机号：</label>
        <input type="text"  v-model='iphone' />
      </div>
      <div class="form-control">
        <label for>密&#X3000;码：</label>
        <input type="password" v-model="password" />
      </div>
      <div class="form-control">
        <button @click.prevent='setRegister'>注册</button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:'register',
    data(){
      return{    
            userName:'',
            password:'',
            iphone:'',
            token:'addd'
      }
    },
    methods:{
       ...mapActions([ "noticeToken"]),
      setRegister(){
        this.$router.push('/index/home');
        this.$store.dispatch('noticeUserInfo',{
           userName:this.userName,
            password:this.password,
            iphone:this.iphone,
        });
         this.noticeToken('adddd');
      },
      
      
    }
}
</script>

<style>
.register h1 {
  text-align: center;
}
.register form {
  width: 300px;
  padding: 20px 15px;
  margin: 0 auto;
  box-shadow: 5px 5px 5px #cccccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.register .form-control {
  width: 100%;
  height: 45px;
  text-align: center;
}
.register .form-control > button {
  appearance: none;
  outline: none;
  border: none;
  background: #e4743d;
  color: #e0d5cf;
  width: 80%;
  height: 30px;
  line-height: 30px;
  margin-left: 10%;
  border-radius: 50px;
}
</style>