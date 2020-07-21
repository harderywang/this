var user = document.querySelector('.user');
var password = document.querySelector(".password");
var userP = document.querySelector('.user-div>p');
var passP = document.querySelector('.pass-div>p')
var loginBtn = document.querySelector('.login-btn');


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
    var reg = /^[0-9a-zA-Z_]{6,12}$/g;
    if (!reg.test(password.value)) {
        passP.style.display = 'block';
    } else {
        passP.style.display = 'none';
    }
}

loginBtn.onclick = function (e) {
    var reg = /^[0-9a-zA-Z_]{6,12}$/g;
    var reg1 = /^[0-9a-zA-Z_]{6,12}$/g;

    if (reg.test(password.value) && reg1.test(user.value)) {
        e.preventDefault();
        var uName = user.name;
        var uPass = password.name;
        var obj = {
            uName: user.value,
            uPass: password.value
        }
        for(var key in obj){
            localStorage.setItem(key,obj[key])
        }
    }

}