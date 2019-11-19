## 默认打开浏览器  热加载  --open --hot
## 路由重定向  redirect
## 动画 <transition></transition>
   定义两组样式
    .v-enter,v-leave-to{
        option:0;
        transform:translateX(100%);
    }
    .v-enter-active,v-leave-active{
        transition: all 0.5s ease;
    }
## scss 引入
    安装 node-loader sass-loader style-loader
##        1.cnpm i node-loader sass-loader style-loader -D
    无需在webpack.base.conf.js进行配置，因为最新的vue-cli已经是默认配置好sass的（在build/util.js里），所以如果再在webpack里配置会重复，因此在main.js引入scss文件时会报错，也就是所只要安装了sass就行，什么都不用配置了
    安装完成之后，运行报错
        Modele build failed: TypeError: this.getResolve is not a function at Object.loader...
    这是因为当前sass的版本太高，webpack编译时出现了错误，这个时候只需要换成低版本的就行，下面说一下修改方法，很简单，如下，找到package.json文件，里面的 "sass-loader"的版本更换掉 就行了。
##        我本地是将    "sass-loader": "^8.0.0"，更换成了 "sass-loader": "^7.3.1",
    运行 cnpm i
    运行 npm run dev

## flex布局
##    display:flex;
##    justify-content属性定义了项目在主轴上的对齐方式
        flex-start（默认值）：左对齐
        flex-end：右对齐
        center：居中
##      space-between:两端对齐，项目之间的间隔都相等
        space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

##  flex-wrap属性  如何换行
        项目都排在一条线（又称“轴线”）上
##  flex-wrap: nowrap | wrap | wrap-reverse;
            nowrap（默认）：不换行
            wrap:换行，第一行在上方
            wrap-reverse:换行，在第一行的下方

##  flex-direction属性  决定主轴的方向（即项目的排列方向）
    flex-direction:row | row-reverse |  column | column-reverse; 
        row（默认值）：主轴为水平方向，起点在左端
        row-reverse:主轴为水平方向，起点在右端
        column:主轴为垂直方向，起点在上沿
        column-reverse:主轴为垂直方向，起点在下沿
## align-items: center; 垂直居中

## 全局定义时间过滤器
    使用时间组件 moment
##   cnpm i v-moment --save
##   import moment from 'moment'
    Vue.filter('time',function(value,formatstr){
        formatstr = formatstr || 'YYYY-MM-DD HH:mm:ss'
        return moment(value).format(formatstr)
    })
##  {{ dataTime | time }}  使用

## axios 配置全局url
## cnpm i axios -save
## axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com/'
## Vue.prototype.$axios=axios
## this.$axios.get('users').then( res=>{ 
        res.body/res.data 
    })

## 动态路由地址拼接
   <router-link :to="'/home/newsInfor/' + item.id"></router-link>
   {
       path:'/home/newsInfor/:id',  // 参数
       component:NewsInfor
   }

## 路由地址获取
    $route.params.id

## axios获取 假数据txt文本  
    txt文件需放在 static下面
    通过  this.$axios.get('../static/1.txt') 加载
    
## 文本前面空两个字的间距
    text-indent:2em; 

## 点击事件
     @click="commentTest"

## 获取当前时间
    new Date();

## 数据拼接
##  concat() 方法用于连接两个或多个数组
    该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
    var a = [1,2,3];
    document.write(a.concat(4,5));

## 缩略图插件  vue-preview
    github网站地址：https://github.com/LS1231/vue-preview
##  1.npm i vue-preview -S
##  2.import VuePreview from 'vue-preview'
      Vue.use(VuePreview)
##  3.<template>
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </template>
##  4.res.data.img.forEach(item1 => {
        item1.src=item1.src,
        item1.msrc=item1.src,
        item1.w=600,
        item1.h=400
    });
    this.listImg = res.data.img;

##  5.methods: {
      handleClose () {
        console.log('close event')
      }
    }

## flex布局
    display: flex;
##  flex-wrap属性  如何换行
        项目都排在一条线（又称“轴线”）上
