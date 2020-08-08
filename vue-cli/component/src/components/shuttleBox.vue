<template>
  <div id="app">
    <div class="wrapper">
      <div class="listOne">
        <div class="listTitle">
          <div>
            <input
              id="list-one"
              type="checkbox"
              v-model="key"
              @change="changeHandel()"
              :disabled="listOne.length - num(listOne) === 0"
            />
            <label for="list-one">列表&nbsp;1</label>
          </div>
          <div>
            <span>{{newArr.length}}</span>
            <span>/</span>
            <span>{{listOne.length}}</span>
          </div>
        </div>
        <div class="el-checkbox">
          <div
            v-for="(item,index) in listOne"
            :key="index"
            :class="{noDrop:item.state, colorHover:!item.state}"
          >
            <input
              :id="index"
              type="checkbox"
              :value="index"
              v-model="newArr"
              :disabled="item.state"
              @change="changeTodo()"
            />
            <label :for="index">{{item.listName}}</label>
          </div>
        </div>
      </div>
      <div class="btn">
        <div
          :class="{left:true, back:newArr1.length > 0, drop:newArr1.length <= 0}"
          @click="left()"
        >
          <i class="fa fa-angle-left"></i>
        </div>
        <div
          :class="{right:true, back:newArr.length > 0, drop:newArr.length <= 0}"
          @click="right()"
        >
          <i class="fa fa-angle-right"></i>
        </div>
      </div>
      <div class="listTwo">
        <div class="listTitle">
          <div>
            <input
              id="list-two"
              type="checkbox"
              v-model="key1"
              @change="changeHandel1()"
              :disabled="listTwo.length - num(listTwo) === 0"
            />
            <label for="list-two">列表&nbsp;2</label>
          </div>
          <div>
            <span>{{newArr1.length}}</span>
            <span>/</span>
            <span>{{listTwo.length}}</span>
          </div>
        </div>
        <div class="el-checkbox">
          <div
            v-for="(item, index) in listTwo"
            :key="index"
            :class="{noDrop:item.state, colorHover:!item.state}"
          >
            <input
              :id="index + 'Two'"
              type="checkbox"
              :value="index"
              v-model="newArr1"
              @change="changeTodo1()"
              :disabled="item.state"
            />
            <label :for="index + 'Two'">{{item.listName}}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
"use strict";
export default {
  props: ["listshutt"],
  data() {
    return {
      listOne: this.listshutt,
      listTwo: [], // 右边数据渲染
      newArr: [], // 列表一的v-model绑定数组
      newArr1: [], // 列表二的v-model绑定数组
      key: false, // 列表一的全选
      key1: false, // 列表二的全选
    };
  },
  methods: {
    right() {
      if (this.newArr.length != 0) {
        this.key = false;
        for (var i = 0; i < this.newArr.length; i++) {
          this.listTwo.push(this.listOne[this.newArr[i]]); //右侧列表为勾选的数据
        }
        // 以下作左侧删除  克隆一份是为了不让数组剪切的时候索引位变化
        var listOne_clone = JSON.parse(JSON.stringify(this.listOne));
        for (var j = 0; j < this.listTwo.length; j++) {
          for (var k = 0; k < listOne_clone.length; k++) {
            if (listOne_clone[k].value == this.listTwo[j].value) {
              listOne_clone.splice(k, 1);
            }
          }
        }
        this.listOne = JSON.parse(JSON.stringify(listOne_clone));
        this.newArr = [];
        // 数组排序
        for (var n = 0; n < this.listTwo.length; n++) {
          for (var t = n; t < this.listTwo.length; t++) {
            if (this.listTwo[n].value > this.listTwo[t].value) {
              var temp = this.listTwo[n];
              this.listTwo[n] = this.listTwo[t];
              this.listTwo[t] = temp;
            }
          }
        }
      }
    },
    left() {
      if (this.newArr1.length != 0) {
        this.key1 = false;
        for (var i = 0; i < this.newArr1.length; i++) {
          this.listOne.push(this.listTwo[this.newArr1[i]]); //右侧列表为勾选的数据
        }
        // 以下作左侧删除
        var listTwo_clone = JSON.parse(JSON.stringify(this.listTwo));
        for (var j = 0; j < this.listOne.length; j++) {
          for (var k = 0; k < listTwo_clone.length; k++) {
            if (listTwo_clone[k].value == this.listOne[j].value) {
              listTwo_clone.splice(k, 1);
            }
          }
        }
        this.listTwo = JSON.parse(JSON.stringify(listTwo_clone));
        this.newArr1 = [];
        // 数组排序
        for (var n = 0; n < this.listOne.length; n++) {
          for (var t = n; t < this.listOne.length; t++) {
            if (this.listOne[n].value > this.listOne[t].value) {
              var temp = this.listOne[n];
              this.listOne[n] = this.listOne[t];
              this.listOne[t] = temp;
            }
          }
        }
      }
    },
    changeTodo() {
      // 动态获取禁选项的长度
      let arr = [];
      for (var i in this.listOne) {
        if (this.listOne[i].state) {
          arr.push(this.listOne[i]);
        }
      }
      if (this.newArr.length < this.listOne.length - arr.length) {
        this.key = false;
      } else {
        this.key = true;
      }
    },
    changeTodo1() {
      // 动态获取禁选项的长度
      let arr1 = [];
      for (var i in this.listTwo) {
        if (this.listTwo[i].state) {
          arr1.push(this.listTwo[i]);
        }
      }
      if (this.newArr1.length < this.listTwo.length - arr1.length) {
        this.key1 = false;
      } else {
        this.key1 = true;
      }
    },
    changeHandel() {
      this.newArr = [];
      if (this.key) {
        for (let i = 0; i < this.listOne.length; i++) {
          if (!this.listOne[i].state) {
            this.listOne[i].index = i;
            this.newArr.push(this.listOne[i].index);
          }
        }
      } else {
        this.newArr = [];
      }
    },
    changeHandel1() {
      this.newArr1 = [];
      if (this.key1) {
        for (let i = 0; i < this.listTwo.length; i++) {
          if (!this.listTwo[i].state) {
            this.listTwo[i].index = i;
            this.newArr1.push(this.listTwo[i].index);
          }
        }
      } else {
        this.newArr1 = [];
      }
    },
    num(arr) {
      let count = 0;
      for (let i in arr) {
        if (arr[i].state) {
          count++;
        }
      }
      return count;
    },
  },
};
</script>

