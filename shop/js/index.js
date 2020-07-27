// ### 5.清空iframe滚动条
var iframe = document.querySelector("iframe");
window.onresize = function () {
    // console.log("========")
    reinitIframe();
}
function reinitIframe(){
    try{
        var bHeight = iframe.contentWindow.document.body.scrollHeight;
        var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        var height = Math.min(bHeight, dHeight);
        iframe.height = height+50;
        // console.log(iframe.height);
    }catch (ex){
        // console.log("----------")
    }
}


iframe.contentWindow.window.onload=function(){
    // console.log("lllllllll");
    setTimeout(function(){
    reinitIframe();
    },100)
}


var navDownList = document.querySelector('.nav-down-list');
var item = document.querySelectorAll('.nav-down-list-item>a');
var search = document.querySelector('.nav-top-search');
var navDown = document.querySelector('.nav-down');
// 固定search框 和navDown
document.addEventListener('scroll', searchFexid)
var searchClass = search.className;
function searchFexid() {
    var scroolTop = document.documentElement.scrollTop;

    if (scroolTop >= 47) {
        search.className = '' + searchClass + ' searchFixed';
    } else {
        search.className = searchClass
    }

    if (scroolTop >= 113) {
        navDown.style.position = 'fixed';
        navDown.style.top = '0';
        navDown.style.left = '0';
    } else {
        navDown.style.position = 'static';
    }
}

// 查询事件监听
var searchBtn = document.querySelector('.searchBtn');
var alert = document.querySelector('.alert');
var searchIpt = document.querySelector('.searchIpt');
var searchDiv = document.querySelector('.searchDiv')
searchBtn.onclick = function () {
    if (!searchIpt.value) {
        alert.style.top = '.25rem'
        setTimeout(function () {
            alert.style.top = '-1rem'
        }, 2000)
    }
}



//  列表鼠标监听
var x =0;
// 初始化
$('.nav-down-list-item>a:eq('+x+')').css({
    color:'purple',
    borderBottom:'2px solid purple'
})
// 点击变色
$('.nav-down-list-item').on('click',function(){
    
    if(!($(this).index()===x)){
        $('.nav-down-list-item>a:eq('+x+')').css({
                 color:'black',
                 borderBottom:'2px solid transparent'
        })
        x=$(this).index();
        $('.nav-down-list-item>a:eq('+x+')').css({
            color:'purple',
            borderBottom:'2px solid purple'
        })
    }
})
// 鼠标点击变色
$('.nav-down-list-item').on('mouseover',function(){
    $(this).children().css({
        color:'purple',
        borderBottom:'2px solid purple'
    })
})

// 鼠标移出恢复 但点击的不恢复
$('.nav-down-list-item').on('mouseout',function(){
    if(!($(this).index()===x)){
        $(this).children().css({
                 color:'black',
                 borderBottom:'2px solid transparent'
        })
    }
})


// 退出删除
$('.exit').on('click',function(){
    localStorage.clear();
    $('.house').click();
    location.href=''
})

$(window).on('scroll',function(){
    // console.log(document.documentElement.s)
    if(document.documentElement.scrollTop>=800){
        $('.return-top').css({
            display:'block'
        })
    }else{
        $('.return-top').css({
            display:'none'
        })
    }

    $('.return-top').on('click',function(){
        document.documentElement.scrollTop=0;
        // $(window).animate({scrollTop:0},2000)
        $('.return-top').css({
            display:'none'
        })
    })
})






