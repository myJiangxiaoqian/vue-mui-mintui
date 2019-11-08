<template>
    <div class="photo">
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in catas" :key="item.id">
                        {{ item.title }}
                    </a>
                    
                </div>
            </div>
            
        </div>
        <div class="content">
            <router-link tag="dl" v-for="item in imgList" :key="item.id" :to="'/home/photoinfo/'+item.id">
                <dt>
                    <!-- <img :src="item.img" /> -->
                    <img v-lazy="item.img">
                </dt>
                <dd>
                    <p>{{ item.title }}</p>
                    <p>{{ item.text }}</p>
                </dd>
            </router-link>
        </div>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'

export default{
    data(){
        return {
            catas:[],
            imgList:[]
        }
    },
    created(){
        this.getAllcategory();
        this.getImgList();
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
	        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        }); 
        
    },
    methods:{
        getAllcategory(){
            this.$axios.get('../../static/photoListTitle.txt').then(res=>{
                this.catas = res.data;
                this.catas.unshift({
                    "title":"全部",
                    "id":0
                })
            })
        },
        getImgList(){
            this.$axios.get('../../static/photoImgList.txt').then(res=>{
                this.imgList = res.data;
                // console.log(res.data);
            })
        }
    }
}
</script>
			
<style lang="scss" scoped>
*{
   touch-action: pan-y; 
}
.photo{
    .content{
        padding:5px;
        margin:0;
    }
    dl{
        position:relative;
        box-shadow: 0 0 9px #999;
        margin:0;
        margin-top:10px;
        dt{
            img{
                width:100%;
                height:300px;
                vertical-align: middle;
            }
            image[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
        }
        dd{
            width:100%;
            position: absolute;
            bottom:0px;
            left:-40px;
            max-height:90px;
            background-color:#000;
            opacity: 0.4;
            p{
                color: #fff; 
                text-align: left;
            }
                      
        }
    }
}

</style>