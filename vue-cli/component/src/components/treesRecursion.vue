<template>
   <div id="app">
        <form action="">
                <ul class="root">
                    <!-- 遍历获取第一级列表 -->
                    <li v-for='(item1,index) in list' :key='index' @click.stop="expendHandle(item1,item1.flag) ">
                        <span class="iconfont icon-right-fill" :class="{rotate:item1.flag}" v-show='item1.flag1'></span>
                        <span class="checkbox" :class="{active:item1.selected}" @click.stop="selectHandle(item1)">
                            <i class="iconfont icon-gou"></i>
                        </span>
                        <span>{{item1.title}}</span>
                        <ul v-if="item1.flag">
                            <!-- 遍历获取第二级列表 -->
                            <li v-for="(item2,index) in item1.children"  :key='index' @click.stop="expendHandle(item2)">
                                <span class="iconfont icon-right-fill" :class="{rotate:item2.flag}"
                                    v-show='item2.flag1'></span>
                                <span class="checkbox" :class="{active:item2.selected}"
                                    @click.stop="selectHandle(item1,item2)">
                                    <i class="iconfont icon-gou"></i>
                                </span>
                                <span>{{item2.title}}</span>
                                <ul v-if="item2.flag">
                                    <!-- 遍历获取第三层列表 -->
                                    <li v-for="(item3,index) in item2.children"  :key='index' @click.stop="expendHandle(item3)">
                                        <span class="iconfont icon-right-fill" :class="{rotate:item3.flag}"
                                            v-show='item3.flag1'></span>
                                        <span class="checkbox" :class="{active:item3.selected}"
                                            @click.stop="selectHandle(item1,item2,item3)">
                                            <i class="iconfont icon-gou"></i>
                                        </span>
                                        <span>{{item3.title}}</span>
                                        <ul v-if="item3.flag">
                                            <!-- 遍历获取第四层列表 -->
                                            <li v-for="(item4,index) in item3.children" :key='index' @click.stop="expendHandle(item4)">
                                                <span class="iconfont icon-right-fill" v-show='item4.flag1'></span>
                                                <span class="checkbox" :class="{active:item4.selected}"
                                                    @click.stop="selectHandle(item1,item2,item3,item4)">
                                                    <i class="iconfont icon-gou"></i>
                                                </span>
                                                <span>{{item4.title}}</span>
                                            </li>
                                        </ul>

                                    </li>
                                </ul>

                            </li>
                        </ul>

                    </li>
                </ul>
        </form>

    </div>
</template>

<script>
export default {
    props:['treesList'],
    data(){
        return{
              list:this.treesList,
        }
    },
   
     methods: {
                // 1.点击li,控制列表展开/三角形旋转/没有子列表的列表项三角形图标消失
                expendHandle(x) {
                    if (!x.children) {
                        // 没有子选项时，让三角符号消失
                        x.flag1 = !x.flag1;
                        // console.log(x, x.flag1);
                    }
                    x.flag = !x.flag;
                },

                // (2-1)传入参数 childNow：当前item对象的children  item：当前的对象
                selectedAll(childNow, item) {
                    // 判断是否有子选项，有的话继续，没有直接返回
                    if (childNow) {
                        // 遍历当前对象的children
                        for (var i = 0; i < childNow.length; i++) {
                            // console.log(child[i]);
                            childNow[i].selected = item.selected;
                            // 递归调用函数  使所有的子选项都被选中
                            this.selectedAll(childNow[i].children, childNow[i]);
                        }
                    } else {
                        return;
                    }
                },
                // (2-2)遍历当前item的children的selected值，并返回结果
                isChildSelected(item) {
                    // console.log(item, item.children);
                    return item.children.every(function (itemChild) {
                        // 只有当所有的children的selected值都为true才会返回true 
                        return itemChild.selected;
                    })
                },
                // // (2-3)遍历items数组最后一个，即当前item，检查item的children的selected值
                // 用以判断当前选项的直接祖籍选项的状态
                parentAll(items) {
                    // 初始化item
                    var item;
                    // 先判断items数组的长度，确定当前item是否是最外层列表，如果length是0，说明item是最外层列表
                    if (!items.length) {
                        return;
                    } else {
                        // 数组长度不为0，继续拿出最后一项
                        item = items.pop();
                        // console.log(item);
                        // 当数组长度大于0时
                        if (items.length > 0) {
                            // 判断isChildSelected的返回值，true代表当前item中的所有子集的selected都是true
                            if (this.isChildSelected(item)) {
                                item.selected = this.isChildSelected(item);
                                // 递归调用parentAll继续判断上一层item的子集中selected的情况
                                this.parentAll(items);
                            } else {
                                // 执行这一步代表当前item的子集中selected值不全为true
                                // 不用继续判断，直接遍历items数组，将所有的item的selected值写成false
                                item.selected = this.isChildSelected(item);
                                items.forEach(function (x) {
                                    // console.log(x);
                                    x.selected = false;
                                });
                            }
                        }
                        // item的selected值等于判断它子集执行的结果
                        item.selected = this.isChildSelected(item);
                      
                    }
                    item.selected = this.isChildSelected(item);
                },
                // 2.选框的点击事件
                // 参数是一个数组
                selectHandle(...items) {
                    console.log(items);
                    // 取出数组中的最后一项
                    var item = items.pop();
                    console.log(item);
                    // 第一步：本身样式改变
                    item.selected = !item.selected;
                    // 第二步：控制当前点击项的所有子选项
                    // console.log(item.children);
                    this.selectedAll(item.children, item);
                    // console.log(this.isChildSelected(item));
                    // 第三步：控制当前选项的父选项
                    this.parentAll(items);
                }
            }
}
</script>

<style>
ul,li{
    list-style-type: none;
    font-size: 16px;
    line-height: 26px;
    color: #606266;

}

.region2{
    padding-left: 16px;
}
form{
    width: 80%;
    margin: 20px auto;
    border: 1px solid #eeeeee;
    border-radius: 4px;
}

.checkbox{
    display: inline-block;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    transition: border-color .25s linear;
    line-height: 10px;
    text-align: center;
    color: #fff;
}
.checkbox:hover{
    border-color: #409eff;

}
.checkbox .iconfont {
    font-family: "iconfont" !important;
    font-size: 12px;
    font-style: normal;
}
li>.icon-right-fill{
    font-family: "iconfont" !important;
    color: #c0c4cc;
    font-size: 12px;
    
}


/* 选中添加效果 */
.active{
    border-color: #409eff;
    background-color: #409eff;
}
/* transition */
/* 旋转 */
.rotate{
    display: inline-block;
    transform: rotate(90deg);
    transition: all 0.5s;
    animation: rotates 0.5s linear both;
}




</style>