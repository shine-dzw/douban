<template>
    <div>
        <headernav></headernav>
        <xiangqingbg></xiangqingbg>
        <logins></logins>
        <div class="content-list">
            <guangbozujian :guangbo="guangbo"></guangbozujian>
        </div>
       <a href="#" class="list-link">显示更多广播</a>
        <downloadapp></downloadapp>
    </div>
</template>
<script>
import headernav from '../components/headernav'
import xiangqingbg from '../components/xiangqingbg'
import logins from '../components/logins'
import guangbozujian from '../components/guangbozujian'
import downloadapp from '../components/downloadapp'
export default {
    data() {
        return {
            guangbo:[
                {"username":"aaa","time":"2017-03-01 19:30:41","title":" 豆瓣App 4.12.0 主要更新 ",
                "con":"可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...",
                "num1":1,"num2":2,"num3":3},
                 {"username":"aaa","time":"2017-03-01 19:30:41","title":" 豆瓣App 4.12.0 主要更新 ",
                "con":"可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...",
                "num1":1,"num2":2,"num3":3},
                 {"username":"aaa","time":"2017-03-01 19:30:41","title":" 豆瓣App 4.12.0 主要更新 ",
                "con":"可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...",
                "num1":1,"num2":2,"num3":3},
                ]
        }
    },
    components:{
        headernav,
        xiangqingbg,
        logins,
        guangbozujian,
        downloadapp
    }
}
</script>
<style scoped>
    .list-link{
            display: block;
            padding: .15rem 0;
            font-size: .16rem;
            line-height: .18rem;
            text-align: center;
            color: #42bd56;
    }
</style>