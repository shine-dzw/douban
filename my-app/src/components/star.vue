<template>
    <div class="starbox">
        <span  :class="newnum>1?'yellowstar':'starhalf'"></span>
        <span  :class="newnum>2?'yellowstar':'starhalf'"></span>
        <span  :class="newnum>3?'yellowstar':'starhalf'"></span>
        <span  :class="newnum>=4.5?'yellowstar':'starhalf'"></span>
        <span  :class="fun()"></span>
    </div>
</template>
<script>
export default {
    data(){
        return{
           newnum:0,
        }
    },
    props:{
        num:{
            // type:Number,
            required:true,
        }
    },
    created() {
    //    fun(){
    //         this.num=this.num/2
    //     }
            this.newnum=this.num/2

    },
        
    
    methods: {
        
        fun(){
            if(this.newnum<=4.5){
                    return "zerostar"
            }else if(4.5<this.newnum<5){
                    return "starhalf"

            }else{
                    return "yellowstar"                
            }
        }
        
    },
}
</script>
<style scoped>
    .starbox{
        display: inline-block;
    }
    .yellowstar{
        background: url(../../static/img/1.png)no-repeat;
    }
    .starhalf{
        background: url(../../static/img/2.png)no-repeat;
    }
    .zerostar{
        background: url(../../static/img/3.png)no-repeat;
    }
    .starbox>span{
        display: inline-block;
        width: 13px;
        height: 13px;
        background-size: 13px 13px;
    }
</style>