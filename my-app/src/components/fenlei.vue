<template>
    <div class="typeaaa">
        <h2>分类浏览</h2>  
        <div class="content">
            <ul class="type-list">
                 <li v-for="(v,i) in fenlei" :key="i">
                     <a href="#">{{v.title}}</a>
                     <span></span>
                </li>
            </ul>    
        </div>      
    </div>
</template>
<script>
export default {
    props:{
        fenlei:{
            // type:object,
            require:true,
        }
    }
}
</script>
<style scoped>
    h2{
        height: .26rem;
        line-height: .26rem;
        padding: 0 .16rem;
        display: inline-block;
        font-size: .16rem;
        font-weight: 400;
        color: #111;
    }
    .type-list{
        margin:.16rem 0 0 .16rem;
    }
    .content>.type-list>li{
        float: left;
        width: 50%;
        height: .42rem;
        line-height: .42rem;
        box-sizing: border-box;
        border-top: .01rem solid #eee;
        border-right: .01rem solid #eee;
        font-size: .16rem;
        padding-right: .18rem;
    }
    .type-list li a{
        color: #42bd56;
    }
    .type-list li span{
        float: right;
        /* display: inline-block; */
        width: .08rem;
        height: .08rem;
        color: #ccc;
        border-bottom: .01rem solid #ccc;
        border-right: .01rem solid #ccc;
        margin-top: .15rem;
        transform: rotate(-45deg);
}
</style>