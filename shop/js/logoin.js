var user = document.querySelector('.user');
var password = document.querySelector(".password");
var userP = document.querySelector('.user-div>p');
var passP = document.querySelector('.pass-div>p')
var loginBtn = document.querySelector('.login-btn');


user.onblur = function (e) {
    e.preventDefault();
    var reg1 = /^[0-9a-zA-Z_]{6,12}$/;
    if (!reg1.test(user.value)) {
        userP.style.display = 'block';
    } else {
        userP.style.display = 'none';
    }
}



password.onblur = function (e) {
    e.preventDefault();
    var reg = /^[0-9a-zA-Z_]{6,12}$/;
    if (!reg.test(password.value)) {
        passP.style.display = 'block';
    } else {
        passP.style.display = 'none';
    }
}

loginBtn.onclick = function (e) {
    e.preventDefault();
    var name =localStorage.getItem('uName');
    var pw = localStorage.getItem('uPass');
    console.log(user.value ===name)
    if(!(user.value ===name)){
        alert('用户名不正确')
    }
    if(!(password.value ===pw)){
        alert('密码不正确')
    }
    if((user.value ===name)&&(password.value ===pw)){
        location.href = '../html/register.html'
        // location.href = './d.html'
    }

}