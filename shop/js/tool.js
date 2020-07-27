


// 存在跨域需要启动服务
var doc = window.parent;
var suc = doc.document.querySelector('.success');
var zero = doc.document.querySelector('.zero');
var logo = doc.document.querySelector('.logo');
var register = doc.document.querySelector('.register');
var shopCart = doc.document.querySelector('.shopCart');
var exit = doc.document.querySelector('.exit');


// 隐藏遮盖
function coverFun(){
    var cover = doc.document.querySelector('.cover');
    var timerOut = setTimeout(function () {
        cover.style.display = 'none';
    }, 2000)
}
