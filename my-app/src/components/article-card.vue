<template>
    <div class="article">
        <div class="title"> {{title}} </div>
        <div class="detail">{{con}}</div>
    </div>
    
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            required:true,
        },
        con:{
            type:String,
            required:true,
        },
    }
}
</script>
<style scoped>
    .article{
        border: 1px solid #d8d8d8;
        margin: .1rem 0 .2rem;
        padding: .15rem;
        border-radius: .02rem;
    }
    .article>.title{
            font-size: .17rem;
            font-weight: 500;
            line-height: .17rem;
            color: black;
            margin-bottom: .1rem;
            overflow: hidden;
            text-overflow: ellipsis;
    }
    .article>.detail {
        font-size: .12rem;
        line-height: .16rem;
        color: #aaa;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>