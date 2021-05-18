<template>
    <div>
        <nav-bar class="home-nav-color">
            <div slot="left">&lt;</div>
            <div slot="center">购物车</div>
            <div slot="right"></div>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>

    </div>
</template>
<script>
import NavBar from '../../components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'

import { getHomeMultidata } from '../../network/home.js'


export default {
    name: "Home",
    components:{
        NavBar,
        HomeSwiper
    },
    data(){
        return {
            banners: [],
            recommends: []
        }
    },
    created(){
        //1.请求多个数据
        getHomeMultidata().then(res => {
            //console.log(res);
            //this.result = res;
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommends.list;
        })
        //console.log(this.result);
    }
}
</script>

<style scoped>
.home-nav-color{
    background-color: var(--color-tint);
}
</style>