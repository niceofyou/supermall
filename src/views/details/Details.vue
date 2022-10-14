<template>
  <div class="detail">
    <DetailNavbar />
    <DetailSwiper :dimg="topimg"></DetailSwiper>
    <DetailGoodInfo :goodinfo="goods"/>
    <DetailStoreInfo :storeinfo="store"></DetailStoreInfo>
  </div>
</template>

<script>
import DetailNavbar from './detailsChilrds/DetailNaVbar'
import DetailSwiper from './detailsChilrds/DetailSwiper.vue'
import DetailGoodInfo from './detailsChilrds/DetailGoodInfo.vue'
import DetailStoreInfo from './detailsChilrds/DetailStoreInfo.vue'
import {getDetails,Goods,Store} from 'network/details'

export default {
  name:'Details',
  components:{
    DetailNavbar,
    DetailSwiper,
    DetailGoodInfo,
    DetailStoreInfo
  },
  data(){
    return{
      iid:null,
      topimg:[],
      goods:{},
      store:{}
    }
  },

  created(){
    //获取商品id
    this.iid=this.$route.params.iid
    getDetails(this.iid).then((res)=>{
      console.log(res)
       const data=res.result
       this.topimg=data.itemInfo.topImages
       this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
       this.store=new Store(data.shopInfo)
    })
  }

  
}
</script>

<style>

</style>