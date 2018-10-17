<template>
    <el-row class="header-content h-100" type="flex" align="middle">
        <el-col :span="18">
            <img :src="getLogo" :alt="getName">
        </el-col>
        <el-col class="right-align" :span="6">
            <el-badge :value="5">
                <el-button icon="el-icon-bell" circle></el-button>
            </el-badge>
        </el-col>
    </el-row>
</template>

<style lang="scss">
    .header-content{
        .el-badge__content.is-fixed{
            top: 5px;
            right: 15px;
        }
    }
</style>

<script type="text/javascript">
    export default {
        computed: {
            getLogo(){
                return `${window.location.origin}/img/logo-element-white.svg`
            },
            getName(){
                return 'Logo Element'
            }
        }
    }
</script>