<template>
  <div >
    <button @click="upTable">打开嵌套表格的按钮</button>
    <transition name="fade">
      <div class="background" v-show="flag"></div>
    </transition>
    <transition name="slide">
      <div v-show="flag" class="alert_table">
        <div class="title">
          <p>收货地址</p>
          <span @click="cancel" class="exit">X</span>
        </div>
        <div class="dec_table">
          <table>
            <tr class="table_head">
              <th v-for="(item,index) in list" :key="index">{{item}}</th>
            </tr>
            <tr class="table_body">
              <td v-for="(item,index) in list2" :key="index">{{item}}</td>
            </tr>
            <tr class="table_body">
              <td v-for="(item,index) in list2" :key="index">{{item}}</td>
            </tr>
            <tr class="table_body">
              <td v-for="(item,index) in list2" :key="index">{{item}}</td>
            </tr>
            <tr class="table_body">
              <td v-for="(item,index) in list2" :key="index">{{item}}</td>
            </tr>
          </table>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props:['list3'],
  data() {
    return {
      flag: false,
      list: ["日期", "姓名", "地址"],
      list2: this.list3,
    };
  },

  methods: {
    upTable() {
      this.flag = true;
    },
    cancel() {
      this.flag = false;
    },
  },
};
</script>

<style scoped>
 .background{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
    }
    .alert_table{
        width: 680px;
        height: 350px;
        background-color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
    }
    .title{
        width: 680px;
        height: 50px;
        line-height: 50px;
        /* background-color: red; */
        padding: 0 30px;
        display: flex;
        justify-content: space-between;
    }
    .exit{
        position: absolute;
        top: 0px;
        right: 0px;
    }
    .title>span:hover{
        color: skyblue;
    }
    .dec_table{
        width: 680px;
        height: 280px;
        /* background-color: red; */
        margin-top: 20px;
        padding: 0 30px;
    }
    .table_head{
        width: 620px;
        display: flex;
        padding-bottom: 5px;
        border-bottom: 1px solid rgb(212, 243, 240);
    }
    .table_body:hover{
        background-color: aliceblue;
    }
    .table_head>th:nth-child(2){
        margin-left: 195px;
        margin-right: 150px;
    }
    .table_body{
        width: 620px;
        display: flex;
        justify-content: space-between;
        padding: 15px 0px;
        border-bottom: 1px solid rgb(212, 243, 240);
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    @keyframes slideIn{
        0%{
            transform: scale(0);
        }
        100%{
            transform: scale(1);
        }
    }

    @keyframes slideOut{
        0%{
            transform: scale(1);
        }
        100%{
            transform: scale(0);
        }
    }
    .slide-enter-active{
        animation: slideIn .5s;
    }
    .slide-leave-active{
        animation: slideOut .5s;
    }
</style>