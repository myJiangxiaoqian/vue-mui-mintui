<template>
    <div class="gooslist">
        <!-- <router-link class="goos-item" v-for="item in gooslist" :key="item.id" tag="div" :to="'/home/goosinfo/'+item.id">
            <img :src="item.img_url" alt="">
            <h1>{{ item.title }}</h1>    
            <div class="info">
                <p class="price">
                    <span class="nowmoney">￥{{ item.sell_price}}</span>
                    <span class="oldmoney">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </router-link> -->
        <!-- 编程式导航 -->
        <div class="goos-item" v-for="item in gooslist" :key="item.id" @click="gogoodsinfo(item.id)">
            <img :src="item.img_url" alt="">
            <h1>{{ item.title }}</h1>    
            <div class="info">
                <p class="price">
                    <span class="nowmoney">￥{{ item.sell_price}}</span>
                    <span class="oldmoney">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>   
    </div>
</template>
<script>
export default {
    data(){
        return {
            gooslist:''//产品列表
        }
    },
    created(){
        this.getgooslist();
    },
    methods:{
        //商品列表获取数据
        getgooslist(){
            this.$axios.get('../../static/gooslist.txt').then(res=>{
                this.gooslist = res.data;
            })
        },
        //编程式导航
        gogoodsinfo(id){
            this.$router.push("/home/goosinfo/"+id);
            console.log(this)
        }
    }
}
</script>
<style lang="scss" scoped>
.gooslist{
    display: flex;
    flex-wrap: wrap; //换行
    padding:8px;
    justify-content:space-between;
    .goos-item{
        width:49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin-bottom: 4px;
        padding:2px;
        display: flex;
        flex-direction: column; //改变主轴方向为 纵向
        justify-content: space-between; //两端对齐
        img{
            width:100%;
            height:180px;
        }
        h1{
            font-size:14px;
            text-align: left;
        }
        .info{
            background-color: #ede9e9;
            text-align: left;
            .price{
                .nowmoney{
                    font-size:15px;
                    color:red;
                }
                .oldmoney{
                    font-size:11px;
                    text-decoration: line-through;
                    margin-left:10px;
                }
            }
            p{
                margin:0;
                padding:3px;
            }
            .sell{
                font-size:13px;
                display: flex;
                justify-content:space-between;
            }
        }
    }
}
</style>