import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Mamver from '@/components/mamver'
import Shopcar from '@/components/shopcar'
import Search from '@/components/search'
import NewList from '@/components/newlist/NewList'
import NewsInfor from '@/components/newlist/newsInfor'
import PhotoList from '@/components/photoList/PhotoList'
import PhotoListinfo from '@/components/photoList/PhotoListinfo'
import Gooslist from '@/components/gooslist/gooslist'
import Goosinfo from '@/components/gooslist/goosinfo'
import GoodsDesc from '@/components/gooslist/goodsdesc'
import GoodsCom from '@/components/gooslist/goodscom'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',//主页
      name: 'home',
      component: Home
    },{
      path: '/mamver',//会员
      name: 'mamver',
      component: Mamver
    },{
      path: '/shopcar',//购物车
      name: 'shopcar',
      component: Shopcar
    },{
      path: '/search',//搜索
      name: 'search',
      component: Search
    },
    {
      path:'/home/NewList',//新闻列表
      component:NewList
    },{
      path:'/home/newsInfor/:id',//新闻详情
      component:NewsInfor
    },{
      path:'/home/PhotoList',//图片列表
      component:PhotoList
    },{
      path:'/home/photoinfo/:id',//图片详情
      component:PhotoListinfo
    },{
      path:'/home/Gooslist',//商品列表
      component:Gooslist
    },{
      path:'/home/Goosinfo/:id',//商品详情
      component:Goosinfo
    },{
      path:"/home/goodsdesc/:id",//图文介绍
      component:GoodsDesc
    },{
      path:'/home/goodscom/:id',//商品评论
      component:GoodsCom
    }
  ],
  linkActiveClass:'mui-active'
})
