// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入mui样式
import './lib/mui/css/mui.min.css'
//mui 扩展图标样式
import './lib/mui/css/icons-extra.css'
// import './lib/mui/js/mui.min.js'
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
  components: { App },
  template: '<App/>'
})
