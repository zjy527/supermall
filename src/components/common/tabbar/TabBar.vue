<template>
    <div id="tab-bar">
       <slot></slot>
    </div>
</template>
<script>

import TabBarItem from './TabBarItem'
export default {
    name:"TabBar",
    components:{
        TabBarItem 
    }
}
</script>
<style scoped>
 #tab-bar{
   display: flex;
   background-color: #ddf1f1;
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;
   box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.1);
 }
 </style>
