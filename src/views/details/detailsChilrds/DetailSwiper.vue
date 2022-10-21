<template>
  <div>
    <swiper :slideList="dimg" :currentIndex="dimg.length"  v-slot="slotProps"  class="swiper" >
      <img :src="slotProps.item" alt="">
    </swiper>
    
  </div>
</template>

<script>
import swiper from 'components/common/swiper/Swiper.vue'
export default {
  components:{
    swiper
  },
  data(){
    return{
      A:null
    }
  },
  props:{
    dimg:{
     type:Array,
     default(){
       return[]
     }
    }
  }
 
  
}



</script>

<style scoped>
 .swiper {
  height:200px;
  width:390px;
  overflow: hidden;

 }
 .swiper img{
  height:300px;
  width:390px;

 }

 
</style>