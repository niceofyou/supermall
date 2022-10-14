<template>
  
     <NavBar>
      <template v-slot:left >
        <div class="black" @click="blackclick">
         <img src="~assets/img/common/back.svg" >
        </div>
      </template>
      <template v-slot:center >
        <div class="litle">
          <div v-for="(item,index) of title" 
          :key="index" 
          class="litle-item" 
          :class="{active:count === index}" 
          @click="litleclick(index)">
          {{item}}
          </div>
        </div>
       </template>
     </NavBar>
    

</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  components:{
    NavBar
  },
 
  data(){
    return{
      title:['商品','参数','评论','推荐'],
      isactive:false,
      count:0
    }
  },
  methods:{
    litleclick(index){
      this.count=index
    },
    blackclick(){
      this.$router.go(-1)
    }
  }
}
</script>

<style>
 .black img{
  margin-top: 12px;
 }
.litle{
  display:flex;
  flex-direction: row;
}
.litle-item{
  width: 50px;
  flex: 1;
  size:14px
}
.active{
  color:pink;

}
</style>