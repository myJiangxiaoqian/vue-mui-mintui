<template>
    <div class="comment">
        <h1>发表评论</h1>
        <hr />
        <textarea v-model="textArea" placeholder="请输入要BB的评论内容（最多BB120个字）" maxlength="120"></textarea>
        <button type="button" class="mui-btn mui-btn-primary mui-btn-block" @click="commentTest">发表评论</button>
        <div class="pinglun">
            <div v-for="(item,index) in commentList" :key="index">
                <p class="toptext">
                    <span>第 {{ item.f_flag }} 楼</span>
                    <span>用户：{{ item.name }}</span>
                    <span>发表时间：{{ item.time | time }}</span>
                </p>
                <p class="bottomtext">{{ item.content }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            commentList:'',
            textArea:''
        }
    },
    methods:{
        //获取评论内容
        getComment(){
            this.$axios.get("../../static/commentList.txt").then(res=>{
                this.commentList = res.data;
                // console.log(res.data);
            })
        },
        //点击发表评论按钮
        commentTest(){
            if(this.textArea==""){
                return;
            }
            this.commentList.unshift({
                "f_flag":this.commentList.length+1,
                "name":"香香",
                "time":new Date(),
                "content":this.textArea
            })
            this.textArea="";
        }
    },
    mounted(){
        this.getComment();
    }
}
</script>
<style lang="scss">
.comment{
    h1{
        font-size:18px;
        text-align: left;
    }
    textarea{
        height:100px;
        font-size:14px;
    }
    .pinglun{
        text-align: left;
        .toptext{
            height:30px;
            line-height: 30px;
            background-color: rgb(129, 129, 106);
            color:#000;
            font-size:12px;
        }
        .bottomtext{
            line-height:25px;
             text-indent:2em; 
             color:#000;
        }
    }
}
</style>