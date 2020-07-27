var express = require('express');
var app = express();
var router = express.Router();

var addHeros=require('./addHeros.js');
var deleHeros=require('./deletHero.js');
var getHeros=require('./getHeros.js');
var updataHero=require('./updataHero.js');
var login = require('./login.js');

app.use(addHeros);
app.use(deleHeros);
// app.use(getHeros);
// app.use(updataHero);
app.use(login)




// app.use(router)
var heros = [
    {name:'于飞',age:22,dec:'巾帼不让须眉',heroId:0},
    {name:'王宇航',age:22,dec:'巾帼不让须眉',heroId:1},
    {name:'周超',age:22,dec:'帅不帅',heroId:2},
]

// 将heros数组曝光
module.exports.heros = heros;
app.listen(3000,function(){
    console.log('成功')
})