import Vue from 'vue';
import VueRouter from 'vue-router';
import main from '../App.vue';

Vue.useAttrs(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes:[{
        path:"/pubkey"
    }]
})