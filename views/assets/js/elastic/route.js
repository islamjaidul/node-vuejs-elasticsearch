const ElasticApp = require('./ElasticApp');
const ElasticIndex = require('./components/ElasticIndex');

export default new VueRouter({
    base: '/elastic',
    mode: 'history',
   routes: [
       {
           path: '/',
           component: ElasticApp, 
           name: 'elastic' 
       },
       {
        path: '/create',
        component: ElasticIndex, 
        name: 'elastic.index' 
    }
   ],
});