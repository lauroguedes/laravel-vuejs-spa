<template>
    <el-container>
        <el-header>
            <Header />
        </el-header>
        <el-main>
            <Main />
        </el-main>
    </el-container>
</template>

<style></style>

<script type="text/javascript">
    import Header from './Elements/Header';
    import Main from './Elements/Main';

    export default {
        components: {
            Header,
            Main
        }
    }
</script>