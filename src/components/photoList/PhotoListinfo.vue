<template>
    <div class="photoListinfo">
        <h1>{{ photoListinfo.title }}</h1>
        <p>
            <span>发表时间:{{ photoListinfo.data | time }}</span>
            <span>点击次数：{{ photoListinfo.click}}次</span>
        </p>
        <div class="imgList">
            <vue-preview :slides="listImg" @close="handleClose"></vue-preview>
            <!-- <img class="preview-img" v-for="(item, index) in listImg" :src="item.src" height="100" @click="$preview.open(index, listImg)" :key='item.src'> -->
        </div>   
        <Comment></Comment>
    </div>
</template>
<script>
import Comment from '../comment/comment'
export default {
    data(){
        return{
            photoListinfo:"",
            listImg:[]
        }
    },
    components:{
        Comment
    },
    created(){
        this.getphotoListinfo();
    },
    methods:{
        getphotoListinfo(){
            this.$axios.get("../../static/photoListinfo.txt").then(res=>{
                res.data.img.forEach(item1 => {
                    item1.src=item1.src,
                    item1.msrc=item1.src,
                    item1.w=600,
                    item1.h=400
                });
                this.listImg = res.data.img;
                this.photoListinfo = res.data;
            })
        },
        handleClose () {
            console.log('close event')
        }
    }
}
</script>
<style lang="scss" scoped>
.photoListinfo{
    padding:0px 3px;
    h1{
        font-size:18px;
        line-height: 30px;
        color: red;
    }
    p{
        height:30px;
        border-bottom: 1px #afabab solid;
        display: flex;
        justify-content: space-between;
    }
    .content{
        text-align: left;
    }
    .imgList{
        width:100%;
        height:200px;
    }
}
</style>