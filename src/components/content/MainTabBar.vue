<template>
        <tab-bar>
       <tab-bar-item path="/home" activeColor = "red">
          <img slot="item-icon" src="../../assets/img/tabbar/shouye.png" alt="12">
           <img slot="item-icon-active" src="../../assets/img/tabbar/shouye-active.png" alt="12">
          <div slot="item-text" >首页</div>
       </tab-bar-item>
       <tab-bar-item  path="/category" activeColor = "red">
          <img  slot="item-icon" src="../../assets/img/tabbar/fenlei.png" alt="12">
          <img  slot="item-icon-active" src="../../assets/img/tabbar/fenlei-active.png" alt="12">
          <div slot="item-text" >分类</div>
       </tab-bar-item>
       <tab-bar-item path="/cart"  activeColor = "red">
          <img slot="item-icon" src="../../assets/img/tabbar/gouwu.png" alt="12">
          <img slot="item-icon-active" src="../../assets/img/tabbar/gouwu-active.png" alt="12">
          <div slot="item-text">购物</div>
       </tab-bar-item>
       <tab-bar-item path="/profile" activeColor = "red">
          <img  slot="item-icon" src="../../assets/img/tabbar/wode.png" alt="12">
          <img  slot="item-icon-active" src="../../assets/img/tabbar/wode-active.png" alt="12">
          <div  slot="item-text" >我的</div>
       </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBar from '../common/tabbar/TabBar'
import TabBarItem from '../common/tabbar/TabBarItem'
export default {
    name:"MainTabBar",
    components:{
        TabBar,
        TabBarItem
    }
}
</script>
