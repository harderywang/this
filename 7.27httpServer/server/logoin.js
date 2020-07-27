var express = require('express');
var router = express.Router();
router.get('/logoin',function(req,res){
    res.json({
        msg:'logoin'
    })
})
module.exports= router;