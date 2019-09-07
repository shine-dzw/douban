<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,p,ul,ol,li,dl,dd,h1,h2,h3,h4,h5,h6,hr,input,td,select,textarea{
	margin:0;
	padding: 0;
}
html{
  font-size:26.67vw!important;
  /* font-size: 26.67vw; */
}
a{
  text-decoration: none;
}
li,ol{
  list-style: none;
}
/* 首页详情后台数据图片样式 */
/* .content>.middle>img{
   width: 98%;
   height: auto;
} */
</style>
