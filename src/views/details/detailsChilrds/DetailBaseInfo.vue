<template>
  <div v-if="Object.keys(goodinfo).length!==0"  class="good-info">
       <div class="info-title">{{goodinfo.title}}</div>
       <div class="info-price">
         <span class="n-price">&yen;{{goodinfo.realPrice}}</span>
         <span class="o-price">{{goodinfo.oldPrice}}</span>
         <span v-if="goodinfo.discount" class="d-price">{{goodinfo.discount}}</span>
       </div>
       <div class="info-onthers">
         <span>{{goodinfo.columns[0]}}</span>
         <span>{{goodinfo.columns[1]}}</span>
         <span>{{goodinfo.services[goodinfo.services.length-1].name}}</span>
       </div>
       <div class="info-services">
         <div v-for="index of goodinfo.services.length-1" :key="index" class="services">
           <img :src="goodinfo.services[index-1].icon">
           <span>{{goodinfo.services[index-1].name}}</span>
         </div>
       </div>
  </div>
</template>

<script>
export default {
  props:{
    goodinfo:{
      type:Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style scoped>
.good-info{
  
   margin-top:5px;
  
   
}
   .info-title{
     font-size:19px;
     text-indent:0.5em;
     font-weight:550;
     margin-top: 8px;
     margin-bottom: 10px;
     margin-left: 6px;
     margin-right: 6px;
   }
   .info-price{
    margin-bottom:15px;
   }
   .n-price{
     color: rgb(248, 136, 154);
     font-size:30px ;
     margin-left:8px;
     margin-right:8px;
   }
   .o-price{
     /* 删除线 */
     text-decoration: line-through;
     color: rgb(127, 125, 125);
     margin-right: 6px;
   }
   .d-price{
    display: inline;
    height: 20px;
    width: 60px;
    background-color: rgb(248, 136, 154);
    border-radius:6px;
    text-align:center;
    color:white;
   
   }
   .info-onthers{
    display: flex;
    justify-content:space-between;
    box-shadow:0.2px 1px rgba(221, 219, 219,0.5);
    padding-bottom:4px;
    color: rgb(161, 162, 164);
    font-size: 14px;
   }
   .info-onthers span{
     flex:1 ;
     text-align:left;
   }
   .info-services{
     display: flex;
     margin-top:20px;
     box-shadow:4px 4px rgba(221, 219, 219,0.3);
     padding-bottom: 25PX;
   }
   .services{
     flex:1;
     text-align: center;
     height: 20px;
     line-height: 20px;
     text-align: left;
   }
   .services img{
     height:12px;
     width:12px ;
    
   }
   .services span{
    font-size:15px
   }
</style>