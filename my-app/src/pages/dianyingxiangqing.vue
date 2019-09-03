<template>
    <div>
       <headernav></headernav>
        <xiangqingbg></xiangqingbg>
        <div class="contain">
            <div class="title">
                <h2>{{data.title}}</h2>
                <div class="images"> 
                    <star :num="data.rating.average"></star><span>&nbsp;{{data.rating.average}}</span><span>&nbsp;&nbsp;{{data.collect_count}}&nbsp;人评价</span>
                <p>{{data.year}}&nbsp;/&nbsp;<span v-for="(v,i) in data.genres" :key="i">{{v}}&nbsp;/&nbsp;</span></p>
                <p class="thours">用APP查看影人资料</p>
                </div>
                <img :src="data.images.large">
                
            </div>
            <span>想看</span>
            <span>看过</span>
        </div>
        <div class="jianjie">
            <h6>{{data.title}}的简介</h6>
            <p>德国非得哦分更好的融入防护看帖不回你发地方很近的人反馈给让他们后提交后i打开日记一个以哦人世间以后i刷卡机然后.....<span>(展开)</span></p>
        </div>
        <div class="jianjie">
            <h6>查看更多相关分类</h6>
           <span v-for="(v,i) in data.genres" :key="i">{{v}}</span>
        </div>
         <div class="jianjie">
            <h6>{{data.title}}的照片</h6>
            <div class="photobox">
                <img  v-for="(v,i) in data.images" :key="i"   :src="v">
            </div>
         </div>
    </div>
</template>
<script>
import headernav from '../components/headernav'
import xiangqingbg from '../components/xiangqingbg'
import star from '../components/star'
export default {
    data(){
        return{
            data:{
                required:true
            }
        }
    },
    components:{
        headernav,
        xiangqingbg,
        star
    },
   created() {
       console.log(this.$route.query.val)
       this.data=this.$route.query.val
   },
}
</script>
<style scoped>
    .contain{
        padding:0 .18rem;
        margin-top:.2rem;
    }
    .contain>.title>h2{
        font-size: .2rem;
        font-weight: 500;
        margin: .1rem 0;
    }
    .title{
        overflow: hidden;
        margin-bottom: .5rem;
    }
    .title>.images{
        float: left;
    }
    .title>.images>.thours{
        color: #42bd56;
        font-size: .16rem;
        font-weight: 100;
        margin-top: .15rem;
    }
    .title>img{
        float: right;
        width: 1rem;
        height: 1.5rem;
    }
    .contain>span{
        display: inline-block;
        width:1.6rem;
        height: .35rem;
        border: .005rem solid #ffcc00;
        color: #ffcc00;
        text-align: center;
        line-height: .35rem;
        letter-spacing: .01rem;
    }
    .jianjie{
        margin-top: .3rem;
        padding:0 .18rem;
    }
    .jianjie>h6{
        color:#999999;
        line-height: .5rem;
    }
    .jianjie>p>span{
        color: #33cc66;
    }
    .jianjie>span{
        display: inline-block;
        width: .5rem;
        height:.25rem;
        line-height:.25rem;
        background:pink;
        margin: 0 .1rem;
        border-radius: .1rem;
        text-align: center;
    }
    .photobox{
        display: flex;
        overflow: auto;
    }
    .photobox>img{
        width: 1.6rem;
        height: 1.3rem;
        margin-right:.03rem;
    }
</style>