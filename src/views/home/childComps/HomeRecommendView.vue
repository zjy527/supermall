<template>
    <div class="recommend">
        <div v-for="(item,index)  in recommends" :key="index" class="recommend-item">
            <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
        </a>
        </div>
        

    </div>
</template>
<script>
export default {
    name:"HomeRecommendView",
    props:{
        recommends:{
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
.recommed{
    display: flex;
    font-size: 12px;
    width: 100%;
    text-align: center;
    padding: 15px 0 20px;
    border-bottom: 10px solid #eee;

 
}
.recommed-item{
    flex:1;
}
.recommed-item img{
    width: 70px;
    height: 70px;
    margin-top: 10px;
}
</style>