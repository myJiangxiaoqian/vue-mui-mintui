<template>
    <!-- 轮播图 -->
    <div class="lunbo">
        <mt-swipe :auto="4000" >
        <mt-swipe-item v-for="item in imgurl" :key="item.src"><img :src="item.src" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props:["imgurl"]
}
</script>
<style lang="scss" scoped>
.lunbo{
    width:100%;
    height: 230px;
    .mint-swipe{
        width:100%;
        height:230px;
    }
}
</style>