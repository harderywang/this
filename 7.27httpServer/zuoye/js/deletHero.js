var express = require('express');
var app = express();
var router= express.Router();
var h =require('./heros');


router.get('/deleHero',function(req,res){
  var {heroId} = req.query;
   h.heros.forEach((ele,index)=>{
    if(ele.heroId ===heroId){
        h.heros.splice(index,1)
    }
   })
   res.json(h.heros)
})

module.exports=router;