<template>
    <el-row class="footer-content h-100 sm-text" type="flex" align="middle">
        <el-col :span="18">Laravel + VueJs SPA + Element UI by <a href="https://leowgweb.com.br" class="link-white" target="_blank">leowgweb</a></el-col>
        <el-col class="right-align" :span="6">
            <img :src="getLogo" :alt="getName">
        </el-col>
    </el-row>
</template>

<style lang="scss">
    .footer-content{
        img{
            max-height: 25px;
        }
    }
</style>

<script type="text/javascript">
    export default {
        computed: {
            getLogo(){
                return `${window.location.origin}/img/simbol-element-white.svg`
            },
            getName(){
                return 'Logo Element'
            }
        }
    }
</script>