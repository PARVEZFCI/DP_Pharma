(self.webpackChunk=self.webpackChunk||[]).push([[424],{5837:(t,a,e)=>{"use strict";e.d(a,{Z:()=>n});var s=e(3645),r=e.n(s)()((function(t){return t[1]}));r.push([t.id,"label[data-v-09ecb672]{margin-right:15px}.form-control[data-v-09ecb672]{border:1px solid #c8c1c1}table tr[data-v-09ecb672],table tr th[data-v-09ecb672]{text-align:center}table tr th[data-v-09ecb672]{color:rgba(0,0,0,.8313725490196079);font-weight:700}.search-box[data-v-09ecb672]{height:40px;margin:12px 0 8px}[data-v-09ecb672]::-moz-placeholder{color:#4e5157;opacity:1}[data-v-09ecb672]:-ms-input-placeholder{color:#4e5157;opacity:1}[data-v-09ecb672]::placeholder{color:#4e5157;opacity:1}[data-v-09ecb672]:-ms-input-placeholder{color:#4e5157}[data-v-09ecb672]::-ms-input-placeholder{color:#4e5157}",""]);const n=r},7424:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>i});const s={name:"ManufacturerComponent",data:function(){return{addManufacture:{manufacture_name:"",mobile:"",email:"",city:"",country:"",details:""},allManufactures:{},editManufactureData:{},allErrors:[],search:"",customRow:10,selectRow:[10,20,30,40,50]}},methods:{addNewManufacture:function(){var t=this;axios.post(base_path+"manufacturer",t.addManufacture).then((function(a){console.log(a),201==a.data.status&&t.$toastr.success(a.data.message,"Manufacture",{timeOut:5e3}),t.getManufacturer(),t.closeModal("addModal"),t.clearForm(t.addManufacture)})).catch((function(a){422==a.response.status?t.allErrors=a.response.data.errors:t.$toastr.error("Application Error","Sorry!")}))},getManufacturer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this,e=base_path+"manufacturer?q="+a.search+"&page="+t+"&row="+a.customRow;axios.get(e).then((function(t){a.allManufactures=t.data})).catch((function(t){}))},changeStatus:function(t){var a=this;axios.get(base_path+"manufacturer/status/"+t).then((function(t){a.getManufacturer(),200===t.data.code&&a.$toastr.warning("This manufacturer is inactive successfully!","Category",{timeOut:5e3}),201===t.data.code&&a.$toastr.success("This manufacturer is active successfully!","Category",{timeOut:5e3})})).catch((function(t){console.log(t)}))},editManufacturer:function(t,a){this.openModal("editModal"),this.editManufactureData=a},updateManufacturer:function(t){var a=this,e=this;axios.put(base_path+"manufacturer/"+t,e.editManufactureData).then((function(t){201==t.data.code?(a.$toastr.success(t.data.message,"Manufacturer",{timeout:5e3}),e.closeModal("editModal"),e.clearForm(e.editManufacturer),e.getManufacturer()):a.$toastr.warning("Something went wrong","Sorry",{timeout:5e3})})).catch((function(t){422===t.response.status?e.allErrors=t.response.data.errors:e.$toastr.error("Application error","Sorry",{timeOut:5e3})}))},deletemanufacturer:function(t,a){var e=this,s=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.value&&(axios.delete(base_path+"manufacturer/"+t).then((function(t){200==t.status&&e.$swal("Deleted!",t.data.message,"success"),s.getCategory()})).catch((function(t){console.log(t)})),s.getManufacturer())}))},openModal:function(t){this.$modal.show(t)},closeModal:function(t){this.$modal.hide(t)},clearForm:function(t){this.allErrors=[],Object.keys(t).forEach((function(a){t[a]=""}))}},created:function(){this.getManufacturer()}};var r=e(3379),n=e.n(r),o=e(5837),c={insert:"head",singleton:!1};n()(o.Z,c);o.Z.locals;const i=(0,e(1900).Z)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h3",[t._v("Manufacturer List")]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"panel panel-primary"},[e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"panel-title"},[t._v("Manufacturer List")]),t._v(" "),e("div",{staticClass:"panel-options",staticStyle:{padding:"7px 15px"}},[e("button",{staticClass:"btn btn-blue btn-sm",attrs:{type:"button"},on:{click:function(a){return t.openModal("addModal")}}},[e("i",{staticClass:"entypo-plus-circled"}),t._v("Add\n\t\t\t\t")])])]),t._v(" "),e("div",{staticClass:"panel-heading",staticStyle:{padding:"6px 0px 3px"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-1"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("Show")]),t._v(" "),e("select",{staticClass:"form-control"},t._l(t.selectRow,(function(a){return e("option",{domProps:{textContent:t._s(a)}})})),0)])]),t._v(" "),e("div",{staticClass:"col-md-2"}),t._v(" "),e("div",{staticClass:"col-md-5"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control search-box",attrs:{"aria-controls":"DataTables_Table_2",placeholder:"Search according to manufacturer name",type:"search"},domProps:{value:t.search},on:{keyup:function(a){return t.getManufacturer()},input:function(a){a.target.composing||(t.search=a.target.value)}}})])])])]),t._v(" "),e("table",{staticClass:"table table-bordered responsive"},[t._m(0),t._v(" "),e("tbody",t._l(t.allManufactures.data,(function(a,s){return e("tr",[e("td",{staticClass:"text-center"},[t._v(t._s(++s))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(a.manufacture_name))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(a.mobile))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(a.email))]),t._v(" "),e("td",{staticClass:"text-center"},[e("span",{staticClass:"badge",class:1==a.status?"badge-success":"badge-warning"},[t._v(t._s(1==a.status?"Active":"Inactive"))])]),t._v(" "),e("td",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-sm",class:1==a.status?"btn-success":"btn-warning",attrs:{type:"button"},on:{click:function(e){return t.changeStatus(a.id)}}},[e("i",{staticClass:"fas fa-sync"})]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-info",attrs:{type:"button"},on:{click:function(e){return t.editManufacturer(a.id,a)}}},[e("i",{staticClass:"fas fa-pen"})]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(e){return t.deletemanufacturer(a.id,s)}}},[e("i",{staticClass:"fas fa-trash"})])])])})),0)])]),t._v(" "),e("div",{staticClass:"text-center"},[e("pagination",{staticStyle:{"margin-left":"20px"},attrs:{data:t.allManufactures},on:{"pagination-change-page":t.getManufacturer}},[e("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("< Previous")]),t._v(" "),e("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Next >")])])],1),t._v(" "),e("modal",{attrs:{adaptive:!0,clickToClose:!1,draggable:!0,limit:3,resizable:!0,height:"auto",name:"addModal"}},[e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{"aria-hidden":"true","data-dismiss":"modal",type:"button"},on:{click:function(a){return t.closeModal("addModal")}}},[t._v("×")]),t._v(" "),e("h4",{staticClass:"modal-title"},[e("i",{staticClass:"entypo-plus-circled"}),t._v("Add New Manufacturer\n\t\t\t")])]),t._v(" "),e("div",{staticClass:"modal-body"},[e("form",{on:{submit:function(a){return a.preventDefault(),t.addNewManufacture()}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Manufacturer Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addManufacture.manufacture_name,expression:"addManufacture.manufacture_name"}],staticClass:"form-control",attrs:{placeholder:"Enter Manufacturer Name",type:"text"},domProps:{value:t.addManufacture.manufacture_name},on:{input:function(a){a.target.composing||t.$set(t.addManufacture,"manufacture_name",a.target.value)}}}),t._v(" "),t.allErrors.manufacture_name?e("span",{staticClass:"text-danger",domProps:{textContent:t._s(t.allErrors.manufacture_name[0])}}):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Mobile")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addManufacture.mobile,expression:"addManufacture.mobile"}],staticClass:"form-control",attrs:{placeholder:"Enter Manufacturer Mobile",type:"text"},domProps:{value:t.addManufacture.mobile},on:{input:function(a){a.target.composing||t.$set(t.addManufacture,"mobile",a.target.value)}}}),t._v(" "),t.allErrors.mobile?e("span",{staticClass:"text-danger",domProps:{textContent:t._s(t.allErrors.mobile[0])}}):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Email")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addManufacture.email,expression:"addManufacture.email"}],staticClass:"form-control",attrs:{placeholder:"Enter Manufacturer Email",type:"text"},domProps:{value:t.addManufacture.email},on:{input:function(a){a.target.composing||t.$set(t.addManufacture,"email",a.target.value)}}}),t._v(" "),e("span",{staticClass:"text-danger"})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("City")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addManufacture.city,expression:"addManufacture.city"}],staticClass:"form-control",attrs:{placeholder:"Enter Manufacturer City",type:"text"},domProps:{value:t.addManufacture.city},on:{input:function(a){a.target.composing||t.$set(t.addManufacture,"city",a.target.value)}}}),t._v(" "),e("span",{staticClass:"text-danger"})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Country")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.addManufacture.country,expression:"addManufacture.country"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.addManufacture,"country",a.target.multiple?e:e[0])}}},[e("option",{attrs:{disabled:"",selected:""}},[t._v("--select country--")]),t._v(" "),e("option",[t._v("Bangladesh")]),t._v(" "),e("option",[t._v("India")]),t._v(" "),e("option",[t._v("Australia")]),t._v(" "),e("option",[t._v("USA")])]),t._v(" "),e("span",{staticClass:"text-danger"})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Description")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.addManufacture.description,expression:"addManufacture.description"}],staticClass:"form-control",attrs:{placeholder:"Enter Category Description",rows:"5"},domProps:{value:t.addManufacture.description},on:{input:function(a){a.target.composing||t.$set(t.addManufacture,"description",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-primary",attrs:{"data-dismiss":"modal",type:"button"},on:{click:function(a){return t.closeModal("addModal")}}},[t._v("Close")]),t._v(" "),e("button",{staticClass:"btn btn-success"},[t._v("Save")])])])])]),t._v(" "),e("modal",{attrs:{adaptive:!0,clickToClose:!1,draggable:!0,limit:3,resizable:!0,height:"auto",name:"editModal"}},[e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{"aria-hidden":"true","data-dismiss":"modal",type:"button"},on:{click:function(a){return t.closeModal("addModal")}}},[t._v("×")]),t._v(" "),e("h4",{staticClass:"modal-title"},[e("i",{staticClass:"entypo-plus-circled"}),t._v("\n\t\t\t\tEdi "+t._s(t.editManufactureData.manufacture_name)+" Category\n\t\t\t")])]),t._v(" "),e("div",{staticClass:"modal-body"},[e("form",{on:{submit:function(a){return a.preventDefault(),t.updateManufacturer(t.editManufactureData.id)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Manufacturer Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.editManufactureData.manufacture_name,expression:"editManufactureData.manufacture_name"}],staticClass:"form-control",attrs:{placeholder:"Enter Manufacturer Name",type:"text"},domProps:{value:t.editManufactureData.manufacture_name},on:{input:function(a){a.target.composing||t.$set(t.editManufactureData,"manufacture_name",a.target.value)}}}),t._v(" "),t.allErrors.manufacture_name?e("span",{staticClass:"text-danger",domProps:{textContent:t._s(t.allErrors.manufacture_name[0])}}):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Mobile")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.editManufactureData.mobile,expression:"editManufactureData.mobile"}],staticClass:"form-control",attrs:{placeholder:"Enter Manufacturer Mobile",type:"text"},domProps:{value:t.editManufactureData.mobile},on:{input:function(a){a.target.composing||t.$set(t.editManufactureData,"mobile",a.target.value)}}}),t._v(" "),t.allErrors.mobile?e("span",{staticClass:"text-danger",domProps:{textContent:t._s(t.allErrors.mobile[0])}}):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Email")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.editManufactureData.email,expression:"editManufactureData.email"}],staticClass:"form-control",attrs:{placeholder:"Enter Manufacturer Email",type:"text"},domProps:{value:t.editManufactureData.email},on:{input:function(a){a.target.composing||t.$set(t.editManufactureData,"email",a.target.value)}}}),t._v(" "),e("span",{staticClass:"text-danger"})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("City")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.editManufactureData.city,expression:"editManufactureData.city"}],staticClass:"form-control",attrs:{placeholder:"Enter Manufacturer City",type:"text"},domProps:{value:t.editManufactureData.city},on:{input:function(a){a.target.composing||t.$set(t.editManufactureData,"city",a.target.value)}}}),t._v(" "),e("span",{staticClass:"text-danger"})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Country")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.editManufactureData.country,expression:"editManufactureData.country"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.editManufactureData,"country",a.target.multiple?e:e[0])}}},[e("option",{attrs:{disabled:"",selected:""}},[t._v("--select country--")]),t._v(" "),e("option",[t._v("Bangladesh")]),t._v(" "),e("option",[t._v("India")]),t._v(" "),e("option",[t._v("Australia")]),t._v(" "),e("option",[t._v("USA")])]),t._v(" "),e("span",{staticClass:"text-danger"})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Description")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.editManufactureData.description,expression:"editManufactureData.description"}],staticClass:"form-control",attrs:{placeholder:"Enter Category Description",rows:"5"},domProps:{value:t.editManufactureData.description},on:{input:function(a){a.target.composing||t.$set(t.editManufactureData,"description",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-primary",attrs:{"data-dismiss":"modal",type:"button"},on:{click:function(a){return t.closeModal("editModal")}}},[t._v("Close")]),t._v(" "),e("button",{staticClass:"btn btn-success"},[t._v("Save")])])])])])],1)}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{staticClass:"text-center"},[t._v("#")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Manufacturer name")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Modile")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Email")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Status")]),t._v(" "),e("th",{staticClass:"text-center",attrs:{width:"33%"}},[t._v("Action")])])])}],!1,null,"09ecb672",null).exports}}]);