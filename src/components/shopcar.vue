<template>
<div class="goodsinfo">
    <div class="mui-card" v-for="(item,index) in shopcarinfo" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <mt-switch v-model="$store.getters.getgoodsinfoSeleced[item.id]" @change="changswitch(item.id)"></mt-switch>
            <img :src="item.img" alt="">
            <div class="info">
              <h2>{{item.title}}</h2>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <numbox :num="$store.getters.getshopcarcount[item.id]" :id="item.id"></numbox>
                <a @click.prevent="delet(item.id,index)">删除</a>
              </p>
            </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner divflex">
            <div class="jiesuan">
              <p>总计（不含运费）</p>
              <p>已勾选商品<span class="price">{{$store.getters.getAllnumandAllpice.count}}</span>件，总价<span class="price">￥{{ $store.getters.getAllnumandAllpice.amound }}</span></p>
            </div>
            <mt-button type="danger" size="normal">去结算</mt-button>
        </div>
      </div>
    </div>
    
</div>

</template>

<script>
import numbox from './comment/shopcar_numbox.vue'
export default {
  name: 'shopcar',
  data () {
    return {
      shopcarinfo:''
    }
  },
  components:{
    numbox
  },
  created(){
    this.getshopcarinfo();
  },
  methods:{
    getshopcarinfo(){
      //获取购物车列表
      this.$axios.get('../../static/shopcarinfo.txt').then(res=>{
        this.shopcarinfo = res.data;
      })
    },
    delet(id,index){
        this.shopcarinfo.splice(index,1);
        this.$store.commit('deletshopcar',id);
    },
    changswitch(id){
      this.$store.commit('changSelect',id);
    }
  }
}
</script>

<style lang="scss" scoped>
.goodsinfo{
  .mui-card{
      img{
        width:50px;
        height:50px;
      }
      .mui-card-content-inner{
        display: flex;
        align-items: center;
        .price{
            color: red;
            font-weight: bold;
          }
        .info{
          display: flex;
          flex-direction:column;
          justify-content:space-between;
          h2{
            font-size:13px;
          }
        }
      }
      .divflex{
        display: flex;
        justify-content: space-between;
      }
  }
}
</style>
