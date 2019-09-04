<template>
    <div class="group">
        <div class="header">
            <h2>{{xiaozua[0].head}}</h2>
        </div>
        <ul class="content">
            <li v-for="(v,i) in xiaozua[1]" :key="i">
                <a href="#">
                    <div class="group-meta">
                        <img :src="v.images.small" alt="">
                        <p>{{v.title}}</p>
                        <span class="group-num">{{v.group_member}}人</span>
                    </div>
                    <div class="group-topic">
                        <span>{{v.group_topic.time}}</span>
                        <span>{{v.group_topic.title}}</span>
                    </div>
                </a>
            </li>
        </ul>
        <a class="list-link">{{xiaozua[0].foot}}</a>
    </div>
</template>
<script>

export default {
    props:{
        xiaozua:{
            required:true,
        }
    },
    created(){
        console.log(this.xiaozua)
    },
}
</script>
<style scoped>
    .group{
        margin-left: .18rem;
        padding-top: .14rem; 
    }
    .header>h2{
        font-size: .16rem;
        font-weight: 400;
        color: #111;
    }
    .content>li{
        border-bottom: 1px solid #f2f2f2;
        overflow: hidden;
    }
     .content a {
        display: block;
        padding: .15rem .18rem .15rem 0;
        }
    .content .group-meta{
        display:flex ;
     }
   
    .group-meta>p{
        color: #111;
        font-size: .18rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: .4rem;
        flex: 1;
        padding: 0 .1rem;
    }
    .content .group-num{
            color: #ccc;
            font-size: .15rem;
            margin-top: .1rem;
    }
    .group-topic{
         display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        margin-top: .1rem;
    }
    .group-topic>span{
        font-size: .15rem;
        color: #aaa;
     }
     .list-link {
    display: block;
    margin-bottom: .3rem;
    padding: .15rem 0;
    font-size: .16rem;
    line-height: .18rem;
    text-align: center;
    color: #42bd56;
}
</style>