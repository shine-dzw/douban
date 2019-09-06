<template>
    <div>
         <el-rate
          v-model="value"
          disabled
          show-score
          score-template="{value}"
          text-color="#ff9900" >
        </el-rate>
     </div>
</template> 
<script>
  export default {
    data() {
      return {
        values:0,
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