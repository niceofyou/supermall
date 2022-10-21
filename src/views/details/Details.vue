<template>
  <div class="detail">
    <Scroll v-bind="{probeType:3}" class="content" ref="scroll" >
      <DetailNavbar />
      <DetailSwiper :dimg="topimg"></DetailSwiper>
      <DetailBaseInfo :goodinfo="goods"/>
      <DetailStoreInfo :storeinfo="store"></DetailStoreInfo>
      <DetailGoodsInfo :detailInfo="goodsInfo" @detailrefresh="drefresh"></DetailGoodsInfo>
    
  </Scroll>
  </div>
</template>
<script>
 import Scroll from 'components/common/scroll/Scroll.vue';
import DetailNavbar from './detailsChilrds/DetailNaVbar'
import DetailSwiper from './detailsChilrds/DetailSwiper.vue'
import DetailBaseInfo from './detailsChilrds/DetailBaseInfo.vue'
import DetailStoreInfo from './detailsChilrds/DetailStoreInfo.vue'
import DetailGoodsInfo from './detailsChilrds/DetailGoodsInfo.vue'
import {getDetails,Goods,Store} from 'network/details'


export default {
  name:'Details',
  components:{
    Scroll,
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailStoreInfo,
    DetailGoodsInfo
  },
  data(){
    return{
      iid:null,
      topimg:[],
      goods:{},
      store:{},
      detailInfo:{}
    }
  },
  methods:{
    drefresh(){
      this.$refs.scroll.refresh()
    }
  },

  created(){
    //获取商品id
    this.iid=this.$route.params.iid
    getDetails(this.iid).then((res)=>{
       const data=res.result
       console.log(data)
       this.topimg=data.itemInfo.topImages
       this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
       this.store=new Store(data.shopInfo)
       this.goodsInfo=data.detailInfo
      
    })
  }

  
}
</script>

<style scoped>
.detail{
  position: relative;
  z-index: 9;
  background-color: rgb(248, 249, 251);
  height: 100vh;
}
 .content{
  height:calc(100% - 44px);
 }
</style>