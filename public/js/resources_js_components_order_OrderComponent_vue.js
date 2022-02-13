(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_order_OrderComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/order/OrderComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/order/OrderComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "OrderList",
  data: function data() {
    return {
      invoiceList: {},
      invoiceData: {
        invoice_date: "",
        customer_name: "",
        customer_email: "",
        customer_phone: "",
        customer_address: "",
        customer_type: "",
        grand_total: 0,
        invoice_code: "",
        order_medicine_infos: [],
        total_due: 0,
        total_paid: 0,
        discount: 0
      },
      select_row: {
        today: "Today",
        yesterday: "Yesterday",
        last7: "Last 7 Days",
        last30: "Last 30 Days",
        thismonth: "This Month",
        lastmonth: "Last Month",
        custom: "Custom Range"
      },
      custom_row: "thismonth",
      from: "",
      to: "",
      search: "",
      settings: "",
      showCustom: false,
      currentPage: 1,
      url: ""
    };
  },
  methods: {
    getInvoice: function getInvoice() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      var _this = this;

      if (_this.custom_row == "custom") {
        _this.showCustom = true;
      } else {
        _this.showCustom = false;
      }

      _this.url = "invoice_list?q=" + _this.search + "&page=" + page + "&from=" + _this.from + "&to=" + _this.to + "&type=" + _this.custom_row;
      axios.get(base_path + _this.url).then(function (response) {
        _this.currentPage = response.data.current_page;
        _this.invoiceList = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    LiveTotalCalc: function LiveTotalCalc() {
      var self = this;
      self.invoiceData.grand_total = 0;
      self.invoiceData.order_medicine_infos.map(function (x) {
        parseFloat(self.invoiceData.grand_total += parseFloat(parseFloat(x.medicine_quantity) * parseFloat(x.discount_price)));
      });
      self.invoiceData.total_due = self.invoiceData.grand_total - parseFloat(self.invoiceData.total_paid ? self.invoiceData.total_paid : 0);
    },
    getInvoiceData: function getInvoiceData(id) {
      var _this = this;

      axios.get(base_path + "invoice/" + id).then(function (response) {
        console.log(response.data);
        _this.invoiceData = response.data;
        _this.invoiceData.discount = 0;

        _this.invoiceData.order_medicine_infos.map(function (x) {
          _this.invoiceData.discount += parseFloat(x.price) - parseFloat(x.discount_price ? x.discount_price : 0);
        }); // console.log(_this.invoiceData);

      })["catch"](function (error) {
        console.log(error);
      });
    },
    orderView: function orderView(id) {
      var self = this;
      axios.get(base_path + "invoice/view/" + id).then(function (response) {
        self.invoiceData.invoice_date = response.data.infos.invoice_date;
        self.invoiceData.customer_name = response.data.infos.customer_name;
        self.invoiceData.customer_email = response.data.infos.customer_email;
        self.invoiceData.customer_phone = response.data.infos.customer_phone;
        self.invoiceData.pharmacy_name = response.data.infos.pharmacy_name;
        self.invoiceData.customer_address = response.data.infos.customer_address;
        self.invoiceData.customer_type = response.data.infos.customer_type;
        self.invoiceData.grand_total = response.data.infos.grand_total;
        self.invoiceData.invoice_code = response.data.infos.invoice_code;
        self.invoiceData.order_medicine_infos = [];
        self.invoiceData.total_due = response.data.infos.total_due;
        self.invoiceData.paid = response.data.infos.paid;
        var allStock = response.data.stock;
        response.data.infos.order_medicine_infos.map(function (v, i) {
          var batches = [];
          var batch = "";
          var stock = 0;
          allStock.map(function (element) {
            if (element.medicine_id == v.medicine_id) {
              batches.push({
                stock: element.stock,
                batch: element.batch
              });

              if (element.batch == "DEFAULT") {
                batch = element.batch;
                stock = element.stock;
              }
            }
          });
          self.invoiceData.order_medicine_infos.push({
            id: v.id,
            category: v.category,
            discount: v.discount,
            discount_price: v.discount_price,
            medicine_id: v.medicine_id,
            medicine_name: v.medicine_name,
            medicine_quantity: v.medicine_quantity,
            price: v.price,
            sub_total: v.sub_total,
            batches: batches,
            batch: batch,
            stock: stock
          });
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    batchChange: function batchChange(index, batch) {
      var self = this;
      self.invoiceData.order_medicine_infos[index].batches.map(function (v) {
        if (v.batch == batch) {
          self.invoiceData.order_medicine_infos[index].stock = v.stock;
        }
      });
    },
    submitMedicineInfo: function submitMedicineInfo(id, data) {
      var self = this;
      axios.post(base_path + "medicine_info/" + id, data).then(function (response) {
        self.$toastr.success("Changed Successfully", "Invoice", {
          timeOut: 5000
        });
        self.getInvoice(self.currentPage);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    changeStatus: function changeStatus(id, status) {
      var _this = this;

      axios.patch(base_path + "invoice/status/" + id + "/" + status).then(function (response) {
        if (response.data.code == 201) {
          _this.getInvoice(_this.currentPage);

          _this.$toastr.success(response.data.message, "Invoice", {
            timeOut: 5000
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getAppSettings: function getAppSettings() {
      var _this = this;

      axios.get(base_path + "app_settings").then(function (response) {
        _this.settings = response.data;
      });
    }
  },
  created: function created() {
    this.getAppSettings();
    this.getInvoice();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/order/OrderComponent.vue?vue&type=style&index=0&id=03dd331b&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/order/OrderComponent.vue?vue&type=style&index=0&id=03dd331b&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\np[data-v-03dd331b] {\n\tcolor: #fff;\n}\nlabel[data-v-03dd331b] {\n\tmargin-right: 15px;\n}\n.form-control[data-v-03dd331b] {\n\tborder: 1px solid #c8c1c1;\n}\ntable tr[data-v-03dd331b] {\n\t/* text-align: center; */\n}\ntable tr th[data-v-03dd331b],\ntable tr td[data-v-03dd331b] {\n\t/* text-align: center; */\n\tcolor: #fff;\n}\n.badge.badge-warning[data-v-03dd331b] {\n\tbackground-color: #f9d62e;\n\tcolor: #fff;\n}\n.action-column[data-v-03dd331b] {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.dropdown-menu > li > a[data-v-03dd331b] {\n\tcursor: pointer;\n}\n.text-black[data-v-03dd331b] {\n\tcolor: #fff;\n}\n.clientlogo[data-v-03dd331b] {\n\tfloat: left;\n\theight: 60px;\n\twidth: 60px;\n\tbackground: url(\"/frontend_assets/assets/img/logo.jpg\") no-repeat;\n\tbackground-size: 60px 60px;\n\tborder-radius: 50px;\n\tmargin-top: 30px;\n}\n.info[data-v-03dd331b] {\n\tdisplay: block;\n\tfloat: left;\n\tmargin-left: 20px;\n}\n.info h2[data-v-03dd331b] {\n\tfont-weight: 800;\n\tfont-size: 1.5em;\n}\n.info p[data-v-03dd331b],\n.invoice-left p[data-v-03dd331b] {\n\tcolor: #fff;\n\tmargin-bottom: 5px;\n}\n.modal-footer[data-v-03dd331b] {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/order/OrderComponent.vue?vue&type=style&index=0&id=03dd331b&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/order/OrderComponent.vue?vue&type=style&index=0&id=03dd331b&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_style_index_0_id_03dd331b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderComponent.vue?vue&type=style&index=0&id=03dd331b&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/order/OrderComponent.vue?vue&type=style&index=0&id=03dd331b&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_style_index_0_id_03dd331b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_style_index_0_id_03dd331b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/order/OrderComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/order/OrderComponent.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OrderComponent_vue_vue_type_template_id_03dd331b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderComponent.vue?vue&type=template&id=03dd331b&scoped=true& */ "./resources/js/components/order/OrderComponent.vue?vue&type=template&id=03dd331b&scoped=true&");
/* harmony import */ var _OrderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/order/OrderComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _OrderComponent_vue_vue_type_style_index_0_id_03dd331b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderComponent.vue?vue&type=style&index=0&id=03dd331b&scoped=true&lang=css& */ "./resources/js/components/order/OrderComponent.vue?vue&type=style&index=0&id=03dd331b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _OrderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _OrderComponent_vue_vue_type_template_id_03dd331b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _OrderComponent_vue_vue_type_template_id_03dd331b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "03dd331b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/order/OrderComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/order/OrderComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/order/OrderComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/order/OrderComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/order/OrderComponent.vue?vue&type=style&index=0&id=03dd331b&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/order/OrderComponent.vue?vue&type=style&index=0&id=03dd331b&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_style_index_0_id_03dd331b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderComponent.vue?vue&type=style&index=0&id=03dd331b&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/order/OrderComponent.vue?vue&type=style&index=0&id=03dd331b&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/order/OrderComponent.vue?vue&type=template&id=03dd331b&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/order/OrderComponent.vue?vue&type=template&id=03dd331b&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_template_id_03dd331b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_template_id_03dd331b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_template_id_03dd331b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderComponent.vue?vue&type=template&id=03dd331b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/order/OrderComponent.vue?vue&type=template&id=03dd331b&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/order/OrderComponent.vue?vue&type=template&id=03dd331b&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/order/OrderComponent.vue?vue&type=template&id=03dd331b&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    _c("h3", [_vm._v("Orders List")]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-primary" }, [
      _c("div", { staticClass: "panel-heading" }, [
        _c("div", { staticClass: "panel-title" }, [_vm._v("Orders List")]),
        _vm._v(" "),
        _c("div", { staticClass: "panel-options" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-default btn-sm",
              staticStyle: { "margin-top": "4px" },
              attrs: { href: "/export/" + _vm.url, type: "button" }
            },
            [
              _c("i", { staticClass: "fas fa-download" }),
              _vm._v(" Export\n\t\t\t\t\t")
            ]
          )
        ])
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
                attrs: { for: "entries" }
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
                    expression: "custom_row"
                  }
                ],
                staticClass: "form-control",
                staticStyle: { position: "absolute", top: "6px", left: "59px" },
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
                      _vm.custom_row = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    function($event) {
                      return _vm.getInvoice()
                    }
                  ]
                }
              },
              _vm._l(_vm.select_row, function(row, index) {
                return _c("option", {
                  domProps: { value: index, textContent: _vm._s(row) }
                })
              }),
              0
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-2" }),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showCustom,
                expression: "showCustom"
              }
            ],
            staticClass: "col-md-3"
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.from,
                  expression: "from"
                }
              ],
              staticClass: "form-control search-box",
              attrs: { id: "from", type: "date" },
              domProps: { value: _vm.from },
              on: {
                change: function($event) {
                  return _vm.getInvoice()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.from = $event.target.value
                }
              }
            })
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
                expression: "showCustom"
              }
            ],
            staticClass: "col-md-3"
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.to,
                  expression: "to"
                }
              ],
              staticClass: "form-control search-box",
              attrs: { id: "to", type: "date" },
              domProps: { value: _vm.to },
              on: {
                change: function($event) {
                  return _vm.getInvoice()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.to = $event.target.value
                }
              }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive" }, [
        _c("table", { staticClass: "table table-bordered" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.invoiceList.data, function(order, index) {
              return _c("tr", { key: index }, [
                _c("td", [_vm._v(_vm._s(++index))]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(_vm._f("moment")(order.date, "DD/MM/YYYY")) +
                      " " +
                      _vm._s(_vm._f("moment")(order.created_at, "h:ma"))
                  )
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(
                      order.customer_details &&
                        order.customer_details.pharmacy_name
                    )
                  )
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(order.order_code))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(order.total_price))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(order.total_paid))]),
                _vm._v(" "),
                _c("td", [
                  order.status == 1
                    ? _c("span", [
                        _c("label", { staticClass: "badge badge-warning" }, [
                          _vm._v("Pending")
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  order.status == 2
                    ? _c("span", [
                        _c("label", { staticClass: "badge badge-primary" }, [
                          _vm._v("Order Accepted")
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  order.status == 3
                    ? _c("span", [
                        _c("label", { staticClass: "badge badge-info" }, [
                          _vm._v("On The Way")
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  order.status == 4
                    ? _c("span", [
                        _c("label", { staticClass: "badge badge-success" }, [
                          _vm._v("Success")
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  order.status == 5
                    ? _c("span", [
                        _c("label", { staticClass: "badge badge-danger" }, [
                          _vm._v("Rejected")
                        ])
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "action-column" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-info",
                      attrs: {
                        "data-target": "#viewModal",
                        "data-toggle": "modal"
                      },
                      on: {
                        click: function($event) {
                          return _vm.orderView(order.id)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fas fa-sliders-h" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success btn-sm",
                      attrs: {
                        "data-target": ".invoice-modal",
                        "data-toggle": "modal",
                        type: "button"
                      },
                      on: {
                        click: function($event) {
                          return _vm.getInvoiceData(order.id)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fas fa-print" })]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "btn-group" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-blue btn-sm dropdown-toggle",
                        attrs: { "data-toggle": "dropdown", type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.getInvoiceData(order.id)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t\tStatus\n\t\t\t\t\t\t\t\t\t\t"
                        ),
                        _c("span", { staticClass: "caret" })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "ul",
                      {
                        staticClass: "dropdown-menu dropdown-blue",
                        attrs: { role: "menu" }
                      },
                      [
                        _c("li", [
                          _c(
                            "a",
                            {
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.changeStatus(order.id, 1)
                                }
                              }
                            },
                            [_vm._v("Pending")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c(
                            "a",
                            {
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.changeStatus(order.id, 2)
                                }
                              }
                            },
                            [_vm._v("Order Accepted")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c(
                            "a",
                            {
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.changeStatus(order.id, 3)
                                }
                              }
                            },
                            [_vm._v("On The Way")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c(
                            "a",
                            {
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.changeStatus(order.id, 4)
                                }
                              }
                            },
                            [_vm._v("Success")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c(
                            "a",
                            {
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.changeStatus(order.id, 5)
                                }
                              }
                            },
                            [_vm._v("Rejected")]
                          )
                        ])
                      ]
                    )
                  ])
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
            attrs: { data: _vm.invoiceList, limit: 3 },
            on: { "pagination-change-page": _vm.getInvoice }
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
    _c(
      "div",
      {
        staticClass: "modal fade invoice-modal",
        attrs: {
          "aria-hidden": "true",
          "aria-labelledby": "myLargeModalLabel",
          role: "dialog",
          tabindex: "-1"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-body" }, [
              _c("div", {}, [
                _c("div", { staticClass: "row" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "info" }, [
                      _c("h2", [_vm._v(_vm._s(_vm.invoiceData.invoice_code))]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.invoiceData.pharmacy_name))]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          _vm._s(
                            _vm._f("moment")(_vm.invoiceData.date, "DD/MM/YYYY")
                          ) +
                            " " +
                            _vm._s(
                              _vm._f("moment")(
                                _vm.invoiceData.created_at,
                                "h:ma"
                              )
                            )
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.invoiceData.customer_name))]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.invoiceData.customer_email))]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.invoiceData.customer_phone))]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(_vm._s(_vm.invoiceData.customer_address))
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticStyle: { overflow: "auto" } }, [
                  _c("table", { staticClass: "table table-bordered" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.invoiceData.order_medicine_infos, function(
                        order
                      ) {
                        return _c("tr", [
                          _c(
                            "td",
                            { staticStyle: { "text-align": "center" } },
                            [
                              _vm._v(
                                _vm._s(
                                  order.category + " " + order.medicine_name
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticStyle: { "text-align": "center" } },
                            [_vm._v(_vm._s(order.price))]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticStyle: { "text-align": "center" } },
                            [
                              _vm._v(
                                _vm._s(order.discount ? order.discount : 0) +
                                  "%"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticStyle: { "text-align": "center" } },
                            [
                              _vm._v(
                                _vm._s(
                                  order.discount_price
                                    ? order.discount_price
                                    : 0
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticStyle: { "text-align": "center" } },
                            [
                              _vm._v(
                                _vm._s(
                                  order.medicine_quantity + " " + order.unit
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticStyle: { "text-align": "center" } },
                            [_vm._v(_vm._s(order.sub_total))]
                          )
                        ])
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row justify-content-end" }, [
                  _c("div", { staticClass: "col-md-6" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("table", { staticClass: "table table-bordered" }, [
                      _c("tbody", [
                        _c("tr", [
                          _vm._m(3),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(parseInt(_vm.invoiceData.grand_total))
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _vm._m(4),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(parseInt(_vm.invoiceData.total_paid)))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _vm._m(5),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(parseInt(_vm.invoiceData.total_due)))
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _vm._m(6),
              _vm._v(" "),
              _c("div", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success btn-icon icon-left Posprint",
                    attrs: { "data-url": "/order/print/" + _vm.invoiceData.id }
                  },
                  [
                    _vm._v("\n\t\t\t\t\t\t\t\tPrint\n\t\t\t\t\t\t\t\t"),
                    _c("i", { staticClass: "entypo-doc-text" })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { "data-dismiss": "modal", type: "button" }
                  },
                  [_vm._v("Close")]
                )
              ])
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade in", attrs: { id: "viewModal" } }, [
      _c("div", { staticClass: "modal-dialog modal-lg" }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(7),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c("div", {}, [
              _c("div", { staticClass: "row" }, [
                _vm._m(8),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "info" }, [
                    _c("h2", [_vm._v(_vm._s(_vm.invoiceData.invoice_code))]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(_vm.invoiceData.pharmacy_name))]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        _vm._s(
                          _vm._f("moment")(_vm.invoiceData.date, "DD/MM/YYYY")
                        ) +
                          " " +
                          _vm._s(
                            _vm._f("moment")(_vm.invoiceData.created_at, "h:ma")
                          )
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(_vm.invoiceData.customer_name))]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(_vm.invoiceData.customer_email))]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(_vm.invoiceData.customer_phone))]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(_vm.invoiceData.customer_address))])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticStyle: { overflow: "auto" } }, [
                _c("table", { staticClass: "table table-bordered" }, [
                  _c("thead", [
                    _c("tr", [
                      _vm._m(9),
                      _vm._v(" "),
                      _vm._m(10),
                      _vm._v(" "),
                      _vm._m(11),
                      _vm._v(" "),
                      _vm._m(12),
                      _vm._v(" "),
                      _vm.settings.batch
                        ? _c(
                            "th",
                            { staticStyle: { "text-align": "center" } },
                            [_c("strong", [_vm._v("Batch")])]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._m(13),
                      _vm._v(" "),
                      _vm._m(14),
                      _vm._v(" "),
                      _vm._m(15),
                      _vm._v(" "),
                      _vm._m(16)
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.invoiceData.order_medicine_infos, function(
                      order,
                      index
                    ) {
                      return _c("tr", [
                        _c("td", { staticStyle: { "text-align": "center" } }, [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                              _vm._s(order.category) +
                              "\n\t\t\t\t\t\t\t\t\t\t\t\t"
                          ),
                          _c("b", [_vm._v(_vm._s(order.medicine_name))])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { "text-align": "center" } }, [
                          _vm._v(_vm._s(order.price))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { "text-align": "center" } }, [
                          _vm._v(_vm._s(order.discount) + "%")
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { "text-align": "center" } }, [
                          _vm._v(_vm._s(order.discount_price))
                        ]),
                        _vm._v(" "),
                        _vm.settings.batch
                          ? _c(
                              "td",
                              { staticStyle: { "text-align": "center" } },
                              [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: order.batch,
                                        expression: "order.batch"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            order,
                                            "batch",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        },
                                        function($event) {
                                          return _vm.batchChange(
                                            index,
                                            order.batch
                                          )
                                        }
                                      ]
                                    }
                                  },
                                  _vm._l(order.batches, function(data) {
                                    return _c(
                                      "option",
                                      { domProps: { value: data.batch } },
                                      [_vm._v(_vm._s(data.batch))]
                                    )
                                  }),
                                  0
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("td", { staticStyle: { "text-align": "center" } }, [
                          _c("span", [_vm._v(_vm._s(order.stock))])
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticStyle: {
                              "text-align": "center",
                              width: "100px"
                            }
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: order.medicine_quantity,
                                  expression: "order.medicine_quantity"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { min: "0", type: "number" },
                              domProps: { value: order.medicine_quantity },
                              on: {
                                change: function($event) {
                                  return _vm.LiveTotalCalc()
                                },
                                keyup: function($event) {
                                  return _vm.LiveTotalCalc()
                                },
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    order,
                                    "medicine_quantity",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("td", { staticStyle: { "text-align": "center" } }, [
                          _vm._v(
                            _vm._s(
                              (
                                order.medicine_quantity * order.discount_price
                              ).toFixed(2)
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { "text-allign": "center" } }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-success",
                              on: {
                                click: function($event) {
                                  return _vm.submitMedicineInfo(order.id, order)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-check" })]
                          )
                        ])
                      ])
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row justify-content-end" }, [
                _c("div", { staticClass: "col-md-6" }),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3" }),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3" }, [
                  _c("table", { staticClass: "table table-bordered" }, [
                    _c("tbody", [
                      _c("tr", [
                        _vm._m(17),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              parseFloat(_vm.invoiceData.grand_total).toFixed(2)
                            )
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _vm._m(18),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              parseFloat(
                                _vm.invoiceData.total_paid
                                  ? _vm.invoiceData.total_paid
                                  : 0
                              ).toFixed(2)
                            )
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _vm._m(19),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              parseFloat(_vm.invoiceData.total_due).toFixed(2)
                            )
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [
            _c(
              "button",
              {
                ref: "updateCloseBtn",
                staticClass: "btn btn-secondary",
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
        _c("th", [_c("b", [_vm._v("#")])]),
        _vm._v(" "),
        _c("th", [_c("b", [_vm._v("Order Date")])]),
        _vm._v(" "),
        _c("th", [_c("b", [_vm._v("Pharmacy Name")])]),
        _vm._v(" "),
        _c("th", [_c("b", [_vm._v("Invoice")])]),
        _vm._v(" "),
        _c("th", [_c("b", [_vm._v("Total Price")])]),
        _vm._v(" "),
        _c("th", [_c("b", [_vm._v("Total Paid")])]),
        _vm._v(" "),
        _c("th", { attrs: { width: "33" } }, [_c("b", [_vm._v("Status")])]),
        _vm._v(" "),
        _c("th", { attrs: { width: "33" } }, [_c("b", [_vm._v("Action")])])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "clientlogo" }),
      _vm._v(" "),
      _c("div", { staticClass: "info" }, [
        _c("h2", [_c("b", [_vm._v("Dhaka Pharmacy")])]),
        _vm._v(" "),
        _c("p", [_vm._v("Joynal Tower,Joynal Market Dokkinkhan")]),
        _vm._v(" "),
        _c("p", [_vm._v("Uttara, Dhaka-1230")]),
        _vm._v(" "),
        _c("p", [_vm._v("Mobile: 01646981922-25")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { "text-align": "center" } }, [
          _c("strong", [_vm._v("Medicine")])
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "text-align": "center" } }, [
          _c("strong", [_vm._v("Price")])
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "text-align": "center" } }, [
          _c("strong", [_vm._v("Discount")])
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "text-align": "center" } }, [
          _c("strong", [_vm._v("Discount Price")])
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "text-align": "center" } }, [
          _c("strong", [_vm._v("Qty")])
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "text-align": "center" } }, [
          _c("strong", [_vm._v("Amount")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("strong", { staticClass: "text-black" }, [_vm._v("Total:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("strong", { staticClass: "text-black" }, [_vm._v("Paid:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("strong", { staticClass: "text-black" }, [_vm._v("Due:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _vm._v("\n\t\t\t\t\t\t\tSoftware Developed By\n\t\t\t\t\t\t\t"),
      _c("a", { attrs: { href: "http://bizitbd.com", target: "_blank" } }, [
        _vm._v("BizitBD")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("View Order Details")]),
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
    return _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "clientlogo" }),
      _vm._v(" "),
      _c("div", { staticClass: "info" }, [
        _c("h2", [_vm._v("Dhaka Pharmacy")]),
        _vm._v(" "),
        _c("p", [_vm._v("Joynal Tower,Joynal Market Dokkinkhan")]),
        _vm._v(" "),
        _c("p", [_vm._v("Uttara, Dhaka-1230")]),
        _vm._v(" "),
        _c("p", [_vm._v("01646981922-25")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticStyle: { "text-align": "center" } }, [
      _c("strong", [_vm._v("Medicine")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticStyle: { "text-align": "center" } }, [
      _c("strong", [_vm._v("Price")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticStyle: { "text-align": "center" } }, [
      _c("strong", [_vm._v("Discount")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticStyle: { "text-align": "center" } }, [
      _c("strong", [_vm._v("Discount Price")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticStyle: { "text-align": "center" } }, [
      _c("strong", [_vm._v("Stock")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticStyle: { "text-align": "center" } }, [
      _c("strong", [_vm._v("Qty")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticStyle: { "text-align": "center" } }, [
      _c("strong", [_vm._v("Amount")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticStyle: { "text-align": "center" } }, [
      _c("strong", [_vm._v("Submit")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("strong", { staticClass: "text-black" }, [_vm._v("Total:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("strong", { staticClass: "text-black" }, [_vm._v("Paid:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("strong", { staticClass: "text-black" }, [_vm._v("Due:")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);