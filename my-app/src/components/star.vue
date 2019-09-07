<template>
    <div>
         <el-rate
          v-model="value"
          disabled
          text-color="#aaaaaa" 
          show-text
          :texts="texts">
        </el-rate>
     </div>
</template> 
<script>
  export default {
    data() {
      return {
        // values:0,
        texts:[
          this.num,
          this.num,
          this.num,
          this.num,
          this.num,
        ]
      }
    },
    props:{
        num:{
            required:true,
        }
    },
    created() {
      this.value=this.num/2
    },
  }
 </script>
<style >
    .el-rate__icon {
    margin-right: -3.5px;
     }
</style>