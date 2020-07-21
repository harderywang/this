### iframe 
1 iframe 是独立的窗口 有window对象
2 浏览器窗口也有widnow对象
3 窗口之间通信 按照同源策略 ----》启动页面时  需要启动服务器 live serve
4 浏览器窗口中页面为父页面 window 为父window 
    4.1 如何获取子window
        js
        var childWindow = document.getElementsByTagNmae('iframe')[0];contentWindow;
    4.2 如何获取 子window dom

        var chilDOM = childwindow.document.xxx();dom的API
    4.3如何获取父页面中数据传递到子页面 

        var data = window.data//父页面数据
        childWindow.data =data  //给子window 添加data 属性 并赋值 父页面数据data
5  iframe 加载的页面 为子页面 该页面 写js 中window 为iframe window ； 子 window 
    5.1 如何获取父window
        var parentWindow =window.parent;
    5.2如何将子页面数据a传递给父页面b
        var  data = window.a//获取子页面数据
        parentWindow.b=data//把子页面的数据a传递给父页面变量b
6 注意 
    1 每个window 都有location localStorage document ...
    2 在子页面当中 Loacltion.href重新加载的是子窗口的页面 而不是父窗口的
    3 在子窗口中 localStorge.setItem 存在子窗口中 而不是父窗口 父窗口访问不到
    4loaclStorage 是所用窗口的公用数据
### 相邻 的firame 如何传递数据
    localStorge 
    共同的父窗口