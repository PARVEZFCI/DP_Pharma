(self.webpackChunk=self.webpackChunk||[]).push([[346],{346:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});const a={name:"ListUserComponent",data:function(){return{userData:{},search:"",custom_row:10,select_row:[10,20,30,40,50],viewUser:{name:"",phone:"",address:"",email:"",profile_photo_path:""},tag:"svg",general_info:{name:"",phone:"",email:"",address:"",logo:""},permissions:[]}},methods:{ViewUser:function(t){var e=this;axios.get(base_path+"user/"+t).then((function(t){e.viewUser=t.data}))},getUser:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,s=base_path+"user?q="+e.search+"&page="+t+"&row="+e.custom_row;axios.get(s).then((function(t){e.userData=t.data})).catch((function(t){console.log(t)}))},getGeneralInfo:function(){var t=this;axios.get(base_path+"general_settings").then((function(e){t.general_info=e.data[0]}))},DeleteUser:function(t,e){var s=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.value&&axios.delete(base_path+"user/"+t).then((function(t){200===t.data.status&&(s.getUser(),s.$swal("Deleted!",t.data.message,"success")),400===t.data.status&&s.$swal("Opps","Something Went Wrong","warning")})).catch((function(t){console.log(t)}))}))},changeUserStatus:function(t){var e=this;axios.get(base_path+"user/status/"+t).then((function(t){200===t.data.status&&(e.getUser(),e.$swal("User!",t.data.message,"success")),400===t.data.status&&e.$swal("Opps","Something Went Wrong","warning")}))},print:function(){this.$htmlToPaper("printDiv")}},created:function(){this.getUser(),this.getUserPermissions()}};const n=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h3",[t._v("User")]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"panel panel-primary"},[s("div",{staticClass:"panel-heading"},[t._m(0),t._v(" "),s("div",{staticClass:"panel-options"},[t.permissions.includes("Add_User")?s("router-link",{staticStyle:{"margin-top":"4px"},attrs:{to:"/admin/user/create",type:"button"}},[s("button",{staticClass:"btn btn-primary btn-sm"},[t._v("+ Add")])]):t._e()],1)]),t._v(" "),s("div",{staticClass:"panel-heading"},[s("div",{staticClass:"pull-left col-sm-1"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"control-label",staticStyle:{"margin-top":"15px"},attrs:{for:"entries"}},[t._v("Show")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.custom_row,expression:"custom_row"}],staticClass:"form-control",staticStyle:{position:"absolute",top:"6px",left:"59px"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.custom_row=e.target.multiple?s:s[0]},function(e){return t.getUser()}]}},t._l(t.select_row,(function(e){return s("option",{domProps:{textContent:t._s(e)}})})),0)])]),t._v(" "),s("div",{staticClass:"pull-right"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",staticStyle:{"margin-top":"10px","margin-left":"-12px"},attrs:{"aria-controls":"DataTables_Table_2",placeholder:"Search",type:"search"},domProps:{value:t.search},on:{keyup:function(e){return t.getUser()},input:function(e){e.target.composing||(t.search=e.target.value)}}})])])]),t._v(" "),s("div",{staticStyle:{"overflow-x":"auto"}},[s("table",{staticClass:"table table-bordered table-responsive"},[t._m(1),t._v(" "),s("tbody",t._l(t.userData.data,(function(e,a){return"admin@gmail.com"!==e.email?s("tr",{key:a},[s("td",{staticClass:"text-center"},[t._v(t._s(++a))]),t._v(" "),s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",{staticClass:"text-center"},[s("img",{attrs:{src:e.profile_photo_path?"/"+e.profile_photo_path:"/backend_assets/assets/images/avatar.png",width:"40"}})]),t._v(" "),s("td",[t._v(t._s(e.phone))]),t._v(" "),s("td",[t._v(t._s(e.email))]),t._v(" "),s("td",{staticClass:"text-center"},[t.permissions.includes("View_User")?s("button",{staticClass:"btn btn-sm btn-default",attrs:{"data-target":"#viewModal","data-toggle":"modal",type:"button"},on:{click:function(s){return t.ViewUser(e.id)}}},[s("i",{staticClass:"fa fa-eye"})]):t._e(),t._v(" "),t.permissions.includes("Edit_User")?s("router-link",{staticStyle:{"margin-top":"4px"},attrs:{to:{name:"/admin/user/edit",params:{id:e.id}},type:"button"}},[s("button",{staticClass:"btn btn-sm btn-info"},[s("i",{staticClass:"fa fa-edit"})])]):t._e(),t._v(" "),t.permissions.includes("Delete_User")?s("button",{staticClass:"btn btn-sm btn-red",on:{click:function(s){return t.DeleteUser(e.id,a)}}},[s("i",{staticClass:"fa fa-trash"})]):t._e()],1)]):t._e()})),0)]),t._v(" "),s("pagination",{staticStyle:{"margin-left":"20px"},attrs:{data:t.userData,limit:3},on:{"pagination-change-page":t.getUser}},[s("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("< Previous")]),t._v(" "),s("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Next >")])])],1)]),t._v(" "),s("div",{staticClass:"modal fade in",attrs:{"aria-hidden":"true",id:"viewModal",tabindex:"-1"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"invoice",attrs:{id:"printDiv"}},[s("div",{staticClass:"row"},[s("center",[s("div",{staticClass:"invoice-left"},[s("img",{attrs:{src:t.viewUser.profile_photo_path?t.viewUser.profile_photo_path:"/assets/images/avatar.png",alt:"",width:"200"}}),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("strong",[t._v("Name:")]),t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.viewUser.name?t.viewUser.name:"Not Set")+"\n\t\t\t\t\t\t\t\t\t"),s("br"),t._v(" "),s("br"),t._v(" "),s("strong",[t._v("Email:")]),t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.viewUser.email?t.viewUser.email:"Not Set")+"\n\t\t\t\t\t\t\t\t\t"),s("br"),t._v(" "),s("br"),t._v(" "),s("strong",[t._v("Mobile:")]),t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.viewUser.phone?t.viewUser.phone:"Not Set")+"\n\t\t\t\t\t\t\t\t\t"),s("br"),t._v(" "),s("br"),t._v(" "),s("strong",[t._v("Address:")]),t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.viewUser.address?t.viewUser.address:"Not Set")+"\n\t\t\t\t\t\t\t\t")])])],1)])]),t._v(" "),t._m(3)])])])])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel-title"},[s("b",[t._v("User List")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticClass:"text-center"},[t._v("#")]),t._v(" "),s("th",{staticClass:"text-center"},[t._v("Name")]),t._v(" "),s("th",{staticClass:"text-center"},[t._v("Profile")]),t._v(" "),s("th",{staticClass:"text-center"},[t._v("Phone")]),t._v(" "),s("th",{staticClass:"text-center"},[t._v("Email")]),t._v(" "),s("th",{staticClass:"text-center"},[t._v("Action")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h4",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[s("b",[t._v("View User")])]),t._v(" "),s("button",{staticClass:"close",attrs:{"aria-label":"Close","data-dismiss":"modal",type:"button"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{"data-dismiss":"modal",type:"button"}},[t._v("Close")])])}],!1,null,null,null).exports}}]);