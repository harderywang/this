var box = document.querySelector('.box');
        function getStyle(ele, str) {
            var res;
            if (ele.currentStyle) {
                res = ele.currentStyle[str];
            } else {
                res = getComputedStyle(ele, null)[str];
            }
            console.log(res)
            return res;

        }

        function ani(ele, str, end, time,callback) {
            var start = getStyle(ele, str);
            start = parseInt(start);
            var s = end - start;

            time = time * 1000;

            var timer = setInterval(function () {
                start += s / (time / 16.7);
                // ele.style[str] = start + 'px';
                // if (start >= end) {
                //     ele.style[str] = end + 'px';
                //     clearInterval(timer)
                // }
                if (s > 0) {
                    if (start >= end) {

                        if (str === 'opacity' || str === 'zIndex') {
                            ele.style[str] = start;
                            ele.style[str] = end;
                        } else {
                            ele.style[str] = start + 'px';
                            ele.style[str] = end + 'px';
                        }
                        clearInterval(timer);
                        if(typeof callback ==='function'){
                            callback();
                        }
                    }
                } else {
                    if (start <= end) {
                        if (str === 'opacity' || str === 'zIndex') {
                            ele.style[str] = start;
                            ele.style[str] = end;
                        } else {
                            ele.style[str] = start + 'px';
                            ele.style[str] = end + 'px';
                          
                        }
                        clearInterval(timer);
                        if(typeof callback ==='function'){
                            callback();
                        }
                    }
                }


                if (str === 'opacity' || str === 'zIndex') {
                    ele.style[str] = start;
                } else {
                    ele.style[str] = start + 'px';
                }
            }, 16.7)
        }
       