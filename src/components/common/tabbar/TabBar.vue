<template>
   <div id="tabbar">
      <slot></slot>
  </div>
</template>

<script>

export default {

}
</script>

<style>
 #tabbar{
 display: flex;
 background-color: rgb(236, 237, 238);
 height: 50px;
 /* fixed固定定位 */
 position: fixed;
 left: 0;
 right: 0;
 bottom: 0;
 box-shadow: 0px -3px 1px rgba(231, 229, 229, 0.8);
}


</style>