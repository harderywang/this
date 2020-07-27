// var iframe = window.parent.document.querySelector('.iframe');
// var logo = window.parent.document.querySelector('.logo>a');
// console.log(logo)
// logo.onclick = function(){
//     iframe.style.height='100%'
// }

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
        // console.log(left, "======")
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
var data = JSON.parse(localStorage.getItem('shoplist'));
if(data = null){

}else{

}


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


// data 异步  开始没有 这个是因为存储到loackstr
// 此处错误 
data = JSON.parse(localStorage.getItem('shoplist'));
// 每次开始遍历起点
// 初始化三十条数据
var num = 0;//记录数据数量
var s = 0;//滚动条触底次数
for (num; num < 30; num++) {
    var goods = document.createElement('div');
    goods.className = 'goods';
    goods.setAttribute('value', `${data[num].Id}`)
    goods.innerHTML = `
         <div class="goods-img"><img src="${data[num].img_list_url}" alt=""></div>
         <div class="goods-title">${data[num].title}</div>
         <div class="price"><div>${data[num].price}</div><div>${data[num].mack}</div></div>
         `;
    $('.shopList').append(goods);
}

// 滚动触底后加载30条数据
$(window.parent).on('scroll', function () {
    var scrollT = $(window.parent.document).scrollTop();
    var scrollH = window.parent.document.documentElement.scrollHeight;
    var clientH = window.parent.document.documentElement.clientHeight;

    // console.log(clientH)
    // console.log(scrollT);
    // console.log(scrollH)
    if (scrollH - scrollT === clientH) {
        s++;
        // 给父窗口添加返回顶部
        // if (s === 1) {
        //     var returnTop = document.createElement('div');
        //     returnTop.className = 'return-top';
        //     returnTop.innerHTML = '返回<br>顶部'
        //     returnTop.style.display = 'block'
        //     $(window.parent.document.body).append(returnTop);
        //     // 点击返回滚动条
        //     window.parent.document.querySelector('.return-top').onclick = function () {
        //         var h = $(window.parent.document).scrollTop();
        //         window.parent.document.querySelector('.return-top').display='none'
        //         if (h > 2000) {
        //             $(window.parent.document).scrollTop(0)
        //         }
        //     }

            // // 返回顶部
            // $(window.parent).on('scroll', function () {
            //     // 监听滚动条高度
            //     if (scrollT < 2000) {
            //         console.log(document.querySelector('.return-top'))
            //         window.parent.document.querySelector('.return-top').display = 'block'
            //     }
            // })
        // }

        var n = 0;
        for (num; num < data.length; num++) {
            if (n <= 29) {
                var goods = document.createElement('div');
                goods.className = 'goods';
                goods.setAttribute('value', `${data[num].Id}`)
                goods.innerHTML = `
                 <div class="goods-img"><img src="${data[num].img_list_url}" alt=""></div>
                 <div class="goods-title">${data[num].title}</div>
                 <div class="price"><div>${data[num].price}</div><div>${data[num].mack}</div></div>
                 `;
                $('.shopList').append(goods);
                n++;
            } else {
                // 获取iframe高度
                var homeH = $(document).height();
                // 获取的iframe的高度
                $(window.parent.document.querySelector('iframe')).height(homeH);
                return
            }

        }

    }
    // 数据加载出来后设置点击图片跳转页面
    $('.shopList').on('click', 'div', function (e) {
        sessionStorage.setItem('value', this.getAttribute('value'));
        location.href = '../html/放大镜.html';
    })


})

var x;
// 移入变色
$('.header-list').on('mouseover', 'li', function (e) {

    $(this).css({
        background: 'purple',
        color: 'white'
    })
})
// 移出恢复颜色但点击的不恢复
$('.header-list').on('mouseout', 'li', function (e) {
    if (!($(this).index() === x)) {
        $(this).css({
            background: 'white',
            color: '#666'
        })
    }

})



//点击 变色 接收跳转
var data = localStorage.getItem('shoplist');
data = JSON.parse(data)
var shopClass = document.createElement('div');
shopClass.className = 'shopClass';

$('.header-list').on('click', 'li', function (e) {
    if (!($(this).index() === x)) {
        $('.header-list>li:eq(' + x + ')').css({
            background: 'white',
            color: '#666'
        })
    }
    x = $(this).index();
    $(this).css({
        background: 'purple',
        color: 'white'
    })
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

    var fixedItem = document.createElement('div');
    fixedItem.className='fixed-item';
    // 创建几个shopClass-item 存ele.type_two
    for (var key in obj) {
        var item = document.createElement('div');
            item.className='item';
            item.innerHTML=`${key}`
        fixedItem.append(item);
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
                for (var j = 0; j < $('.type_two').length; j++) {
                    if ($('.type_two')[j].innerText === key) {
                        $('.type_two')[j].nextElementSibling.append(goods)
                    }
                }
            }
        })
    }
    $('.main').append(fixedItem)
    var node = '<div class="scroll"></div>';
    $('.main').append(node);
    var h = window.parent.document.querySelector('.iframe');
    console.log(h)
    $(h).css('height',$('.scroll').offset().top+'px')
})



