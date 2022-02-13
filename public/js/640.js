(self.webpackChunk=self.webpackChunk||[]).push([[640],{1373:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(3645),o=a.n(s)()((function(t){return t[1]}));o.push([t.id,"label[data-v-43fcde24]{margin-right:15px}.form-control[data-v-43fcde24]{border:1px solid #c8c1c1}table tr[data-v-43fcde24],table tr th[data-v-43fcde24]{text-align:center}table tr th[data-v-43fcde24]{color:rgba(0,0,0,.8313725490196079);font-weight:700}.search-box[data-v-43fcde24]{height:40px;margin:12px 0 8px}[data-v-43fcde24]::-moz-placeholder{color:#4e5157;opacity:1}[data-v-43fcde24]:-ms-input-placeholder{color:#4e5157;opacity:1}[data-v-43fcde24]::placeholder{color:#4e5157;opacity:1}[data-v-43fcde24]:-ms-input-placeholder{color:#4e5157}[data-v-43fcde24]::-ms-input-placeholder{color:#4e5157}",""]);const n=o},3640:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});const s={name:"AccountsComponent",data:function(){return{addAccount:{name:"",type:"",balance:"",description:""},allAccounts:{},editAccountData:{},allErrors:[],search:"",customRow:10,selectRow:[10,20,30,40,50],payment_methods:""}},methods:{getPaymentMethod:function(){var t=this;axios.get(base_path+"allPaymentMethod").then((function(e){t.payment_methods=e.data})).catch((function(t){console.log(t)}))},addNewAccount:function(){var t=this,e=this;axios.post(base_path+"account",e.addAccount).then((function(a){201==a.data.code&&(t.$toastr.success(a.data.message,"Category",{timeout:5e3}),e.getAccount(),e.closeModal("addModal"),e.clearForm(e.addAccount))})).catch((function(t){422===t.response.status?e.allErrors=t.response.data.errors:e.$toastr.warning("Application error","Sorry",{timeOut:5e3})}))},getAccount:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a=base_path+"account?q="+e.search+"&page="+t+"&row="+e.customRow;axios.get(a).then((function(t){e.allAccounts=t.data})).catch((function(t){console.log(t)}))},editAccount:function(t,e){this.openModal("editModal"),this.editAccountData=e},updateAccount:function(t){var e=this,a=this;axios.put(base_path+"account/"+t,a.editAccountData).then((function(t){201==t.data.code?(e.$toastr.success(t.data.message,"Account",{timeout:5e3}),a.closeModal("editModal"),a.clearForm(a.editAccount),a.getAccount()):e.$toastr.warning("Something went wrong","Sorry",{timeout:5e3})})).catch((function(t){422===t.response.status?a.allErrors=t.response.data.errors:a.$toastr.error("Application error","Sorry",{timeOut:5e3})}))},deleteAccount:function(t,e){var a=this,s=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.value&&axios.delete(base_path+"account/"+t).then((function(t){200==t.status&&a.$swal("Deleted!",t.data.message,"success"),s.getAccount()})).catch((function(t){console.log(t)}))}))},changeStatus:function(t){var e=this;axios.get(base_path+"account/status/"+t).then((function(t){e.getAccount(),200===t.data.code&&e.$toastr.success("This account status Changed successfully!","Account",{timeOut:5e3})})).catch((function(t){console.log(t)}))},openModal:function(t){this.$modal.show(t)},closeModal:function(t){this.$modal.hide(t)},clearForm:function(t){this.allErrors=[],Object.keys(t).forEach((function(e){t[e]=""}))}},created:function(){this.getAccount(),this.getPaymentMethod(),this.getUserPermissions()}};var o=a(3379),n=a.n(o),c=a(1373),r={insert:"head",singleton:!1};n()(c.Z,r);c.Z.locals;const i=(0,a(1900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Accounts")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"panel panel-primary"},[a("div",{staticClass:"panel-heading"},[a("div",{staticClass:"panel-title"},[t._v("Accounts List")]),t._v(" "),a("div",{staticClass:"panel-options",staticStyle:{padding:"7px 15px"}},[t.permissions.includes("Add_Account")?a("button",{staticClass:"btn btn-blue btn-sm",attrs:{type:"button"},on:{click:function(e){return t.openModal("addModal")}}},[a("i",{staticClass:"entypo-plus-circled"}),t._v("Add\n\t\t\t\t")]):t._e()])]),t._v(" "),a("div",{staticClass:"panel-heading",staticStyle:{padding:"18px 0px 3px"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-1"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[t._v("Show")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.customRow,expression:"customRow"}],staticClass:"form-control",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.customRow=e.target.multiple?a:a[0]},t.getAccount]}},t._l(t.selectRow,(function(e){return a("option",{domProps:{textContent:t._s(e)}})})),0)])]),t._v(" "),a("div",{staticClass:"col-md-2"}),t._v(" "),a("div",{staticClass:"col-md-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control search-box",attrs:{"aria-controls":"DataTables_Table_2",placeholder:"Search according to category name & code",type:"search"},domProps:{value:t.search},on:{keyup:function(e){return t.getAccount()},input:function(e){e.target.composing||(t.search=e.target.value)}}})])])])]),t._v(" "),a("table",{staticClass:"table table-bordered responsive"},[t._m(0),t._v(" "),a("tbody",t._l(t.allAccounts.data,(function(e,s){return a("tr",[a("td",{staticClass:"text-center"},[t._v(t._s(++s))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.name))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.types&&e.types.name))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.balance))]),t._v(" "),a("td",{staticClass:"text-center"},[a("span",{staticClass:"badge",class:1==e.status?"badge-success":"badge-warning"},[t._v(t._s(1==e.status?"Active":"Inactive"))])]),t._v(" "),a("td",{staticClass:"text-center"},[t.permissions.includes("Status_Account")?a("button",{staticClass:"btn",class:1==e.status?"btn-success":"btn-warning",attrs:{type:"button"},on:{click:function(a){return t.changeStatus(e.id)}}},[a("i",{staticClass:"entypo-arrows-ccw"})]):t._e(),t._v(" "),t.permissions.includes("Edit_Account")?a("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(a){return t.editAccount(e.id,e)}}},[a("i",{staticClass:"entypo-pencil"})]):t._e(),t._v(" "),t.permissions.includes("Delete_Account")?a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(a){return t.deleteAccount(e.id,s)}}},[a("i",{staticClass:"entypo-trash"})]):t._e()])])})),0)])]),t._v(" "),a("div",{staticClass:"text-center"},[a("pagination",{staticStyle:{"margin-left":"20px"},attrs:{data:t.allAccounts},on:{"pagination-change-page":t.getAccount}},[a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("<Previous")]),t._v(" "),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Next >")])])],1),t._v(" "),a("modal",{attrs:{adaptive:!0,clickToClose:!1,draggable:!0,limit:3,resizable:!0,height:"auto",name:"addModal"}},[a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{"aria-hidden":"true","data-dismiss":"modal",type:"button"},on:{click:function(e){return t.closeModal("addModal")}}},[t._v("×")]),t._v(" "),a("h4",{staticClass:"modal-title"},[a("i",{staticClass:"entypo-plus-circled"}),t._v("Add New Account\n\t\t\t")])]),t._v(" "),a("div",{staticClass:"modal-body"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.addNewAccount(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.addAccount.name,expression:"addAccount.name"}],staticClass:"form-control",attrs:{id:"name",placeholder:"Enter Account Name",type:"text"},domProps:{value:t.addAccount.name},on:{input:function(e){e.target.composing||t.$set(t.addAccount,"name",e.target.value)}}}),t._v(" "),t.allErrors.name?a("span",{staticClass:"text-danger",domProps:{textContent:t._s(t.allErrors.name[0])}}):t._e()]),t._v(" "),a("div",{staticClass:"form-group",class:t.allErrors.type?"validate-has-error":""},[a("label",{attrs:{for:"type"}},[t._v("Type")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.addAccount.type,expression:"addAccount.type"}],staticClass:"form-control",attrs:{id:"type",name:"type"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.addAccount,"type",e.target.multiple?a:a[0])}}},t._l(t.payment_methods,(function(e){return a("option",{domProps:{value:e.value}},[t._v(t._s(e.text))])})),0),t._v(" "),t.allErrors.type?a("span",{staticClass:"text-danger",domProps:{textContent:t._s(t.allErrors.type[0])}}):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"balance"}},[t._v("Balance")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.addAccount.balance,expression:"addAccount.balance"}],staticClass:"form-control",attrs:{id:"balance",placeholder:"Enter Account Balance",type:"text"},domProps:{value:t.addAccount.balance},on:{input:function(e){e.target.composing||t.$set(t.addAccount,"balance",e.target.value)}}}),t._v(" "),t.allErrors.balance?a("span",{staticClass:"text-danger",domProps:{textContent:t._s(t.allErrors.balance[0])}}):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Description")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.addAccount.description,expression:"addAccount.description"}],staticClass:"form-control",attrs:{id:"description",placeholder:"Enter Account Description",rows:"5"},domProps:{value:t.addAccount.description},on:{input:function(e){e.target.composing||t.$set(t.addAccount,"description",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{"data-dismiss":"modal",type:"button"},on:{click:function(e){return t.closeModal("addModal")}}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-success"},[t._v("Save")])])])])]),t._v(" "),a("modal",{attrs:{adaptive:!0,clickToClose:!1,draggable:!0,limit:3,resizable:!0,height:"auto",name:"editModal"}},[a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{"aria-hidden":"true","data-dismiss":"modal",type:"button"},on:{click:function(e){return t.closeModal("editModal")}}},[t._v("×")]),t._v(" "),a("h4",{staticClass:"modal-title"},[a("i",{staticClass:"entypo-plus-circled"}),t._v("\n\t\t\t\tEdit "+t._s(t.editAccountData.name)+" Account\n\t\t\t")])]),t._v(" "),a("div",{staticClass:"modal-body"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.updateAccount(t.editAccountData.id)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editAccountData.name,expression:"editAccountData.name"}],staticClass:"form-control",attrs:{placeholder:"Enter Account Name",type:"text"},domProps:{value:t.editAccountData.name},on:{input:function(e){e.target.composing||t.$set(t.editAccountData,"name",e.target.value)}}}),t._v(" "),t.allErrors.name?a("span",{staticClass:"text-danger",domProps:{textContent:t._s(t.allErrors.name[0])}}):t._e()]),t._v(" "),a("div",{staticClass:"form-group",class:t.allErrors.type?"validate-has-error":""},[a("label",{attrs:{for:"type"}},[t._v("Type")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.editAccountData.type,expression:"editAccountData.type"}],staticClass:"form-control",attrs:{id:"type",name:"type"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.editAccountData,"type",e.target.multiple?a:a[0])}}},t._l(t.payment_methods,(function(e){return a("option",{domProps:{value:e.value}},[t._v(t._s(e.text))])})),0),t._v(" "),t.allErrors.type?a("span",{staticClass:"text-danger",domProps:{textContent:t._s(t.allErrors.type[0])}}):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Description")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.editAccountData.description,expression:"editAccountData.description"}],staticClass:"form-control",attrs:{placeholder:"Enter Account Description",rows:"5"},domProps:{value:t.editAccountData.description},on:{input:function(e){e.target.composing||t.$set(t.editAccountData,"description",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{"data-dismiss":"modal",type:"button"},on:{click:function(e){return t.closeModal("editModal")}}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-success"},[t._v("Save")])])])])])],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"text-center"},[t._v("#")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Name")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Type")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Balance")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Status")]),t._v(" "),a("th",{staticClass:"text-center",attrs:{width:"33%"}},[t._v("Action")])])])}],!1,null,"43fcde24",null).exports}}]);