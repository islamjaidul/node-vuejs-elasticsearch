!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=47)}({1:function(e,t){e.exports=function(e,t,n,r,s,o){var a,i=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(a=e,i=e.default);var l,c="function"==typeof i?i.options:i;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),s&&(c._scopeId=s),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=r),l){var f=c.functional,d=f?c.render:c.beforeCreate;f?(c._injectStyles=l,c.render=function(e,t){return l.call(t),d(e,t)}):c.beforeCreate=d?[].concat(d,l):[l]}return{esModule:a,exports:i,options:c}}},47:function(e,t,n){e.exports=n(48)},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(49),s=n(52),o=new VueRouter({routes:[{path:"/",component:r,name:"user.index"},{path:"/:userId",component:s,name:"user.single"}]});new Vue({router:o}).$mount("#app")},49:function(e,t,n){var r=n(1)(n(50),n(51),!1,null,null,null);e.exports=r.exports},50:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"save",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];console.log(e)}},{key:"delete",value:function(e){console.log(e)}},{key:"fetch",value:function(){}}]),e}();t.default={data:function(){return{form:{},users:[],singleUser:{}}},computed:{userRepo:function(){return new s}},methods:{handleSave:function(){var e=this,t=baseUrl+"/user";axios.post(t,this.form).then(function(t){console.log(t.data),e.getUsers()}).catch(function(e){console.log(e)})},handleDelete:function(e){return this.userRepo.delete(e)},handleView:function(e){return this.$router.push({name:"user.single",params:{userId:e}})},getUsers:function(){var e=this,t=baseUrl+"/all-users";axios.get(t).then(function(t){e.users=t.data})}},mounted:function(){this.getUsers()}}},51:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h3",[e._v("User Form: ")]),n("hr"),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4 col-md-offset-2"},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.firstName,expression:"form.firstName"}],staticClass:"form-control",attrs:{type:"text",name:"firstName",placeholder:"First Name"},domProps:{value:e.form.firstName},on:{input:function(t){t.target.composing||e.$set(e.form,"firstName",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.lastName,expression:"form.lastName"}],staticClass:"form-control",attrs:{type:"text",name:"lastName",placeholder:"Last Name"},domProps:{value:e.form.lastName},on:{input:function(t){t.target.composing||e.$set(e.form,"lastName",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.age,expression:"form.age"}],staticClass:"form-control",attrs:{type:"number",name:"age",placeholder:"Age"},domProps:{value:e.form.age},on:{input:function(t){t.target.composing||e.$set(e.form,"age",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary",on:{click:function(t){e.handleSave()}}},[e._v("Save")])])])]),e._v(" "),n("h3",[e._v("User Info: ")]),e._v(" "),n("h5",{staticClass:"pull-right"},[e._v("Total - "+e._s(e.users.length))]),n("hr"),e._v(" "),n("table",{staticClass:"table table-striped"},[e._m(0),e._v(" "),n("tbody",[e._l(e.users,function(t){return e.users.length?n("tr",[n("td",[e._v(e._s(t.firstName))]),e._v(" "),n("td",[e._v(e._s(t.lastName))]),e._v(" "),n("td",[e._v(e._s(t.age))]),e._v(" "),n("td",[n("button",{staticClass:"btn btn-info btn-sm",on:{click:function(n){e.handleView(t._id)}}},[e._v("View")])])]):e._e()}),e._v(" "),e.users.length?e._e():n("tr",[n("td",[e._v("Loading..")]),e._v(" "),n("td",[e._v("Loading..")]),e._v(" "),n("td",[e._v("Loading..")]),e._v(" "),n("td",[e._v("Loading..")])])],2)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("th",[this._v("First Name")]),this._v(" "),t("th",[this._v("Last Name")]),this._v(" "),t("th",[this._v("Age Name")]),this._v(" "),t("th",[this._v("Action")])])}]}},52:function(e,t,n){var r=n(1)(n(53),n(54),!1,null,null,null);e.exports=r.exports},53:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{singleUser:{}}},mounted:function(){var e=this,t=baseUrl+"/user/"+this.$route.params.userId;axios.get(t).then(function(t){e.singleUser=t.data}).catch(function(e){console.log(e)})}}},54:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("First Name: "+e._s(e.singleUser.firstName))]),e._v(" "),n("p",[e._v("Last Name: "+e._s(e.singleUser.lastName))]),e._v(" "),n("p",[e._v("Age: "+e._s(e.singleUser.age))])])},staticRenderFns:[]}}});