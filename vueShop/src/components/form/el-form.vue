<template>
  <div id="el-form">
    <form id="form">
      <div class="userName">
        <i class="el-icon-user"></i>
        <input type="text" placeholder="用户名" class="input" v-model="user.userName" name="userName" />
        <p ref="userName">只能包含数字、字母、下划线、汉字6-12位</p>
      </div>
      <div class="passWord">
        <i class="el-icon-edit"></i>
        <input
          type="password"
          placeholder="密码"
          class="input"
          v-model="user.passWord"
          name="password"
        />
        <p ref="passWord">只能包含数字、字母、下划线6-12位</p>
      </div>
      <div>
        <button class="sumbit" ref="sumbit" @click.prevent="submit">{{btnFont}}</button>
      </div>
    </form>
    <el-cover v-show="coverShow"></el-cover>
  </div>
</template>

<script>
import ElCover from "../cover/cover";
import {getUser,setUser} from '../../api/shopClassList';
import {mapActions} from 'vuex'
export default {
  props: ["btnFont"],
  data() {
    return {
      coverShow: false,
      user: {
        userName: "",
        passWord: "",
      },
    };
  },
  methods: {
    ...mapActions(['noticeShow']),
    submit() {
      if (this.btnFont === "注册") {
        var nameRes = /^\w{6,12}$/;
        var pwdRes = /^\w{6,12}$/;
        if (!nameRes.test(this.user.userName)) {
          this.$refs.userName.style.visibility = "visible";
        } else {
          this.$refs.userName.style.visibility = "hidden";
          if (!pwdRes.test(this.user.passWord)) {
            this.$refs.passWord.style.visibility = "visible";
          } else {
            this.$refs.passWord.style.visibility = "hidden";
            // 注册数据
            setUser(this.user.userName,this.user.passWord,(new Date()).getTime()).then((res)=>{
              // console.log(res)
              if(res.data.code===1){
                // console.log('注册成功')
                // 蒙层
                this.coverShow = true;
                let timer = setTimeout(() => {
                  this.coverShow = false;
                  this.$router.push({name:'login'})
                  clearTimeout(timer);
                }, 1000);
              }
              if(res.data.code===0){
                console.log('注册失败')
              }
            })
            
          }
        }
      }else if(this.btnFont=='登录'){
        getUser(this.user.userName,this.user.passWord).then(({data})=>{
          if(data.code===1){
            this.noticeShow(false)
            this.$route.push('/index/home')
            // console.log(data.code);
          }
          return
        })
      }
    },
  },

  components: {
    ElCover,
  },
};
</script>

<style>
#form {
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
}
.passWord,
.userName {
  position: relative;
}
.input {
  width: 400px;
  height: 40px;
  outline: none;
  border: 1px solid #ccc;
  padding: 0 15px 0 30px;
  border-radius: 5px;
}
.el-icon-edit,
.el-icon-user {
  position: absolute;
  top: 11px;
  left: 8px;
}
.passWord > p,
.userName > p {
  color: red;
  font-size: 12px;
  margin: 10px 0;
  visibility: hidden;
}
.sumbit {
  outline: none;
  width: 100%;
  height: 40px;
  background-color: #67c23a;
  border: 0;
  border-radius: 5px;
}
</style>