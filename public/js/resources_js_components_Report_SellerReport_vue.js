"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Report_SellerReport_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Report/SellerReport.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Report/SellerReport.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "SellerReport",
  data: function data() {
    return {
      allData: {},
      select_row: {
        today: "Today",
        yesterday: "Yesterday",
        last7: "Last 7 Days",
        last30: "Last 30 Days",
        thismonth: "This Month",
        lastmonth: "Last Month",
        custom: "Custom Range"
      },
      showCustom: false,
      permissions: [],
      from: "",
      to: "",
      custom_row: "today",
      url: "",
      sellers: "",
      seller_id: "",
      trx_type: 3
    };
  },
  methods: {
    getSellerInfo: function getSellerInfo() {
      var _this = this;

      if (_this.custom_row == "custom") {
        _this.showCustom = true;
      } else {
        _this.showCustom = false;
      }

      _this.url = "date/seller_report?type=" + _this.custom_row + "&from=" + _this.from + "&to=" + _this.to + "&trx=" + _this.trx_type + "&seller=" + _this.seller_id;
      axios.get(base_path + _this.url).then(function (response) {
        _this.allData = response.data;
      });
    },
    getSellers: function getSellers() {
      var self = this;
      axios.get(base_path + "allActiveSeller").then(function (response) {
        self.sellers = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    print: function print() {
      this.$htmlToPaper("printDiv");
    }
  },
  created: function created() {
    this.getSellerInfo();
    this.getSellers();
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./resources/js/components/Report/SellerReport.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Report/SellerReport.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SellerReport_vue_vue_type_template_id_c7d75cda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SellerReport.vue?vue&type=template&id=c7d75cda&scoped=true& */ "./resources/js/components/Report/SellerReport.vue?vue&type=template&id=c7d75cda&scoped=true&");
/* harmony import */ var _SellerReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SellerReport.vue?vue&type=script&lang=js& */ "./resources/js/components/Report/SellerReport.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SellerReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SellerReport_vue_vue_type_template_id_c7d75cda_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SellerReport_vue_vue_type_template_id_c7d75cda_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c7d75cda",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Report/SellerReport.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Report/SellerReport.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Report/SellerReport.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SellerReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Report/SellerReport.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Report/SellerReport.vue?vue&type=template&id=c7d75cda&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Report/SellerReport.vue?vue&type=template&id=c7d75cda&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerReport_vue_vue_type_template_id_c7d75cda_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerReport_vue_vue_type_template_id_c7d75cda_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerReport_vue_vue_type_template_id_c7d75cda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SellerReport.vue?vue&type=template&id=c7d75cda&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Report/SellerReport.vue?vue&type=template&id=c7d75cda&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Report/SellerReport.vue?vue&type=template&id=c7d75cda&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Report/SellerReport.vue?vue&type=template&id=c7d75cda&scoped=true& ***!
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
    _c("h3", [_vm._v("Seller Report")]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-primary" }, [
      _c("div", { staticClass: "panel-heading" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "panel-options" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-default btn-sm",
              staticStyle: { "margin-top": "4px" },
              attrs: { href: "/export/" + _vm.url, type: "button" },
            },
            [
              _c("i", { staticClass: "fas fa-download" }),
              _vm._v(" Export\n\t\t\t\t"),
            ]
          ),
          _vm._v(" "),
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
                      return _vm.getSellerInfo()
                    },
                  ],
                },
              },
              _vm._l(_vm.select_row, function (row, index) {
                return _c("option", {
                  domProps: { value: index, textContent: _vm._s(row) },
                })
              }),
              0
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-1" }),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showCustom,
                expression: "showCustom",
              },
            ],
            staticClass: "col-md-2",
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.from,
                  expression: "from",
                },
              ],
              staticClass: "form-control search-box",
              attrs: { id: "from", type: "date" },
              domProps: { value: _vm.from },
              on: {
                change: function ($event) {
                  return _vm.getSellerInfo()
                },
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.from = $event.target.value
                },
              },
            }),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showCustom,
                expression: "showCustom",
              },
            ],
            staticClass: "col-md-2",
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.to,
                  expression: "to",
                },
              ],
              staticClass: "form-control search-box",
              attrs: { id: "to", type: "date" },
              domProps: { value: _vm.to },
              on: {
                change: function ($event) {
                  return _vm.getSellerInfo()
                },
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.to = $event.target.value
                },
              },
            }),
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-2" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.seller_id,
                  expression: "seller_id",
                },
              ],
              staticClass: "form-control",
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
                    _vm.seller_id = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  function ($event) {
                    return _vm.getSellerInfo()
                  },
                ],
              },
            },
            _vm._l(_vm.sellers, function (value, index) {
              return _c("option", {
                domProps: {
                  value: value.value,
                  textContent: _vm._s(value.text),
                },
              })
            }),
            0
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-2" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.trx_type,
                  expression: "trx_type",
                },
              ],
              staticClass: "form-control",
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
                    _vm.trx_type = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  function ($event) {
                    return _vm.getSellerInfo()
                  },
                ],
              },
            },
            [
              _c("option", { attrs: { value: "1" } }, [_vm._v("PAYED")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "2" } }, [_vm._v("RECIEVED")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "3" } }, [
                _vm._v("PAYED & RECIEVED"),
              ]),
            ]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticStyle: { "overflow-x": "auto", "background-color": "#004a88" },
        },
        [
          _c(
            "table",
            { staticClass: "table table-bordered table-responsive" },
            [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.allData.dateWise, function (data, index) {
                  return _c("tr", { key: index }, [
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(++index)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(data.seller)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm._f("moment")(data.date, "L"))),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(data.account)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(data.head)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(data.invoice)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(data.trx_type)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(data.amount)),
                    ]),
                  ])
                }),
                0
              ),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-10" }),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-2" }, [
            _c("table", { staticClass: "table table-bordered" }, [
              _c("tbody", [
                _vm.allData.expense
                  ? _c("tr", [
                      _c("td", [_vm._v("Expense")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("b", [_vm._v(_vm._s(_vm.allData.expense))]),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.allData.income
                  ? _c("tr", [
                      _c("td", [_vm._v("Income")]),
                      _vm._v(" "),
                      _c("td", [_c("b", [_vm._v(_vm._s(_vm.allData.income))])]),
                    ])
                  : _vm._e(),
              ]),
            ]),
          ]),
        ]
      ),
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
            _vm._l(_vm.allData.dateWise, function (data, index) {
              return _c("tr", { key: index }, [
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(++index)),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(data.seller)),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(_vm._f("moment")(data.date, "L"))),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(data.account)),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(data.head)),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(data.invoice)),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(data.trx_type)),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(data.amount)),
                ]),
              ])
            }),
            0
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticStyle: { float: "right" } }, [
          _c("table", { staticClass: "table table-bordered" }, [
            _c("tbody", [
              _vm.allData.expense
                ? _c("tr", [
                    _c("td", [_vm._v("Expense")]),
                    _vm._v(" "),
                    _c("td", [_c("b", [_vm._v(_vm._s(_vm.allData.expense))])]),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.allData.income
                ? _c("tr", [
                    _c("td", [_vm._v("Income")]),
                    _vm._v(" "),
                    _c("td", [_c("b", [_vm._v(_vm._s(_vm.allData.income))])]),
                  ])
                : _vm._e(),
            ]),
          ]),
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
      _c("b", [_vm._v("Seller Report")]),
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
        _c("th", { staticClass: "text-center" }, [_vm._v("Seller")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Account")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Head")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Invoice")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Type")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Amount")]),
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
        _c("th", { staticClass: "text-center" }, [_vm._v("Seller")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Account")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Head")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Invoice")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Type")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Amount")]),
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