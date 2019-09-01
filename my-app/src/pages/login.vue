<template>
    <div>
       <h2><a @click="fun()">取消</a>登录豆瓣</h2>
       <form >
           <div class="username">
             <input type="text" placeholder="邮箱" v-model="youxiang">
           </div>
           <div class="userpass">
             <input type="text" placeholder="Token" v-model="upass">
             <span>123</span>
           </div>
           <div>
               <button type="submit"  class="submit" v-if="bool" @click="fun()">登录</button>
              <button type="button"  class="submit denglu" v-else>正在登录...</button>
           </div>
        </form>
        <div class="footer">
            <div class="more-login">
                <a href="#">使用其他方式登录&nbsp;&nbsp;& &nbsp;&nbsp;</a><a href="#">找回密码</a>
            </div>
            <div class="btns">
                <a href="#">注册豆瓣账号</a>
                <a href="#">下载豆瓣APP</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
      return {
            bool:true,
            youxiang:"",
            upass:"",
         }
    },
    methods:{
        fun(){
             this.bool=false;
             var param=new URLSearchParams;
             param.append("youxiang",this.youxiang)
             param.append("upass",this.upass)
             this.axios({
                 method:"post",
                 url:"http://localhost:3000/login",
                 data:param,
             }).then((ok)=>{
                 console.log(ok)
                 if(ok.data.linkid==1){
                     alert("登录成功")
                     this.$router.push("/index")
                 }else{
                     alert("用户名或者密码错误")
                     this.bool=true
                 }
             })
        }
    }
}
</script>
<style scoped>
    h2{
        height: .45rem;
        line-height: .45rem;
        font-size:.18rem;
        text-align: center;
        border-bottom:1px solid #eee;
    }
    h2>a{
        font-size: .15rem;
        color: #42bd56;
        font-weight: 400;
        position: absolute;
        left: .18rem;
    }
    form{
        font-size: 0;
        padding: .2rem .18rem;
    }
    div>input{
        width: 95%;
        height: .44rem;
        padding: 0 .08rem;
        font-size: .15rem;
        border: .01rem solid #ccc;
       border-top-left-radius: .03rem;
        border-top-right-radius: .03rem;
        
       
    }
    .submit{
        cursor: pointer;
        width: 100%;
        padding: .12rem .26rem;
        margin-top: .1rem;
        font-size: .17rem;
        text-align: center;
        color: #fff;
        background: #17aa52;
        border: .1rem solid #17aa52;
        border-radius: .03rem;
        line-height: .01rem;
    }
   .denglu{
            cursor: not-allowed;
            background: #eee;
            border: .1rem solid #eee;
            outline: 0;
    }
    div{
        font-size: 0;
    }
    .more-login{
        text-align: center;
    }
    .more-login>a{
        font-size:.15rem;
        color: #ccc;
    }
    .btns{
        margin-top: .4rem;
        text-align: center;
        font-size: .15rem;
    }
    .btns>a{
        color: #42bd56;
        margin-right: .15rem;
    }
</style>