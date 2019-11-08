<template>
  <div class="hello">
    <!-- 轮播图 -->
    <Swipe :imgurl="this.lunboList"></Swipe>
  <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/NewList">
              <img src="../../imges/1.jpg" alt="">
              <div class="mui-media-body">新闻资讯</div>
          </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/PhotoList">
              <img src="../../imges/2.jpg" alt="">
              <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/gooslist">
              <img src="../../imges/3.jpg" alt="">
              <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
              <img src="../../imges/4.jpg" alt="">
              <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
              <img src="../../imges/5.jpg" alt="">
              <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
              <img src="../../imges/6.jpg" alt="">
              <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul> 
  </div>
</template>

<script>
import Swipe from './swipe/swipe'
export default {
  name: 'home',
  data () {
    return {
      lunboList:''
    }
  },
  components:{
    Swipe
  },
  created(){
     this.getlunbotu();
  },
  methods:{
    getlunbotu(){
      this.$axios.get('../static/lunbo.txt').then(res=>{
          this.lunboList = res.data[0];
      })
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  height:580px;
}
.lunbo >>> img{
  width:100%;
}
.mui-grid-view.mui-grid-9{
  border:0px;
  background-color: #fff;
}
.mui-grid-view.mui-grid-9 img{
  width:60px;
  height:60px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  width:33%;
  border:0;
}
</style>
