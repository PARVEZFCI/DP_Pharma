"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Report_MedicineStockSaleReport_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Report/MedicineStockSaleReport.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Report/MedicineStockSaleReport.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MedicineStockSaleReport",
  data: function data() {
    return {
      allData: {}
    };
  },
  methods: {
    getStockInfo: function getStockInfo() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var custom_row = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      var _this = this;

      axios.get(base_path + "stock_sale_report").then(function (response) {
        _this.allData = response.data;
      });
    },
    print: function print() {
      this.$htmlToPaper("printDiv");
    }
  },
  created: function created() {
    this.getStockInfo();
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./resources/js/components/Report/MedicineStockSaleReport.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/Report/MedicineStockSaleReport.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MedicineStockSaleReport_vue_vue_type_template_id_758519a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MedicineStockSaleReport.vue?vue&type=template&id=758519a7&scoped=true& */ "./resources/js/components/Report/MedicineStockSaleReport.vue?vue&type=template&id=758519a7&scoped=true&");
/* harmony import */ var _MedicineStockSaleReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MedicineStockSaleReport.vue?vue&type=script&lang=js& */ "./resources/js/components/Report/MedicineStockSaleReport.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MedicineStockSaleReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MedicineStockSaleReport_vue_vue_type_template_id_758519a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MedicineStockSaleReport_vue_vue_type_template_id_758519a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "758519a7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Report/MedicineStockSaleReport.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Report/MedicineStockSaleReport.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Report/MedicineStockSaleReport.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineStockSaleReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MedicineStockSaleReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Report/MedicineStockSaleReport.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineStockSaleReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Report/MedicineStockSaleReport.vue?vue&type=template&id=758519a7&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/Report/MedicineStockSaleReport.vue?vue&type=template&id=758519a7&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineStockSaleReport_vue_vue_type_template_id_758519a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineStockSaleReport_vue_vue_type_template_id_758519a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MedicineStockSaleReport_vue_vue_type_template_id_758519a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MedicineStockSaleReport.vue?vue&type=template&id=758519a7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Report/MedicineStockSaleReport.vue?vue&type=template&id=758519a7&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Report/MedicineStockSaleReport.vue?vue&type=template&id=758519a7&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Report/MedicineStockSaleReport.vue?vue&type=template&id=758519a7&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    _c("h3", [_vm._v("Sale & Stock Report")]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-primary" }, [
      _c("div", { staticClass: "panel-heading" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "panel-options" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-sm",
              staticStyle: { "margin-top": "4px" },
              attrs: { type: "button" },
              on: {
                click: function ($event) {
                  return _vm.print()
                },
              },
            },
            [
              _c("i", { staticClass: "entypo-print" }),
              _vm._v("Print\n\t\t\t\t"),
            ]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "panel-heading" }),
      _vm._v(" "),
      _c("div", { staticStyle: { "overflow-x": "auto" } }, [
        _c("table", { staticClass: "table table-bordered table-responsive" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.allData, function (data, index) {
              return _c("tr", { key: index }, [
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(++index)),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(data.medicine)),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(data.manufacturer)),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(data.unit)),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(data.total_stock)),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(data.total_sale)),
                ]),
              ])
            }),
            0
          ),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "invoice", attrs: { hidden: "", id: "printDiv" } },
      [
        _vm._m(2),
        _vm._v(" "),
        _c("div", { staticStyle: { "margin-top": "30px" } }),
        _vm._v(" "),
        _c("table", { staticClass: "table table-bordered" }, [
          _vm._m(3),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.allData, function (data, index) {
              return _c("tr", { key: index }, [
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(++index)),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(data.medicine)),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(data.manufacturer)),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(data.total_stock)),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(data.total_sale)),
                ]),
              ])
            }),
            0
          ),
        ]),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _vm._m(5),
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
      _c("b", [_vm._v("Sale & Stock Report")]),
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
        _c("th", { staticClass: "text-center" }, [_vm._v("Manufacturer")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Unit")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Current Stock")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Total Sold")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-3" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "clientlogo" }),
        _vm._v(" "),
        _c("div", { staticClass: "info" }, [
          _c("h2", [_vm._v("Dhaka Pharmacy")]),
          _vm._v(" "),
          _c("p", [_vm._v("Joynal Tower,Joynal Market Dokkinkhan")]),
          _vm._v(" "),
          _c("p", [_vm._v("Uttara, Dhaka-1230")]),
          _vm._v(" "),
          _c("p", [_vm._v("01646981922-25")]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-3" }),
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
        _c("th", { staticClass: "text-center" }, [_vm._v("Manufacturer")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Current Stock")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Total Sold")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "row", staticStyle: { "margin-top": "35px" } },
      [
        _c("div", { staticClass: "col-md-4 text-center" }, [
          _c("p", { staticStyle: { color: "white" } }, [
            _c("b", [_vm._v("Accounts")]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4 text-center" }, [
          _c("p", { staticStyle: { color: "white" } }, [
            _c("b", [_vm._v("Sales")]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4 text-center" }, [
          _c("p", { staticStyle: { color: "white" } }, [
            _c("b", [_vm._v("Prepared By")]),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("p", { staticStyle: { color: "white" } }, [
        _vm._v("Developed By BizIt BD"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);