var user = document.querySelector('.user');
var password = document.querySelector(".password");
var userP = document.querySelector('.user-div>p');
var passP = document.querySelector('.pass-div>p')
var loginBtn = document.querySelector('.login-btn');


user.onblur=function(e){
    e.preventDefault();
    var reg = /^[0-9a-zA-Z_]{6,12}$/g;
    console.log(reg.test(user.value));
    if(!reg.test(user.value)){
        userP.style.display='block';
    }else{   
        console.log(234)
        userP.style.display='none';
    }
}



password.onblur= function(e){
    e.preventDefault();
    var reg = /^[0-9a-zA-Z_]{6,12}$/g;
    if(!reg.test(password.value)){
        passP.style.display='block';
        // ='none';
    }else{   
        passP.style.display='none';
        console.log(234)
    }
}

loginBtn.onclick =function(e){
    e.preventDefault();
    
}