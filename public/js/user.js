/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(48);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__route__ = __webpack_require__(49);


new Vue({
    router: __WEBPACK_IMPORTED_MODULE_0__route__["a" /* default */]
}).$mount('#app');

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var UserApp = __webpack_require__(50);
var SingleUser = __webpack_require__(54);

/* harmony default export */ __webpack_exports__["a"] = (new VueRouter({
    routes: [{
        path: '/',
        component: UserApp,
        name: 'user.index'
    }, {
        path: '/:userId',
        component: SingleUser,
        name: 'user.single'
    }]
}));

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(51)
/* template */
var __vue_template__ = __webpack_require__(53)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "views/assets/js/user/UserApp.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f3c0f58a", Component.options)
  } else {
    hotAPI.reload("data-v-f3c0f58a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Repository_UserRepository__ = __webpack_require__(52);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			form: {},
			users: [],
			singleUser: {}
		};
	},

	computed: {
		userRepo: function userRepo() {
			return new __WEBPACK_IMPORTED_MODULE_0__Repository_UserRepository__["a" /* default */]();
		}
	},
	methods: {
		handleSave: function handleSave() {
			var _this = this;

			var URL = 'http://localhost:3000/user';
			axios.post(URL, this.form).then(function (res) {
				console.log(res.data);
				_this.getUsers();
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleDelete: function handleDelete(id) {
			return this.userRepo.delete(id);
		},
		handleView: function handleView(id) {
			return this.$router.push({
				name: 'user.single',
				params: {
					userId: id
				}
			});
		},
		getUsers: function getUsers() {
			var _this2 = this;

			var URL = 'http://localhost:3000/all-users';
			axios.get(URL).then(function (res) {
				_this2.users = res.data;
			});
		}
	},
	mounted: function mounted() {
		this.getUsers();
	}
});

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserRepository = function () {
	function UserRepository() {
		_classCallCheck(this, UserRepository);
	}

	_createClass(UserRepository, [{
		key: "save",
		value: function save(params) {
			var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			console.log(params);
		}
	}, {
		key: "delete",
		value: function _delete(itemId) {
			console.log(itemId);
		}
	}, {
		key: "fetch",
		value: function fetch() {}
	}]);

	return UserRepository;
}();

/* harmony default export */ __webpack_exports__["a"] = (UserRepository);

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("h3", [_vm._v("User Form: ")]),
    _c("hr"),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-4 col-md-offset-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.firstName,
                expression: "form.firstName"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              name: "firstName",
              placeholder: "First Name"
            },
            domProps: { value: _vm.form.firstName },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "firstName", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.lastName,
                expression: "form.lastName"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", name: "lastName", placeholder: "Last Name" },
            domProps: { value: _vm.form.lastName },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "lastName", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.age,
                expression: "form.age"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "number", name: "age", placeholder: "Age" },
            domProps: { value: _vm.form.age },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "age", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              on: {
                click: function($event) {
                  _vm.handleSave()
                }
              }
            },
            [_vm._v("Save")]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("h3", [_vm._v("User Info: ")]),
    _vm._v(" "),
    _c("h5", { staticClass: "pull-right" }, [
      _vm._v("Total - " + _vm._s(_vm.users.length))
    ]),
    _c("hr"),
    _vm._v(" "),
    _c("table", { staticClass: "table table-striped" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        [
          _vm._l(_vm.users, function(user) {
            return _vm.users.length
              ? _c("tr", [
                  _c("td", [_vm._v(_vm._s(user.firstName))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(user.lastName))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(user.age))]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info btn-sm",
                        on: {
                          click: function($event) {
                            _vm.handleView(user._id)
                          }
                        }
                      },
                      [_vm._v("View")]
                    )
                  ])
                ])
              : _vm._e()
          }),
          _vm._v(" "),
          !_vm.users.length
            ? _c("tr", [
                _c("td", [_vm._v("Loading..")]),
                _vm._v(" "),
                _c("td", [_vm._v("Loading..")]),
                _vm._v(" "),
                _c("td", [_vm._v("Loading..")]),
                _vm._v(" "),
                _c("td", [_vm._v("Loading..")])
              ])
            : _vm._e()
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("First Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Last Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Age Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Action")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f3c0f58a", module.exports)
  }
}

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(55)
/* template */
var __vue_template__ = __webpack_require__(56)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "views/assets/js/user/components/SingleUser.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57442231", Component.options)
  } else {
    hotAPI.reload("data-v-57442231", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			singleUser: {}
		};
	},
	mounted: function mounted() {
		var _this = this;

		var URL = "http://localhost:3000/user/" + this.$route.params.userId;
		axios.get(URL).then(function (res) {
			_this.singleUser = res.data;
		}).catch(function (err) {
			console.log(err);
		});
	}
});

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("p", [_vm._v("First Name: " + _vm._s(_vm.singleUser.firstName))]),
    _vm._v(" "),
    _c("p", [_vm._v("Last Name: " + _vm._s(_vm.singleUser.lastName))]),
    _vm._v(" "),
    _c("p", [_vm._v("Age: " + _vm._s(_vm.singleUser.age))])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-57442231", module.exports)
  }
}

/***/ })

/******/ });