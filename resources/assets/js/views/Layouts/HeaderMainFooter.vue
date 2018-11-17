<template>
    <el-container>
        <el-header>
            <Header />
        </el-header>
        <el-main>
            <Main />
        </el-main>
        <el-footer>
            <Footer />
        </el-footer>
    </el-container>
</template>

<style></style>

<script type="text/javascript">
    import Header from './Elements/Header';
    import Main from './Elements/Main';
    import Footer from './Elements/Footer';

    export default {
        components: {
            Header,
            Main,
            Footer
        }
    }
</script>