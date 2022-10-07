<template>
     <TabBar>
          <TabBaritem path="/home">
            <template v-slot:item-icon>
                <i class="iconfont icon-shouye"></i>
            </template>
             <template v-slot:item-icon-active>
                <ia class="iconfont icon-shouye"></ia>
            </template>
             <template v-slot:item-text>
                <div class="text">首页</div> 
            </template>
        </TabBaritem>
         <TabBaritem path="/category">
            <template v-slot:item-icon>
                <i class="iconfont icon-fukuan "></i>
            </template>
             <template v-slot:item-icon-active>
                <ia class="iconfont icon-fukuan"></ia>
            </template>
             <template v-slot:item-text>
                <div class="text">分类</div> 
            </template>
        </TabBaritem>
        <TabBaritem path="/cart">
            <template v-slot:item-icon>
                <i class="iconfont icon-yuanxingxuanzhong"></i>
            </template>
             <template v-slot:item-icon-active>
                <ia class="iconfont icon-yuanxingxuanzhong"></ia>
            </template>
             <template v-slot:item-text>
                <div class="text">购物车</div> 
            </template>
        </TabBaritem>
        <TabBaritem path="/profile">
            <template v-slot:item-icon>
                <i class="iconfont icon-wode"></i>
            </template>
             <template v-slot:item-icon-active>
                <ia class="iconfont icon-wode"></ia>
            </template>
             <template v-slot:item-text>
                <div class="text">我的</div> 
            </template>
        </TabBaritem>
        
    </TabBar>
    
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBaritem from 'components/common/tabbar/TabBar-item.vue'
export default {
   components:{
       TabBar,
       TabBaritem
   }
}
</script>

<style>

</style>