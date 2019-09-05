<template>
    <div class=list>
        <a  class="thumbnail" @click="fun(arr)">
            <div class="content">
                 <img :src="imageurl" >
                <h3>{{title}}</h3>
                <!-- <p>{{content}}</p> -->
                <p v-html="newcon">...</p>

               

            </div>
            <div class="author">
                <span>展览</span>
            </div>
        </a>        
    </div>
</template>
<script>
export default {
    props:{
        arr:{
            required:true,
        },
        imageurl:{
            type:String,
            require:true,
        },
        title:{
            type:String,
            require:true,
        },
        content:{
            type:String,
            require:true,
        }
    },
    computed: {
        //截取字符串
        newcon(){
            return this.content.substring(0,30)   
                
        }
      
    },
    // created(){
    //     console.log(this.arr)
    // },
    methods: {
        fun(v){
            this.$router.push({
                path:"/indexxiangqing",
                query:{val:v}
                })
        }
    },
   
}
</script>
<style scoped>
    .list>.thumbnail{
        display: block;
        position: relative;
        padding: .1rem .18rem .25rem 0;
        margin-left: .18rem;
        border: none;
        border-bottom: .01rem solid #ccc;
    }
    .thumbnail>.content>img{
        float: right;
        width: 23%;
        height: .8rem;
        margin-left: .25rem;
    }
    .thumbnail>.content>h3{
        font-size: .17rem;
        color: #494949;
        line-height:.25rem;
        letter-spacing: .015rem;
        font-weight: 500;
        margin-bottom: .06rem;
    }
     .thumbnail>.content>p{
         line-height: .2rem;
        text-align: justify;
        color: #aaa;
        font-size: .12rem;
        overflow: hidden;
        margin-bottom: .15rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;

     }
     .thumbnail>.author{
             font-size: .12rem;
            color: #ccc;
     }
</style>