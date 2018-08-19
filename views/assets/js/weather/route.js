const TestApp = require('./WeatherApp');

export default new VueRouter({
   mode: 'history',
   base: 'about',
   routes: [
       {
           path: '/',
           component: TestApp, 
           name: 'test' 
       }
   ],
});