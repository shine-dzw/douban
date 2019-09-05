<template>
    <div>
      <headernav></headernav>
      <xiangqingbg></xiangqingbg>
      <div class="info">
          <h2>{{arr.title}}&nbsp;&nbsp;<span>{{arr.loc_name}}</span> </h2>
          <div class="poster"><img :src="arr.image" ></div>
          <div class="datail">
              <span>时间&nbsp;&nbsp;</span>
              <ul>
                  <li>{{arr.begin_time}}</li>
                  <li>{{arr.end_time}}</li>
              </ul>
          </div>
          <div class="datail">
              <span>地点&nbsp;&nbsp;</span>
              <ul>
                  <li>{{arr.address}}</li>
              </ul>
          </div>
           <div class="datail">
              <span>费用&nbsp;&nbsp;</span>
              <ul>
                  <li>{{arr.fee_str}}</li>
              </ul>
          </div>
          <div class="datail">
              <span>类型&nbsp;&nbsp;</span>
              <ul>
                  <li>{{arr.category_name}}</li>
              </ul>
          </div>
          <div class="datail">
              <span>起始时间&nbsp;&nbsp;</span>
              <ul>
                  <li>{{arr.time_str}}</li>
              </ul>
          </div>
          <div class="tags">
              <ul>
                  <li v-for="(v,i) of newstr" :key="i"><a href="#">{{v}}</a></li>
                  
              </ul>
          </div>
          <div class="describe">
              <h2>活动详情</h2>
              <div class="content" v-html="arr.content"></div>
          </div>
      </div>
      <downloadapp></downloadapp>
    </div>
</template>
<script>
import headernav from '../components/headernav'
import xiangqingbg from '../components/xiangqingbg'
import downloadapp from '../components/downloadapp'
export default {
    data(){
        return {
            arr:"",
            str:[],
        }
    },
   components:{
       headernav,
       xiangqingbg,
       downloadapp
   },
   computed: {
       newstr(){
            this.str=this.arr.tags
           return this.str.split(",")
       }
   },
   created() {
    //   console.log( this.$route.query.id)
    this.arr=this.$route.query.val
    //   console.log( this.newstr)
    //   console.log( typeof(this.newstr))
    },
}
</script>
<style scoped>
    .info{
        margin: .1rem;
    }
    .info h2{
        margin: .2rem 0;
        font-weight: 700;
        color: #494949;
        font-size: .16rem;
    }
    .info>h2>span{
            display: inline-block;
            padding: .01rem .05rem;
            margin-bottom: .03rem;
            vertical-align: middle;
            line-height: .18rem;
            font-size: .12rem;
            color: #fff;
            background-color: #ff8263;
            border-radius: .02rem;
    }
    .poster{
        margin: .2rem auto;
        text-align: center;
    }
    .poster>img{
        width: 100%;
        max-width: 2.2rem;
        height: auto;
    }
    .datail{
            /* margin-left: .1rem; */
            margin-bottom: .1rem;
            /* min-height: .15em;
            font-size: .14rem;
            clear: left; */
    }
    .datail>span{
        float: left;
        height: 150%;
        line-height: 150%;
        margin-left: -.03rem;
    }
    .tags li{
            display: inline-block;
            margin: .1rem .1rem 0 0;
            font-size: .15rem;
    }
    .tags a{
            display: block;
            padding: 0 .12rem;
            line-height: .28rem;
            font-size: .15rem;
            border-radius: .28rem;
            text-align: center;
            color: #494949;
            background: #f5f5f5;
    }
    .describe h2{
        color: #072;
    }
    .describe>.content{
         word-break: break-all;
     }
    
</style>