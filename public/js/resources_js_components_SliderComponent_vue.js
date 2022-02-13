"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_SliderComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SliderComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SliderComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
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
  name: "SliderComponent",
  data: function data() {
    return {
      AddSlider: {
        path: "",
        order: ""
      },
      imageSource: "",
      AllError: [],
      sliderData: {},
      editSlider: {},
      custom_row: 10,
      select_row: [10, 20, 30, 40, 50]
    };
  },
  methods: {
    AddNewSlider: function AddNewSlider() {
      var _this2 = this;

      var _this = this;

      axios.post(base_path + "slider", _this.AddSlider).then(function (response) {
        if (response.data.code == 201) {
          _this2.$toastr.success(response.data.message, "Category", {
            timeout: 5000
          });

          _this.hideModal("addModal");

          _this.getSlider();

          _this.clearForm(_this.AddSlider);
        } else {
          _this.$toastr.warning("Something Went Wrong", "Sorry!", {
            timeOut: 5000
          });
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this.AllError = error.response.data.errors;
        } else {// this.$toastr.error("Application Error", "Sorry");
        }
      });
    },
    getImage: function getImage() {
      var _this3 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this3.AddSlider.path = event.target.result;
        _this3.editSlider.path = event.target.result;
        _this3.imageSource = event.target.result;
      };

      reader.readAsDataURL(file);
    },
    getSlider: function getSlider() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var custom_row = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      var _this = this;

      var main_url = base_path + "slider?page=" + page + "&row=" + _this.custom_row;
      axios.get(main_url).then(function (response) {
        _this.sliderData = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    DeleteSlider: function DeleteSlider(id, index) {
      var _this4 = this;

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
          axios["delete"](base_path + "slider/" + id).then(function (response) {
            if (response.data.code == 200) {
              _this4.getSlider();

              _this4.$swal("Deleted!", response.data.message, "success");
            }

            if (response.data.code === 400) {
              _this4.$swal("Opps", "Something Went Wrong", "warning");
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    },
    changeSliderStatus: function changeSliderStatus(id) {
      var _this = this;

      axios.get(base_path + "slider/status/" + id).then(function (response) {
        if (response.data.code === 200) {
          _this.getSlider();

          _this.$toastr.success(response.data.message, "Slider", {
            timeOut: 5000
          });
        }

        if (response.data.code === 400) {
          _this.$swal("Opps", "Something Went Wrong", "warning");
        }
      });
    },
    EditSlider: function EditSlider(id, data) {
      var _this = this;

      _this.openModal("editModal");

      _this.editSlider = data;
      _this.imageSource = "/" + (data.path ? data.path : "backend_assets/assets/images/sample.jpg");
    },
    updateSlider: function updateSlider(id) {
      var _this5 = this;

      var _this = this;

      axios.put(base_path + "slider/" + id, _this.editSlider).then(function (response) {
        if (response.data.code == 201) {
          _this5.$toastr.success(response.data.message, "Slider", {
            timeOut: 5000
          });

          _this.hideModal("editModal");

          _this5.getSlider();
        } else {
          _this5.$toastr.warning("Something Went Wrong", "Sorry!", {
            timeOut: 5000
          });
        }
      })["catch"](function (error) {
        if (error.response.code === 422) {
          _this.AllError = error.response.data.errors;
        } else {// this.$toastr.error("Application Error", "Sorry");
        }
      });
    },
    clearForm: function clearForm(form) {
      var _this = this;

      _this.AllError = [];
      Object.keys(form).forEach(function (key) {
        form[key] = "";
      });
    },
    hideModal: function hideModal(modal) {
      this.$modal.hide(modal);
    },
    openModal: function openModal(modal) {
      this.$modal.show(modal, {
        draggable: true
      }, {
        height: "auto"
      });
    }
  },
  created: function created() {
    // this.getUserPermissions();
    this.getSlider();
  }
});

/***/ }),

