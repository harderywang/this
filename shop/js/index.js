var navDownList = document.querySelector('.nav-down-list');
var item = document.querySelectorAll('.nav-down-list-item>a');
var search = document.querySelector('.nav-top-search');
var navDown = document.querySelector('.nav-down');
// 固定search框
document.addEventListener('scroll',searchFexid)
var searchClass = search.className;
console.log(searchClass)
function searchFexid(){
    var scroolTop = document.documentElement.scrollTop;
    console.log(scroolTop)
    if(scroolTop >= 47){
        search.className=''+searchClass+' searchFixed';
        console.log(search.className)
        // 使用不了
        // search.style.position= 'fixed';
        // search.style.top= '0.05rem';
        // search.style.left= '50%';
    }else{
        search.className=searchClass
    }

    if(scroolTop>=113){
        navDown.style.position= 'fixed';
    }else{
        navDown.style.position= 'static';
    }
}


// 列表样式固定
console.log(navDownList.Child)
function list(event) {
    event.stopPropagation();
    [...item].forEach((ele, index)=>{
        console.log(ele)
        ele.style.color = 'black';
        ele.style.borderBottom = '2px solid transparent'
    })
    event.target.style.color = 'purple';
    event.target.style.borderBottom = '2px solid purple'
}
navDownList.addEventListener('click', list)

// navDownList.addEventListener('mouseover', move)