<style scoped>
/* @import "../assets/font_36b55gsu3vm/iconfont.css"; */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
input {
  outline: none;
}
.wrapper {
  width: 868px;
  height: 336px;
  padding: 24px;
  border: 1px solid #ebebeb;
  margin: 0 auto;
  display: flex;
  margin-top: 30px;
  user-select: none;
}
.listTitle {
  width: 198px;
  height: 40px;
  padding-left: 15px;
  border-bottom: 1px solid #ebeef5;
  display: flex;
  justify-content: space-between;
  background: #f5f7fa;
  line-height: 40px;
  border-radius: 5px 5px 0 0;
}
.listTitle > div:nth-child(2) {
  margin-right: 18px;
  font-size: 12px;
  display: flex;
  color: #909399;
}
.listTitle > div:nth-child(2) > span {
  display: block;
}
.listTitle > div:nth-child(1) {
  margin-left: 1px;
  color: #303133;
  position: relative;
}
.listTitle > div:nth-child(1) > label,
.listTitle > div:nth-child(1) > input[type="checkbox"] {
  cursor: pointer;
}
.btn {
  padding: 0 30px;
  width: 182px;
  height: 50px;
  display: flex;
  margin: auto 0;
}
.btn > div {
  width: 56px;
  height: 40px;
  background: #a0cfff;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
}
.right {
  margin-left: 10px;
}
.drop {
  cursor: no-drop;
}
.btn > div.back {
  background: #409eff;
  border-color: #409eff;
}
.btn > div.back:hover {
  background: #66b1ff;
  border-color: #66b1ff;
}
.el-checkbox {
  height: 246px;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid #ebeef5;
  border-top: none;
  font-size: 14px;
  color: #606266;
}
.el-checkbox > div {
  width: 150px;
  height: 30px;
  margin-right: 30px;
  padding-left: 15px;
  line-height: 30px;
}
.el-checkbox > div > label {
  cursor: pointer;
}
.noDrop {
  cursor: no-drop;
  color: #c4c4d6;
}
.noDrop > input[type="checkbox"] {
  background: #edf2fc;
  cursor: no-drop;
}
.colorHover {
  transition: all 0.2s;
  cursor: pointer;
}
.colorHover > span {
  transition: all 0.2s;
}
.colorHover > input[type="checkbox"]:hover {
  border: 1px solid #409eff;
  cursor: pointer;
}
.colorHover:hover {
  color: #409eff;
}
</style>