/***/ "./resources/js/components/SliderComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/SliderComponent.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SliderComponent_vue_vue_type_template_id_5e4b60fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SliderComponent.vue?vue&type=template&id=5e4b60fe& */ "./resources/js/components/SliderComponent.vue?vue&type=template&id=5e4b60fe&");
/* harmony import */ var _SliderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SliderComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/SliderComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SliderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SliderComponent_vue_vue_type_template_id_5e4b60fe___WEBPACK_IMPORTED_MODULE_0__.render,
  _SliderComponent_vue_vue_type_template_id_5e4b60fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SliderComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SliderComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/SliderComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SliderComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SliderComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SliderComponent.vue?vue&type=template&id=5e4b60fe&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/SliderComponent.vue?vue&type=template&id=5e4b60fe& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_template_id_5e4b60fe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_template_id_5e4b60fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderComponent_vue_vue_type_template_id_5e4b60fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SliderComponent.vue?vue&type=template&id=5e4b60fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SliderComponent.vue?vue&type=template&id=5e4b60fe&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SliderComponent.vue?vue&type=template&id=5e4b60fe&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SliderComponent.vue?vue&type=template&id=5e4b60fe& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("h3", [_vm._v("Slider")]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "panel panel-primary" },
        [
          _c("div", { staticClass: "panel-heading" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "panel-options" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-blue btn-sm",
                  staticStyle: { "margin-top": "4px" },
                  on: {
                    click: function ($event) {
                      return _vm.openModal("addModal")
                    },
                  },
                },
                [_vm._v("+ Add")]
              ),
            ]),
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
                    staticStyle: {
                      position: "absolute",
                      top: "6px",
                      left: "59px",
                    },
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
                          return _vm.getSlider()
                        },
                      ],
                    },
                  },
                  _vm._l(_vm.select_row, function (row) {
                    return _c("option", {
                      domProps: { textContent: _vm._s(row) },
                    })
                  }),
                  0
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "table",
            { staticClass: "table table-bordered table-responsive" },
            [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.sliderData.data, function (data, index) {
                  return _c("tr", { key: index }, [
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(++index)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _c("img", {
                        attrs: {
                          src: data.path
                            ? "/" + data.path
                            : "/backend_assets/assets/images/sample.jpg",
                          width: "120",
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(data.order))]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _c(
                        "div",
                        {
                          staticClass: "label",
                          class:
                            data.status == 1
                              ? "label-success"
                              : "label-warning",
                        },
                        [_vm._v(_vm._s(data.status == 1 ? "On" : "Off"))]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm",
                          class:
                            data.status == 1 ? "btn-success" : "btn-warning",
                          attrs: { type: "button" },
                          on: {
                            click: function ($event) {
                              return _vm.changeSliderStatus(data.id)
                            },
                          },
                        },
                        [_c("i", { staticClass: "fa fa-refresh" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-info",
                          attrs: { type: "button" },
                          on: {
                            click: function ($event) {
                              return _vm.EditSlider(data.id, data)
                            },
                          },
                        },
                        [_c("i", { staticClass: "fa fa-edit" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-red",
                          on: {
                            click: function ($event) {
                              return _vm.DeleteSlider(data.id, index)
                            },
                          },
                        },
                        [_c("i", { staticClass: "fa fa-trash" })]
                      ),
                    ]),
                  ])
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
              attrs: { data: _vm.sliderData, limit: 3 },
              on: { "pagination-change-page": _vm.getSlider },
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
      _vm._v(" "),
      _c(
        "modal",
        { attrs: { adaptive: true, height: "auto", name: "addModal" } },
        [
          _c("div", { staticClass: "modal-header" }, [
            _c(
              "h4",
              {
                staticClass: "modal-title",
                attrs: { id: "exampleModalLabel" },
              },
              [_c("b", [_vm._v("Add Slider")])]
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
          ]),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.AddNewSlider.apply(null, arguments)
                },
              },
            },
            [
              _c(
                "div",
                { staticClass: "modal-body" },
                [
                  _c("center", [
                    _c(
                      "div",
                      {
                        staticClass: "fileinput-new thumbnail",
                        staticStyle: { width: "200px" },
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: _vm.AddSlider.path
                              ? _vm.AddSlider.path
                              : "/backend_assets/assets/images/sample.jpg",
                            id: "previmage",
                            width: "200",
                          },
                        }),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "form-group",
                      class: _vm.AllError.path ? "validate-has-error" : "",
                    },
                    [
                      _c("label", { attrs: { for: "image" } }, [
                        _vm._v("Slider Image*:"),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticStyle: { color: "white" } }, [
                        _vm._v(
                          "\n\t\t\t\t\t\tImage standard size\n\t\t\t\t\t\t"
                        ),
                        _c("span", { staticStyle: { color: "yellow" } }, [
                          _vm._v("1600px*470px"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: { id: "image", type: "file" },
                        on: { change: _vm.getImage },
                      }),
                      _vm._v(" "),
                      _vm.AllError.path
                        ? _c("span", {
                            staticClass: "text-danger",
                            domProps: {
                              textContent: _vm._s(_vm.AllError.path[0]),
                            },
                          })
                        : _vm._e(),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "form-group",
                      class: _vm.AllError.header ? "validate-has-error" : "",
                    },
                    [
                      _c("label", { attrs: { for: "order" } }, [
                        _vm._v("Slider Order:"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.AddSlider.order,
                            expression: "AddSlider.order",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "order",
                          placeholder: "Enter Slider Order",
                          type: "number",
                        },
                        domProps: { value: _vm.AddSlider.order },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.AddSlider,
                              "order",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    staticStyle: { float: "right", "margin-bottom": "15px" },
                    attrs: { type: "button" },
                    on: {
                      click: function ($event) {
                        return _vm.hideModal("addModal")
                      },
                    },
                  },
                  [_vm._v("Close")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    staticStyle: { float: "right", "margin-bottom": "15px" },
                  },
                  [_vm._v("Save")]
                ),
              ]),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "modal",
        { attrs: { adaptive: true, height: "auto", name: "editModal" } },
        [
          _c("div", { staticClass: "modal-header" }, [
            _c(
              "h4",
              {
                staticClass: "modal-title",
                attrs: { id: "exampleModalLabel" },
              },
              [_c("b", [_vm._v("Edit Slider")])]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "close",
                attrs: { "aria-label": "Close", type: "button" },
                on: {
                  click: function ($event) {
                    return _vm.hideModal("editModal")
                  },
                },
              },
              [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
            ),
          ]),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.updateSlider(_vm.editSlider.id)
                },
              },
            },
            [
              _c(
                "div",
                { staticClass: "modal-body" },
                [
                  _c("center", [
                    _c(
                      "div",
                      {
                        staticClass: "fileinput-new thumbnail",
                        staticStyle: { width: "200px" },
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: _vm.imageSource,
                            id: "previmage",
                            width: "200",
                          },
                        }),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "form-group",
                      class: _vm.AllError.path ? "validate-has-error" : "",
                    },
                    [
                      _c("label", { attrs: { for: "image" } }, [
                        _vm._v("Slider Image*:"),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticStyle: { color: "white" } }, [
                        _vm._v(
                          "\n\t\t\t\t\t\tImage standard size\n\t\t\t\t\t\t"
                        ),
                        _c("span", { staticStyle: { color: "yellow" } }, [
                          _vm._v("1600px*470px"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: { id: "image", type: "file" },
                        on: { change: _vm.getImage },
                      }),
                      _vm._v(" "),
                      _vm.AllError.path
                        ? _c("span", {
                            staticClass: "text-danger",
                            domProps: {
                              textContent: _vm._s(_vm.AllError.path[0]),
                            },
                          })
                        : _vm._e(),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "form-group",
                      class: _vm.AllError.order ? "validate-has-error" : "",
                    },
                    [
                      _c("label", { attrs: { for: "order" } }, [
                        _vm._v("Slider Order:"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.editSlider.order,
                            expression: "editSlider.order",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: "Enter Slider Order",
                          type: "number",
                        },
                        domProps: { value: _vm.editSlider.order },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.editSlider,
                              "order",
                              $event.target.value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm.AllError.order
                        ? _c("span", {
                            staticClass: "text-danger",
                            domProps: {
                              textContent: _vm._s(_vm.AllError.order[0]),
                            },
                          })
                        : _vm._e(),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    staticStyle: { float: "right", "margin-bottom": "15px" },
                  },
                  [_vm._v("Save Changes")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    staticStyle: { float: "right", "margin-bottom": "15px" },
                    attrs: { type: "button" },
                    on: {
                      click: function ($event) {
                        return _vm.hideModal("editModal")
                      },
                    },
                  },
                  [_vm._v("Close")]
                ),
              ]),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-title" }, [
      _c("b", [_vm._v("Slider List")]),
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
        _c("th", { staticClass: "text-center" }, [_vm._v("Slider")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Order")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Action")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);