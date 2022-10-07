<template>
   <div class="good-list">
     <Gooditem v-for="(item,index) of goods" :key="index" :gooditem="item"></Gooditem>
  </div>
</template>

<script>
  import Gooditem from './Goodlist-item.vue'
  export default {
   components:{
    Gooditem
   },
   props:{
    goods:{
      type:Array,
      default:{
        return:[]
      }
    }
   }
}
</script>

<style>
  .good-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
  }
</style>