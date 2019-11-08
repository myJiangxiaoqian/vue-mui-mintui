<template>
    <div class="newsinfor">
        <h1>{{ newsInforList.title }}</h1>
        <p>
            <span>发表时间:{{ newsInforList.data | time }}</span>
            <span>点击次数：{{ newsInforList.click}}次</span>
        </p>   
        <div class="content" v-html="newsInforList.content"></div>
        <Comment></Comment>
    </div>
</template>
<script>
import Comment from '../comment/comment'
export default {
    data(){
        return{
            id:this.$route.params.id,
            newsInforList:''
        }
    },
    components:{
        Comment
    },
    methods:{
        getNewsInforList(){
            this.$axios.get('../../static/newsInforList.txt').then(res=>{
                this.newsInforList = res.data
                // console.log(res.data)
            })
        }
    },
    mounted(){
        this.getNewsInforList();
    }
}
</script>
<style lang="scss" scoped>
.newsinfor{
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
}
</style>