var wrap = document.querySelector('.wrap');
var ad = document.querySelector('.ad');
var adItem = document.querySelectorAll('.ad-item');
var right = document.querySelector('.right');
var lt = document.querySelector('.left');

var left = 0;
var timer = setInterval(function () {

    left -= 12;
    if (left <= -72) {
        left = 0;
        ad.style.marginLeft = left + 'rem';
        ad.style.transition = 'all 0s';
    } else {
        ad.style.marginRight = left + 'rem';
        ad.style.transition = 'all 1s';
    }

}, 1000)

var wrap = document.querySelector('.wrap');
wrap.onmouseover = function () {
    clearInterval(timer);
    right.style.display = 'block';
    lt.style.display = 'block';
    lt.style.right = 0.3 + 'rem';
    right.style.left = 0.3 + 'rem';

}
wrap.onmouseout = function () {
    lt.style.right = -0.5 + 'rem';
    right.style.left = -0.5 + 'rem';
    timer = setInterval(function () {
        console.log(left, "======")
        left -= 12;
        if (left <= -72) {
            left = 0;
            ad.style.marginLeft = left + 'rem';
            ad.style.transition = 'all 0s';
        } else {
            ad.style.marginLeft = left + 'rem';
            ad.style.transition = 'all 1s';
        }
    }, 1000);
}

right.onclick = function () {
    if (left <= -60) {
        left = 0;
        ad.style.transition = 'all 0s';
    } else {
        left -= 12;
        ad.style.transition = 'all 1s';
    }

    ad.style.marginLeft = left + 'rem';
}
lt.onclick = function () {
    if (left === 0) {
        left = -12;
        ad.style.transition = 'all 0s';
    } else {
        left += 12;
        ad.style.transition = 'all 1s';
    }

    ad.style.marginLeft = left + 'rem';
}


// 获取数据
var data;
$.ajax({
    method: 'get',

    url: 'http://vebcoder.cn:9527/api/goodList',
    dataType: 'json',
    success: function (data) {
        data = JSON.stringify(data);
        localStorage.setItem('shoplist', data)
    },
    error: function (err) {
        console.log('服务器错误')
    }
});

data = JSON.parse(localStorage.getItem('shoplist'));
// 每次开始遍历起点
var num=0;
$(window.parent).on('scroll',function(){
    for(num;num<data.length;num++){
        var n =0;
        if(n<=29){
            // console.log(window.parent.document.documentElement.scrollHeight)
            // console.log()
            var goods = document.createElement('div');
            goods.className='goods';
            goods.setAttribute('value',`${data[num].id}`)
            goods.innerHTML=`
             <div class="goods-img"><img src="${data[num].img_list_url}" alt=""></div>
             <div class="goods-title">${data[num].title}</div>
             <div class="price"><div>${data[num].price}</div><div>${data[num].mack}</div></div>
             `;
             $('.shopList').append(goods)
        }else{
            return
        }
       
    }
})


// var shopList = document.querySelector('.shopList');
// data = JSON.parse(localStorage.getItem('shoplist'));
// // console.log(data)
// var str = '';
// data.forEach(function (ele, index) {
//     str += `   
//             <div class="goods" value='${ele.id}'>
//                 <div class="goods-img"><img src="${ele.img_list_url}" alt=""></div>
//                 <div class="goods-title">${ele.title}</div>
//                 <div class="price"><div>${ele.price}</div><div>${ele.mack}</div></div>
//             </div>
        
//         `
// })
// shopList.innerHTML = str;


// 移动变色
var x = 0;
$('.header-list').on('mouseover', 'li', function (e) {
    $(`.header-list>li:eq(${x})`).css({
        color: '#666',
        background: 'white'
    })
    x = $(this).index();
    // console.log(!($(this).css('color') === 'white'))
    if (!($(this).css('color') === 'white')) {
        $(this).css({
            background: 'purple',
            color: 'white'
        })
    }
})
// 点击跳转
$('.header-list').on('click', 'li', function (e) {
    x = 0;
    $(this).css({
        background: 'purple',
        color: 'white'
    })
    console.log($(this).value)
})



// 接收跳转
var data = localStorage.getItem('shoplist');
data = JSON.parse(data)
var shopClass = document.createElement('div');
shopClass.className = 'shopClass';

$('.header-list').on('click', 'li', function (e) {
    // 删除main的所有兄弟元素
    console.log($('.header').nextAll().remove())
    $('.main').append(shopClass);
    // 接收点击的所有是这个的对象
    var arr = [];
    var obj = {};
    shopClass.innerHTML = '';
    console.log(shopClass)
    // 获取点击的数据 存到arr
    data.forEach(function (ele) {
        if (ele.type_one === e.originalEvent.target.innerText) {
            arr.push(ele);
        };
    })
    // 去重二级分类 将ele.type_two 存在对象中
    arr.forEach((ele) => {
        if (!obj[ele.type_two]) {
            obj[ele.type_two] = 1;
        } else {
            obj[ele.type_two] += 1;
        };
    })

    // 创建几个shopClass-item 存ele.type_two
    for (var key in obj) {
        var shopClassItem = document.createElement('div');
        shopClassItem.className = 'shopClass-item';
        shopClassItem.innerHTML = `
            <div class="shopClass-item">
                <div class="type_two">${key}</div>
                    <div class="shopList">
                    </div>
                </div>
            </div>
            `;
        shopClass.append(shopClassItem);
        arr.forEach((ele) => {
            console.log(key);
            console.log(ele.type_two ===key,'sdfsdf')
            if (key === ele.type_two) {
                var goods = document.createElement('div');
                goods.className = 'goods';
                goods.innerHTML = `
                    <div class="goods-img"><img src="${ele.img_list_url}" alt=""></div>
                        <div class="goods-title">${ele.title}</div>
                        <div class="price">
                            <div>${ele.price}</div>
                            <div>${ele.mack}</div>
                        </div>
                    `;
                    for(var j = 0;j<$('.type_two').length;j++){
                        if ($('.type_two')[j].innerText === key) {
                        $('.type_two')[j].nextElementSibling.append(goods)
                    }}
            }
        })
        console.log(arr)
    }
})



