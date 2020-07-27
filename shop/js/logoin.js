var iframe = window.parent.document.querySelector('.iframe');
var logo = window.parent.document.querySelector('.logo>a');
console.log(logo)
logo.onclick = function(){
    iframe.style.height='4.5rem'
    console.log(iframe.style.height)
}

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
    var obj = {
        'userName': user.value,
        'password': password.value
    }
    for (var key in obj) {
        localStorage.setItem(key, obj[key])
    }
//    console.log(window.parent.document.querySelector('.success'))
//    window.parent.document.querySelector('.success').style.display='block'
    $.ajax({
        url: 'http://vebcoder.cn:9527/api/login',
        data:obj,
        dataType: 'json',
        method: 'get',
        success: function (data) {
            console.log(data)
            if(data.token){
                for (var key in data) {
                    localStorage.setItem(key, data[key])
                };
                logo.style.display='none';
                register.style.display='none';
                shopCart.style.display='block';
                exit.style.display='block';   
                doc.document.querySelector('.house').click(); 
                location.href='../html/home.html'         
            }
        },
        error: function (err) {
            console.log(err)
        }
    })



    // var uName = user.value;
    // var uPass = password.value;
    // var name =localStorage.getItem(''+uName+'');
    // var pw = localStorage.getItem(''+uPass+'');
    // console.log(name,pw)
    // // console.log(user.value ===name)
    // if(!(user.value ===name)){
    //     alert('用户名不正确')
    // }
    // if(!(password.value ===pw)){
    //     alert('密码不正确')
    // }
    // if((user.value ===name)&&(password.value ===pw)){
    //     // location.href = '../html/register.html'
    //     // location.href = './d.html'
    //     console.log(user.name)
    //     $.ajax({
    //         url:'http://vebcoder.cn:9527/api/login',
    //         data:{
    //             userName:user.value,
    //             password:password.value
    //         },
    //         dataType:'json',
    //         method:'get',
    //         success:function(data){
    //             console.log(data)
    //         },
    //         error:function(err){
    //             console.log(err)
    //         }
    //     })
    // }

}