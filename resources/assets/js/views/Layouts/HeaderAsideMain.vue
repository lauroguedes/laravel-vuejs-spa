<template>
    <el-container>
        <el-header>
            <Header />
        </el-header>
        <el-container>
            <el-aside width="200px">
                <Aside />
            </el-aside>
            <el-main>
                <Main />
            </el-main>
        </el-container>
    </el-container>
</template>

<style></style>

<script type="text/javascript">
    import Header from './Elements/Header';
    import Aside from './Elements/Aside';
    import Main from './Elements/Main';

    export default {
        components: {
            Header,
            Aside,
            Main
        }
    }
</script>