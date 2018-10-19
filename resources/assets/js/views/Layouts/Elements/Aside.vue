<template>
    <div class="aside-content h-100">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo h-100"
                :collapse="isCollapse"
                :background-color="backgroundColor"
                :text-color="textColor"
                :active-text-color="activeTextColor">
            <side-user-profile :theme="theme"></side-user-profile>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">Navigator One</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">Group One</span>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">item four</span>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">Navigator Four</span>
            </el-menu-item>
        </el-menu>
        <el-button @click="isCollapse ? isCollapse = false : isCollapse = true" :class="[{'toogle-down': isCollapse}, 'toggle-nav']" size="mini" icon="el-icon-back" circle></el-button>
    </div>
</template>

<style lang="scss" scoped>
    .aside-content{
        position: relative;
        .toggle-nav{
            position: fixed;
            bottom: 10px;
            left: 160px;
            transition: all 0.3s linear;
            &.toogle-down{
                left: 17px;
                transform: rotate(180deg);
                transition: all 0.3s linear;
            }
        }
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
    }
</style>

<script type="text/javascript">
    import SideUserProfileComponent from '../../../components/SideUserProfile';

    export default {
        props: {
            theme: {
                type: String,
                default: 'light'
            }
        },
        components: {
            'side-user-profile': SideUserProfileComponent
        },
        computed: {
            backgroundColor(){
                if (this.theme == 'light'){
                    return '#fff'
                }
                if (this.theme == 'dark'){
                    return '#545c64'
                }
                return '#fff'
            },
            textColor(){
                if (this.theme == 'light'){
                    return '#303133'
                }
                if (this.theme == 'dark'){
                    return '#fff'
                }
                return '#303133'
            },
            activeTextColor(){
                if (this.theme == 'light'){
                    return '#409EFF'
                }
                if (this.theme == 'dark'){
                    return '#ffd04b'
                }
                return '#409EFF'
            }
        },
        data() {
            return {
                isCollapse: false
            }
        }
    }
</script>