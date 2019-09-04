<template>
    <div>
       <headernav></headernav>
       <div class="conlist">
         <movview :movtitle="titlea" :arr="xugou">
             <a slot="slota">更多</a>
         </movview>
         <movview :movtitle="titleb" :arr="noxugou">
             <a slot="slota">更多</a>

         </movview>
        <div class="zhishu">
            <div class="head">
                <h2>豆瓣纸书</h2><a href="#">更多</a>
            </div>
            <div class="con">
                     <img src="https://img3.doubanio.com/view/subject/l/public/s4488835.jpg" >
                    <div class="rightbox">
                        <h3>造物<span>￥&nbsp;7.9</span></h3>
                        <p>收到v在那些哦i放得开v从剩开放得开v从剩开放得开v从剩开放得开v从剩开</p>
                    </div>

            </div>
            <div class="movlista">
               <movview  :arr="xugou"></movview>     

            </div>

        </div>
        <faxianhaodianying :movtitle="titlec" :faxianhaodianying="goodbook"></faxianhaodianying>
        <fenlei :fenlei="fenlei"></fenlei>
       </div>
        <downloadapp></downloadapp>
    </div>
</template>
<script>
import headernav from '../components/headernav'
import movview from '../components/movview'
import faxianhaodianying from '../components/faxianhaodianying'
import fenlei from '../components/fenlei'
import downloadapp from '../components/downloadapp'
export default {
    data() {
        return {
            titlea:"最受关注类|虚构类",
            titleb:"最受关注类|非虚构类",
            titlec:"发现好书",
            xugou:[],
            noxugou:[],
            goodbook:[],
            fenlei:[{title:"经典"},{title:"冷门佳片"},{title:"豆瓣高分"},{title:"动作"},{title:"喜剧"},
                    {title:"爱情"},{title:"悬疑"},{title:"恐怖"},{title:"科幻"},{title:"治愈"},
                    {title:"文艺"},{title:"成长"},{title:"动画"},{title:"华语"},{title:"欧美"},
                    {title:"韩国"},{title:"日本"}]
        }
    },
    components:{
        headernav,
        movview,
        faxianhaodianying,
        fenlei,
        downloadapp
    },
    created() {
        this.axios({
            method:"get",
            url:"/book",
         }).then((data)=>{
            //  console.log(data.data)
            for(var i in data.data){
                if(i<20){
                    this.xugou.push(data.data[i])
                }else{
                    this.noxugou.push(data.data[i])

                }
            }
         });
           this.axios({
            method:"get",
            url:"/goodBook",
         }).then((data)=>{
            //  console.log(data.data)
            this.goodbook=data.data
            //  console.log(this.goodbook)
         });
    }
   
   
}
</script>
<style scoped>
    .conlist{
        margin-top: .48rem;

    }
    .conlist>.movlist>.head>a{
         font-size: .14rem;
        float:right;
        color:#42bd56;
    }
    .zhishu>.head,.zhishu>.con{
        padding: .1rem .16rem;
    }
    .zhishu>.head>h2{
         display: inline-block;
        font-size: .18rem;
        color: #111;
        font-weight: 500;
    }
    .zhishu>.head>a{
         font-size: .14rem;
        float:right;
        color:#42bd56;
    }
    .con{
        overflow: hidden;
    }
    .con>img{
        float: left;
        width: 1rem;
        height: 1.3rem;
        margin: .1rem 0;
    }
    .con>.rightbox{
        float: left;
        margin-top:.25rem;
        margin-left: .2rem;
        width: 2.2rem;
    }
    .con>.rightbox>h3{
        font-size: .2rem;
        color:#333;
        font-weight: 500;
        margin-right: .2rem;
    }
    .con>.rightbox>h3>span{
        font-size: .16rem;
        color: red;
        float: right;
    }
    .con>.rightbox>p{
        line-height: .3rem;
        color: #444;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
   .movlista> .movlist{
        margin-top: -.5rem;
    }
  
   
</style>