var obj1 = { name: '上海', id: 1, pinyin: 'shanghai|sh' };
var obj2 = { name: '北京', id: 2, pinyin: 'beijing|bj' };
var obj3 = { name: '广州', id: 3, pinyin: 'guangzhou|gz' };
var obj4 = { name: '深圳', id: 4, pinyin: 'shenzhen|sz' };
var obj5 = { name: '南京', id: 5, pinyin: 'nanjing|nj' };
var obj6 = { name: '西安', id: 6, pinyin: 'xian|xa' };
var obj7 = { name: '成都', id: 7, pinyin: 'chengdu|cd' };

var app = new Vue({
    el: '#transfer',
    data: {
        listCity: [
            obj1, obj2, obj3, obj4, obj5, obj6, obj7
        ],  // 左边框遍历的数据
        cityName: [],  // 左边框勾选的数据
        cityNameMiddle: [],  // 右边框中遍历的数据
        cityNameTwo: [],  // 右边框勾选的数据
        // 设置两个全选按钮的状态
        flagLeft: false,
        flagRight: false,

        ipt: '',  // 左边搜索框输入的数据
        iptTwo: '',  // 右边搜索框输入的数据
        newListCity: [],  // 给搜索到的城市提供存放位置
        newListCityMiddle: [
            obj1, obj2, obj3, obj4, obj5, obj6, obj7
        ],  // 用于左边搜索功能使用的数组
        // newcityNameMiddle:[],
        // 右边搜框索使用的数组
        newSearchArr: [],
    },
    methods: {
        // 将数据从左边框拿到右边框
        butR() {
            for (var i = 0; i < this.cityName.length; i++) {
                this.cityNameMiddle.push(this.cityName[i]);
            };
            if (this.flagLeft == true) {
                this.listCity = [];
            };
            this.flagLeft = false;
            for (var i = 0; i < this.cityName.length; i++) {
                this.listClear(this.listCity, this.cityName, i);
                this.listClear(this.newListCityMiddle, this.cityName, i);
            };
            this.cityName = [];
            this.listSort(this.cityNameMiddle);
            this.newSearchArr = this.cityNameMiddle;
        },
        butL(){
            for (var i = 0; i < this.cityNameTwo.length; i++) {
                this.listCity.push(this.cityNameTwo[i]);
                this.newListCityMiddle.push(this.cityNameTwo[i])
            };
            if (this.flagLeft == true) {
                this.cityNameMiddle =[];
                this.cityName=[];
            };
            this.flagRight= false;
            for (var i = 0; i < this.cityNameTwo.length; i++) {
                this.listClear(this.cityNameMiddle, this.cityNameTwo, i);
                this.listClear(this.cityName, this.cityNameTwo, i);
                this.listClear(this.newSearchArr, this.cityNameTwo, i);
            };
            // 数组去重
            this.listCity= this.clearNewArray(this.listCity);
            this.newListCityMiddle = this.clearNewArray(this.newListCityMiddle);

            // 排序
            this.listSort(this.listCity);
            this.listSort(this.newListCityMiddle);

            // 清空cityNameTwo 数组 防止在次将数据添加到右边时复选框被勾选
            this.cityNameTwo=[];

        },
        searchLeft(){
            // 
            this.listCity = this.newListCityMiddle;
            this.newListCity = [];

            for (var i = 0; i < this.newListCityMiddle.length; i++) {
               var namPinyin = this.newListCityMiddle[i].pinyin.split('|');

               var reg = new RegExp('^'+this.ipt,'i');
               for(var k = 0;k<namPinyin.length;k++){
                   if(reg.test(namPinyin[k])){
                       this.newListCityMiddle.push(this.newListCityMiddle[i])
                       break;
                   }
               }
            };

            if(this.ipt !=''){
                this.listCity = this.newListCity
            }else{
                this.listCity = this.newListCityMiddle;
            }
        },


        // 数组根据id进行排序方法封装
        listSort(arr) {
            arr.sort((x, y) => {
                return x.id - y.id
            })
        },
        // 两个数组里相同相进行去重
        listClear(bigCity, somllCity, i) {
            if (bigCity.indexOf(somllCity[i]) != -1) {
                var flag2 = bigCity.indexOf(somllCity[i]);
                bigCity.splice(flag2, 2);
            }
        },

        // 数组去重、
        clearNewArray(arr) {
            var arr1 = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr1.indexOf(arr[i]) == -1) {
                    arr1.push(arr[i])
                }
            }
            return arr1;
        }
    },


})