(self.webpackChunk=self.webpackChunk||[]).push([[310],{3038:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(3645),o=a.n(s)()((function(t){return t[1]}));o.push([t.id,"label[data-v-b3b1b0c6]{margin-right:15px}.form-control[data-v-b3b1b0c6]{border:1px solid #c8c1c1}table tr[data-v-b3b1b0c6],table tr th[data-v-b3b1b0c6]{text-align:center}table tr th[data-v-b3b1b0c6]{color:rgba(0,0,0,.8313725490196079);font-weight:700}.search-box[data-v-b3b1b0c6]{height:40px;margin:12px 0 8px}[data-v-b3b1b0c6]::-moz-placeholder{color:#4e5157;opacity:1}[data-v-b3b1b0c6]:-ms-input-placeholder{color:#4e5157;opacity:1}[data-v-b3b1b0c6]::placeholder{color:#4e5157;opacity:1}[data-v-b3b1b0c6]:-ms-input-placeholder{color:#4e5157}[data-v-b3b1b0c6]::-ms-input-placeholder{color:#4e5157}",""]);const r=o},310:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});const s={name:"posCustomerComponent",data:function(){return{addPosCustomer:{name:"",phone:"",sex:""},allPosCustomer:{},editCustomerData:{},allErrors:[],search:"",customRow:10,selectRow:[10,20,30,40,50]}},methods:{addNewPosCustomer:function(){var t=this,e=this;axios.post(base_path+"pos_customer",e.addPosCustomer).then((function(a){201==a.data.code&&(t.$toastr.success(a.data.message,"Pos Customer",{timeout:5e3}),e.getPosCustomer(),e.closeModal("addModal"),e.clearForm(e.addPosCustomer))})).catch((function(t){422===t.response.status?e.allErrors=t.response.data.errors:e.$toastr.warning("Application error","Sorry",{timeOut:5e3})}))},getPosCustomer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a=base_path+"pos_customer?q="+e.search+"&page="+t+"&row="+e.customRow;axios.get(a).then((function(t){e.allPosCustomer=t.data})).catch((function(t){console.log(t)}))},changeStatus:function(t){var e=this;axios.get(base_path+"pos_customer/status/"+t).then((function(t){e.getPosCustomer(),200===t.data.code&&e.$toastr.warning("This Customer is inactive successfully!","Customer",{timeOut:5e3}),201===t.data.code&&e.$toastr.success("This Customer is active successfully!","Customer",{timeOut:5e3})})).catch((function(t){console.log(t)}))},editCustomer:function(t,e){this.openModal("editModal"),this.editCustomerData=e},updatePosCustomer:function(t){var e=this,a=this;axios.put(base_path+"pos_customer/"+t,a.editCustomerData).then((function(t){201==t.data.code?(e.$toastr.success(t.data.message,"Pos Customer",{timeout:5e3}),a.closeModal("editModal"),a.clearForm(a.editCustomerData),a.getPosCustomer()):e.$toastr.warning("Something went wrong","Sorry",{timeout:5e3})})).catch((function(t){422===t.response.status?a.allErrors=t.response.data.errors:a.$toastr.error("Application error","Sorry",{timeOut:5e3})}))},deleteCustomer:function(t,e){var a=this,s=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.value&&axios.delete(base_path+"pos_customer/"+t).then((function(t){200==t.status&&a.$swal("Deleted!",t.data.message,"success"),s.getPosCustomer()})).catch((function(t){console.log(t)}))}))},openModal:function(t){this.$modal.show(t)},closeModal:function(t){this.$modal.hide(t)},clearForm:function(t){this.allErrors=[],Object.keys(t).forEach((function(e){t[e]=""}))}},created:function(){this.getPosCustomer()}};var o=a(3379),r=a.n(o),n=a(3038),i={insert:"head",singleton:!1};r()(n.Z,i);n.Z.locals;const l=(0,a(1900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("POS Customer List")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"panel panel-primary"},[a("div",{staticClass:"panel-heading"},[a("div",{staticClass:"panel-title"},[t._v("POS Customer List")]),t._v(" "),a("div",{staticClass:"panel-options",staticStyle:{padding:"7px 15px"}},[a("button",{staticClass:"btn btn-blue btn-sm",attrs:{type:"button"},on:{click:function(e){return t.openModal("addModal")}}},[a("i",{staticClass:"entypo-plus-circled"}),t._v("Add\n\t\t\t\t")])])]),t._v(" "),a("div",{staticClass:"panel-heading",staticStyle:{padding:"6px 0px 3px"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-1"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[t._v("Show")]),t._v(" "),a("select",{staticClass:"form-control"},t._l(t.selectRow,(function(e){return a("option",{domProps:{textContent:t._s(e)}})})),0)])]),t._v(" "),a("div",{staticClass:"col-md-2"}),t._v(" "),a("div",{staticClass:"col-md-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control search-box",attrs:{"aria-controls":"DataTables_Table_2",placeholder:"Search according to generic name",type:"search"},domProps:{value:t.search},on:{keyup:function(e){return t.getPosCustomer()},input:function(e){e.target.composing||(t.search=e.target.value)}}})])])])]),t._v(" "),a("table",{staticClass:"table table-bordered responsive"},[t._m(0),t._v(" "),a("tbody",t._l(t.allPosCustomer.data,(function(e,s){return a("tr",[a("td",{staticClass:"text-center"},[t._v(t._s(++s))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.name))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.phone))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s("male"==e.sex?"Male":"Female"))]),t._v(" "),a("td",{staticClass:"text-center"},[a("span",{staticClass:"badge",class:1==e.status?"badge-success":"badge-warning"},[t._v(t._s(1==e.status?"Active":"Inactive"))])]),t._v(" "),a("td",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-sm",class:1==e.status?"btn-success":"btn-warning",attrs:{type:"button"},on:{click:function(a){return t.changeStatus(e.id)}}},[a("i",{staticClass:"fa fa-refresh"})]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-info",attrs:{type:"button"},on:{click:function(a){return t.editCustomer(e.id,e)}}},[a("i",{staticClass:"fa fa-edit"})]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(a){return t.deleteCustomer(e.id,s)}}},[a("i",{staticClass:"fa fa-trash"})])])])})),0)])]),t._v(" "),a("div",{staticClass:"text-center"},[a("pagination",{staticStyle:{"margin-left":"20px"},attrs:{data:t.allPosCustomer},on:{"pagination-change-page":function(e){return t.getPosCustomer()}}},[a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("< Previous")]),t._v(" "),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Next >")])])],1),t._v(" "),a("modal",{attrs:{adaptive:!0,clickToClose:!1,draggable:!0,limit:3,resizable:!0,height:"auto",name:"addModal"}},[a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{"aria-hidden":"true","data-dismiss":"modal",type:"button"},on:{click:function(e){return t.closeModal("addModal")}}},[t._v("×")]),t._v(" "),a("h4",{staticClass:"modal-title"},[a("i",{staticClass:"entypo-plus-circled"}),t._v("Add POS Customer\n\t\t\t")])]),t._v(" "),a("div",{staticClass:"modal-body"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.addNewPosCustomer()}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.addPosCustomer.name,expression:"addPosCustomer.name"}],staticClass:"form-control",attrs:{id:"name",placeholder:"Enter Customer Name",type:"text"},domProps:{value:t.addPosCustomer.name},on:{input:function(e){e.target.composing||t.$set(t.addPosCustomer,"name",e.target.value)}}}),t._v(" "),t.allErrors.name?a("span",{staticClass:"text-danger",domProps:{textContent:t._s(t.allErrors.name[0])}}):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Phone")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.addPosCustomer.phone,expression:"addPosCustomer.phone"}],staticClass:"form-control",attrs:{id:"phone",placeholder:"Enter Customer Phone",type:"text"},domProps:{value:t.addPosCustomer.phone},on:{input:function(e){e.target.composing||t.$set(t.addPosCustomer,"phone",e.target.value)}}}),t._v(" "),t.allErrors.phone?a("span",{staticClass:"text-danger",domProps:{textContent:t._s(t.allErrors.phone[0])}}):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Sex")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.addPosCustomer.sex,expression:"addPosCustomer.sex"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.addPosCustomer,"sex",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"male"}},[t._v("Male")]),t._v(" "),a("option",{attrs:{value:"female"}},[t._v("Female")])]),t._v(" "),t.allErrors.sex?a("span",{staticClass:"text-danger",domProps:{textContent:t._s(t.allErrors.sex[0])}}):t._e()]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{"data-dismiss":"modal",type:"button"},on:{click:function(e){return t.closeModal("addModal")}}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-success"},[t._v("Save")])])])])]),t._v(" "),a("modal",{attrs:{adaptive:!0,clickToClose:!1,draggable:!0,limit:3,resizable:!0,height:"auto",name:"editModal"}},[a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{"aria-hidden":"true","data-dismiss":"modal",type:"button"},on:{click:function(e){return t.closeModal("editModal")}}},[t._v("×")]),t._v(" "),a("h4",{staticClass:"modal-title"},[a("i",{staticClass:"entypo-plus-circled"}),t._v("\n\t\t\t\tEdi "+t._s(t.editCustomerData.name)+" Generic\n\t\t\t")])]),t._v(" "),a("div",{staticClass:"modal-body"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.updatePosCustomer(t.editCustomerData.id)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editCustomerData.name,expression:"editCustomerData.name"}],staticClass:"form-control",attrs:{placeholder:"Enter Customer Name",type:"text"},domProps:{value:t.editCustomerData.name},on:{input:function(e){e.target.composing||t.$set(t.editCustomerData,"name",e.target.value)}}}),t._v(" "),a("span",{staticClass:"text-danger"})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Phone")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editCustomerData.phone,expression:"editCustomerData.phone"}],staticClass:"form-control",attrs:{placeholder:"Enter Customer Phone",type:"text"},domProps:{value:t.editCustomerData.phone},on:{input:function(e){e.target.composing||t.$set(t.editCustomerData,"phone",e.target.value)}}}),t._v(" "),a("span",{staticClass:"text-danger"})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Sex")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.editCustomerData.sex,expression:"editCustomerData.sex"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.editCustomerData,"sex",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"male"}},[t._v("Male")]),t._v(" "),a("option",{attrs:{value:"female"}},[t._v("Female")])]),t._v(" "),a("span",{staticClass:"text-danger"})]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{"data-dismiss":"modal",type:"button"},on:{click:function(e){return t.closeModal("editModal")}}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-success"},[t._v("Save")])])])])])],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"text-center"},[t._v("#")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Name")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Phone")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Sex")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Status")]),t._v(" "),a("th",{staticClass:"text-center",attrs:{width:"33%"}},[t._v("Action")])])])}],!1,null,"b3b1b0c6",null).exports}}]);