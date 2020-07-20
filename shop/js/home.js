var wrap = document.querySelector('.wrap');
var ad = document.querySelector('.ad');
var adItem = document.querySelectorAll('.ad-item');

console.log(adItem);

var index=0;

var timer = setInterval(function(){
    for(var i = 0;i<adItem.length;i++){
        adItem[i].style.display='none';
        adItem[i].style.opacity=0;
    }

},1000)
