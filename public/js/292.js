(self.webpackChunk=self.webpackChunk||[]).push([[292],{3158:(t,a,e)=>{"use strict";e.d(a,{Z:()=>o});var s=e(3645),n=e.n(s)()((function(t){return t[1]}));n.push([t.id,"label[data-v-65e6349e]{margin-right:15px}.form-control[data-v-65e6349e]{border:1px solid #c8c1c1}table tr[data-v-65e6349e],table tr th[data-v-65e6349e]{text-align:center}table tr th[data-v-65e6349e]{color:rgba(0,0,0,.8313725490196079);font-weight:700}.search-box[data-v-65e6349e]{height:40px;margin:12px 0 8px}[data-v-65e6349e]::-moz-placeholder{color:#4e5157;opacity:1}[data-v-65e6349e]:-ms-input-placeholder{color:#4e5157;opacity:1}[data-v-65e6349e]::placeholder{color:#4e5157;opacity:1}[data-v-65e6349e]:-ms-input-placeholder{color:#4e5157}[data-v-65e6349e]::-ms-input-placeholder{color:#4e5157}",""]);const o=n},5292:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>c});const s={name:"TransactionHeadComponent",data:function(){return{addTransactionHead:{name:""},allTransactionHeads:{},editHeadData:{},allErrors:[],search:"",customRow:10,selectRow:[10,20,30,40,50]}},methods:{addNewTransactionHead:function(){var t=this,a=this;axios.post(base_path+"transaction/head",a.addTransactionHead).then((function(e){201==e.data.code&&(t.$toastr.success(e.data.message,"Category",{timeout:5e3}),a.getTransactionHead(),a.closeModal("addModal"),a.clearForm(a.addTransactionHead))})).catch((function(t){422===t.response.status?a.allErrors=t.response.data.errors:a.$toastr.warning("Application error","Sorry",{timeOut:5e3})}))},getTransactionHead:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this,e=base_path+"transaction/head?q="+a.search+"&page="+t+"&row="+a.customRow;axios.get(e).then((function(t){a.allTransactionHeads=t.data})).catch((function(t){console.log(t)}))},editTransactionHead:function(t,a){this.openModal("editModal"),this.editHeadData=a},updateTransactionHead:function(t){var a=this,e=this;axios.put(base_path+"transaction/head/"+t,e.editHeadData).then((function(t){201==t.data.code?(a.$toastr.success(t.data.message,"Transaction Head",{timeout:5e3}),e.closeModal("editModal"),e.clearForm(e.editHeadData),e.getTransactionHead()):a.$toastr.warning("Something went wrong","Sorry",{timeout:5e3})})).catch((function(t){422===t.response.status?e.allErrors=t.response.data.errors:e.$toastr.error("Application error","Sorry",{timeOut:5e3})}))},deleteTransactionHead:function(t,a){var e=this,s=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.value&&axios.delete(base_path+"transaction/head/"+t).then((function(t){200==t.status&&e.$swal("Deleted!",t.data.message,"success"),s.getTransactionHead()})).catch((function(t){console.log(t)}))}))},changeStatus:function(t){var a=this;axios.get(base_path+"transaction/head/status/"+t).then((function(t){a.getTransactionHead(),200===t.data.code&&a.$toastr.warning("This Transaction Head Status Changed successfully!","Account",{timeOut:5e3})})).catch((function(t){console.log(t)}))},openModal:function(t){this.$modal.show(t)},closeModal:function(t){this.$modal.hide(t)},clearForm:function(t){this.allErrors=[],Object.keys(t).forEach((function(a){t[a]=""}))}},created:function(){this.getTransactionHead(),this.getUserPermissions()}};var n=e(3379),o=e.n(n),i=e(3158),r={insert:"head",singleton:!1};o()(i.Z,r);i.Z.locals;const c=(0,e(1900).Z)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h3",[t._v("Transaction Heads")]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"panel panel-primary"},[e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"panel-title"},[t._v("Transaction Head List")]),t._v(" "),e("div",{staticClass:"panel-options",staticStyle:{padding:"7px 15px"}},[t.permissions.includes("Add_Transaction_Head")?e("button",{staticClass:"btn btn-blue btn-sm",attrs:{type:"button"},on:{click:function(a){return t.openModal("addModal")}}},[e("i",{staticClass:"entypo-plus-circled"}),t._v("Add\n\t\t\t\t")]):t._e()])]),t._v(" "),e("div",{staticClass:"panel-heading",staticStyle:{padding:"18px 0px 3px"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-1"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("Show")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.customRow,expression:"customRow"}],staticClass:"form-control",on:{change:[function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.customRow=a.target.multiple?e:e[0]},t.getTransactionHead]}},t._l(t.selectRow,(function(a){return e("option",{domProps:{textContent:t._s(a)}})})),0)])]),t._v(" "),e("div",{staticClass:"col-md-2"}),t._v(" "),e("div",{staticClass:"col-md-5"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control search-box",attrs:{"aria-controls":"DataTables_Table_2",placeholder:"Search according to category name & code",type:"search"},domProps:{value:t.search},on:{keyup:function(a){return t.getTransactionHead()},input:function(a){a.target.composing||(t.search=a.target.value)}}})])])])]),t._v(" "),e("table",{staticClass:"table table-bordered responsive"},[t._m(0),t._v(" "),e("tbody",t._l(t.allTransactionHeads.data,(function(a,s){return e("tr",[e("td",{staticClass:"text-center"},[t._v(t._s(++s))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(a.name))]),t._v(" "),e("td",{staticClass:"text-center"},[e("span",{staticClass:"badge",class:1==a.status?"badge-success":"badge-warning"},[t._v(t._s(1==a.status?"Active":"Inactive"))])]),t._v(" "),e("td",{staticClass:"text-center"},[t.permissions.includes("Status_Transaction_Head")?e("button",{staticClass:"btn btn-sm",class:1==a.status?"btn-success":"btn-warning",attrs:{type:"button"},on:{click:function(e){return t.changeStatus(a.id)}}},[e("i",{staticClass:"fa fa-sync"})]):t._e(),t._v(" "),t.permissions.includes("Edit_Transaction_Head")?e("button",{staticClass:"btn btn-sm btn-info",attrs:{type:"button"},on:{click:function(e){return t.editTransactionHead(a.id,a)}}},[e("i",{staticClass:"fa fa-edit"})]):t._e(),t._v(" "),t.permissions.includes("Delete_Transaction_Head")?e("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(e){return t.deleteTransactionHead(a.id,s)}}},[e("i",{staticClass:"fa fa-trash"})]):t._e()])])})),0)])]),t._v(" "),e("div",{staticClass:"text-center"},[e("pagination",{staticStyle:{"margin-left":"20px"},attrs:{data:t.allTransactionHeads},on:{"pagination-change-page":t.getTransactionHead}},[e("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("<Previous")]),t._v(" "),e("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Next >")])])],1),t._v(" "),e("modal",{attrs:{adaptive:!0,clickToClose:!1,draggable:!0,limit:3,resizable:!0,height:"auto",name:"addModal"}},[e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{"aria-hidden":"true","data-dismiss":"modal",type:"button"},on:{click:function(a){return t.closeModal("addModal")}}},[t._v("×")]),t._v(" "),e("h4",{staticClass:"modal-title"},[e("i",{staticClass:"entypo-plus-circled"}),t._v("Add New Transaction\n\t\t\t")])]),t._v(" "),e("div",{staticClass:"modal-body"},[e("form",{on:{submit:function(a){return a.preventDefault(),t.addNewTransactionHead(a)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addTransactionHead.name,expression:"addTransactionHead.name"}],staticClass:"form-control",attrs:{id:"name",placeholder:"Enter Transaction Head Name",type:"text"},domProps:{value:t.addTransactionHead.name},on:{input:function(a){a.target.composing||t.$set(t.addTransactionHead,"name",a.target.value)}}}),t._v(" "),t.allErrors.name?e("span",{staticClass:"text-danger",domProps:{textContent:t._s(t.allErrors.name[0])}}):t._e()]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-primary",attrs:{"data-dismiss":"modal",type:"button"},on:{click:function(a){return t.closeModal("addModal")}}},[t._v("Close")]),t._v(" "),e("button",{staticClass:"btn btn-success"},[t._v("Save")])])])])]),t._v(" "),e("modal",{attrs:{adaptive:!0,clickToClose:!1,draggable:!0,limit:3,resizable:!0,height:"auto",name:"editModal"}},[e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{"aria-hidden":"true","data-dismiss":"modal",type:"button"},on:{click:function(a){return t.closeModal("editModal")}}},[t._v("×")]),t._v(" "),e("h4",{staticClass:"modal-title"},[e("i",{staticClass:"entypo-plus-circled"}),t._v("\n\t\t\t\tEdit "+t._s(t.editHeadData.name)+" Account\n\t\t\t")])]),t._v(" "),e("div",{staticClass:"modal-body"},[e("form",{on:{submit:function(a){return a.preventDefault(),t.updateTransactionHead(t.editHeadData.id)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.editHeadData.name,expression:"editHeadData.name"}],staticClass:"form-control",attrs:{placeholder:"Enter Transaction Head Name",type:"text"},domProps:{value:t.editHeadData.name},on:{input:function(a){a.target.composing||t.$set(t.editHeadData,"name",a.target.value)}}}),t._v(" "),t.allErrors.name?e("span",{staticClass:"text-danger",domProps:{textContent:t._s(t.allErrors.name[0])}}):t._e()]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-primary",attrs:{"data-dismiss":"modal",type:"button"},on:{click:function(a){return t.closeModal("editModal")}}},[t._v("Close")]),t._v(" "),e("button",{staticClass:"btn btn-success"},[t._v("Save")])])])])])],1)}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{staticClass:"text-center"},[t._v("#")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Name")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Status")]),t._v(" "),e("th",{staticClass:"text-center",attrs:{width:"33%"}},[t._v("Action")])])])}],!1,null,"65e6349e",null).exports}}]);