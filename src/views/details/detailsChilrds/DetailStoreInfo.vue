<template>
   <div class="store-info"> 
     <div class="info-name">
       <img :src="storeinfo.logo">
       <span class="name">{{storeinfo.name}}</span>
     </div>
     <div class="info-total">
        <div class="total">
           <span class="count">{{storeinfo.cSells}}</span>
           <span class="text1">总销量</span>
        </div>
        <div class="total">
           <span class="count">{{storeinfo.cGoods}}</span>
           <span class="text1">全部宝贝</span>
        </div>
     </div>
     <div class="info-score">
       <div v-for="(item,index) of storeinfo.score" :key="index" class="score">
         <span class="score-name">{{item.name}}</span>
         <span class="score-score"  :style="item.isBetter?{color:'red'}:{}">{{item.score}}</span>
         <div class="score-state">
           <span  :class="betterstyle(item.isBetter)">{{bettertext(item.isBetter)}}</span>
        </div>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  props:{
    storeinfo:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  data(){
    return{
      state:'低'
    }
  },
  computed:{
    bettertext(){
     return (b)=>(b?'高':'低')
    },
    betterstyle(){
      return (b)=>(b?'score-better':'score-nobetter')
      
    }
  }
}
</script>

<style scoped>
  .store-info{
    height:700px;
    margin-top:35px;
  }
  .info-name{
    display: flex;
    margin-left: 10px;
    height: 60px;
    line-height: 60px;
    margin-bottom: 30px;
  }
  
  .info-name img{
     height:60px;
     width: 60px;
     border-radius:50% ;
     border: 1px solid rgb(92, 90, 90);
     color: rgb(126, 123, 123);
     margin-right: 7px;
  }

  .info-name .name{
     size: 20px;
     margin-left:5px;
  }

  .info-total{
     display: flex;
     width:180px;
     text-align: left;
      border-right: 1px solid rgba(70, 69, 69,0.4);
      text-align: center;
      float: left;
      margin-top: 20px;
      color: #000;
    
  }
  .total{
    flex: 1;
    display: flex;
    flex-direction: column;
    width:150px;
   
    
  }
  .total span{
    flex: 1;
   
  }
  .total .count{
    font-size:20px;
    margin-bottom: 5px;
  }

  .total .text1{
    font-size:15px
  }
  .info-score{
    width: 200px;
    float:right;
    font-size:15px;
    margin-right: 4px ;
    text-align: center;
    
  }
  .score{
    height: 30px;
    display: flex;
    line-height:30px ;
    margin-bottom: 2px;
    line-height:20px ;
    text-align: center;
  }
  .score .score-name{
    flex: 2;
    
  }
  .score .score-score{
    flex: 1;
    color:rgb(16, 136, 16);
   
  }
  .score .score-state{
    flex: 1;
    color:white;
  }

  .score .score-better{
    background-color: red;
    width: 10px;
  }
  .score .score-nobetter{
    background-color: green;
    width: 10px;
  }


</style>