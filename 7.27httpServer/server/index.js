// 在node.js 中如何导入依赖项

// 导入npm依赖项
var express = require('express');

// 如何使用express创建服务

var app = express();
// console.log(app);


app.get('/register',function(req,res){
    var {username,password,vert}=req.query;
    console.log(username,password,vert)
    res.send(username+password+vert)
})

// 给appr服务设置端口号
app.listen(8080,function(){
    console.log('node 第一个服务')
});