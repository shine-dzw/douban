<template>
    <div>
        <headernav></headernav>
        <div class="conlist">
            <movview :arr="reying" :movtitle="titlea" >
                <a class="slota" slot="slota">更多</a>
            </movview>
            <movview :arr="zaixian" :movtitle="titleb" >
                <a class="slota" slot="slota">更多</a>

            </movview>
            <movview :arr="xinpian" :movtitle="titlec" >
                <a class="slota" slot="slota">更多</a>

            </movview>
            <faxianhaodianying :faxianhaodianying="faxianhaodianying" :movtitle="titled"></faxianhaodianying>
            <fenlei :fenlei="fenlei"></fenlei>
            <downloadapp></downloadapp>
        </div>
        
    </div>
</template>
<script>
import headernav from '../components/headernav'
import movview from '../components/movview'
import faxianhaodianying from '../components/faxianhaodianying'
import fenlei from '../components/fenlei'
import downloadapp from '../components/downloadapp'
export default {
    data(){
        return{
            titlea:"影院热映",
            titleb:"免费在线观影",
            titlec:"新片速递",
            titled:"发现好电影",
            reying:[],
            zaixian:[],
            xinpian:[],
            faxianhaodianying:[],
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
            url:"/mov",
        }).then((data)=>{
            // console.log(data.data)
            for(var i in data.data){
                if(i<34){
                    this.reying.push(data.data[i])
                }else if(67<i){
                    this.xinpian.push(data.data[i])
                }else{
                    this.zaixian.push(data.data[i])
                }
            }
        });
        this.axios({
            method:"get",
            url:"/faxianhaodianying",
        }).then((data)=>{
            this.faxianhaodianying=data.data
            // console.log(this.faxianhaodianying)
        })
      
    },
}
</script>
<style scoped>
   .conlist{
       margin-top: .48rem;
   }
   .slota{
         font-size: .14rem;
        float:right;
        color:#42bd56;
    }
</style>