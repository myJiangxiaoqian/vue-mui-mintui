<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newList" :key='item.id'>
                <router-link :to="'/home/newsInfor/' + item.id">
                    <img class="mui-media-object mui-pull-left" src="../../../imges/newlist/shuijiao.jpg">
                    <div class="mui-media-body">
                        <h2>{{ item.username}}</h2>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{ dataTime | time }} </span>
                            <span>点击次数：{{ item.id }}次 </span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            dataTime:'',
            newList:[]
        }
    },
    created(){
        this.getNewList();
        this.getTime();
    },
    methods:{
        //获取当前时间戳
        getTime(){
            this.dataTime = new Date();
        },
        getNewList(){
            this.$axios.get('http://jsonplaceholder.typicode.com/users').then(res=>{
               this.newList = res.data;
            })
        }
    }
}
</script>
<style lang="scss">
.mui-table-view{
    li{
        h2{
            font-size:18px; 
        }
        .mui-media-body{
            text-align: left;
        }
        .mui-ellipsis{
            font-size:12px;
            display: flex;
            justify-content:space-between;
        }
    }
}
</style>