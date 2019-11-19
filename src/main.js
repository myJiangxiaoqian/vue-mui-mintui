// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import Vuex from 'vuex'
Vue.use(Vuex)
var car = localStorage.getItem('car')?JSON.parse(localStorage.getItem('car')):[];
const store = new Vuex.Store({
  state:{
    car:car
  },
  mutations: {
    //添加购物车，将数据保存到缓存中
    addTocar(state,goodsinfo){
        var flag = false;
        //判断购物车中有没有相同的商品，如果有 则只增加数量即可，如果没有 则直接push到car里面
        state.car.some(item=>{
          if(item.id === goodsinfo.id){
            item.carnum += parseInt(goodsinfo.carnum);
            item.select = goodsinfo.select;
            flag = true;
          }
        })
        if(flag===false){
          state.car.push(goodsinfo);
        }
        localStorage.setItem('car',JSON.stringify(state.car))
    },
    //修改购物车中商品数量 把值同步到缓存中去
    shopcarchangnumbox(state,goodsinfo) { 
      state.car.forEach(item => { 
        if (item.id === goodsinfo.id) { 
          item.carnum = goodsinfo.carnum;
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    //删除
    deletshopcar(state,id) { 
      state.car.forEach((item,i) => { 
        if (item.id === id) { 
          state.car.splice(i, 1);
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    //修改 select值，同步到缓存中
    changSelect(state,id) { 
      state.car.forEach(item => { 
        if (item.id === id) { 
          item.select = !item.select;
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car));
    }
  },
  getters:{//相当于计算属性
    //计算购物车总数量
    getAllcount(state){
      var c=0;
      state.car.forEach(item=>{
        c += item.carnum;        
      })
      return c;
    },
    //从缓存中获取每条产品的 数量值
    getshopcarcount(state) {
      var o = {};
      state.car.forEach(item => {
        o[item.id] = item.carnum;
      })
      return o;
    },
    //从缓存中获取每条产品的 select值
    getgoodsinfoSeleced(state) { 
        var o={}
      state.car.forEach(item => { 
        o[item.id] = item.select;
      })
      return o;
    },
    //计算勾选的商品数量和总价格
    getAllnumandAllpice(state) {
      var w = {
        count: 0,
        amound:0
      };
      state.car.forEach(item => { 
        if (item.select === true) {
          w.count += item.carnum;
          w.amound += item.pice * parseInt(item.carnum);
        }
      })
      return w;
    }
    
  }
})
// 引入mui样式
import './lib/mui/css/mui.min.css'
//mui 扩展图标样式
import './lib/mui/css/icons-extra.css'

// import './lib/mui/js/webviewGroup.js'
//引入缩略图样式
import './lib/mui/css/golbal.css'

//缩略图插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
//引入vue-axios
import axios from 'axios'
//axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com/'
Vue.prototype.$axios=axios
// import VueAxios from 'vue-axios'

//引入时间组件
import moment from 'moment'

Vue.config.productionTip = false

//全局过滤器
Vue.filter('time',function(value,formatString){
  formatString = formatString ||'YYYY-MM-DD HH:mm:ss';
  return moment(value).format(formatString);
})
Vue.use(MintUI)
// Vue.use(VueAxios,axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
