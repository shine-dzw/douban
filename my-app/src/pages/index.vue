<template>
    <div>
        
       <headernav></headernav>
        <div class="index-view">
            <subnav></subnav>
            <div v-for="(v,i) in arr" :key="i">
                
                  <shouyelist :title="v.title" :imageurl="v.image" :content="v.content"></shouyelist>
            </div>
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
            arr:[]
            }
    },
    components:{
        headernav,
        subnav,
        shouyelist,
    },
    created(){
        this.axios({
            method:"get",
            url:"/shouye",
        }).then((data)=>{
            // console.log(data.data)
            this.arr=data.data
            console.log(this.arr)
            // console.log(this.arr[2].content)

        })
    },
}
</script>
<style scoped>
    .index-view{
        margin-top: .48rem; 
    }
</style>