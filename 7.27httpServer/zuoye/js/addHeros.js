var express = require('express');
var app = express();
var router= express.Router();
var h =require('./heros');


router.get('/addHeros',function(req,res){
  var {name,age,dec,heroId} = req.query;
    h.heros.push(req.query)
    res.json({
        name:name,
        age:age,
        dec:dec,
        heroId:heroId
    })
    console.log(req.params)//get 中url的参数
    console.log(req.query)//get 请求参数
    console.log(req.body)//post 请求参数
    console.log(req.baseUrl)
    console.log(req.ip)
    console.log(req.originalUrl)
    console.log(req.path)
    console.log(req.protocol)
    console.log(req.param)
})

module.exports=router;