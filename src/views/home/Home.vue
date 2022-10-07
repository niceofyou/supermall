<template>
  <div id="home">
    <!-- 1：标题 -->
    <NavBar class="home-bar"> 
     <template v-slot:center>
            <div>购物车</div>
        </template>
    </NavBar>
    <!--  scroll 滑动组件 -->
    <scroll class="content" 
       ref="scroll" 
       v-bind="{probeType:3}"
        @scroll="contentscroll"
        @pullingUp="pullingloade">
      <!-- 2：banner -->
      <Swiper :slideList="banners" :currentIndex="banners.length"></Swiper>
      <!-- 3：推荐 -->
      <RecommendView :recommend="recommends"></RecommendView>
      <!-- 4：本周流行 -->
      <FeatureView ></FeatureView>
      <!--5：商品展示 -->
      <TabContorl class=tabcontorl :tabcontorl="['流行', '新款', '精选']" @tabclick="tabCclick"></TabContorl>
      <GoodList :goods="goods[goodstype].list"></GoodList> 
    </scroll>
   <Backtop @click.native=" backtop" v-show="isshowtop"></Backtop>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue';
  import Swiper from 'components/common/swiper/Swiper.vue';
  import TabBarItem from 'components/common/tabbar/TabBar-item.vue';
  import GoodList from 'components/content/good/GoodList.vue';
  import TabContorl from 'components/common/tabcontorl/TabContorl.vue';
  import Scroll from 'components/common/scroll/Scroll.vue';
  import Backtop from 'components/content/backtop/Backtop.vue';
  import RecommendView from './ChilredCompoents/RecommendView.vue';
  import FeatureView from './ChilredCompoents/FeatureView.vue';

  import {HomeMultidata,HomeGoods} from 'network/home.js';



export default {
  components:{
    NavBar,
    Swiper,
    TabBarItem,
    RecommendView,
    GoodList,
    TabContorl,
    Scroll,
    Backtop,
    FeatureView,
    Scroll,
    Scroll,
   
  },
  data(){
    return{
      banners:[],
      recommends:[],
      tabtilte:['流行','新款','精选'],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}, 
      },
      goodstype:'pop',
      isshowtop:false,
      isPullUpLoad: false
    }
    
  },

 // 1.请求网络数据
  created() {
      this.getbanner(),
      this.getgoods('pop'),
      this.getgoods('new'),
      this.getgoods('sell')

  },

  methods:{
     //其他方法，
     tabCclick(index){
       switch(index){
         case 0:
           this.goodstype='pop'
           break
         case 1:
           this.goodstype='new'
           break
         case 2:
           this.goodstype='sell'
           break
         

       }
      //  this.goodsindex=index
    },
    backtop(){
      console.log('backtop')
      this.$refs.scroll.scrollTo(0,0)
    },
       // 隐藏与显示top按钮
    contentscroll(position){
       this.isshowtop=(-position.y)>1000
    },
     //下拉加载更多
    pullingloade(){
      console.log( '下拉加载更多')
      this.isPullUpLoad = true
      this.getgoods(this.goodstype)
      this.$refs.scroll.scroll.refresh()
      this.isPullUpLoad = false

     
    },
    //网络请求相关方法，
    getbanner(){
      HomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
    },
    getgoods(type){
      const page=this.goods[type].page+1
      HomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
        this.$refs.scroll.scroll.finishPullUp()
      })
    },
    tabclick(){

    }

  }
}
</script>

<style scoped>
  /* scoped设置作用域，使其下面样式只在home中使用 */
 
.home-bar{
   background-color: pink;
   color:white; 
   background-color: var(--color-tint);
   position:fixed;
   left: 0;
   right: 0;
   top: 0;
   z-index: 9;
   height: 44px;
   
 }
 .content{
   position: absolute;
   top:44px;
   bottom: 50px; 
   right: 0px;
   left: 0px;
   overflow: hidden;
   
  
 }
 .tabcontorl{ 
    position: sticky;
    top: 44px;
    z-index: 9;
 }
</style>