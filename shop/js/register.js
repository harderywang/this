
var iframe = window.parent.document.querySelector('.iframe');
var register = window.parent.document.querySelector('.register>a');
console.log(register)
register.onclick = function(){
    console.log(iframe)
    iframe.style.height='4.5rem'
}

var user = document.querySelector('.user');
var password = document.querySelector(".password");
var userP = document.querySelector('.user-div>p');
var passP = document.querySelector('.pass-div>p')
var loginBtn = document.querySelector('.login-btn');

// 聚焦用户名
user.onblur = function (e) {
    e.preventDefault();
    var reg1 = /^[0-9a-zA-Z_]{6,12}$/g;
    if (!reg1.test(user.value)) {
        userP.style.display = 'block';
    } else {
        userP.style.display = 'none';

    }
}


password.onblur = function (e) {
    e.preventDefault();
    if (userP.style.display === 'none') {
        var reg = /^[0-9a-zA-Z_]{6,12}$/g;
        if (!reg.test(password.value)) {
            passP.style.display = 'block';
        } else {
            passP.style.display = 'none';
        }
    }

}
// 存在跨域需要启动服务
var doc = window.parent;
var suc = doc.document.querySelector('.success');
var zero = doc.document.querySelector('.zero');
var logo = doc.document.querySelector('.logo');
var cover = doc.document.querySelector('.cover');

// console.log(suc)


loginBtn.onclick = function (e) {
    e.preventDefault();
    var reg = /^[0-9a-zA-Z_]{6,12}$/g;
    var reg1 = /^[0-9a-zA-Z_]{6,12}$/g;
    if (reg.test(password.value) && reg1.test(user.value)) {
        e.preventDefault();
        var obj = {
            'userName': user.value,
            'password': password.value
        }
        // for(var key in obj){
        //     localStorage.setItem(key,obj[key])
        // }
        $.ajax({
            url: 'http://vebcoder.cn:9527/api/register',
            method: 'get',
            data: obj,
            dataType: 'json',
            success: function (data) {
                if (data.code === 1) {
                    suc.style.display = 'block';
                    cover.style.display = 'block';
                    var timerOut = setTimeout(function () { 
                        suc.style.display = 'none';
                        logo.click();
                    }, 2000);
                    coverFun();

                }
                if (data.code === 0) {
                    zero.style.display = 'block';
                    var timerOut = setTimeout(function () {
                        zero.style.display = 'none';
                    }, 2000)
                }
            },
            error: function (err) {
                alert('错误')
            }
        })
    }

}