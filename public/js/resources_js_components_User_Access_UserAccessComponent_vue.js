"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_User_Access_UserAccessComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User Access/UserAccessComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User Access/UserAccessComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UserAccessComponent",
  data: function data() {
    return {
      AddUserAccess: {
        user_id: null,
        role_id: null
      },
      userAccessData: {},
      editUserAccess: {},
      user: {},
      role: {},
      permissions: []
    };
  },
  methods: {
    getUser: function getUser() {
      var _this = this;

      axios.get(base_path + "allUser").then(function (response) {
        _this.user = response.data;
      });
    },
    getRole: function getRole() {
      var _this = this;

      axios.get(base_path + "allRole").then(function (response) {
        _this.role = response.data;
      });
    },
    addUserAccess: function addUserAccess() {
      var _this2 = this;

      var _this = this;

      axios.post(base_path + "user_access", _this.AddUserAccess).then(function (response) {
        if (response.data.status == 201) {
          _this2.$toastr.success(response.data.message, "User Access", {
            timeOut: 5000
          });

          _this2.$refs.closeModal.click();

          _this.getUserAccess();

          _this.clearForm(_this.AddUserAccess);
        } else {
          _this2.$toastr.warning("Something Went Wrong", "Sorry!", {
            timeOut: 5000
          });
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this.AllError = error.response.data.errors;
        } else {
          _this2.$toastr.error("Application Error", "Sorry");
        }
      });
    },
    getUserAccess: function getUserAccess() {
      var _this = this;

      var main_url = base_path + "user_access";
      axios.get(main_url).then(function (response) {
        _this.userAccessData = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    DeleteUserAccess: function DeleteUserAccess(id, index) {
      var _this = this;

      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.value) {
          axios["delete"](base_path + "user_access/" + id).then(function (response) {
            console.log(response.data);

            if (response.data.status === 200) {
              _this.getUserAccess();

              _this.$swal("Deleted!", response.data.message, "success");
            }

            if (response.data.status === 400) {
              _this.$swal("Opps", "Something Went Wrong", "warning");
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    },
    clearForm: function clearForm(form) {
      var _this = this;

      _this.AllError = [];
      Object.keys(form).forEach(function (key) {
        form[key] = "";
      });
    }
  },
  created: function created() {
    this.getUserAccess();
    this.getUser();
    this.getRole();
    this.getUserPermissions();
  }
});

/***/ }),

/***/ "./resources/js/components/User Access/UserAccessComponent.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/User Access/UserAccessComponent.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserAccessComponent_vue_vue_type_template_id_6e424b5d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAccessComponent.vue?vue&type=template&id=6e424b5d& */ "./resources/js/components/User Access/UserAccessComponent.vue?vue&type=template&id=6e424b5d&");
/* harmony import */ var _UserAccessComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserAccessComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/User Access/UserAccessComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserAccessComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserAccessComponent_vue_vue_type_template_id_6e424b5d___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserAccessComponent_vue_vue_type_template_id_6e424b5d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/User Access/UserAccessComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/User Access/UserAccessComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/User Access/UserAccessComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAccessComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserAccessComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User Access/UserAccessComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAccessComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/User Access/UserAccessComponent.vue?vue&type=template&id=6e424b5d&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/User Access/UserAccessComponent.vue?vue&type=template&id=6e424b5d& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAccessComponent_vue_vue_type_template_id_6e424b5d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAccessComponent_vue_vue_type_template_id_6e424b5d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAccessComponent_vue_vue_type_template_id_6e424b5d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserAccessComponent.vue?vue&type=template&id=6e424b5d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User Access/UserAccessComponent.vue?vue&type=template&id=6e424b5d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User Access/UserAccessComponent.vue?vue&type=template&id=6e424b5d&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User Access/UserAccessComponent.vue?vue&type=template&id=6e424b5d& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    _c("h3", [_vm._v("User Access")]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-primary" }, [
      _c("div", { staticClass: "panel-heading" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "panel-options" }, [
          _vm.permissions.includes("Add_User_Access")
            ? _c(
                "button",
                {
                  staticClass: "btn btn-blue btn-sm",
                  staticStyle: { "margin-top": "4px" },
                  attrs: { "data-target": "#addModal", "data-toggle": "modal" },
                },
                [_vm._v("+ Add")]
              )
            : _vm._e(),
        ]),
      ]),
      _vm._v(" "),
      _c("table", { staticClass: "table table-bordered table-responsive" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.userAccessData, function (data, index) {
            return data.users.email !== "admin@gmail.com"
              ? _c("tr", { key: index }, [
                  _c("td", { staticClass: "text-center" }, [
                    _vm._v(_vm._s(++index)),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(data.users ? data.users.email : "Not Set")),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(data.roles ? data.roles.name : "Not Set")),
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [
                    _vm.permissions.includes("Delete_User_Access") &&
                    data.roles.name !== "Super Admin"
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-red",
                            on: {
                              click: function ($event) {
                                return _vm.DeleteUserAccess(data.id, index)
                              },
                            },
                          },
                          [_c("i", { staticClass: "fa fa-trash" })]
                        )
                      : _vm._e(),
                  ]),
                ])
              : _vm._e()
          }),
          0
        ),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade in",
        attrs: { "aria-hidden": "true", id: "addModal", tabindex: "-1" },
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.addUserAccess.apply(null, arguments)
                  },
                },
              },
              [
                _c("div", { staticClass: "modal-body" }, [
                  _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "email" } }, [
                        _vm._v("User Email:*"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.AddUserAccess.user_id,
                              expression: "AddUserAccess.user_id",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { id: "email" },
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.AddUserAccess,
                                "user_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        _vm._l(_vm.user, function (data, index) {
                          return _c(
                            "option",
                            { domProps: { value: data.id } },
                            [_vm._v(_vm._s(data.email))]
                          )
                        }),
                        0
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "role" } }, [
                        _vm._v("Role:"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.AddUserAccess.role_id,
                              expression: "AddUserAccess.role_id",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { id: "role" },
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.AddUserAccess,
                                "role_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        _vm._l(_vm.role, function (data, index) {
                          return _c(
                            "option",
                            { domProps: { value: data.id } },
                            [_vm._v(_vm._s(data.name))]
                          )
                        }),
                        0
                      ),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c("button", { staticClass: "btn btn-success" }, [
                    _vm._v("Save"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      ref: "closeModal",
                      staticClass: "btn btn-secondary",
                      attrs: { "data-dismiss": "modal", type: "button" },
                      on: {
                        click: function ($event) {
                          return _vm.clearForm(_vm.AddUserAccess)
                        },
                      },
                    },
                    [_vm._v("Close")]
                  ),
                ]),
              ]
            ),
          ]),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-title" }, [
      _c("b", [_vm._v("User Access List")]),
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
        _c("th", { staticClass: "text-center" }, [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Role Name")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Action")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h4",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_c("b", [_vm._v("Add User Access")])]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            "aria-label": "Close",
            "data-dismiss": "modal",
            type: "button",
          },
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);