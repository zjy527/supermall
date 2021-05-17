<template>
    <div>
        <nav-bar>
            <div slot="left">&gt;</div>
            <div slot="center">购物车</div>
            <div slot="center">返回</div>
        </nav-bar>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    name: "Home",
    components:{
        NavBar
    }
}
</script>

<style scoped>

</style>