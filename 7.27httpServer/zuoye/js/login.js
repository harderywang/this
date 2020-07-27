var express = require('express');
// var app = express();
var router= express.Router();

router.get('/login',function(req,res){
    var {username,password}=req.query;
    console.log(password)
    if(username!=='wang'){
        res.json({
            code:210,
            token:null,
            msg:'用户错误'
        })
    }
    if(password!=='123456'){
        res.json({
            code:210,
            token:null,
            msg:'密码不对'
        })
    }
    if(username==='wang'&&password==='123456'){
        var date =new Date().getTime();
        // console.log(date)
        res.json({
            code:200,
            token:'dafsdrewrqwer'+date,
        })
        // res.send('dafsdrewrqwer'+date)
    }
})

module.exports=router;



