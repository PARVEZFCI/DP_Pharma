"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_generic_GenericComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/generic/GenericComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/generic/GenericComponent.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
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
  name: "GenericComponent",
  data: function data() {
    return {
      addGeneric: {
        generic_name: "",
        description: ""
      },
      allGenerics: {},
      editGenericData: {},
      allErrors: [],
      search: "",
      customRow: 10,
      selectRow: [10, 20, 30, 40, 50]
    };
  },
  methods: {
    addNewGeneric: function addNewGeneric() {
      var _this2 = this;

      var _this = this;

      axios.post(base_path + "generic", _this.addGeneric).then(function (response) {
        if (response.data.code == 201) {
          _this2.$toastr.success(response.data.message, "Generic", {
            timeout: 5000
          });

          _this.getGeneric();

          _this.closeModal("addModal");

          _this.clearForm(_this.addGeneric);
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this.allErrors = error.response.data.errors;
        } else {
          _this.$toastr.warning("Application error", "Sorry", {
            timeOut: 5000
          });
        }
      });
    },
    getGeneric: function getGeneric() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var customRow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      var _this = this;

      var url = base_path + "generic?q=" + _this.search + "&page=" + page + "&row=" + _this.customRow;
      axios.get(url).then(function (response) {
        _this.allGenerics = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    changeStatus: function changeStatus(id) {
      var _this = this;

      axios.get(base_path + "generic/status/" + id).then(function (response) {
        _this.getGeneric();

        if (response.data.code === 200) {
          _this.$toastr.warning("This generic is inactive successfully!", "Category", {
            timeOut: 5000
          });
        }

        if (response.data.code === 201) {
          _this.$toastr.success("This generic is active successfully!", "Category", {
            timeOut: 5000
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    editGeneric: function editGeneric(id, genericData) {
      var _this = this;

      _this.openModal("editModal");

      _this.editGenericData = genericData;
    },
    updateGeneric: function updateGeneric(id) {
      var _this3 = this;

      var _this = this;

      axios.put(base_path + "generic/" + id, _this.editGenericData).then(function (response) {
        if (response.data.code == 201) {
          _this3.$toastr.success(response.data.message, "Generic", {
            timeout: 5000
          });

          _this.closeModal("editModal");

          _this.clearForm(_this.editGeneric);

          _this.getGeneric();
        } else {
          _this3.$toastr.warning("Something went wrong", "Sorry", {
            timeout: 5000
          });
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this.allErrors = error.response.data.errors;
        } else {
          _this.$toastr.error("Application error", "Sorry", {
            timeOut: 5000
          });
        }
      });
    },
    deleteGeneric: function deleteGeneric(id, index) {
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
          axios["delete"](base_path + "generic/" + id).then(function (response) {
            if (response.status == 200) {
              _this4.$swal("Deleted!", response.data.message, "success");
            }

            _this.getGeneric();
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    },
    openModal: function openModal(modal) {
      this.$modal.show(modal);
    },
    closeModal: function closeModal(modal) {
      this.$modal.hide(modal);
    },
    clearForm: function clearForm(form) {
      var _this = this;

      _this.allErrors = [];
      Object.keys(form).forEach(function (key) {
        form[key] = "";
      });
    }
  },
  created: function created() {
    this.getGeneric();
    this.getUserPermissions();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/generic/GenericComponent.vue?vue&type=style&index=0&id=e0f3f2ee&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/generic/GenericComponent.vue?vue&type=style&index=0&id=e0f3f2ee&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nlabel[data-v-e0f3f2ee] {\n\tmargin-right: 15px;\n}\n.form-control[data-v-e0f3f2ee] {\n\tborder: 1px solid #c8c1c1;\n}\ntable tr[data-v-e0f3f2ee] {\n\ttext-align: center;\n}\ntable tr th[data-v-e0f3f2ee] {\n\tcolor: #000000d4;\n\tfont-weight: 700;\n\ttext-align: center;\n}\n.search-box[data-v-e0f3f2ee] {\n\theight: 40px;\n\tmargin: 12px 0px 8px;\n}\n[data-v-e0f3f2ee]::-moz-placeholder {\n\tcolor: #4e5157;\n\topacity: 1;\n}\n[data-v-e0f3f2ee]:-ms-input-placeholder {\n\tcolor: #4e5157;\n\topacity: 1;\n}\n[data-v-e0f3f2ee]::placeholder {\n\tcolor: #4e5157;\n\topacity: 1;\n}\n[data-v-e0f3f2ee]:-ms-input-placeholder {\n\tcolor: #4e5157;\n}\n[data-v-e0f3f2ee]::-ms-input-placeholder {\n\tcolor: #4e5157;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/generic/GenericComponent.vue?vue&type=style&index=0&id=e0f3f2ee&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/generic/GenericComponent.vue?vue&type=style&index=0&id=e0f3f2ee&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GenericComponent_vue_vue_type_style_index_0_id_e0f3f2ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GenericComponent.vue?vue&type=style&index=0&id=e0f3f2ee&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/generic/GenericComponent.vue?vue&type=style&index=0&id=e0f3f2ee&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GenericComponent_vue_vue_type_style_index_0_id_e0f3f2ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GenericComponent_vue_vue_type_style_index_0_id_e0f3f2ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/generic/GenericComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/generic/GenericComponent.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GenericComponent_vue_vue_type_template_id_e0f3f2ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenericComponent.vue?vue&type=template&id=e0f3f2ee&scoped=true& */ "./resources/js/components/generic/GenericComponent.vue?vue&type=template&id=e0f3f2ee&scoped=true&");
/* harmony import */ var _GenericComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenericComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/generic/GenericComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _GenericComponent_vue_vue_type_style_index_0_id_e0f3f2ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GenericComponent.vue?vue&type=style&index=0&id=e0f3f2ee&scoped=true&lang=css& */ "./resources/js/components/generic/GenericComponent.vue?vue&type=style&index=0&id=e0f3f2ee&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GenericComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GenericComponent_vue_vue_type_template_id_e0f3f2ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _GenericComponent_vue_vue_type_template_id_e0f3f2ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e0f3f2ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/generic/GenericComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/generic/GenericComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/generic/GenericComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenericComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GenericComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/generic/GenericComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GenericComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/generic/GenericComponent.vue?vue&type=style&index=0&id=e0f3f2ee&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/generic/GenericComponent.vue?vue&type=style&index=0&id=e0f3f2ee&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GenericComponent_vue_vue_type_style_index_0_id_e0f3f2ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GenericComponent.vue?vue&type=style&index=0&id=e0f3f2ee&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/generic/GenericComponent.vue?vue&type=style&index=0&id=e0f3f2ee&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/generic/GenericComponent.vue?vue&type=template&id=e0f3f2ee&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/generic/GenericComponent.vue?vue&type=template&id=e0f3f2ee&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenericComponent_vue_vue_type_template_id_e0f3f2ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenericComponent_vue_vue_type_template_id_e0f3f2ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GenericComponent_vue_vue_type_template_id_e0f3f2ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GenericComponent.vue?vue&type=template&id=e0f3f2ee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/generic/GenericComponent.vue?vue&type=template&id=e0f3f2ee&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/generic/GenericComponent.vue?vue&type=template&id=e0f3f2ee&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/generic/GenericComponent.vue?vue&type=template&id=e0f3f2ee&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
      _c("h3", [_vm._v("Generic List")]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "panel panel-primary" }, [
        _c("div", { staticClass: "panel-heading" }, [
          _c("div", { staticClass: "panel-title" }, [_vm._v("Generic List")]),
          _vm._v(" "),
          _vm.permissions.includes("Add_Generics")
            ? _c(
                "div",
                {
                  staticClass: "panel-options",
                  staticStyle: { padding: "7px 15px" },
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-blue btn-sm",
                      attrs: { type: "button" },
                      on: {
                        click: function ($event) {
                          return _vm.openModal("addModal")
                        },
                      },
                    },
                    [
                      _c("i", { staticClass: "entypo-plus-circled" }),
                      _vm._v("Add\n\t\t\t\t"),
                    ]
                  ),
                ]
              )
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "panel-heading",
            staticStyle: { padding: "6px 0px 3px" },
          },
          [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-1" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { staticClass: "control-label" }, [
                      _vm._v("Show"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      { staticClass: "form-control" },
                      _vm._l(_vm.selectRow, function (row) {
                        return _c("option", {
                          domProps: { textContent: _vm._s(row) },
                        })
                      }),
                      0
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-2" }),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-5" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.search,
                        expression: "search",
                      },
                    ],
                    staticClass: "form-control search-box",
                    attrs: {
                      "aria-controls": "DataTables_Table_2",
                      placeholder: "Search according to generic name",
                      type: "search",
                    },
                    domProps: { value: _vm.search },
                    on: {
                      keyup: function ($event) {
                        return _vm.getGeneric()
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
          ]
        ),
        _vm._v(" "),
        _c("table", { staticClass: "table table-bordered responsive" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.allGenerics.data, function (generic, index) {
              return _c("tr", [
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(++index)),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(generic.generic_name)),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(generic.description)),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _c(
                    "span",
                    {
                      staticClass: "badge",
                      class:
                        generic.status == 1 ? "badge-success" : "badge-warning",
                    },
                    [
                      _vm._v(
                        _vm._s(generic.status == 1 ? "Active" : "Inactive")
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm.permissions.includes("Status_Generics")
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-sm",
                          class:
                            generic.status == 1 ? "btn-success" : "btn-warning",
                          attrs: { type: "button" },
                          on: {
                            click: function ($event) {
                              return _vm.changeStatus(generic.id)
                            },
                          },
                        },
                        [_c("i", { staticClass: "fas fa-sync" })]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.permissions.includes("Edit_Generics")
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-info",
                          attrs: { type: "button" },
                          on: {
                            click: function ($event) {
                              return _vm.editGeneric(generic.id, generic)
                            },
                          },
                        },
                        [_c("i", { staticClass: "fas fa-pen" })]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.permissions.includes("Delete_Generics")
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-danger",
                          attrs: { type: "button" },
                          on: {
                            click: function ($event) {
                              return _vm.deleteGeneric(generic.id, index)
                            },
                          },
                        },
                        [_c("i", { staticClass: "fas fa-trash" })]
                      )
                    : _vm._e(),
                ]),
              ])
            }),
            0
          ),
        ]),
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
              attrs: { data: _vm.allGenerics },
              on: { "pagination-change-page": _vm.getGeneric },
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
        {
          attrs: {
            adaptive: true,
            clickToClose: false,
            draggable: true,
            limit: 3,
            resizable: true,
            height: "auto",
            name: "addModal",
          },
        },
        [
          _c("div", { staticClass: "modal-header" }, [
            _c(
              "button",
              {
                staticClass: "close",
                attrs: {
                  "aria-hidden": "true",
                  "data-dismiss": "modal",
                  type: "button",
                },
                on: {
                  click: function ($event) {
                    return _vm.closeModal("addModal")
                  },
                },
              },
              [_vm._v("×")]
            ),
            _vm._v(" "),
            _c("h4", { staticClass: "modal-title" }, [
              _c("i", { staticClass: "entypo-plus-circled" }),
              _vm._v("Add New Generic\n\t\t\t"),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.addNewGeneric()
                  },
                },
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Generic Name")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.addGeneric.generic_name,
                        expression: "addGeneric.generic_name",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      id: "generic_name",
                      placeholder: "Enter Generic Name",
                      type: "text",
                    },
                    domProps: { value: _vm.addGeneric.generic_name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.addGeneric,
                          "generic_name",
                          $event.target.value
                        )
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.allErrors.generic_name
                    ? _c("span", {
                        staticClass: "text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.allErrors.generic_name[0]),
                        },
                      })
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Generic Description"),
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.addGeneric.description,
                        expression: "addGeneric.description",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      placeholder: "Enter Generic Description",
                      rows: "5",
                    },
                    domProps: { value: _vm.addGeneric.description },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.addGeneric,
                          "description",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { "data-dismiss": "modal", type: "button" },
                      on: {
                        click: function ($event) {
                          return _vm.closeModal("addModal")
                        },
                      },
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _c("button", { staticClass: "btn btn-success" }, [
                    _vm._v("Save"),
                  ]),
                ]),
              ]
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            adaptive: true,
            clickToClose: false,
            draggable: true,
            limit: 3,
            resizable: true,
            height: "auto",
            name: "editModal",
          },
        },
        [
          _c("div", { staticClass: "modal-header" }, [
            _c(
              "button",
              {
                staticClass: "close",
                attrs: {
                  "aria-hidden": "true",
                  "data-dismiss": "modal",
                  type: "button",
                },
                on: {
                  click: function ($event) {
                    return _vm.closeModal("editModal")
                  },
                },
              },
              [_vm._v("×")]
            ),
            _vm._v(" "),
            _c("h4", { staticClass: "modal-title" }, [
              _c("i", { staticClass: "entypo-plus-circled" }),
              _vm._v(
                "\n\t\t\t\tEdi " +
                  _vm._s(_vm.editGenericData.generic_name) +
                  " Generic\n\t\t\t"
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.updateGeneric(_vm.editGenericData.id)
                  },
                },
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Generic Name")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editGenericData.generic_name,
                        expression: "editGenericData.generic_name",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "Enter Generic Name", type: "text" },
                    domProps: { value: _vm.editGenericData.generic_name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editGenericData,
                          "generic_name",
                          $event.target.value
                        )
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Generic Description"),
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editGenericData.description,
                        expression: "editGenericData.description",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      placeholder: "Enter Generic Description",
                      rows: "5",
                    },
                    domProps: { value: _vm.editGenericData.description },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editGenericData,
                          "description",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { "data-dismiss": "modal", type: "button" },
                      on: {
                        click: function ($event) {
                          return _vm.closeModal("editModal")
                        },
                      },
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _c("button", { staticClass: "btn btn-success" }, [
                    _vm._v("Save"),
                  ]),
                ]),
              ]
            ),
          ]),
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
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Generic name")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Details")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { width: "33%" } }, [
          _vm._v("Action"),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);