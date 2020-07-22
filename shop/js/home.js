var wrap = document.querySelector('.wrap');
var ad = document.querySelector('.ad');
var adItem = document.querySelectorAll('.ad-item');
var right = document.querySelector('.right');
var lt = document.querySelector('.left');

var left = 0;
var timer = setInterval(function () {
    left -= 12;
    // console.log(left)
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
    method:'get',
    url:'http://vebcoder.cn:9527/api/goodList',
    dataType:'json',
    success:function(data){
        data=JSON.stringify(data);
        localStorage.setItem('shoplist',data)
    },
    error:function(err){
        console.log('服务器错误')
    }
});


// console.log(typeof)
var shopList = document.querySelector('.shopList');
    data =JSON.parse(localStorage.getItem('shoplist'));
    console.log(data)
var str = '';
    data.forEach(function(ele,index){
        str+=`
            
            <div class="goods">
                <div class="goods-img"><img src="${ele.img_list_url}" alt=""></div>
                <div class="goods-title">${ele.title}</div>
                <div class="price"><div>${ele.price}</div><div>${ele.mack}</div></div>
            </div>
        
        `
    })
    shopList.innerHTML=str;