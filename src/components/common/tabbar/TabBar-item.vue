<template>
    <div class="tabbar-item" @click="itemclick()">
      <div  v-if="!isactive"> <slot name="item-icon"></slot></div>
      <div v-else> <slot name="item-icon-active"></slot></div>
      <div :style="activestyle"> <slot name="item-text"></slot> </div>
    </div>   
</template>

<script>
import { stringLiteral } from '@babel/types'

export default {
  props:{
    path:stringLiteral,
    activeColor:{
      type:stringLiteral,
      default:'red'
    },
    
  },
  data(){
    return{
      // isactive:true
    }
  },
   computed:{
    isactive(){
      return this.$route.path.indexOf(this.path) !==-1
    },
    activestyle(){
      return this.isactive?{color:this.activeColor}:{}
    }
  },
  methods:{
    itemclick(){
      if(this.$route.path!==this.path){ 
        this.$router.push(this.path) 
        }
        
    }
  },
 
}
</script>

<style>
.tabbar-item{
flex: 1;
display:flex;
flex-direction: column;
 align-items: center;
justify-content: center;
color:rgb(41, 42, 43);

}
.tabbar-item i{
height: 25px;
line-height: 25px;
color:rgb(41, 42, 43); 
text-align: center;
font-size:22px
}
.tabbar-item ia{
height: 25px;
line-height: 25px;
color:rgb(218, 16, 12); 
text-align: center;
font-size:22px
}


 .text{
height: 24px;
line-height: 24px;
text-align: center;
font-size:14px
}

.tabbar-item .active{
 color:red
}

</style>