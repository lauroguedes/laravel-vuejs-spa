<template>
    <el-submenu :class="getTheme" index="0">
        <template slot="title">
            <img :src="getAvatar" :alt="getName">
            <span slot="title">User Name</span>
        </template>
        <el-menu-item index="0-1">Profle</el-menu-item>
        <el-menu-item index="0-2">Settings</el-menu-item>
        <el-menu-item index="0-3">Sing Out</el-menu-item>
    </el-submenu>
</template>

<style lang="scss">
    .el-submenu{
        img{
            max-width: 30px;
            margin-right: 10px;
        }
    }
    .dark-theme{
        .el-submenu__title,
        .el-menu-item{
            background-color: #303133 !important;
            &:hover{
                background-color: lighten(#303133, 10%) !important;
            }
        }
    }
    .light-theme{
        .el-submenu__title,
        .el-menu-item{
            background: #DCDFE6 !important;
            &:hover{
                background-color: darken(#DCDFE6, 10%) !important;
            }
        }
    }
</style>

<script type="text/javascript">
    export default {
        props: ['theme'],
        computed: {
            getAvatar(){
                return `${window.location.origin}/img/avatar.png`
            },
            getName(){
                return 'User Name'
            },
            getTheme(){
                return `${this.theme}-theme`
            }
        }
    }
</script>