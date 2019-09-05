<template>
    <div>
        <div class="header-bar">
            <span @click="fun()">关闭</span>
            <form class="search">
                <input type="search">
            </form>
        </div>
        <ul class="routerLink">
            <li v-for="(v,i) in arr" :key="i">
                <router-link :to="v.src">
                    <strong v-bind:style="{color:v.color}">{{v.title}}</strong>
                    <span>{{v.alt}}</span>
                </router-link>
            </li>
            
        </ul>
        <div class="subnav">
            <!-- <a href="/zhuce" class="borrig">注册帐号</a>
            <a href="/login" >登录豆瓣</a>
            <a href="/index" class="borrig">使用桌面版</a>
            <a href="/index">使用豆瓣App</a> -->
           <router-link to="/zhuce" class="borrig">注册帐号</router-link>
           <router-link to="/login" >登录豆瓣</router-link>
           <router-link to="/index" class="borrig" >使用桌面版</router-link>
           <router-link to="/index" >使用豆瓣App</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
       return{
           arr:[
            {"title":"电影","alt":"影院热映","src":"/index","color":"rgb(35, 132, 232)"},
            {"title":"电视","alt":"正在热播","src":"/index","color": "rgb(122, 106, 219)"},
            {"title":"同城","alt":"畅销排行","src":"/index","color":"rgb(159, 120, 96)"},
            {"title":"图书","alt":"周末活动","src":"/index","color":"rgb(230, 70, 126)"},
            {"title":"小组","alt":"志趣相投","src":"/index","color":"rgb(42, 184, 204)"},
            {"title":"音乐","alt":"新碟榜","src":"/index","color":"rgb(244, 143, 46)"},
            {"title":"阅读","alt":"电子书","src":"/index","color":"rgb(159, 120, 96)"},
            {"title":"游戏","alt":"虚拟世界","src":"/index","color":"rgb(87, 116, 197)"},
            {"title":"应用","alt":"玩手机","src":"/index","color":"rgb(89, 108, 221)"},
            {"title":"东西","alt":"心爱之物","src":"/index","color":"rgb(225, 100, 77)"},
            {"title":"FM","alt":"红心歌单","src":"/index","color":"rgb(64, 207, 169)"},
            {"title":"市集","alt":"购买原创","src":"/index","color":"rgb(66, 189, 86)"},
            ]
       } 
    },
    methods: {
        fun(){
            this.$router.go(-1)
        }
    },
}
</script>
<style scoped>
    .header-bar{
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            z-index: 2;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            height: .48rem;
            padding: 0 .18rem;
            background: #fff;
            border-bottom: .01rem solid #f3f3f3;
    }
    .header-bar>span{
        color: #42bd56;
         font-size: .16rem;
    }
    .header-bar>.search{
            flex: 1;
            width: 100%;
            padding-left: .1rem;
    }
    input{
        box-sizing: border-box;
        border: 0;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==) no-repeat 50% #f3f3f3;
        background-size: .173rem;
        border-radius: .03rem;
        width: 100%;
        height: .32rem;
        font-size: .14rem;
    }
    .routerLink{
        display: flex;
        justify-content: space-around;
        padding-top: .25rem;
        margin-top: .48rem;
        flex-wrap: wrap;
    }
    ul>li{
        width:33.3%;
    }
    ul>li>a{
        /* position: relative; */
        top: 0;
        display: block;
        margin-bottom: .25rem;
        text-align: center;
    }
    ul strong{
            display: block;
            font-weight: 400;
            font-size: .24rem;
            line-height: .28rem;
    }
    ul span{
            display: block;
            color: #999;
            height: .17rem;
            font-size: .12rem;
            letter-spacing: .01rem;
    }
    .subnav{
        width: 100%;
         border-bottom: .01rem solid #f3f3f3;
         border-top: .01rem solid #f3f3f3;
    }
    .subnav>a{
        display: inline-block;
        margin: .13rem 0;
        color: #42bd56;
        width: 49%;
        text-align: center;
        font-size: .15rem;
      
    }
    .borrig{
            border-right: .01rem solid #e5e5e5;
    }
</style>