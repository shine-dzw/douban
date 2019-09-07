<template>
    <div>
         
     
           <div class="sub-nav">
               <ul>
                   <li> <router-link to="/dianying">影院热映</router-link> </li>
                   <li> <router-link to="/dianying">欧美新碟榜</router-link> </li>
                   <li> <router-link to="/zhuce">注册帐号</router-link> </li>
                   <li> <router-link to="/login">登录豆瓣</router-link> </li>
               </ul>
           </div>
      
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
     .sub-nav{
        padding:.18rem;
    }
    .sub-nav>ul{
        background-color:#ffffff;
        overflow: hidden;

    }
    .sub-nav>ul>li{
        width: 50%;
        float: left;
        height: .44rem;
        text-align: center;
        line-height: .44rem;
        padding:0 .03rem;
        margin-bottom: .05rem;
        border-radius:.02rem;
     }
     .sub-nav>ul>li>a{
         display: inline-block;
         width: 100%;
        background-color: #f6f6f6;
        color: #494949;
        font-size: .15rem;
     }
</style>