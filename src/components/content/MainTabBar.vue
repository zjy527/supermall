<template>
        <tab-bar>
       <tab-bar-item path="/home" activeColor = "blue">
          <img slot="item-icon" src="../../assets/img/shouye.png" alt="12">
           <img slot="item-icon-active" src="../../assets/img/shouye-active.png" alt="12">
          <div slot="item-text" >首页</div>
       </tab-bar-item>
       <tab-bar-item  path="/category" activeColor = "blue">
          <img  slot="item-icon" src="../../assets/img/fenlei.png" alt="12">
          <img  slot="item-icon-active" src="../../assets/img/fenlei-active.png" alt="12">
          <div slot="item-text" >分类</div>
       </tab-bar-item>
       <tab-bar-item path="/cart"  activeColor = "blue">
          <img slot="item-icon" src="../../assets/img/gouwu.png" alt="12">
          <img slot="item-icon-active" src="../../assets/img/gouwu-active.png" alt="12">
          <div slot="item-text">购物</div>
       </tab-bar-item>
       <tab-bar-item path="/profile" activeColor = "blue">
          <img  slot="item-icon" src="../../assets/img/wode.png" alt="12">
          <img  slot="item-icon-active" src="../../assets/img/wode-active.png" alt="12">
          <div  slot="item-text" >我的</div>
       </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBar from './common/tabbar/TabBar'
import TabBarItem from './common/tabbar/TabBarItem'
export default {
    name:"MainTabBar",
    components:{
        TabBar,
        TabBarItem
    }
}
</script>
