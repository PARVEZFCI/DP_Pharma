(self.webpackChunk=self.webpackChunk||[]).push([[455],{455:(s,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>e});const r={name:"ChangePasswordComponent",data:function(){return{credentials:{current_password:"",password:"",password_confirmation:""}}},methods:{UpdatePassword:function(){var s=this;axios.put(base_path+"change_password",s.credentials).then((function(t){200==t.data.status&&(s.$toastr.success("Password Changed Successfully","Success!",{timeOut:5e3}),location.reload())}))}},mounted:function(){}};const e=(0,a(1900).Z)(r,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("h3",[s._v("Password")]),s._v(" "),a("br"),s._v(" "),a("div",{staticClass:"panel panel-primary",attrs:{"data-collapsed":"0"}},[s._m(0),s._v(" "),a("div",{staticClass:"panel-body"},[a("form",{staticClass:"form-horizontal",attrs:{role:"form"},on:{submit:function(t){return t.preventDefault(),s.UpdatePassword()}}},[a("div",{staticClass:"col-md-7"},[a("div",{staticClass:"form-group col-md-12"},[a("div",{staticClass:"col-sm-7"},[a("label",{staticClass:"control-label",attrs:{for:"current_password"}},[s._v("Current Password*")]),s._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.credentials.current_password,expression:"credentials.current_password"}],staticClass:"form-control",attrs:{type:"password",id:"current_password",placeholder:"Enter Current Password"},domProps:{value:s.credentials.current_password},on:{input:function(t){t.target.composing||s.$set(s.credentials,"current_password",t.target.value)}}})])]),s._v(" "),a("div",{staticClass:"form-group col-md-12"},[a("div",{staticClass:"col-sm-7"},[a("label",{staticClass:"control-label",attrs:{for:"password"}},[s._v("New Password*")]),s._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.credentials.password,expression:"credentials.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Enter New Password"},domProps:{value:s.credentials.password},on:{input:function(t){t.target.composing||s.$set(s.credentials,"password",t.target.value)}}})])]),s._v(" "),a("div",{staticClass:"form-group col-md-12"},[a("div",{staticClass:"col-sm-7"},[a("label",{staticClass:"control-label",attrs:{for:"password_confirmation"}},[s._v("Confirm Password*")]),s._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.credentials.password_confirmation,expression:"credentials.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",id:"password_confirmation",placeholder:"Confirm Password"},domProps:{value:s.credentials.password_confirmation},on:{input:function(t){t.target.composing||s.$set(s.credentials,"password_confirmation",t.target.value)}}})])]),s._v(" "),a("div",{staticClass:"form-group col-md-7"},[a("div",{staticClass:"pull-right"},[a("button",{staticClass:"btn btn-success"},[s._v("Change Password")]),s._v(" "),a("router-link",{staticStyle:{"margin-top":"4px"},attrs:{to:"/admin",type:"button"}},[a("button",{staticClass:"btn btn-secondary",attrs:{"data-dismiss":"modal"}},[s._v("Close")])])],1)])])])])])])}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"panel-heading"},[a("div",{staticClass:"panel-title"},[s._v("\n\t\t\t\tChange Password\n\t\t\t")]),s._v(" "),a("div",{staticClass:"panel-options"},[a("a",{attrs:{href:"#","data-rel":"collapse"}},[a("i",{staticClass:"entypo-down-open"})])])])}],!1,null,null,null).exports}}]);