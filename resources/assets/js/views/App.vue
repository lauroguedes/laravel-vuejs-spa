<template>
    <div class="app-page">
       <!-- <router-view></router-view>-->
        <el-row>
            <el-col :span="24">
                <component :is="layout"></component>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/javascript">
    import HeaderMainComponent from './Layouts/HeaderMain';
    import HeaderMainFooterComponent from './Layouts/HeaderMainFooter';
    import AsideMainComponent from './Layouts/AsideMain';
    import HeaderAsideMainComponent from './Layouts/HeaderAsideMain';
    import HeaderAsideMainFooterComponent from './Layouts/HeaderAsideMainFooter';
    import AsideHeaderMainComponent from './Layouts/AsideHeaderMain';
    import AsideHeaderMainFooterComponent from './Layouts/AsideHeaderMainFooter'

    export default {
        components: {
            'header-main': HeaderMainComponent,
            'header-main-footer': HeaderMainFooterComponent,
            'aside-main': AsideMainComponent,
            'header-aside-main': HeaderAsideMainComponent,
            'header-aside-main-footer': HeaderAsideMainFooterComponent,
            'aside-header-main': AsideHeaderMainComponent,
            'aside-header-main-footer': AsideHeaderMainFooterComponent
        },
        data() {
            return {
                layout: 'header-aside-main-footer'
            }
        }
    }
</script>