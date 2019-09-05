<template>
    <div>
         <el-rate
          v-model="value"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
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
    margin-right: -4px;
     }
</style>