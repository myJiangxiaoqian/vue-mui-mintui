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