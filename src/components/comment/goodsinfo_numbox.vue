<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" ref="number" @change="numchange" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    data(){
        return{

        }
    },
    mounted(){
        mui('.mui-numbox').numbox();
    },
    methods:{
        numchange(){
            // console.log(this.$refs.number.value);
            this.$emit('numboxcent',parseInt(this.$refs.number.value))
        }
    },
    props:["max"],
    watch:{
        'max':function(newVal,oldVal){
            mui('.mui-numbox').numbox().setOption('max',newVal)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>