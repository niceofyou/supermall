<template>
   <div class="detail-info">
        <div class="strat"></div>
        <div class="info-desc">{{ goodsinfo.desc}}</div>
        <div class="end"></div>
        <span class="info-key">{{goodsinfo.detailImage[0].key}}</span>
        <div>
          <div v-for="(item,index) of goodsinfo.detailImage[0].list" :key="index" class="info-img">
             <img :src="item" @load="imgload">
          </div>
        </div>
      
   </div> 
</template>

<script>

export default {
  name:"DetailGoodsInfo",
  props:{
    goodsinfo:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  data(){
    return{
      count:0,
      imglength:0
      
    }
  },
  methods:{
    imgload(){
       ++this.count
      if(this.count==this.imglength){
          this.$emit(detailrefresh)
      }
    },
    watch:{
      detailInfo(){
        this.imglength=this.goodsinfo.detailImage[0].list.length
      }
    }
  },
  created(){
    this.dImage=this.goodsinfo.detailImage
     
  }
}
</script>

<style scoped>
   .detail-info{
     color: #000;
   }
   .strat{
    width:80px;
    font-size: 30px;
    border-bottom:1px solid rgba(38, 38, 38,0.4);
    padding-bottom: 0px;
    position: relative;
    margin-left: 20px;
    margin-top: 18px;
   }
   .strat::before{
     content: " ";
     display: block;
     position: absolute;
     height: 4px;
     width: 4px;
     background-color: rgba(38, 38, 38,0.4);
     bottom:0px;
     left: 0px;

   }
   .end{
    width: 80px;
    font-size: 30px;
    border-bottom:1px solid rgba(38, 38, 38,0.4);
    padding-bottom: 0px;
    position: relative;
    margin-left:300px;
    margin-top: 10px;
   }
   .end::before{
     content: " ";
     display: block;
     position: absolute;
     height: 4px;
     width: 4px;
     background-color: rgba(38, 38, 38,0.4);
     bottom:0px;
     right: 0px;

   }
   .info-desc{
     height: auto;
     text-indent: 1em;
     margin-top:10px;
     font-size: 15px;

     /* border: 1px solid red; */
   }
   .info-key{
     font-size:17px;
     margin-left:20px ;
    
   }

   .info-img{
     margin-top: 10px;
   }
   .info-img img{
      width: 24.357em;
   }
</style>