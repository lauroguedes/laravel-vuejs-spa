
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';

//import lib element ui
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/pt-br'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

import Vuex from 'vuex';
import VueRouter from 'vue-router';
import routerMap from './router.map';

Vue.use(ElementUI, { locale });
Vue.use(Vuex);
Vue.use(VueRouter);

import App from './views/App';

const router = new VueRouter({
    mode: 'history',
    routes: routerMap
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
