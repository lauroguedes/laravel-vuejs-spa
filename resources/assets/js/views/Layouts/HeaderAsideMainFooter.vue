<template>
    <el-container>
        <el-header>
            <Header />
        </el-header>
        <el-container>
            <el-aside width="200px">
                <Aside />
            </el-aside>
            <el-container>
                <el-main>
                    <Main />
                </el-main>
                <el-footer>
                    <Footer />
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<style></style>

<script type="text/javascript">
    import Header from './Elements/Header';
    import Aside from './Elements/Aside';
    import Main from './Elements/Main';
    import Footer from './Elements/Footer';

    export default {
        components: {
            Header,
            Aside,
            Main,
            Footer
        }
    }
</script>