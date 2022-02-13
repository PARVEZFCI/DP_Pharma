(self.webpackChunk=self.webpackChunk||[]).push([[15],{1015:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});const s={name:"SliderComponent",data:function(){return{AddSlider:{path:"",order:""},imageSource:"",AllError:[],sliderData:{},editSlider:{},custom_row:10,select_row:[10,20,30,40,50]}},methods:{AddNewSlider:function(){var t=this,e=this;axios.post(base_path+"slider",e.AddSlider).then((function(a){201==a.data.code?(t.$toastr.success(a.data.message,"Category",{timeout:5e3}),e.hideModal("addModal"),e.getSlider(),e.clearForm(e.AddSlider)):e.$toastr.warning("Something Went Wrong","Sorry!",{timeOut:5e3})})).catch((function(t){422===t.response.status&&(e.AllError=t.response.data.errors)}))},getImage:function(){var t=this,e=event.target.files[0],a=new FileReader;a.onload=function(e){t.AddSlider.path=e.target.result,t.editSlider.path=e.target.result,t.imageSource=e.target.result},a.readAsDataURL(e)},getSlider:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a=base_path+"slider?page="+t+"&row="+e.custom_row;axios.get(a).then((function(t){e.sliderData=t.data})).catch((function(t){console.log(t)}))},DeleteSlider:function(t,e){var a=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.value&&axios.delete(base_path+"slider/"+t).then((function(t){200==t.data.code&&(a.getSlider(),a.$swal("Deleted!",t.data.message,"success")),400===t.data.code&&a.$swal("Opps","Something Went Wrong","warning")})).catch((function(t){console.log(t)}))}))},changeSliderStatus:function(t){var e=this;axios.get(base_path+"slider/status/"+t).then((function(t){200===t.data.code&&(e.getSlider(),e.$toastr.success(t.data.message,"Slider",{timeOut:5e3})),400===t.data.code&&e.$swal("Opps","Something Went Wrong","warning")}))},EditSlider:function(t,e){var a=this;a.openModal("editModal"),a.editSlider=e,a.imageSource="/"+(e.path?e.path:"backend_assets/assets/images/sample.jpg")},updateSlider:function(t){var e=this,a=this;axios.put(base_path+"slider/"+t,a.editSlider).then((function(t){201==t.data.code?(e.$toastr.success(t.data.message,"Slider",{timeOut:5e3}),a.hideModal("editModal"),e.getSlider()):e.$toastr.warning("Something Went Wrong","Sorry!",{timeOut:5e3})})).catch((function(t){422===t.response.code&&(a.AllError=t.response.data.errors)}))},clearForm:function(t){this.AllError=[],Object.keys(t).forEach((function(e){t[e]=""}))},hideModal:function(t){this.$modal.hide(t)},openModal:function(t){this.$modal.show(t,{draggable:!0},{height:"auto"})}},created:function(){this.getSlider()}};const r=(0,a(1900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Slider")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"panel panel-primary"},[a("div",{staticClass:"panel-heading"},[t._m(0),t._v(" "),a("div",{staticClass:"panel-options"},[a("button",{staticClass:"btn btn-blue btn-sm",staticStyle:{"margin-top":"4px"},on:{click:function(e){return t.openModal("addModal")}}},[t._v("+ Add")])])]),t._v(" "),a("div",{staticClass:"panel-heading"},[a("div",{staticClass:"pull-left col-sm-1"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label",staticStyle:{"margin-top":"15px"},attrs:{for:"entries"}},[t._v("Show")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.custom_row,expression:"custom_row"}],staticClass:"form-control",staticStyle:{position:"absolute",top:"6px",left:"59px"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.custom_row=e.target.multiple?a:a[0]},function(e){return t.getSlider()}]}},t._l(t.select_row,(function(e){return a("option",{domProps:{textContent:t._s(e)}})})),0)])])]),t._v(" "),a("table",{staticClass:"table table-bordered table-responsive"},[t._m(1),t._v(" "),a("tbody",t._l(t.sliderData.data,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"text-center"},[t._v(t._s(++s))]),t._v(" "),a("td",{staticClass:"text-center"},[a("img",{attrs:{src:e.path?"/"+e.path:"/backend_assets/assets/images/sample.jpg",width:"120"}})]),t._v(" "),a("td",[t._v(t._s(e.order))]),t._v(" "),a("td",{staticClass:"text-center"},[a("div",{staticClass:"label",class:1==e.status?"label-success":"label-warning"},[t._v(t._s(1==e.status?"On":"Off"))])]),t._v(" "),a("td",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-sm",class:1==e.status?"btn-success":"btn-warning",attrs:{type:"button"},on:{click:function(a){return t.changeSliderStatus(e.id)}}},[a("i",{staticClass:"fa fa-refresh"})]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-info",attrs:{type:"button"},on:{click:function(a){return t.EditSlider(e.id,e)}}},[a("i",{staticClass:"fa fa-edit"})]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-red",on:{click:function(a){return t.DeleteSlider(e.id,s)}}},[a("i",{staticClass:"fa fa-trash"})])])])})),0)]),t._v(" "),a("pagination",{staticStyle:{"margin-left":"20px"},attrs:{data:t.sliderData,limit:3},on:{"pagination-change-page":t.getSlider}},[a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("< Previous")]),t._v(" "),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Next >")])])],1),t._v(" "),a("modal",{attrs:{adaptive:!0,height:"auto",name:"addModal"}},[a("div",{staticClass:"modal-header"},[a("h4",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("b",[t._v("Add Slider")])]),t._v(" "),a("button",{staticClass:"close",attrs:{"aria-label":"Close","data-dismiss":"modal",type:"button"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.AddNewSlider(e)}}},[a("div",{staticClass:"modal-body"},[a("center",[a("div",{staticClass:"fileinput-new thumbnail",staticStyle:{width:"200px"}},[a("img",{attrs:{src:t.AddSlider.path?t.AddSlider.path:"/backend_assets/assets/images/sample.jpg",id:"previmage",width:"200"}})])]),t._v(" "),a("div",{staticClass:"form-group",class:t.AllError.path?"validate-has-error":""},[a("label",{attrs:{for:"image"}},[t._v("Slider Image*:")]),t._v(" "),a("p",{staticStyle:{color:"white"}},[t._v("\n\t\t\t\t\t\tImage standard size\n\t\t\t\t\t\t"),a("span",{staticStyle:{color:"yellow"}},[t._v("1600px*470px")])]),t._v(" "),a("input",{staticClass:"form-control",attrs:{id:"image",type:"file"},on:{change:t.getImage}}),t._v(" "),t.AllError.path?a("span",{staticClass:"text-danger",domProps:{textContent:t._s(t.AllError.path[0])}}):t._e()]),t._v(" "),a("div",{staticClass:"form-group",class:t.AllError.header?"validate-has-error":""},[a("label",{attrs:{for:"order"}},[t._v("Slider Order:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.AddSlider.order,expression:"AddSlider.order"}],staticClass:"form-control",attrs:{id:"order",placeholder:"Enter Slider Order",type:"number"},domProps:{value:t.AddSlider.order},on:{input:function(e){e.target.composing||t.$set(t.AddSlider,"order",e.target.value)}}})])],1),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",staticStyle:{float:"right","margin-bottom":"15px"},attrs:{type:"button"},on:{click:function(e){return t.hideModal("addModal")}}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-success",staticStyle:{float:"right","margin-bottom":"15px"}},[t._v("Save")])])])]),t._v(" "),a("modal",{attrs:{adaptive:!0,height:"auto",name:"editModal"}},[a("div",{staticClass:"modal-header"},[a("h4",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("b",[t._v("Edit Slider")])]),t._v(" "),a("button",{staticClass:"close",attrs:{"aria-label":"Close",type:"button"},on:{click:function(e){return t.hideModal("editModal")}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.updateSlider(t.editSlider.id)}}},[a("div",{staticClass:"modal-body"},[a("center",[a("div",{staticClass:"fileinput-new thumbnail",staticStyle:{width:"200px"}},[a("img",{attrs:{src:t.imageSource,id:"previmage",width:"200"}})])]),t._v(" "),a("div",{staticClass:"form-group",class:t.AllError.path?"validate-has-error":""},[a("label",{attrs:{for:"image"}},[t._v("Slider Image*:")]),t._v(" "),a("p",{staticStyle:{color:"white"}},[t._v("\n\t\t\t\t\t\tImage standard size\n\t\t\t\t\t\t"),a("span",{staticStyle:{color:"yellow"}},[t._v("1600px*470px")])]),t._v(" "),a("input",{staticClass:"form-control",attrs:{id:"image",type:"file"},on:{change:t.getImage}}),t._v(" "),t.AllError.path?a("span",{staticClass:"text-danger",domProps:{textContent:t._s(t.AllError.path[0])}}):t._e()]),t._v(" "),a("div",{staticClass:"form-group",class:t.AllError.order?"validate-has-error":""},[a("label",{attrs:{for:"order"}},[t._v("Slider Order:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editSlider.order,expression:"editSlider.order"}],staticClass:"form-control",attrs:{placeholder:"Enter Slider Order",type:"number"},domProps:{value:t.editSlider.order},on:{input:function(e){e.target.composing||t.$set(t.editSlider,"order",e.target.value)}}}),t._v(" "),t.AllError.order?a("span",{staticClass:"text-danger",domProps:{textContent:t._s(t.AllError.order[0])}}):t._e()])],1),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-success",staticStyle:{float:"right","margin-bottom":"15px"}},[t._v("Save Changes")]),t._v(" "),a("button",{staticClass:"btn btn-secondary",staticStyle:{float:"right","margin-bottom":"15px"},attrs:{type:"button"},on:{click:function(e){return t.hideModal("editModal")}}},[t._v("Close")])])])])],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-title"},[a("b",[t._v("Slider List")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"text-center"},[t._v("#")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Slider")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Order")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Status")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Action")])])])}],!1,null,null,null).exports}}]);