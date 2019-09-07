<template>
    <div>
        
       <headernav></headernav>
        <div class="index-view">
            <subnav></subnav>
            <!-- <div v-for="(v,i) in arr" :key="i"> -->
                <img src="../../static/img/loading_green.c0f9be0.gif" v-if="arr.length<=0" alt="">
                <div v-else> 
                  <shouyelist v-for="(v,i) in arr" :key="i" :arr="v" :title="v.title" :imageurl="v.image" :content="v.content"></shouyelist>
                </div>
            <!-- </div> -->
         </div>
    </div>
</template>
<script>
import headernav from '../components/headernav'
import subnav from '../components/subnav'
import shouyelist from '../components/shouyelist'
export default {
    data(){
        return{
            arr:[],
            localtoken:'',
            }
    },
    components:{
        headernav,
        subnav,
        shouyelist,
    },
    created(){
        setTimeout(()=>{
            this.axios({
            method:"get",
            url:"/shouye",
        }).then((data)=>{
            // console.log(data.data)
            this.arr=data.data
            console.log(this.arr)
            // console.log(this.arr[2].content)

        })
        },3000)
     },
}
</script>
<style scoped>
    .index-view{
        margin-top: .48rem; 
    }
    img{
        display: inline-block;
        margin:0 1.4rem;
    }
</style>