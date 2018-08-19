import VueRouter from 'vue-router';
window.Vue = require('vue');
window.VueRouter = VueRouter;
Vue.use(VueRouter);

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';