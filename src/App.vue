<template>
<div id="app">
  <router-view >
  </router-view>
  <maintabbar></maintabbar>
 
</div>
</template>
<script>

import maintabbar from 'components/content/MaintabBar.vue'
export default {
  components:{
      maintabbar
  }
}
</script>


<style>

 @import "./assets/css/base.css";
 @import "./assets/img/font_3330186_f6jeob7tln/iconfont.css"; 


</style>
