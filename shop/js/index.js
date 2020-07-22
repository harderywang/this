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
        // searchDiv.style.top = '0.6rem';
        // searchDiv.style.left = '0rem';

        alert.style.top = '.25rem'
        setTimeout(function () {
            alert.style.top = '-1rem'
        }, 2000)
    }
}

//  列表鼠标监听
function list(event) {
    if(event.target.tagName==='A'){
        event.target.style.color = 'purple';
        event.target.style.borderBottom = '2px solid purple'
    }
}
navDownList.addEventListener('mouseover', list);




// 鼠标点击事件
navDownList.addEventListener('click', list)

// navDownList.addEventListener('mouseover', move)
