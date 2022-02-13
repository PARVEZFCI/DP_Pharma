"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_User_ListUserComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/ListUserComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/ListUserComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  name: "ListUserComponent",
  data: function data() {
    return {
      userData: {},
      search: "",
      custom_row: 10,
      select_row: [10, 20, 30, 40, 50],
      viewUser: {
        name: "",
        phone: "",
        address: "",
        email: "",
        profile_photo_path: ""
      },
      tag: "svg",
      general_info: {
        name: "",
        phone: "",
        email: "",
        address: "",
        logo: ""
      },
      permissions: []
    };
  },
  methods: {
    ViewUser: function ViewUser(id) {
      var _this2 = this;

      axios.get(base_path + "user/" + id).then(function (response) {
        _this2.viewUser = response.data;
      });
    },
    getUser: function getUser() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var custom_row = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      var _this = this;

      var main_url = base_path + "user?q=" + _this.search + "&page=" + page + "&row=" + _this.custom_row;
      axios.get(main_url).then(function (response) {
        _this.userData = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getGeneralInfo: function getGeneralInfo() {
      var _this = this;

      axios.get(base_path + "general_settings").then(function (response) {
        _this.general_info = response.data[0];
      });
    },
    DeleteUser: function DeleteUser(id, index) {
      var _this3 = this;

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
          axios["delete"](base_path + "user/" + id).then(function (response) {
            if (response.data.status === 200) {
              _this3.getUser();

              _this3.$swal("Deleted!", response.data.message, "success");
            }

            if (response.data.status === 400) {
              _this3.$swal("Opps", "Something Went Wrong", "warning");
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    },
    changeUserStatus: function changeUserStatus(id) {
      var _this4 = this;

      var _this = this;

      axios.get(base_path + "user/status/" + id).then(function (response) {
        if (response.data.status === 200) {
          _this4.getUser();

          _this4.$swal("User!", response.data.message, "success");
        }

        if (response.data.status === 400) {
          _this4.$swal("Opps", "Something Went Wrong", "warning");
        }
      });
    },
    print: function print() {
      this.$htmlToPaper("printDiv");
    }
  },
  created: function created() {
    this.getUser(); // this.getGeneralInfo();

    this.getUserPermissions();
  }
});

/***/ }),

/***/ "./resources/js/components/User/ListUserComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/User/ListUserComponent.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListUserComponent_vue_vue_type_template_id_e9ff2f8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListUserComponent.vue?vue&type=template&id=e9ff2f8a& */ "./resources/js/components/User/ListUserComponent.vue?vue&type=template&id=e9ff2f8a&");
/* harmony import */ var _ListUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListUserComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/User/ListUserComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListUserComponent_vue_vue_type_template_id_e9ff2f8a___WEBPACK_IMPORTED_MODULE_0__.render,
  _ListUserComponent_vue_vue_type_template_id_e9ff2f8a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/User/ListUserComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/User/ListUserComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/User/ListUserComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListUserComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/ListUserComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/User/ListUserComponent.vue?vue&type=template&id=e9ff2f8a&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/User/ListUserComponent.vue?vue&type=template&id=e9ff2f8a& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUserComponent_vue_vue_type_template_id_e9ff2f8a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUserComponent_vue_vue_type_template_id_e9ff2f8a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUserComponent_vue_vue_type_template_id_e9ff2f8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListUserComponent.vue?vue&type=template&id=e9ff2f8a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/ListUserComponent.vue?vue&type=template&id=e9ff2f8a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/ListUserComponent.vue?vue&type=template&id=e9ff2f8a&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/ListUserComponent.vue?vue&type=template&id=e9ff2f8a& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    _c("h3", [_vm._v("User")]),
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
            _vm.permissions.includes("Add_User")
              ? _c(
                  "router-link",
                  {
                    staticStyle: { "margin-top": "4px" },
                    attrs: { to: "/admin/user/create", type: "button" },
                  },
                  [
                    _c("button", { staticClass: "btn btn-primary btn-sm" }, [
                      _vm._v("+ Add"),
                    ]),
                  ]
                )
              : _vm._e(),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "panel-heading" }, [
        _c("div", { staticClass: "pull-left col-sm-1" }, [
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              {
                staticClass: "control-label",
                staticStyle: { "margin-top": "15px" },
                attrs: { for: "entries" },
              },
              [_vm._v("Show")]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.custom_row,
                    expression: "custom_row",
                  },
                ],
                staticClass: "form-control",
                staticStyle: { position: "absolute", top: "6px", left: "59px" },
                on: {
                  change: [
                    function ($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function (o) {
                          return o.selected
                        })
                        .map(function (o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.custom_row = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    function ($event) {
                      return _vm.getUser()
                    },
                  ],
                },
              },
              _vm._l(_vm.select_row, function (row) {
                return _c("option", { domProps: { textContent: _vm._s(row) } })
              }),
              0
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "pull-right" }, [
          _c("label", [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search,
                  expression: "search",
                },
              ],
              staticClass: "form-control",
              staticStyle: { "margin-top": "10px", "margin-left": "-12px" },
              attrs: {
                "aria-controls": "DataTables_Table_2",
                placeholder: "Search",
                type: "search",
              },
              domProps: { value: _vm.search },
              on: {
                keyup: function ($event) {
                  return _vm.getUser()
                },
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.search = $event.target.value
                },
              },
            }),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticStyle: { "overflow-x": "auto" } },
        [
          _c(
            "table",
            { staticClass: "table table-bordered table-responsive" },
            [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.userData.data, function (data, index) {
                  return data.email !== "admin@gmail.com"
                    ? _c("tr", { key: index }, [
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(++index)),
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(data.name))]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _c("img", {
                            attrs: {
                              src: data.profile_photo_path
                                ? "/" + data.profile_photo_path
                                : "/backend_assets/assets/images/avatar.png",
                              width: "40",
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(data.phone))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(data.email))]),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-center" },
                          [
                            _vm.permissions.includes("View_User")
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-sm btn-default",
                                    attrs: {
                                      "data-target": "#viewModal",
                                      "data-toggle": "modal",
                                      type: "button",
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.ViewUser(data.id)
                                      },
                                    },
                                  },
                                  [_c("i", { staticClass: "fa fa-eye" })]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.permissions.includes("Edit_User")
                              ? _c(
                                  "router-link",
                                  {
                                    staticStyle: { "margin-top": "4px" },
                                    attrs: {
                                      to: {
                                        name: "/admin/user/edit",
                                        params: { id: data.id },
                                      },
                                      type: "button",
                                    },
                                  },
                                  [
                                    _c(
                                      "button",
                                      { staticClass: "btn btn-sm btn-info" },
                                      [_c("i", { staticClass: "fa fa-edit" })]
                                    ),
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.permissions.includes("Delete_User")
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-sm btn-red",
                                    on: {
                                      click: function ($event) {
                                        return _vm.DeleteUser(data.id, index)
                                      },
                                    },
                                  },
                                  [_c("i", { staticClass: "fa fa-trash" })]
                                )
                              : _vm._e(),
                          ],
                          1
                        ),
                      ])
                    : _vm._e()
                }),
                0
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "pagination",
            {
              staticStyle: { "margin-left": "20px" },
              attrs: { data: _vm.userData, limit: 3 },
              on: { "pagination-change-page": _vm.getUser },
            },
            [
              _c("span", { attrs: { slot: "prev-nav" }, slot: "prev-nav" }, [
                _vm._v("< Previous"),
              ]),
              _vm._v(" "),
              _c("span", { attrs: { slot: "next-nav" }, slot: "next-nav" }, [
                _vm._v("Next >"),
              ]),
            ]
          ),
        ],
        1
      ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade in",
        attrs: { "aria-hidden": "true", id: "viewModal", tabindex: "-1" },
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "invoice", attrs: { id: "printDiv" } }, [
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _c("center", [
                      _c("div", { staticClass: "invoice-left" }, [
                        _c("img", {
                          attrs: {
                            src: _vm.viewUser.profile_photo_path
                              ? _vm.viewUser.profile_photo_path
                              : "/assets/images/avatar.png",
                            alt: "",
                            width: "200",
                          },
                        }),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("strong", [_vm._v("Name:")]),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t" +
                            _vm._s(
                              _vm.viewUser.name ? _vm.viewUser.name : "Not Set"
                            ) +
                            "\n\t\t\t\t\t\t\t\t\t"
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("strong", [_vm._v("Email:")]),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t" +
                            _vm._s(
                              _vm.viewUser.email
                                ? _vm.viewUser.email
                                : "Not Set"
                            ) +
                            "\n\t\t\t\t\t\t\t\t\t"
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("strong", [_vm._v("Mobile:")]),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t" +
                            _vm._s(
                              _vm.viewUser.phone
                                ? _vm.viewUser.phone
                                : "Not Set"
                            ) +
                            "\n\t\t\t\t\t\t\t\t\t"
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("strong", [_vm._v("Address:")]),
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t" +
                            _vm._s(
                              _vm.viewUser.address
                                ? _vm.viewUser.address
                                : "Not Set"
                            ) +
                            "\n\t\t\t\t\t\t\t\t"
                        ),
                      ]),
                    ]),
                  ],
                  1
                ),
              ]),
            ]),
            _vm._v(" "),
            _vm._m(3),
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
      _c("b", [_vm._v("User List")]),
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
        _c("th", { staticClass: "text-center" }, [_vm._v("Profile")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Phone")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Email")]),
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
        [_c("b", [_vm._v("View User")])]
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
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { "data-dismiss": "modal", type: "button" },
        },
        [_vm._v("Close")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);