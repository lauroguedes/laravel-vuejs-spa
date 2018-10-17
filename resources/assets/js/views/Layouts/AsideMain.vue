<template>
    <el-container>
        <el-aside width="200px">
            <Aside />
        </el-aside>
        <el-main>
            <Main />
        </el-main>
    </el-container>
</template>

<style></style>

<script type="text/javascript">
    import Aside from './Elements/Aside';
    import Main from './Elements/Main';

    export default {
        components: {
            Aside,
            Main,
        }
    }
</script>