##  flex-wrap: nowrap | wrap | wrap-reverse;
            nowrap（默认）：不换行
            wrap:换行，第一行在上方
            wrap-reverse:换行，在第一行的下方

## 手机端调试
    设备在同一无线网中,查看无线ip
    package.json dev中设置 --host ip地址
    
## router-link tag属性 转化为标签

## route 和  router的区别
## route  是参数对象
## router 是路由的切换
    this.$router.go(-1) 回退一个页面
    this.$router.go(1)  前进一个页面

## Mint UI 按钮
##    颜色：
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
##    大小：
    <mt-button size="small">small</mt-button>
    <mt-button size="large">large</mt-button>
    <mt-button size="normal">normal</mt-button>
##    空心：plain
    <mt-button plain>plain</mt-button>
##    返回按钮、更多：
    <mt-button icon="back">back</mt-button>
    <mt-button icon="more">more</mt-button>

## 轮播图在滑动时，下面的文字抖动是调试工具的问题，手机端没问题

## transform动画 购物车小球不显示
    不知为何小球是渐变透明色导致，添加 el.style.opacity=1;
     beforeEnter: function (el) {
        el.style.transform="translate(0,0)";
 ##     el.style.opacity=1;
    }

## 加入购物车曲线动画效果
##    cubic-bezier(0.49,-0.29,0.75,0.41)  贝赛尔曲线
##    el.style.transition = "all 0.8s cubic-bezier(0.49,-0.29,0.75,0.41)";

## 加入购物车小球适配问题
##      js getBoundingClientRect()
            https://www.cnblogs.com/leejersey/p/4127714.html
            这个方法返回一个矩形对象，包含四个属性：left、top、right和bottom。分别表示元素各边与页面上边和左边的距离。
##  通过 ref获取小球元素
        <div class="ball" v-show="ballflag" ref="ball"></div>
##      const balltop = this.$refs.ball.getBoundingClientRect().top;
##      const ballleft = this.$refs.ball.getBoundingClientRect().left;

##      const badgetop = document.getElementById("badge").getBoundingClientRect().top;
##      const badgeleft= document.getElementById("badge").getBoundingClientRect().left;

        const xDist = badgeleft-ballleft;
        const yDist = badgetop-balltop;

        //es6 字符串拼接语法
##      el.style.transform=`translate(${xDist}px,${yDist}px)`;


##   Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化
    Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

##    你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。
    
    下载包
##        cnpm i vuex -S
    安装
##        import Vuex from 'vuex'
##        Vue.use(Vuex)
##        const store = new Vuex.Store({
                state:{
##                  //viwe调用方式：this.$store.state.car
                    car:[]    
                },
                mutation:{ 
##                    //操作数据（修改数据）
##                    //viwe调用方式： this.$store.commit('addTocar',goodsinfo)
##                    addTocar(state,goodsinfo){
                        state.car.push(goodsinfo)
                    }
                },
                getters:{
##                    //相当于计算属性 （实时计算或改变）
##                    //viwe调用方式：{{ $store.getters.getAllcount }}
##                      getAllcount(state){
                          var c=0;
                          state.car.forEach(item=>{
                                c += item.carnum
                          })
                          return c;
                      }  
                }
        })

## json对象转字符串 / json字符串转对象
##    JSON.stringify(obj)
##    JSON.parse(str)

## 返回按钮的判断
##    <span slot="left" @click="gobank" v-show="hflag">
            <mt-button icon="back">返回</mt-button>
        </span>
    //返回上一步操作
    gobank(){
##      this.$router.go(-1);
    }

## 监听路由的改变
    watch:{
    //通过watch监听路由
    "$route.path":function(newval){
      if(newval==='/home'){
          this.hflag = false;
      }else{
          this.hflag = true;
      }
    }
  }

## 判断是否为主页 
    created(){
        //判断是否为主页，显示返回按钮的判断
        if(this.$route.path=='/home'){
        this.hflag = false
        }else{
        this.hflag = true
        }
    }