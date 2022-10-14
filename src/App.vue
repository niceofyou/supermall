<template>
<div id="app">
  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive exclude="Details">
        <component :is="Component" />
      </keep-alive>
    </transition>
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
