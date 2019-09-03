<template>
    <div class="movlist">
       <div class="head">
           <h2>{{movtitle}}</h2>
           <a href="#">更多</a>
       </div>
       <div class="content">
           <ul>
            <li v-for="(v,i) in arr" :key="i" @click="fun(v)">
                   <img :src="v.images.large">
                   <h5>{{v.title}}</h5>
                   <span><star :num="v.rating.average"></star>{{v.rating.average}}</span>
            </li>
               
           </ul>
       </div>
    </div>
</template>
<script>
import star from '../components/star'
export default {
    components:{
        star
    },
    props:{
        movtitle:{
            type:String,
            required:true
        },
        arr:{
            type:Array,
            required:true 
        }
    },
    created() {
        console.log(this.arr)
    },
    methods: {
        fun(v){
            this.$router.push({
                path:"/dianyingxiangqing",
                query:{
                    val:v
                }
            })
        }
    },
}
</script>
<style scoped>
    .movlist{
        /* margin-top: .48rem; */
        padding: .1rem .16rem;
    }
    .movlist>.head{
        height: .26rem;
        line-height: .26rem;
        
    }
    .movlist>.head>h2{
        display: inline-block;
        font-size: .18rem;
        color: #111;
        font-weight: 500;
    }
    .movlist>.head>a{
        font-size: .14rem;
        float:right;
        color:#42bd56;
    }
    .content>ul{
        display: flex;
        overflow:scroll;
    }
    .content>ul>li{
        margin-right: .05rem;
    }
    .content>ul>li>img{
        width: 1rem;
        height: 1.3rem;
        margin: .1rem 0;
    }
     .content>ul>li>h5{
         text-align: center;
         color:black;
         font-size: .14rem;
          display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
     }
</style>