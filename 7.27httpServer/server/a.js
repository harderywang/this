var express= require('express');
var app = express();
// 获取路由
var router = express.Router();
app.use(router);

// 导入 路由模块
var c = require('./c');
var b = require('./b')
var logoin = require('./logoin')

// 在服务上使用路由模块
//---> 接口可以访问了
app.use(logoin);
app.use(b)
app.use(c)

router.get('/a',function(req,res){
    res.json({
        msg:'a'
    })
})

app.listen('3000')