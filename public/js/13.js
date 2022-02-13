(self.webpackChunk=self.webpackChunk||[]).push([[13],{4949:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var i=a(3645),s=a.n(i)()((function(t){return t[1]}));s.push([t.id,"label[data-v-403c2b47]{margin-right:15px}.form-control[data-v-403c2b47]{border:1px solid #c8c1c1}table tr[data-v-403c2b47]{text-align:center}table tr td[data-v-403c2b47],table tr th[data-v-403c2b47]{text-align:center;color:rgba(0,0,0,.6588235294117647)}.badge.badge-warning[data-v-403c2b47]{background-color:#f9d62e;color:#460404}.action-column[data-v-403c2b47]{display:flex;justify-content:center}.dropdown-menu>li>a[data-v-403c2b47]{cursor:pointer}.text-black[data-v-403c2b47]{color:#000}.clientlogo[data-v-403c2b47]{float:left;height:60px;width:60px;background:url(/frontend_assets/assets/img/logo.jpg) no-repeat;background-size:60px 60px;border-radius:50px;margin-top:30px}.info[data-v-403c2b47]{display:block;float:left;margin-left:20px}.info h2[data-v-403c2b47]{font-weight:800;font-size:1.5em}.info p[data-v-403c2b47],.invoice-left p[data-v-403c2b47]{color:rgba(0,0,0,.8901960784313725);margin-bottom:5px}.modal-footer[data-v-403c2b47]{display:flex;align-items:center;justify-content:space-between}",""]);const n=s},2013:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});const i={name:"OrderList",data:function(){return{invoiceList:{},invoiceData:{invoice_date:"",customer_name:"",customer_email:"",customer_phone:"",customer_address:"",customer_type:"",grand_total:0,invoice_code:"",order_medicine_infos:[],total_due:0,total_paid:0,discount:0},customRow:10,selectRow:[10,20,30,40,50],search:"",settings:""}},methods:{getInvoice:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a=base_path+"invoice_list?q="+e.search+"&page="+t+"&row="+e.customRow;axios.get(a).then((function(t){e.invoiceList=t.data})).catch((function(t){console.log(t)}))},getInvoiceData:function(t){var e=this;axios.get(base_path+"invoice/"+t).then((function(t){e.invoiceData=t.data,e.invoiceData.discount=0,e.invoiceData.order_medicine_infos.map((function(t){e.invoiceData.discount+=parseFloat(t.price)-parseFloat(t.discount_price?t.discount_price:0)})),console.log(e.invoiceData)})).catch((function(t){console.log(t)}))},orderView:function(t){var e=this;axios.get(base_path+"invoice/view/"+t).then((function(t){e.invoiceData.invoice_date=t.data.infos.invoice_date,e.invoiceData.customer_name=t.data.infos.customer_name,e.invoiceData.customer_email=t.data.infos.customer_email,e.invoiceData.customer_phone=t.data.infos.customer_phone,e.invoiceData.pharmacy_name=t.data.infos.pharmacy_name,e.invoiceData.customer_address=t.data.infos.customer_address,e.invoiceData.customer_type=t.data.infos.customer_type,e.invoiceData.grand_total=t.data.infos.grand_total,e.invoiceData.invoice_code=t.data.infos.invoice_code,e.invoiceData.order_medicine_infos=[],e.invoiceData.total_due=t.data.infos.total_due,e.invoiceData.paid=t.data.infos.paid;var a=t.data.stock;t.data.infos.order_medicine_infos.map((function(t,i){var s=[],n="",c=0;a.map((function(e){e.medicine_id==t.medicine_id&&(s.push({stock:e.stock,batch:e.batch}),"DEFAULT"==e.batch&&(n=e.batch,c=e.stock))})),e.invoiceData.order_medicine_infos.push({id:t.id,category:t.category,discount:t.discount,discount_price:t.discount_price,medicine_id:t.medicine_id,medicine_name:t.medicine_name,medicine_quantity:t.medicine_quantity,price:t.price,sub_total:t.sub_total,batches:s,batch:n,stock:c})}))})).catch((function(t){console.log(t)}))},batchChange:function(t,e){var a=this;a.invoiceData.order_medicine_infos[t].batches.map((function(i){i.batch==e&&(a.invoiceData.order_medicine_infos[t].stock=i.stock)}))},submitMedicineInfo:function(t,e){var a=this;axios.post(base_path+"medicine_info/"+t,e).then((function(t){a.$toastr.success("Changed Successfully","Invoice",{timeOut:5e3})})).catch((function(t){console.log(t)}))},changeStatus:function(t,e){var a=this;axios.patch(base_path+"invoice/status/"+t+"/"+e).then((function(t){201==t.data.code&&(a.getInvoice(),a.$toastr.success(t.data.message,"Invoice",{timeOut:5e3}))})).catch((function(t){console.log(t)}))},getAppSettings:function(){var t=this;axios.get(base_path+"app_settings").then((function(e){t.settings=e.data}))},print:function(){this.$htmlToPaper("print_div")}},created:function(){this.getAppSettings(),this.getInvoice()}};var s=a(3379),n=a.n(s),c=a(4949),o={insert:"head",singleton:!1};n()(c.Z,o);c.Z.locals;const r=(0,a(1900).Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Orders List")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"panel panel-primary"},[t._m(0),t._v(" "),a("div",{staticClass:"panel-heading",staticStyle:{padding:"18px 0px 3px"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-1"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Show")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.customRow,expression:"customRow"}],staticClass:"form-control",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.customRow=e.target.multiple?a:a[0]},function(e){return t.getInvoice()}]}},t._l(t.selectRow,(function(e){return a("option",{domProps:{textContent:t._s(e)}})})),0)])]),t._v(" "),a("div",{staticClass:"col-sm-7"})])])]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered"},[t._m(1),t._v(" "),a("tbody",t._l(t.invoiceList.data,(function(e,i){return a("tr",{key:i},[a("td",[t._v(t._s(++i))]),t._v(" "),a("td",[t._v(t._s(t._f("moment")(e.created_at,"DD/MM/YYYY h:ma")))]),t._v(" "),a("td",[t._v(t._s(e.customer_details&&e.customer_details.pharmacy_name))]),t._v(" "),a("td",[t._v(t._s(e.order_code))]),t._v(" "),a("td",[t._v(t._s(e.total_price))]),t._v(" "),a("td",[t._v(t._s(e.total_paid))]),t._v(" "),a("td",[1==e.status?a("span",[a("label",{staticClass:"badge badge-warning"},[t._v("Pending")])]):t._e(),t._v(" "),2==e.status?a("span",[a("label",{staticClass:"badge badge-primary"},[t._v("Order Accepted")])]):t._e(),t._v(" "),3==e.status?a("span",[a("label",{staticClass:"badge badge-info"},[t._v("On The Way")])]):t._e(),t._v(" "),4==e.status?a("span",[a("label",{staticClass:"badge badge-success"},[t._v("Success")])]):t._e(),t._v(" "),5==e.status?a("span",[a("label",{staticClass:"badge badge-danger"},[t._v("Rejected")])]):t._e()]),t._v(" "),a("td",{staticClass:"action-column"},[1==e.status?a("button",{staticClass:"btn btn-sm btn-info",attrs:{"data-target":"#viewModal","data-toggle":"modal"},on:{click:function(a){return t.orderView(e.id)}}},[a("i",{staticClass:"fa fa-exchange"})]):t._e(),t._v(" "),a("button",{staticClass:"btn btn-success btn-sm",attrs:{"data-target":".invoice-modal","data-toggle":"modal",type:"button"},on:{click:function(a){return t.getInvoiceData(e.id)}}},[a("i",{staticClass:"fa fa-print"})]),t._v(" "),a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-blue btn-sm dropdown-toggle",attrs:{"data-toggle":"dropdown",type:"button"},on:{click:function(a){return t.getInvoiceData(e.id)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\tStatus\n\t\t\t\t\t\t\t\t\t\t"),a("span",{staticClass:"caret"})]),t._v(" "),a("ul",{staticClass:"dropdown-menu dropdown-blue",attrs:{role:"menu"}},[a("li",[a("a",{on:{click:function(a){return a.preventDefault(),t.changeStatus(e.id,1)}}},[t._v("Pending")])]),t._v(" "),a("li",[a("a",{on:{click:function(a){return a.preventDefault(),t.changeStatus(e.id,2)}}},[t._v("Order Accepted")])]),t._v(" "),a("li",[a("a",{on:{click:function(a){return a.preventDefault(),t.changeStatus(e.id,3)}}},[t._v("On The Way")])]),t._v(" "),a("li",[a("a",{on:{click:function(a){return a.preventDefault(),t.changeStatus(e.id,4)}}},[t._v("Success")])]),t._v(" "),a("li",[a("a",{on:{click:function(a){return a.preventDefault(),t.changeStatus(e.id,5)}}},[t._v("Rejected")])])])])])])})),0)])])]),t._v(" "),a("div",{staticClass:"text-center"},[a("pagination",{staticStyle:{"margin-left":"20px"},attrs:{data:t.invoiceList,limit:3},on:{"pagination-change-page":t.getInvoice}},[a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("< Previous")]),t._v(" "),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Next >")])])],1),t._v(" "),a("div",{staticClass:"modal fade invoice-modal",attrs:{"aria-hidden":"true","aria-labelledby":"myLargeModalLabel",role:"dialog",tabindex:"-1"}},[a("div",{staticClass:"modal-dialog modal-lg"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[a("div",{},[a("div",{staticClass:"row"},[t._m(2),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"info"},[a("h2",[t._v(t._s(t.invoiceData.invoice_code))]),t._v(" "),a("p",[t._v(t._s(t.invoiceData.pharmacy_name))]),t._v(" "),a("p",[t._v(t._s(t._f("moment")(t.invoiceData.created_at,"DD/MM/YYYY h:ma")))]),t._v(" "),a("p",[t._v(t._s(t.invoiceData.customer_name))]),t._v(" "),a("p",[t._v(t._s(t.invoiceData.customer_email))]),t._v(" "),a("p",[t._v(t._s(t.invoiceData.customer_phone))]),t._v(" "),a("p",[t._v(t._s(t.invoiceData.customer_address))])])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticStyle:{overflow:"auto"}},[a("table",{staticClass:"table table-bordered"},[t._m(3),t._v(" "),a("tbody",t._l(t.invoiceData.order_medicine_infos,(function(e){return a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.category+" "+e.medicine_name))]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.price))]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.discount?e.discount:0)+"%")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.discount_price?e.discount_price:0))]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.medicine_quantity))]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.sub_total))])])})),0)])]),t._v(" "),a("div",{staticClass:"row justify-content-end"},[a("div",{staticClass:"col-md-6"}),t._v(" "),a("div",{staticClass:"col-md-3"}),t._v(" "),a("div",{staticClass:"col-md-3"},[a("table",{staticClass:"table table-bordered"},[a("tbody",[a("tr",[t._m(4),t._v(" "),a("td",[t._v(t._s(parseInt(t.invoiceData.grand_total)))])]),t._v(" "),a("tr",[t._m(5),t._v(" "),a("td",[t._v(t._s(parseInt(t.invoiceData.total_paid)))])]),t._v(" "),a("tr",[t._m(6),t._v(" "),a("td",[t._v(t._s(parseInt(t.invoiceData.total_due)))])])])])])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[t._m(7),t._v(" "),a("div",[a("button",{staticClass:"btn btn-success btn-icon icon-left hidden-print",on:{click:function(e){return t.print()}}},[t._v("\n\t\t\t\t\t\t\t\tPrint Invoice\n\t\t\t\t\t\t\t\t"),a("i",{staticClass:"entypo-doc-text"})]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{"data-dismiss":"modal",type:"button"}},[t._v("Close")])])])])])]),t._v(" "),a("div",{attrs:{hidden:"",id:"print_div"}},[a("div",{staticStyle:{width:"75mm",border:"1px solid black"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("center",[a("h5",[a("b",[t._v("Dhaka Pharmacy")])]),t._v(" "),a("p",{staticStyle:{"font-size":"10px","line-height":"0.5px"}},[t._v("Joynal Tower,Joynal Market Dokkinkhan,Uttara, Dhaka-1230")]),t._v(" "),a("p",{staticStyle:{"font-size":"10px","line-height":"0.5px"}},[t._v("Mobile: 01646981922-25")])])],1),t._v(" "),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-7"},[a("p",{staticStyle:{"font-size":"10px","line-height":"0.5px"}},[a("b",[t._v("ID: "+t._s(t.invoiceData.invoice_code))])]),t._v(" "),a("p",{staticStyle:{"font-size":"10px","line-height":"0.5px"}},[a("b",[t._v("Name:")]),t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.invoiceData.pharmacy_name)+"\n\t\t\t\t\t\t\t\t")]),t._v(" "),a("p",{staticStyle:{"font-size":"10px","line-height":"0.5px"}},[a("b",[t._v("Phone:")]),t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.invoiceData.customer_phone)+"\n\t\t\t\t\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"col-md-5"},[a("p",{staticStyle:{"font-size":"10px","line-height":"0.5px"}},[a("b",[t._v("Date:")]),t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t._f("moment")(t.invoiceData.created_at,"DD/MM/YYYY"))+"\n\t\t\t\t\t\t\t\t")]),t._v(" "),a("p",{staticStyle:{"font-size":"10px","line-height":"0.5px"}},[a("b",[t._v("Time:")]),t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t._f("moment")(t.invoiceData.created_at,"h:ma"))+"\n\t\t\t\t\t\t\t\t")])])])])]),t._v(" "),a("div",[a("table",{staticClass:"table table-sm"},[t._m(8),t._v(" "),a("tbody",{staticStyle:{border:"none"}},t._l(t.invoiceData.order_medicine_infos,(function(e,i){return a("tr",[a("td",{staticStyle:{width:"1px","font-size":"10px"}},[t._v(t._s(++i))]),t._v(" "),a("td",{staticStyle:{width:"150px"}},[a("p",{staticStyle:{"font-size":"10px"}},[t._v(t._s(e.category+"-"+e.medicine_name))])]),t._v(" "),a("td",{staticStyle:{width:"20px","font-size":"10px"}},[t._v(t._s(e.medicine_quantity))]),t._v(" "),a("td",{staticStyle:{width:"30px","font-size":"10px"}},[t._v(t._s(e.discount_price?e.discount_price:e.price))]),t._v(" "),a("td",{staticStyle:{width:"30px","font-size":"10px"}},[t._v(t._s(parseFloat(e.medicine_quantity*(e.discount_price?e.discount_price:e.price)).toFixed(2)))])])})),0)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"}),t._v(" "),a("div",{staticClass:"col-md-2"}),t._v(" "),a("div",{staticClass:"col-md-7"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[t._m(9),t._v(" "),a("td",[a("p",{staticStyle:{"font-size":"10px"}},[t._v(t._s(parseFloat(t.invoiceData.grand_total).toFixed(2)))])])]),t._v(" "),a("tr",[t._m(10),t._v(" "),a("td",[a("p",{staticStyle:{"font-size":"10px"}},[t._v(t._s(parseFloat(t.invoiceData.discount).toFixed(2)))])])]),t._v(" "),a("tr",[t._m(11),t._v(" "),a("td",[a("p",{staticStyle:{"font-size":"10px"}},[t._v(t._s(parseFloat(t.invoiceData.total_paid).toFixed(2)))])])]),t._v(" "),a("tr",[t._m(12),t._v(" "),a("td",[a("p",{staticStyle:{"font-size":"10px"}},[t._v(t._s(parseFloat(t.invoiceData.total_due).toFixed(2)))])])])])])])])])]),t._v(" "),a("div",{staticClass:"modal fade in",attrs:{id:"viewModal"}},[a("div",{staticClass:"modal-dialog modal-lg"},[a("div",{staticClass:"modal-content"},[t._m(13),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{},[a("div",{staticClass:"row"},[t._m(14),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"info"},[a("h2",[t._v(t._s(t.invoiceData.invoice_code))]),t._v(" "),a("p",[t._v(t._s(t.invoiceData.pharmacy_name))]),t._v(" "),a("p",[t._v(t._s(t._f("moment")(t.invoiceData.created_at,"Do MMMM YYYY h:ma")))]),t._v(" "),a("p",[t._v(t._s(t.invoiceData.customer_name))]),t._v(" "),a("p",[t._v(t._s(t.invoiceData.customer_email))]),t._v(" "),a("p",[t._v(t._s(t.invoiceData.customer_phone))]),t._v(" "),a("p",[t._v(t._s(t.invoiceData.customer_address))])])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticStyle:{overflow:"auto"}},[a("table",{staticClass:"table table-bordered"},[a("thead",[a("tr",[t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t.settings.batch?a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("Batch")])]):t._e(),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22)])]),t._v(" "),a("tbody",t._l(t.invoiceData.order_medicine_infos,(function(e,i){return a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.category)+"\n\t\t\t\t\t\t\t\t\t\t\t\t"),a("b",[t._v(t._s(e.medicine_name))])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.price))]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.discount)+"%")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.discount_price))]),t._v(" "),t.settings.batch?a("td",{staticStyle:{"text-align":"center"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.batch,expression:"order.batch"}],staticClass:"form-control",on:{change:[function(a){var i=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(e,"batch",a.target.multiple?i:i[0])},function(a){return t.batchChange(i,e.batch)}]}},t._l(e.batches,(function(e){return a("option",{domProps:{value:e.batch}},[t._v(t._s(e.batch))])})),0)]):t._e(),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("span",[t._v(t._s(e.stock))])]),t._v(" "),a("td",{staticStyle:{"text-align":"center",width:"100px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.medicine_quantity,expression:"order.medicine_quantity"}],staticClass:"form-control",attrs:{min:"0",type:"number"},domProps:{value:e.medicine_quantity},on:{input:function(a){a.target.composing||t.$set(e,"medicine_quantity",a.target.value)}}})]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v(t._s((e.medicine_quantity*e.discount_price).toFixed(2)))]),t._v(" "),a("td",{staticStyle:{"text-allign":"center"}},[a("button",{staticClass:"btn btn-sm btn-success",on:{click:function(a){return t.submitMedicineInfo(e.id,e)}}},[a("i",{staticClass:"fa fa-check"})])])])})),0)])]),t._v(" "),a("div",{staticClass:"row justify-content-end"},[a("div",{staticClass:"col-md-6"}),t._v(" "),a("div",{staticClass:"col-md-3"}),t._v(" "),a("div",{staticClass:"col-md-3"},[a("table",{staticClass:"table table-bordered"},[a("tbody",[a("tr",[t._m(23),t._v(" "),a("td",[t._v(t._s(parseInt(t.invoiceData.grand_total)))])]),t._v(" "),a("tr",[t._m(24),t._v(" "),a("td",[t._v(t._s(parseInt(t.invoiceData.total_paid?t.invoiceData.total_paid:0)))])]),t._v(" "),a("tr",[t._m(25),t._v(" "),a("td",[t._v(t._s(parseInt(t.invoiceData.total_due)))])])])])])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{ref:"updateCloseBtn",staticClass:"btn btn-secondary",attrs:{"data-dismiss":"modal",type:"button"}},[t._v("Close")])])])])])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-heading"},[a("div",{staticClass:"panel-title"},[t._v("Orders List")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("#")]),t._v(" "),a("th",[t._v("Order Date")]),t._v(" "),a("th",[t._v("Pharmacy Name")]),t._v(" "),a("th",[t._v("Invoice")]),t._v(" "),a("th",[t._v("Total Price")]),t._v(" "),a("th",[t._v("Total Paid")]),t._v(" "),a("th",[t._v("Status")]),t._v(" "),a("th",{attrs:{width:"33%"}},[t._v("Action")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"clientlogo"}),t._v(" "),a("div",{staticClass:"info"},[a("h2",[t._v("Dhaka Pharmacy")]),t._v(" "),a("p",[t._v("hello@michaeltruong.ca")]),t._v(" "),a("p",[t._v("01646981921")]),t._v(" "),a("p",[t._v("alamin339.cp@gmail.com")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("Medicine")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("Price")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("Discount")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("Discount Price")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("Qty")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("Amount")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("strong",{staticClass:"text-black"},[t._v("Total:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("strong",{staticClass:"text-black"},[t._v("Paid:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("strong",{staticClass:"text-black"},[t._v("Due:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[t._v("\n\t\t\t\t\t\t\tSoftware Developed By\n\t\t\t\t\t\t\t"),a("a",{attrs:{href:"http://bizitbd.com",target:"_blank"}},[t._v("BizitBD")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticStyle:{"border-bottom":"1px solid black","border-top":"none","border-left":"none","border-right":"none"}},[a("th",{staticClass:"text-center",staticStyle:{"font-size":"10px"}},[t._v("Sl")]),t._v(" "),a("th",{staticClass:"text-center",staticStyle:{"font-size":"10px"}},[t._v("Item")]),t._v(" "),a("th",{staticClass:"text-center",staticStyle:{"font-size":"10px"}},[t._v("QTY")]),t._v(" "),a("th",{staticClass:"text-center",staticStyle:{"font-size":"10px"}},[t._v("Rate")]),t._v(" "),a("th",{staticClass:"text-center",staticStyle:{"font-size":"10px"}},[t._v("Amount")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("strong",{staticClass:"text-black",staticStyle:{"font-size":"10px"}},[t._v("Total:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("strong",{staticClass:"text-black",staticStyle:{"font-size":"10px"}},[t._v("Discount:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("strong",{staticClass:"text-black",staticStyle:{"font-size":"10px"}},[t._v("Paid:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("strong",{staticClass:"text-black",staticStyle:{"font-size":"10px"}},[t._v("Due:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("View Order Details")]),t._v(" "),a("button",{staticClass:"close",attrs:{"aria-label":"Close","data-dismiss":"modal",type:"button"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"clientlogo"}),t._v(" "),a("div",{staticClass:"info"},[a("h2",[t._v("Dhaka Pharmacy")]),t._v(" "),a("p",[t._v("hello@michaeltruong.ca")]),t._v(" "),a("p",[t._v("01646981921")]),t._v(" "),a("p",[t._v("alamin339.cp@gmail.com")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("Medicine")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("Price")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("Discount")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("Discount Price")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("Stock")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("Qty")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("Amount")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("Submit")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("strong",{staticClass:"text-black"},[t._v("Total:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("strong",{staticClass:"text-black"},[t._v("Paid:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("strong",{staticClass:"text-black"},[t._v("Due:")])])}],!1,null,"403c2b47",null).exports}}]);