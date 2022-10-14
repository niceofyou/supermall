<template>
  <div class="tabcontorl">
    <div 
      class="tabcontorl-item"
     :class="{active: index == isactive}"
     v-for="(item,index) of tabcontorl"  :key="index"
     @click="ctbt(index)">
      <span > {{item}}</span>
     </div>
  </div>
</template>

<script>
export default {
  props:{
    tabcontorl:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      isactive:0
    }
    
  },
  methods:{
    ctbt(index){
      this.isactive=index,
      this.$emit('tabclick',index)
    
    }
  },
}
</script>

<style>
 .tabcontorl{
   display: flex;
   height: 44px;
   line-height: 44px;
   font-size: 14px;
   text-align: center;
   background-color: white;
 }
 .tabcontorl-item{
   flex: 1;
 }
 span{
  padding: 6px;
 }

 .active span{
  color: pink;
  border-bottom: 2px solid pink;
 }
</style>