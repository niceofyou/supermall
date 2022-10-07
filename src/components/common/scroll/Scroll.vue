<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import PullUp from '@better-scroll/pull-up'
  BScroll.use(PullUp)

 export default {
  data(){
    return{
      scroll:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    }

  },

  mounted(){
     // 1:创建scoll对象
    this.scroll=new BScroll(this.$refs.wrapper,{
      click:true,
      observeDOM:true,
      probeType:this.probeType,
      pullUpLoad:true
    }),
    // 2:监听滚动
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    }),
     // 3:监听下拉加载更多
     this.scroll.on('pullingUp',()=>{
     
      this.$emit('pullingUp')
     })
  },
  methods:{
    scrollTo(x,y,time=400){
      this.scroll.scrollTo(x,y,time);
    }
      
    
  },

}
</script>

<style>

</style>