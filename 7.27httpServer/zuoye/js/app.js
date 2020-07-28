const express = require('express');
const app = express();
const router = express.Router()
app.use(router)
const login = require('./routes/login.js');  // 第三方中间件

app.use(login)
let heros = [
    {name:'wyh',age:12,dec:'周超你快点走',id:0},
    {name:'与非',age:12,dec:'王宇航我等你',id:1},
    {name:'周超',age:12,dec:'王宇航你给我等着',id:2},
]
let isToken = 'dafoseiruq4912374hfdkseyr'
let id = 2
router.get('/addHeros',function(req,res){
    let {name,age,dec,token} = req.query;
    if(token!=isToken){
        res.send({
            code:300,
            msg:'你没有权限'
        })
        return
    }

    heros.push({
        name,age,dec,id:++id
    })
    console.log(heros)
    res.json({
        code:200,
        msg:'添加success',
        hero:{
            name,age,dec,id:id
        }
    })
})

router.get('/getHeros',function(req,res){
    res.json({
        code:200,
        heros:heros
    })
})
router.get('/updataHero',function(req,res){
    console.log('updataHero')
   let {id,age,dec} = req.query;
   id = parseInt(id)
   let hero = heros.map(function(item){
       if(item.id === id){
           if(age){
               item.age = age
           }
           if(dec){
               item.dec = dec
           }
       }
   })

   hero = heros.filter(function(item){
       return item.id == id
   })
   res.json({
       code:200,
       msg:"修改成功",
       hero,
   })
})


router.get('/deletHero',function(req,res){
   let {id} = req.query;
   let hero = {}
   let resHeors = heros.filter(function(item){
       if(item.id==id){
           hero = item
       }
       return id != item.id
   })
   heros = resHeors
   res.json({
       code:200,
       msg:'删除成功',
       hero,
   })
})
app.listen(3000)



const express = require('express');
const router = express.Router()

router.get('/login',function(req,res){
  console.log('login')
  let {username,password} = req.query;
  if(password == 123456 && username){
      // 表示登陆成功
      res.json({
          code:200,
          token:"dafoseiruq4912374hfdkseyr"+(new Date()).getTime(),
          msg:'login is success'
      })
  }else{
    res.json({
        code:200,
        token:null,
        msg:'用户名或这密码错误'
    })
  }
})
module.exports= router