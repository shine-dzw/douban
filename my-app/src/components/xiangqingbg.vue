<template>
    <div class="xiangqingbg">
        <div class="banner-bg">
            <img src="../../static/img/4.jpg">
        </div>
        <div class="content">
            <span class="title">打开App, 浏览更多</span>
            <div class="bannerbut">
                <button class="download">极速下载</button>
                <button class="open">打开</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .xiangqingbg{
        margin-top:.48rem;
        height: .8rem;
        position: relative;
    }
    .banner-bg{
        position: absolute;
        width: 100%;
    }
    img{
        height: .8rem;
     }
     .content{
        height: .8rem;
         position: absolute;
         display: flex;
         align-items: center;
         width: 98%;
         justify-content:space-between;
     }
     .content>.title{
         padding-left:.35rem;
        color: #2ca532;
     }
     .content>.bannerbut>button{
        display: inline-block;
        width: auto;
        padding: .03rem .14rem;
        font-size: .13rem;
        font-weight: 700;
        line-height: .2rem;
        border: .01rem solid #42bd56;
        border-radius: .03rem;
     }
     .download{
             color: #fff;
             background: #42bd56;
     }
     .open{
             background: transparent;
             color: #42bd56;
            
     }
</style>