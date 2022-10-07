<template>
   <div class="recommend">
      <div class="recommend-item" v-for="(item,index) of recommend" :key="index">
         <a :href="item.link" >
            <img :src="item.image" alt="">
         </a>
         <div>{{item.title}}</div>

      </div>

      
      
   </div>
</template>

<script>
export default {
   props:{
      recommend:{
        type:Array,
        default(){
           return[]
        },
      }
   }
}
</script>

<style>
  .recommend{
    width: 100%;
    padding: 10px 0px 25px;
    display: flex;
    text-align: center;
    border-bottom: 8px solid rgb(240, 238, 238);
    font-size: 12px;
  }
  .recommend-item{
     flex:1
  }

  .recommend-item img{
     height: 65px;
     width: 65px;
     margin-top: 10px;
  }
</style>