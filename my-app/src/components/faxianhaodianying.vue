<template>
    <div class="movlist">
        <div class="head">
           <h2>{{movtitle}}</h2>
           <a href="#">更多</a>
       </div>
       <div class="content">
            <ul class="onlystring" >
                <li v-for="(v,i) in faxianhaodianying" :key="i" v-if="!v.line">
                    <a href="#" >{{v.title}}</a>
                </li><br v-else>
            </ul>
       </div>
    </div>
</template>
<script>
export default {
    props:{
        movtitle:{
            // type:Array,
            required:true,
        },
        faxianhaodianying:{
            //  type:Array,
            required:true,
        }
    },
    created() {
        console.log(this.faxianhaodianying)
    },
//    computed: {
//        newarr(){
//            this.faxianhaodianying.filter((v,i)=>{
//                if(v.line==true){
                  
//                    return true
//                }else{
//                    return false
//                }
//            })
//        }
//    },
    
}
</script>
<style scoped>
    .movlist{
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
    .content{
        overflow: auto;
        margin-top: .01rem;
    }
    .content>.onlystring{
        /* float: left; */
        white-space: nowrap;
    }
   .onlystring>li{
        display: inline-block;
        border: .01rem solid rgb(255, 172, 45);
        font-size: .16rem;
        margin: .1rem .16rem .08rem 0;
        height: .5rem;
        line-height: .5rem;
        padding: 0 .24rem;
        /* flex-wrap: nowrap; */
        border-radius: .04rem;
       
     }
    .onlystring>li>a{
        letter-spacing: .016rem;
    }
</style>