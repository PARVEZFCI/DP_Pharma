(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_customer_CustomerComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/customer/CustomerComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/customer/CustomerComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "CustomerList",
  data: function data() {
    return {
      allCustomers: {},
      customRow: 10,
      selectedRow: [10, 20, 30, 40, 50],
      search: "",
      customerType: 1,
      customerDetails: "",
      customerOrders: {}
    };
  },
  methods: {
    getCustomer: function getCustomer() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var customRow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      var _this = this;

      var url = base_path + "customer?q=" + _this.search + "&page=" + page + "&row=" + _this.customRow + "&type=" + _this.customerType;
      axios.get(url).then(function (response) {
        _this.allCustomers = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    changeStatus: function changeStatus(id) {
      var _this = this;

      axios.get(base_path + "customer/status/" + id).then(function (response) {
        _this.getCustomer();

        if (response.data.code === 200) {
          _this.$toastr.success("Approved successfully!", "Customer", {
            timeOut: 5000
          });
        }

        if (response.data.code === 201) {
          _this.$toastr.warning("Pending successfully!", "Customer", {
            timeOut: 5000
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getCustomerType: function getCustomerType() {
      var _this = this;

      _this.customerType = event.target.value;

      _this.getCustomer();
    },
    viewCustomer: function viewCustomer(data, id) {
      var self = this;
      self.customerDetails = data;
      axios.get(base_path + "customer/" + id).then(function (response) {
        self.customerOrders = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    this.getCustomer();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/customer/CustomerComponent.vue?vue&type=style&index=0&id=b0b0db8e&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/customer/CustomerComponent.vue?vue&type=style&index=0&id=b0b0db8e&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nlabel[data-v-b0b0db8e] {\n\tmargin-right: 15px;\n}\n.form-control[data-v-b0b0db8e] {\n\tborder: 1px solid #c8c1c1;\n}\ntable tr th[data-v-b0b0db8e] {\n\tcolor: #fff;\n\tfont-weight: 700;\n\ttext-align: center;\n}\ntable tr th[data-v-b0b0db8e],\ntable tr td[data-v-b0b0db8e] {\n\ttext-align: center;\n\tcolor: #ffff;\n}\n.badge.badge-warning[data-v-b0b0db8e] {\n\tbackground-color: #f9d62e;\n\tcolor: #fff;\n}\n.action-column[data-v-b0b0db8e] {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.dropdown-menu > li > a[data-v-b0b0db8e] {\n\tcursor: pointer;\n}\n.text-black[data-v-b0b0db8e] {\n\tcolor: #ffff;\n}\n.clientlogo[data-v-b0b0db8e] {\n\tfloat: left;\n\theight: 60px;\n\twidth: 60px;\n\tbackground: url(\"/frontend_assets/assets/img/logo.jpg\") no-repeat;\n\tbackground-size: 60px 60px;\n\tborder-radius: 50px;\n\tmargin-top: 30px;\n}\n.info[data-v-b0b0db8e] {\n\tdisplay: block;\n\tfloat: left;\n\tmargin-left: 20px;\n}\n.info h2[data-v-b0b0db8e] {\n\tfont-weight: 800;\n\tfont-size: 1.5em;\n}\n.info p[data-v-b0b0db8e],\n.invoice-left p[data-v-b0b0db8e] {\n\tcolor: #ffff;\n\tmargin-bottom: 5px;\n}\n.modal-footer[data-v-b0b0db8e] {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n.search-box[data-v-b0b0db8e] {\n\theight: 40px;\n\tmargin: 12px 0px 8px;\n}\n[data-v-b0b0db8e]::-moz-placeholder {\n\tcolor: #ffff;\n\topacity: 1;\n}\n[data-v-b0b0db8e]:-ms-input-placeholder {\n\tcolor: #ffff;\n\topacity: 1;\n}\n[data-v-b0b0db8e]::placeholder {\n\tcolor: #ffff;\n\topacity: 1;\n}\n[data-v-b0b0db8e]:-ms-input-placeholder {\n\tcolor: #ffff;\n}\n[data-v-b0b0db8e]::-ms-input-placeholder {\n\tcolor: #ffff;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/customer/CustomerComponent.vue?vue&type=style&index=0&id=b0b0db8e&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/customer/CustomerComponent.vue?vue&type=style&index=0&id=b0b0db8e&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerComponent_vue_vue_type_style_index_0_id_b0b0db8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerComponent.vue?vue&type=style&index=0&id=b0b0db8e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/customer/CustomerComponent.vue?vue&type=style&index=0&id=b0b0db8e&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerComponent_vue_vue_type_style_index_0_id_b0b0db8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerComponent_vue_vue_type_style_index_0_id_b0b0db8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/customer/CustomerComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/customer/CustomerComponent.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomerComponent_vue_vue_type_template_id_b0b0db8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerComponent.vue?vue&type=template&id=b0b0db8e&scoped=true& */ "./resources/js/components/customer/CustomerComponent.vue?vue&type=template&id=b0b0db8e&scoped=true&");
/* harmony import */ var _CustomerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/customer/CustomerComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _CustomerComponent_vue_vue_type_style_index_0_id_b0b0db8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerComponent.vue?vue&type=style&index=0&id=b0b0db8e&scoped=true&lang=css& */ "./resources/js/components/customer/CustomerComponent.vue?vue&type=style&index=0&id=b0b0db8e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _CustomerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CustomerComponent_vue_vue_type_template_id_b0b0db8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomerComponent_vue_vue_type_template_id_b0b0db8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b0b0db8e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/customer/CustomerComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/customer/CustomerComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/customer/CustomerComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/customer/CustomerComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/customer/CustomerComponent.vue?vue&type=style&index=0&id=b0b0db8e&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/customer/CustomerComponent.vue?vue&type=style&index=0&id=b0b0db8e&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerComponent_vue_vue_type_style_index_0_id_b0b0db8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerComponent.vue?vue&type=style&index=0&id=b0b0db8e&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/customer/CustomerComponent.vue?vue&type=style&index=0&id=b0b0db8e&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/customer/CustomerComponent.vue?vue&type=template&id=b0b0db8e&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/customer/CustomerComponent.vue?vue&type=template&id=b0b0db8e&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerComponent_vue_vue_type_template_id_b0b0db8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerComponent_vue_vue_type_template_id_b0b0db8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerComponent_vue_vue_type_template_id_b0b0db8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerComponent.vue?vue&type=template&id=b0b0db8e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/customer/CustomerComponent.vue?vue&type=template&id=b0b0db8e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/customer/CustomerComponent.vue?vue&type=template&id=b0b0db8e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/customer/CustomerComponent.vue?vue&type=template&id=b0b0db8e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h3", [_vm._v("Customers List")]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-primary" }, [
      _c("div", { staticClass: "panel-heading" }, [
        _c("div", { staticClass: "pull-right panel-title" }, [
          _c(
            "select",
            {
              staticClass: "form-control bg-dark",
              on: {
                change: function($event) {
                  return _vm.getCustomerType(this)
                }
              }
            },
            [
              _c("option", { attrs: { selected: "", value: "1" } }, [
                _vm._v("Retailer Customer")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "2" } }, [
                _vm._v("Regular Customer")
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "panel-heading",
          staticStyle: { padding: "6px 0px 3px" }
        },
        [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Show")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.customRow,
                          expression: "customRow"
                        }
                      ],
                      staticClass: "form-control",
                      on: {
                        change: [
                          function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.customRow = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                          _vm.getCustomer
                        ]
                      }
                    },
                    _vm._l(_vm.selectedRow, function(row) {
                      return _c("option", {
                        domProps: { textContent: _vm._s(row) }
                      })
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-2" }),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-5" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.search,
                      expression: "search"
                    }
                  ],
                  staticClass: "form-control search-box",
                  attrs: {
                    "aria-controls": "DataTables_Table_2",
                    placeholder: "Search",
                    type: "search"
                  },
                  domProps: { value: _vm.search },
                  on: {
                    keyup: function($event) {
                      return _vm.getCustomer()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.search = $event.target.value
                    }
                  }
                })
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive" }, [
        _c("table", { staticClass: "table table-bordered" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.allCustomers.data, function(customer, index) {
              return _c("tr", { key: index }, [
                _c("td", [_vm._v(_vm._s(++index))]),
                _vm._v(" "),
                _c("td", [
                  customer.customer_type == 1
                    ? _c("span", [
                        _vm._v(_vm._s(customer.customer_details.pharmacy_name))
                      ])
                    : _c("span", [_vm._v(_vm._s(customer.name))])
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(
                      customer.customer_details.phone
                        ? customer.customer_details.phone
                        : "N/A"
                    )
                  )
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", { staticStyle: { color: "white" } }, [
                    _vm._v(
                      _vm._s(
                        customer.customer_type == 1
                          ? "Retailer Customer"
                          : "Regular Customer"
                      )
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "label",
                    {
                      staticClass: "badge",
                      class:
                        customer.status == 1 ? "badge-success" : "badge-danger"
                    },
                    [
                      _vm._v(
                        _vm._s(customer.status == 1 ? "Approved" : "Pending")
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm",
                      class:
                        customer.status == 1 ? "btn-success" : "btn-warning",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.changeStatus(customer.id)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fas fa-sync" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-info",
                      attrs: {
                        "data-target": "#viewModal",
                        "data-toggle": "modal",
                        type: "button"
                      },
                      on: {
                        click: function($event) {
                          return _vm.viewCustomer(customer, customer.id)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fas fa-eye" })]
                  )
                ])
              ])
            }),
            0
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "text-center" },
      [
        _c(
          "pagination",
          {
            staticStyle: { "margin-left": "20px" },
            attrs: { data: _vm.allCustomers, limit: 3 },
            on: { "pagination-change-page": _vm.getCustomer }
          },
          [
            _c("span", { attrs: { slot: "prev-nav" }, slot: "prev-nav" }, [
              _vm._v("< Previous")
            ]),
            _vm._v(" "),
            _c("span", { attrs: { slot: "next-nav" }, slot: "next-nav" }, [
              _vm._v("Next >")
            ])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade in", attrs: { id: "viewModal" } }, [
      _c("div", { staticClass: "modal-dialog modal-lg" }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-2" }),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8" }, [
                _c("table", { staticClass: "table table-bordered" }, [
                  _c("tbody", [
                    _c("tr", [
                      _c("td", [_vm._v("Name:")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.customerDetails.name))])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _vm.customerDetails.customer_type == 1
                        ? _c("td", [_vm._v("Pharmacy:")])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm.customerDetails.customer_details &&
                              _vm.customerDetails.customer_details.pharmacy_name
                          )
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Address:")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm.customerDetails.customer_details &&
                              _vm.customerDetails.customer_details.address
                          )
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Phone:")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm.customerDetails.customer_details &&
                              _vm.customerDetails.customer_details.phone
                          )
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Type:")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm.customerDetails.customer_type == 1
                              ? "Retailer"
                              : "Regular"
                          )
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _vm.customerDetails.customer_type == 1
                        ? _c("td", [_vm._v("Trade License:")])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.customerDetails.customer_details &&
                      _vm.customerDetails.customer_details.trade_license
                        ? _c("td", [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href:
                                    "/download?file=" +
                                      _vm.customerDetails.customer_details &&
                                    _vm.customerDetails.customer_details
                                      .trade_license
                                }
                              },
                              [_c("i", { staticClass: "fa fa-download" })]
                            )
                          ])
                        : _vm._e()
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-2" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-12" },
                [
                  _vm._l(_vm.customerOrders.dateWise, function(
                    dateWise,
                    index
                  ) {
                    return _c(
                      "div",
                      [
                        _c(
                          "div",
                          {
                            staticClass: "text-center",
                            staticStyle: {
                              border: "1px solid darkgray",
                              height: "3rem",
                              width: "19rem",
                              "background-color": "currentcolor"
                            }
                          },
                          [
                            _c("b", [
                              _c(
                                "p",
                                {
                                  staticStyle: {
                                    color: "white",
                                    "margin-top": "3px"
                                  }
                                },
                                [
                                  _vm._v(
                                    "Date: " +
                                      _vm._s(
                                        _vm._f("moment")(index, "Do MMMM YYYY")
                                      )
                                  )
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _vm._l(dateWise, function(order) {
                          return _c(
                            "div",
                            { staticStyle: { "overflow-x": "auto" } },
                            [
                              _c("center", [
                                _c("p", { staticStyle: { color: "white" } }, [
                                  _c("b", [
                                    _vm._v(
                                      "Invoice: " + _vm._s(order.order_code)
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "table",
                                { staticClass: "table table-bordered" },
                                [
                                  _vm._m(2, true),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    _vm._l(order.order_medicine_info, function(
                                      data,
                                      index
                                    ) {
                                      return _c("tr", [
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [_vm._v(_vm._s(++index))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                _vm._s(
                                                  data.medicine
                                                    ? data.medicine.category
                                                      ? data.medicine.category
                                                          .code
                                                      : ""
                                                    : ""
                                                ) +
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                            ),
                                            _c("b", [
                                              _vm._v(
                                                _vm._s(
                                                  data.medicine
                                                    ? data.medicine.name
                                                    : " "
                                                )
                                              )
                                            ]),
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                _vm._s(
                                                  data.medicine &&
                                                    data.medicine.dosage
                                                ) +
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\t"
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                data.discount_price
                                                  ? data.discount_price
                                                  : data.medicine_price
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [_vm._v(_vm._s(data.quantity))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-right" },
                                          [_vm._v(_vm._s(data.sub_total))]
                                        )
                                      ])
                                    }),
                                    0
                                  ),
                                  _vm._v(" "),
                                  _c("tfoot", [
                                    _c("tr", [
                                      _c("td", {
                                        staticStyle: {
                                          "background-color":
                                            "#cbcccc !important"
                                        },
                                        attrs: { colspan: "3" }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticClass: "text-right",
                                          staticStyle: {
                                            "background-color":
                                              "#cbcccc !important",
                                            color: "black"
                                          }
                                        },
                                        [
                                          _c("b", [
                                            _vm._v(
                                              "Total Paid: " +
                                                _vm._s(order.total_paid)
                                            )
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticClass: "text-right",
                                          staticStyle: {
                                            "background-color":
                                              "#cbcccc !important",
                                            color: "black"
                                          }
                                        },
                                        [
                                          _c("b", [
                                            _vm._v(
                                              "Total Price: " +
                                                _vm._s(order.total_price)
                                            )
                                          ])
                                        ]
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ],
                            1
                          )
                        })
                      ],
                      2
                    )
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-4" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "table",
                        { staticClass: "pull-right table table-bordered" },
                        [
                          _c("tbody", [
                            _c("tr", [
                              _vm._m(3),
                              _vm._v(" "),
                              _c("td", [
                                _c("b", { staticStyle: { color: "white" } }, [
                                  _vm._v(
                                    _vm._s(_vm.customerOrders.total_quantity)
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _vm._m(4),
                              _vm._v(" "),
                              _c("td", [
                                _c("b", { staticStyle: { color: "white" } }, [
                                  _vm._v(
                                    _vm._s(_vm.customerOrders.total_amount)
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _vm._m(5),
                              _vm._v(" "),
                              _c("td", [
                                _c("b", { staticStyle: { color: "white" } }, [
                                  _vm._v(_vm._s(_vm.customerOrders.total_paid))
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _vm._m(6),
                              _vm._v(" "),
                              _c("td", [
                                _c("b", { staticStyle: { color: "white" } }, [
                                  _vm._v(_vm._s(_vm.customerOrders.total_due))
                                ])
                              ])
                            ])
                          ])
                        ]
                      )
                    ])
                  ])
                ],
                2
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [
            _c(
              "button",
              {
                ref: "addCloseBtn",
                staticClass: "btn btn-primary closeModal",
                attrs: { "data-dismiss": "modal", type: "button" }
              },
              [_vm._v("Close")]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Phone")]),
        _vm._v(" "),
        _c("th", [_vm._v("Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "33%" } }, [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h4",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_c("b", [_vm._v("View Customer")])]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            "aria-label": "Close",
            "data-dismiss": "modal",
            type: "button"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Rate")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("Total Amount")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("b", { staticStyle: { color: "white" } }, [_vm._v("Total Product")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("b", { staticStyle: { color: "white" } }, [_vm._v("Total Amount")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("b", { staticStyle: { color: "white" } }, [_vm._v("Total Paid")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("b", { staticStyle: { color: "white" } }, [_vm._v("Total Due")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);