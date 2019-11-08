<template>
    <div class="goodsdesc">
        <h3>{{ info.title }}</h3>
        <hr />
        <div v-html="info.content"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            info:""
        }
    },
    created(){
        this.getgoodsdesc();
    },
    methods:{
        getgoodsdesc(){
            this.$axios.get('../../../static/goodsdesc.txt').then(res=>{
                this.info = res.data[0];
            })
        }
    }
}
</script>
<style lang="scss">
.goodsdesc{
    h3{
        font-size:17px;
        padding:10px 0;
        color:#662aff;
    }
    p{
        padding:0 10px;
        text-align:left;
    }
    img{
        width:100%;
    }
}
</style>