<template>
 <div class="good-item" @click="goodchilk">
     <img :src="gooditem.show.img" alt="" @load="imgload"> 
     <div class="goodsinfo">
       <p> {{gooditem.title}}</p>
       <span class="price">{{gooditem.price}}</span>
       <span class="collect">{{gooditem.cfav}}</span>
     </div> 
 </div>

</template>

<script>
import router from '@/router';

export default {
  props:{
    gooditem:{
      type:Object,
     default:{
      return:{}
     }
      
    }
  },
  methods:{
    imgload(){
      this.$bus.emit('imgloadeover')
    },
    goodchilk(){
      this.$router.push('/detail/'+this.gooditem.iid)
    }
  }
}
</script>

<style>
  .good-item{
    width: 46%;
    margin-bottom: 4px;

  }
  .good-item img{
    width: 100%; 
    height:200px;
  } 
   .goodsinfo{
     height: 50px;
     text-align:center;
    
   }
   .goodsinfo p{
      width:100%;
      height: 30px;
      line-height: 30px;
      font-size: 13px;
      overflow: hidden;
      text-overflow: ellipsis; /* 省略号 */ 
      white-space: nowrap;   /* nowrap:规定段落中的文本不进行换行 */
      text-indent: 2px;/*首行缩进 */
   }
   .goodsinfo .price{
     font-size: 13px;
     color: pink;
     margin-right: 6px;
   }
   .goodsinfo .collect{
     font-size: 13px;
     position: relative;
   
   }
   .goodsinfo .collect::before{
     content: '';
     position: absolute;
     left: -8px;
     top: 6px;
     width: 14px;
     height: 14px;
     background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
   
   }

</style>