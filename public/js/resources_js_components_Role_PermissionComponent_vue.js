"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Role_PermissionComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Role/PermissionComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Role/PermissionComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      allPermission: {},
      roleInfo: {},
      editId: this.$route.params.id,
      permissions: []
    };
  },
  methods: {
    getPermissions: function getPermissions() {
      var _this = this;

      axios.get(base_path + "permission").then(function (response) {
        _this.allPermission = response.data;
      });
    },
    getRoleInfo: function getRoleInfo() {
      var _this = this;

      axios.get(base_path + "role/" + _this.editId).then(function (response) {
        _this.roleInfo = response.data;
      });
    },
    getRolePermission: function getRolePermission() {
      var _this = this;

      axios.get(base_path + "role_permission/" + _this.editId).then(function (response) {
        _this.permissions = response.data;
      });
    },
    updatePermission: function updatePermission() {
      var _this2 = this;

      var _this = this;

      axios.post(base_path + "role_permission/" + _this.editId, _this.permissions).then(function (response) {
        if (response.data.status === 200) {
          _this.getRolePermission();

          _this.$toastr.success(response.data.message, "Permission", {
            timeOut: 5000
          });
        }

        if (response.data.status === 400) {
          _this2.$swal("Opps", "Something Went Wrong", "warning");
        }
      });
    }
  },
  created: function created() {
    this.getPermissions();
    this.getRoleInfo();
    this.getRolePermission();
  }
});

/***/ }),

