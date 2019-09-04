<template>
    <div>
        <headernav></headernav>
        <div class="a"></div>
        <logins></logins>
        <groupszujian :xiaozua="xiaozua"></groupszujian>
        <groupszujian :xiaozua="xiaozub"></groupszujian>
        <groupszujian :xiaozua="xiaozuc"></groupszujian>
        <downloadapp></downloadapp>
    </div>
</template> 
<script>
import headernav from '../components/headernav'
import logins from '../components/logins'
import groupszujian from '../components/groupszujian'
import downloadapp from '../components/downloadapp'
export default {
    data() {
        return {
            xiaozua:[{"head":"租房找室友","foot":"更多相关小组"}],
            xiaozub:[{"head":"来聊五块钱","foot":"来聊五块钱"}],
            xiaozuc:[{"head":"买买买","foot":"更多相关小组"}],
        }
    },
   components:{
       headernav,
       logins,
       groupszujian,
       downloadapp
   } ,
   created(){
       this.axios({
           method:"get",
           url:"/xiaozua",
       }).then((data)=>{
        this.xiaozua.push(data.data)

       }),
        this.axios({
           method:"get",
           url:"/xiaozub",
       }).then((data)=>{
        this.xiaozub.push(data.data)

       }),
        this.axios({
           method:"get",
           url:"/xiaozuc",
       }).then((data)=>{
        this.xiaozuc.push(data.data)

       })
   },
}
</script>
<style scoped>
    .a{
        margin-top:.48rem;
    }
</style>