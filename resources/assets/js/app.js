
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import routerMap from './router.map';

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
