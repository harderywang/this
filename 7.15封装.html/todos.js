// 功能 渐入隐藏一个元素
function hide(ele) {
    var count = 1;
    ele.style.opacity = 1;
    var timer = setInterval(function () {
        count -= 0.1;
        if (count <= 0) {
            ele.style.opacity = 0;
            ele.style.display = 'none';
            clearInterval(timer);
            return
        }
        ele.style.opacity = count;
    }, 30)
    return ele
}

// show 显示 与hide 相反的方法

function show(ele) {
    ele.style.display = 'block';
    var count = 0;
    ele.style.opacity = count;
    var timer = setInterval(function () {
        count += 0.1;
        if (count <= 1) {
            ele.style.opacity = 1;
            // ele.style.display='none';
            clearInterval(timer);
            return
        }
        ele.style.opacity = count;
    }, 30)
    return ele
}
// 选择器
function getElement(str) {
    var ele;
    if (str[0] === '.') {
        ele = document.getElementsByClassName(`${str}`);
    } else if (str[0] === '#') {
        ele = document.getElementById(`${str}`)
    } else {
        ele = document.getElementsByTagName(`${str}`);
    }
    return ele
    // if(str.charAt(0))
}
