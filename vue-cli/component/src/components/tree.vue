<template>
  <div class="app1">
        <div v-for='(item,index) in listData'  :key='index'>
            <ul>
                <li @click.stop='oneLable(item,$event)'>
                    <i class="iconfont icon-yousanjiaoxing" :class="{rotate:item.show}"
                        :data-one=[item.id]></i><span>{{item.lable}}</span>
                    <ul v-show=item.show>
                        <li v-for='(key,value) in item.children' @click.stop='twoLable(key,$event)' :key='value'>
                            <i class="iconfont icon-yousanjiaoxing" :class="{rotate:key.twoShow}"
                                :data-two=[key.id]></i><span>{{key.lable}}</span>
                            <ul v-show=key.twoShow>
                                <li v-for='(x,y) in key.children' :data-three=[x.id] :key='y'>
                                    <span>{{x.lable}}</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:['listData1'],
    data(){
        return{
                listData:this.listData1,
            }
    }, 
            methods: {
                oneLable: function (item, e) {
                    if (item.id == e.target.getAttribute('data-one')) {
                        item.show = !item.show
                    }
                },
                twoLable(key, e) {
                    if (key.id == e.target.getAttribute('data-two')) {
                        key.twoShow = !key.twoShow
                        
                    }
                }
            }
      
}
</script>
 
<style scoped>
.app1 {
    width: 870px;
    margin: 0 auto;
    margin-top: 100px;
    border: 1px solid #EBEBEB;
}
ul {
    list-style-type: none;
}
span {
    font-size: 14px;
    cursor: pointer;
    color: #606266;
}
li >.iconfont {
    font-size: 3px;
    color: #C0C4CC;
    margin-right: 5px;
}

ul > li:hover{
    background-color: #F5F7FA;
}
.rotate:before {
    display: inline-block;
    transform: rotate(90deg);
    transition: all 0.5s;
}
</style>