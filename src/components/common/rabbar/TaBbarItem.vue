<template>
    <div class="tab-bar-item">
        <slot name="item-icon"></slot>
        <slot name="item-text"></slot>
    </div>
</template>
<script>
export default {
    name:"TaBbarItem"
}
</script>

<style scoped>
 #tab-bar{
   display: flex;
   background-color: pink;
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;
   
 }
 .tab-bar-item{
   flex: 1;
   height: 49px;
   vertical-align: baseline;
   
 }
 .tab-bar-item img{
     width: 24px;
     height: 24px;

 }
</style>