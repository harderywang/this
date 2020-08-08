<template>
  <div id="app">
    <!-- 3使用colorselect.vue组件 -->
      <colorSelect :bg1='bg1'/>  
      <Tree :listData1='listData' />  
      <Table :list3='list2'/>
      <ShuttleBox :listshutt=' listone'/>
      <PopUp/>
      <TreesRecursion :treesList='treesList'/>
  </div>
</template>

<script>
var list = [
                    {
                        title: 'region1',
                        flag: false,
                        flag1: true,
                        selected: false,
                        children: [
                            {
                                title: 'zone1',
                                flag: false,
                                flag1: true,
                                selected: false,
                                children: [
                                    {
                                        title: 'zone3',
                                        flag: false,
                                        flag1: true,
                                        selected: false,
                                        children: [
                                            {
                                                title: 'zone5',
                                                flag: false,
                                                flag1: true,
                                                selected: false,
                                            },
                                            {
                                                title: 'zone6',
                                                flag: false,
                                                flag1: true,
                                                selected: false,
                                            }
                                        ]
                                    },
                                    {
                                        title: 'zone4',
                                        flag: false,
                                        flag1: true,
                                        selected: false,
                                    }
                                ]
                            },

                            {
                                title: 'zone2',
                                flag: false,
                                flag1: true,
                                selected: false,
                                children: [
                                    {
                                        title: 'zone7',
                                        flag: false,
                                        flag1: true,
                                        selected: false,
                                        children: [
                                            {
                                                title: 'zone9',
                                                flag: false,
                                                flag1: true,
                                                selected: false,
                                            },
                                            {
                                                title: 'zone10',
                                                flag: false,
                                                flag1: true,
                                                selected: false,
                                            }
                                        ]
                                    },
                                    {
                                        title: 'zone8',
                                        flag: false,
                                        flag1: true,
                                        selected: false,
                                        children: [
                                            {
                                                title: 'zone11',
                                                flag: false,
                                                flag1: true,
                                                selected: false,
                                            },
                                            {
                                                title: 'zone12',
                                                flag: false,
                                                flag1: true,
                                                selected: false,
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'region2',
                        flag: false,
                        flag1: true,
                        selected: false,

                    }
                ];
var listshuttle =[
            {
                listName: '备选项 1',
                state: false,
                value: 0
            },
            {
                listName: '备选项 2',
                state: false,
                value: 1
            },
            {
                listName: '备选项 3',
                state: false,
                value: 2
            },
            {
                listName: '备选项 4',
                state: true,
                value: 3
            },
            {
                listName: '备选项 5',
                state: false,
                value: 4
            },
            {
                listName: '备选项 6',
                state: false,
                value: 5
            },
            {
                listName: '备选项 7',
                state: false,
                value: 6
            },
            {
                listName: '备选项 8',
                state: true,
                value: 7
            },
            {
                listName: '备选项 9',
                state: false,
                value: 8
            },
            {
                listName: '备选项 10',
                state: false,
                value: 9
            },
            {
                listName: '备选项 11',
                state: false,
                value: 10
            },
            {
                listName: '备选项 12',
                state: true,
                value: 11
            },
            {
                listName: '备选项 13',
                state: false,
                value: 12
            },
            {
                listName: '备选项 14',
                state: false,
                value: 13
            },
            {
                listName: '备选项 15',
                state: false,
                value: 14
            }
        ];
// 1导入子组件
import colorSelect from './components/colorSelect';
import Tree from './components/tree';
import Table from './components/table';
import  ShuttleBox from './components/shuttleBox';
import PopUp from './components/popUp';
import TreesRecursion from './components/treesRecursion';

export default {
  data(){
    return{
       bg1:'hsl(0,100%,0%)',
       treesList:list,
       listData: [
                    { lable: '一级 1', id: '1', show: false, children: [{ lable: '二级 1-1', twoShow: false, id: '1-1', children: [{ lable: '三级 1-1-1' }] }] },
                    { lable: '一级 2', id: '2', show: false, children: [{ lable: '二级 2-1', twoShow: false, id: '2-1', children: [{ lable: '三级 2-1-1' }] }, { lable: '二级 2-2', id: "2-2", children: [{ lable: '三级 2-2-1' }] }] },
                    { lable: '一级 3', id: '3', show: false, children: [{ lable: '二级 3-1', twoShow: false, id: '3-1', children: [{ lable: '三级 3-1-1' }] }, { lable: '三级 3-2', id: "3-2", children: [{ lable: '三级 3-2-1' }] }] },
                ],
      list2:["2016-08-01", "王小虎", "上海市普陀区金沙江路1518弄"],
      listone:listshuttle,
    }
   
  },
   
 
  // 2注册子组件
  components:{
    colorSelect,
    Tree,
    Table,
    ShuttleBox,
    PopUp,
    TreesRecursion
  }
}
</script>

<style scoped>
  #app{
    display: flex;
    flex-direction: column;
  }
</style>
