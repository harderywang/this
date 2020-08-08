<template>
    <div id="app">
        <!-- 按钮控制box窗口弹出 -->
        <button class="btn" @click="open">点击弹窗</button>

        <!-- 蒙层---淡入淡出 -->
        <transition name=fade>
            <div v-show="flag" class="mask"></div>
        </transition>

        <!-- box窗口 -->
        <transition @enter="enter" @leave="leave">
            <div v-show="flag" class="box">
                <div class="box-top">
                    <span>标题名称</span>
                    <div @click="close">
                        <i class="iconfont icon-chaguanbi"></i>
                    </div>
                </div>
                <div class="box-middle">
                    <p>内容</p>
                </div>
                <div @click="ensure" class="box-botton"><button>确定</button></div>
            </div>
        </transition>

        <!-- 点击确定或者关闭时---弹出的top窗口 -->
        <transition name="slide">
            <div class="top" v-if="flagTop">action: confirm</div>
        </transition>
    </div>

</template>

<script>
export default {
    data(){
        return{
             // flag控制box窗口的出现消失
                flag: false,
                // flagTop控制top窗口出现消失
                flagTop: false
        }
    },
 methods: {
                // 点击按钮，box弹窗出现
                open(){
                    this.flag = true
                },
                // 点击关闭,关闭box窗口，并弹出top窗口
                close(){
                    this.flag = !this.flag
                    this.flagTop = true
                    setTimeout(() => {
                        // var top = document.querySelector('.top');
                        this.flagTop = false

                    }, 3000)
                },
                // 点击确定,关闭box窗口,close功能
                ensure(){
                    this.flag = !this.flag
                    this.flagTop = true
                    setTimeout(() => {
                        // var top = document.querySelector('.top');
                        this.flagTop = false
                    }, 3000)
                },
                // box弹窗出现
                enter(e){
                    e.offsetHeight;
                    e.style = "top:310px";
                },
                // box弹窗消失
                leave(e){
                    e.style = "top:300px";
                },
            }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,
body {
    width: 100%;
    height: 100%;
}
.btn{
    width: 100px;
    height: 50px;
    color: #409eff;
    background: transparent;
    border: 1px solid #409eff;
    margin-top: 200px;
    margin-left: 400px;
}

.mask{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    /* display: none; */
    position: absolute;
    top: 0;

    
}

.box{
    position: absolute;
    left: 50%;
    top: 300px;
    transform: translate(-50%, -50%);
    width: 420px;
    height: 160px;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #ebeef5;
}
.box-top{
    display: flex;
    justify-content: space-between;
    padding: 15px 15px 10px;
}
.box-top span{
    font-size: 18px;
}
.box-middle {
    font-size: 14px;
    padding: 15px 10px;
}
.box-botton{
    padding: 5px 15px 0;
    text-align: right;
}
.box-botton button{

    width: 60px;
    height: 30px;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    border-radius: 3px;
}
.box-top div i {
    font-size: 28px;
}
.box-top div i:hover{
    color: #409eff;
}
/* 设置box窗口动画的时间 */
.box{
    transition: all 0.3s linear;
}
.top{
    width: 380px;
    height: 48px;
    background-color: #edf2fc;
    padding: 10px;
    line-height:28px;
    border-radius: 5px;
    position: fixed;
    left: 160px;

    top: 0px;
    
}
/* top窗口进入动画 */
@keyframes slideIn{
    0%{
        transform: translateY(0px);
    }
    20%{
        transform:translateY(20px);
    }
    100%{
        transform:translateY(20px)
    }

}
/* top窗口消失动画 */
@keyframes slideOut{
    0%{
        transform:translateY(20px);
    }
    100%{
        transform: translateY(-20px);
    }
}
/* top窗口进入与消失的时间 */
.slide-enter-active{
    animation: slideIn 3s;
}
.slide-leave-active{
    animation: slideOut 0.5s;
}
/* 蒙层的淡入淡出 */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}


</style>