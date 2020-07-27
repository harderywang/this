var express = require('express');
var app = express();
var router= express.Router();
var h =require('./heros');


router.get('/addHeros',function(req,res){
  var {name,age,dec,heroId} = req.query;
    h.heros.push(req.query)
    console.log(h.heros)
    res.json({
        name:name,
        age:age,
        dec:dec,
        heroId:heroId
    })
})

module.exports=router;