<template>
    <div class="goodsinfo">
        <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:after-enter="afterEnter">
            <div class="ball" v-show="ballflag" ref="ball"></div>
        </transition>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <Swipe :imgurl="infoLunbo"></Swipe>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{ goodsinfoItem.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>市场价：<del>￥{{ goodsinfoItem.market_price }}</del>&nbsp;&nbsp; 销售价：<span class="nowpice">￥{{ goodsinfoItem.sell_price }}</span></p>
                     <div class="numbox">
                         购买数量:
                        <numbox @numboxcent="getnumboxcent" :max="goodsinfoItem.stock_quantity"></numbox>
                    </div>   
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="goshopcar()">加入购物车</mt-button>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{ goodsinfoItem.goods_no }}</p>
                    <p>库存情况:{{ goodsinfoItem.stock_quantity }}</p>
                    <p>上架时间:{{ goodsinfoItem.add_time | time}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import Swipe from '../swipe/swipe'
import numbox from '../comment/goodsinfo_numbox'
import mui from '../../lib/mui/js/mui.min.js'
export default {
    data(){
        return{
            id:this.$route.params.id,//获取路由id
            infoLunbo:'',
            goodsinfo:'',
            goodsinfoItem:'',
            selectnum:1,
            ballflag:false
        }
    },
    components:{
        Swipe,
        numbox
    },
    created(){
        this.getgoodsinfoLunbo();
        this.getgoodsinfo();
    },
    methods:{
        //获取轮播图图片
        getgoodsinfoLunbo(){
            this.$axios.get("../../static/lunbo.txt").then(res=>{
                this.infoLunbo = res.data[1];
            })
        },
        //获取图片详情内容
        getgoodsinfo(){
            this.$axios.get('../../static/goodsinfo.txt').then(res=>{
                this.goodsinfo = res.data;
                this.goodsinfo.forEach(item => {
                    if(item.id == this.id){
                        this.goodsinfoItem = item
                    }
                });
            })
        },
        //图文介绍获取数据
        goDesc(id){
            this.$router.push("/home/goodsdesc/"+id);
        },
        //商品评论路由
        goComment(id){
            this.$router.push('/home/goodscom/'+id);
        },
        //加入购物车
        goshopcar(){
            this.ballflag = !this.ballflag;
            const goodsinfo = {
                id:this.id,
                pice:this.goodsinfoItem.sell_price,
                carnum:parseInt(this.selectnum),
                select:true
            }
            this.$store.commit('addTocar',goodsinfo);
            
        },
        beforeEnter: function (el) {
            el.style.transform="translate(0,0)";
            el.style.opacity=1;
        },
        // 此回调函数是可选项的设置
        // 与 CSS 结合时使用
        enter: function (el, done) {
            //解决小球适配问题
            const balltop = this.$refs.ball.getBoundingClientRect().top;
            const ballleft = this.$refs.ball.getBoundingClientRect().left;
            const badgetop = document.getElementById("badge").getBoundingClientRect().top;
            const badgeleft= document.getElementById("badge").getBoundingClientRect().left;

            const xDist = badgeleft-ballleft;
            const yDist = badgetop-balltop;

            el.offsetWidth;
            el.style.transform=`translate(${xDist}px,${yDist}px)`;
            el.style.transition = "all 0.8s cubic-bezier(0.49,-0.29,0.75,0.41)";
            done();
        },
        afterEnter: function (el) {
            this.ballflag = !this.ballflag;
        },
        getnumboxcent(cont){
            //加入购物车数量
            this.selectnum = cont;
            //   console.log(this.selectnum);
        }
    }
}
</script>
<style lang="scss" scoped>
.goodsinfo{
    background-color: #eee;
    overflow: hidden;
    .lunbo >>> .mint-swipe-items-wrap{ //轮播图居中显示
        text-align: center;
    }
    .lunbo >>> img{
        height:100%;
    }
    .ball{
        width:15px;
        height:15px;
        background-color:red;
        border-radius: 50%;
        position: absolute;
        z-index:999999999;
        top:421px;
        left:140px;
    }
    .mui-card-header{
        font-weight: bold;
    }
    .mui-card-content-inner{
        text-align: left;
        .nowpice{
            color:red;
            font-weight: bold;
            font-size:15px;
        }
        
    }
    .numbox{
        margin-bottom:10px;
    }
    .mui-card-footer, .mui-card-header{
        display: block;
        .mint-button--primary.is-plain{
            margin-bottom: 10px;
        }
    }
}
</style>