<template>
    <div id="tab-bar">
      <div class="tab-bar-item">
          <img src="~@/assets/img/shouye.png" alt="首页">
          首页
      </div>
      <div class="tab-bar-item">
           <img src="~@/assets/img/feilei.png" alt="首页">
          分类
      </div>
      <div class="tab-bar-item">
          <img src="~@/assets/img/gouwu.png" alt="首页">
          购物
      </div>
      <div class="tab-bar-item">
          <img src="~@/assets/img/wode.png" alt="首页">
          我的
      </div>
    </div>
</template>
<script>
export default {
    name:"TabBar"
}
</script>
<style scoped>
 #tab-bar{
   display: flex;
   background-color: #f6f6f6;
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;

   box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.1);
 }
 .tab-bar-item{
   flex: 1;
   text-align: center;
   height: 49px;
 }
 .tab-bar-item img{
     width: 24px;
     height: 24px;

 }
</style>