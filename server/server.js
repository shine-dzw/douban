var express=require("express")
var app=express()
//引用post解析模块
var bodyParser=require("body-parser")
//使用post解析模块
var UE=bodyParser.urlencoded({extended:false});
//引用mongoose
var mongoose=require("mongoose")
//定义集合
let collections=mongoose.model("doubans",{
    uname:String,
    upass:String,
    youxiang:String,
})
//引用加密模块
var crypto=require("crypto");
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');

res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

 res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');

    next()
})
app.post("/login",UE,function(req,res){
    // console.log("连接成功")
    var upass=req.body.upass;
    var youxiang=req.body.youxiang;
    var newpass=crypto.createHash('md5').update(upass).digest('hex');
    mongoose.connect("mongodb://localhost:27017/aa", { useNewUrlParser: true },function(err){
        if(err){
            console.log(err)
        }else{
           collections.find({youxiang:youxiang,upass:newpass}).then((ok)=>{
            // console.log(ok)
               if(ok.length>0){
                  
                res.send({status:200,msg:"登录成功",linkid:1})
               }else{
                res.send({status:100,msg:"登录失败",linkid:2}) 
               }
           }) 
        }
    })
  
})
app.post("/zhuce",UE,function(req,res){
    // console.log("连接成功")
    var uname=req.body.uname;
    var upass=req.body.upass;
    var youxiang=req.body.youxiang;
    var newpass=crypto.createHash('md5').update(upass).digest('hex');

    mongoose.connect("mongodb://localhost:27017/aa", { useNewUrlParser: true },function(err){
        if(err){
            console.log("数据库连接失败")
        }else{
            // console.log("ok")
            //定义要存储的数据
            let dbc=new collections({
                uname:uname,
                upass:newpass,
                youxiang:youxiang,
            })
            collections.find({uname:uname}).then((ok)=>{
                // console.log(ok)
                if(ok.length>0){
                    res.send({msg:"用户名已经注册",status:100})
                // console.log("失败")
                    return
                }else {
                    dbc.save().then((ok)=>{
                            res.send({msg:"注册成功",status:200})
                        },(err)=>{
                            res.send({msg:"注册失败",status:101})
            
                        })

                }
            })
            
        }
    })
   

})

app.listen(3000)