/***/ "./resources/js/components/Role/PermissionComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Role/PermissionComponent.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PermissionComponent_vue_vue_type_template_id_2febecc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PermissionComponent.vue?vue&type=template&id=2febecc0& */ "./resources/js/components/Role/PermissionComponent.vue?vue&type=template&id=2febecc0&");
/* harmony import */ var _PermissionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PermissionComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Role/PermissionComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PermissionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PermissionComponent_vue_vue_type_template_id_2febecc0___WEBPACK_IMPORTED_MODULE_0__.render,
  _PermissionComponent_vue_vue_type_template_id_2febecc0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Role/PermissionComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Role/PermissionComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Role/PermissionComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PermissionComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Role/PermissionComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Role/PermissionComponent.vue?vue&type=template&id=2febecc0&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Role/PermissionComponent.vue?vue&type=template&id=2febecc0& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionComponent_vue_vue_type_template_id_2febecc0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionComponent_vue_vue_type_template_id_2febecc0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionComponent_vue_vue_type_template_id_2febecc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PermissionComponent.vue?vue&type=template&id=2febecc0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Role/PermissionComponent.vue?vue&type=template&id=2febecc0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Role/PermissionComponent.vue?vue&type=template&id=2febecc0&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Role/PermissionComponent.vue?vue&type=template&id=2febecc0& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h3", [_vm._v("Permission")]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-primary" }, [
      _c("div", { staticClass: "panel-heading" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "panel-options" },
          [
            _c(
              "router-link",
              {
                staticStyle: { "margin-top": "4px" },
                attrs: { to: "/admin/role", type: "button" },
              },
              [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-blue btn-sm",
                    staticStyle: { "margin-top": "4px" },
                  },
                  [_vm._v("Role")]
                ),
              ]
            ),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "panel-body" },
        [
          _c("center", [
            _c(
              "div",
              {
                staticClass: "text-center",
                staticStyle: {
                  border: "1px solid #0072bc",
                  height: "3rem",
                  width: "35%",
                  "background-color": "#0072bc",
                  "margin-bottom": "1%",
                },
              },
              [
                _c("b", [
                  _c(
                    "p",
                    { staticStyle: { color: "white", "margin-top": "3px" } },
                    [_vm._v(_vm._s(_vm.roleInfo.name) + " Permissions")]
                  ),
                ]),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-md-4" },
              [
                _c("center", [
                  _c(
                    "div",
                    {
                      staticClass: "text-center",
                      staticStyle: {
                        border: "1px solid darkgray",
                        height: "3rem",
                        width: "19rem",
                        "background-color": "currentcolor",
                        "margin-bottom": "1%",
                      },
                    },
                    [
                      _c("b", [
                        _c(
                          "p",
                          {
                            staticStyle: {
                              color: "white",
                              "margin-top": "3px",
                            },
                          },
                          [_vm._v("Module's Permissions")]
                        ),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "table",
                  { staticClass: "table table-bordered table-responsive" },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.allPermission.module, function (data, index) {
                        return _c("tr", { key: index }, [
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(_vm._s(++index)),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(data.name))]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.permissions,
                                  expression: "permissions",
                                },
                              ],
                              attrs: { type: "checkbox" },
                              domProps: {
                                value: data.id,
                                checked: Array.isArray(_vm.permissions)
                                  ? _vm._i(_vm.permissions, data.id) > -1
                                  : _vm.permissions,
                              },
                              on: {
                                change: [
                                  function ($event) {
                                    var $$a = _vm.permissions,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = data.id,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.permissions = $$a.concat([$$v]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.permissions = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.permissions = $$c
                                    }
                                  },
                                  _vm.updatePermission,
                                ],
                              },
                            }),
                          ]),
                        ])
                      }),
                      0
                    ),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-4" },
              [
                _c("center", [
                  _c(
                    "div",
                    {
                      staticClass: "text-center",
                      staticStyle: {
                        border: "1px solid darkgray",
                        height: "3rem",
                        width: "19rem",
                        "background-color": "currentcolor",
                        "margin-bottom": "1%",
                      },
                    },
                    [
                      _c("b", [
                        _c(
                          "p",
                          {
                            staticStyle: {
                              color: "white",
                              "margin-top": "3px",
                            },
                          },
                          [_vm._v("Feature's Permissions")]
                        ),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "table",
                  { staticClass: "table table-bordered table-responsive" },
                  [
                    _vm._m(3),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.allPermission.feature, function (data, index) {
                        return _c("tr", { key: index }, [
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(_vm._s(++index)),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(data.name))]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.permissions,
                                  expression: "permissions",
                                },
                              ],
                              attrs: { type: "checkbox" },
                              domProps: {
                                value: data.id,
                                checked: Array.isArray(_vm.permissions)
                                  ? _vm._i(_vm.permissions, data.id) > -1
                                  : _vm.permissions,
                              },
                              on: {
                                change: [
                                  function ($event) {
                                    var $$a = _vm.permissions,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = data.id,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.permissions = $$a.concat([$$v]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.permissions = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.permissions = $$c
                                    }
                                  },
                                  _vm.updatePermission,
                                ],
                              },
                            }),
                          ]),
                        ])
                      }),
                      0
                    ),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-4" },
              [
                _c("center", [
                  _c(
                    "div",
                    {
                      staticClass: "text-center",
                      staticStyle: {
                        border: "1px solid darkgray",
                        height: "3rem",
                        width: "19rem",
                        "background-color": "currentcolor",
                        "margin-bottom": "1%",
                      },
                    },
                    [
                      _c("b", [
                        _c(
                          "p",
                          {
                            staticStyle: {
                              color: "white",
                              "margin-top": "3px",
                            },
                          },
                          [_vm._v("Control's Permissions")]
                        ),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "table",
                  { staticClass: "table table-bordered table-responsive" },
                  [
                    _vm._m(4),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.allPermission.control, function (data, index) {
                        return _c("tr", { key: index }, [
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(_vm._s(++index)),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(data.name))]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.permissions,
                                  expression: "permissions",
                                },
                              ],
                              attrs: { type: "checkbox" },
                              domProps: {
                                value: data.id,
                                checked: Array.isArray(_vm.permissions)
                                  ? _vm._i(_vm.permissions, data.id) > -1
                                  : _vm.permissions,
                              },
                              on: {
                                change: [
                                  function ($event) {
                                    var $$a = _vm.permissions,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = data.id,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.permissions = $$a.concat([$$v]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.permissions = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.permissions = $$c
                                    }
                                  },
                                  _vm.updatePermission,
                                ],
                              },
                            }),
                          ]),
                        ])
                      }),
                      0
                    ),
                  ]
                ),
              ],
              1
            ),
          ]),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-title" }, [
      _c("b", [_vm._v("Permission List")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("div", { staticClass: "pull-left col-sm-1" }),
      _vm._v(" "),
      _c("div", { staticClass: "pull-right" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Permission")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Permission")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Permission")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);