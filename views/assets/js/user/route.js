const UserApp = require('./UserApp');
const SingleUser = require('./components/SingleUser');

export default new VueRouter({
   routes: [
       {
           path: '/',
           component: UserApp, 
           name: 'user.index' 
       },
       {
       		path: '/:userId',
       		component: SingleUser,
       		name: 'user.single'
       }
   ],
});