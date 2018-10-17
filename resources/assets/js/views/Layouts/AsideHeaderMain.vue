<template>
    <el-container>
        <el-aside width="200px">
            <Aside />
        </el-aside>
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <el-main>
                <Main />
            </el-main>
        </el-container>
    </el-container>
</template>

<style></style>

<script type="text/javascript">
    import Aside from './Elements/Aside';
    import Header from './Elements/Header';
    import Main from './Elements/Main';

    export default {
        components: {
            Aside,
            Header,
            Main,
        }
    }
</script>