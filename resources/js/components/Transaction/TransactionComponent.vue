<template>
	<div>
		<h3>Transaction</h3>
		<br />
		<div class="panel panel-primary">
			<div class="panel-heading">
				<div class="panel-title">
					<b>Transaction List</b>
				</div>
				<div class="panel-options">
					<button class="btn btn-blue btn-sm" data-target="#addTransaction" data-toggle="modal" v-if="permissions.includes('Add_Transaction')">+ Add</button>
				</div>
			</div>

			<div class="panel-heading">
				<div class="pull-left col-sm-1">
					<div class="form-group">
						<label class="control-label" for="entries" style="margin-top: 15px;">Show</label>

						<select @change="getTransaction()" class="form-control" style="position: absolute; top: 6px; left: 59px;" v-model="custom_row">
							<option v-for="row in select_row" v-text="row"></option>
						</select>
					</div>
				</div>
				<div class="pull-right">
					<label>
						<input @keyup="getTransaction()" aria-controls="DataTables_Table_2" class="form-control" placeholder="Search" style="margin-top: 10px; margin-left:-12px" type="search" v-model="search" />
					</label>
				</div>
			</div>
			<div style="overflow-x: auto;">
				<table class="table table-responsive table-bordered">
					<thead>
						<tr>
							<th class="text-center">
								<b>#</b>
							</th>
							<th class="text-center">
								<b>Date</b>
							</th>
							<th class="text-center">
								<b>TRX ID</b>
							</th>
							<th class="text-center">
								<b>Head</b>
							</th>
							<th class="text-center">
								<b>Info</b>
							</th>
							<th class="text-center">
								<b>Amount</b>
							</th>
							<th class="text-center">
								<b>Action</b>
							</th>
						</tr>
					</thead>

					<tbody>
						<tr :key="index" v-for="(data,index) in transactionData.data">
							<td class="text-center">{{ ++index }}</td>
							<td class="text-center">{{ data.date | moment("Do MMMM YYYY") }}</td>
							<td class="text-center">
								<b>{{ data.id }}</b>
							</td>
							<td class="text-center">{{ data.trx_type }}</td>
							<td class="text-center">{{ data.transaction_head.name}}</td>
							<td class="text-center">{{ data.amount }}Tk</td>
							<td class="text-center">
								<button @click="ViewTransaction(data.id, data)" class="btn btn-default btn-xs" data-target="#viewModal" data-toggle="modal" type="button" v-if="permissions.includes('View_Transaction')">
									<i class="fa fa-eye"></i>
								</button>
								<button @click="DeleteTransaction(data.id,index)" class="btn btn-red btn-xs" v-if="permissions.includes('Delete_Transaction')">
									<i class="fa fa-trash"></i>
								</button>
							</td>
						</tr>
					</tbody>
				</table>

				<pagination :data="transactionData" :limit="3" @pagination-change-page="getTransaction" style="margin-left:20px">
					<span slot="prev-nav">&lt; Previous</span>
					<span slot="next-nav">Next &gt;</span>
				</pagination>
			</div>
		</div>

		<!-- Print Div -->
		<div hidden id="printDiv">
			<div class="invoice">
				<div class="row">
					<div class="col-md-6">
						<div class="clientlogo"></div>
						<div class="info" style="color:black">
							<h4 style="color:black">Dhaka Pharmacy</h4>
							<p>Joynal Tower,Joynal Market Dokkinkhan</p>
							<p>Uttara, Dhaka-1230</p>
							<p>01646981922-25</p>
						</div>
						<!--End Info-->
					</div>
					<div class="col-md-6">
						<div class="info" style="color:black">
							<h4>
								<b>Id #{{ viewTransaction.id }}</b>
							</h4>
							<p>{{ viewTransaction.date | moment("Do MMMM YYYY") }}</p>
						</div>
						<!--End Info-->
					</div>
				</div>

				<hr class="margin" />

				<div class="row">
					<div class="col-sm-6 invoice-left" v-show="viewTransaction.details && viewTransaction.details.length>0">
						<h6 style="color:black">Customer Details</h6>
						<strong style="color:black">Name:</strong>
						<span style="color:black">
							{{ viewTransaction.patient &&
							(
							viewTransaction.patient.customer_details ?
							(
							viewTransaction.patient.customer_details.pharmacy_name ?
							viewTransaction.patient.customer_details.pharmacy_name :
							viewTransaction.patient.name
							) :
							viewTransaction.patient.name
							) }}
						</span>
						<br />
						<strong style="color:black">Phone:</strong>
						<span style="color:black">{{ viewTransaction.patient && viewTransaction.patient.phone }}</span>
						<br />
					</div>
				</div>

				<div class="margin"></div>

				<table class="table table-bordered" v-show="viewTransaction.details && viewTransaction.details.length>0">
					<thead>
						<tr>
							<th class="text-center" style="color:black">#</th>
							<th class="text-center" style="color:black">Invoice</th>
							<th class="text-center" style="color:black">Paid</th>
						</tr>
					</thead>

					<tbody>
						<tr v-for="(detail,index) in viewTransaction.details">
							<td class="text-center" style="color:black">{{ ++index }}</td>
							<td class="text-center" style="color:black">{{ detail.order.order_code }}</td>
							<td class="text-center" style="color:black">{{ detail.paying }}</td>
						</tr>
					</tbody>
				</table>
				<div class="row">
					<div class="col-sm-3 invoice-left"></div>
					<div class="col-sm-6"></div>
					<div class="col-sm-3 invoice-right">
						<table class="table table-bordered">
							<tbody>
								<tr>
									<td class="bg-light-2 text-right" style="color:black">
										<strong>Total:</strong>
									</td>
									<td class="bg-light-2 text-right" style="color:black">{{ viewTransaction.amount }}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="row" style="margin-top:35px">
					<div class="col-md-4 text-center">
						<p style="color:black">
							<b>Accounts</b>
						</p>
					</div>
					<div class="col-md-4 text-center">
						<p style="color:black">
							<b>Sales</b>
						</p>
					</div>
					<div class="col-md-4 text-center">
						<p style="color:black">
							<b>Prepared By</b>
						</p>
					</div>
				</div>
				<div class>
					<p style="color:black">Developed By BizIt BD</p>
				</div>
			</div>
		</div>
		<!-- Print Div -->
		<!-- VIEW MODAL -->
		<div class="modal fade in" id="viewModal">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">View Transaction</h5>
						<button aria-label="Close" class="close" data-dismiss="modal" type="button">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>

					<div class="modal-body">
						<div class="invoice">
							<div class="row">
								<div class="col-md-6">
									<div class="clientlogo"></div>
									<div class="info" style="color:white">
										<h4>Dhaka Pharmacy</h4>
										<p>Joynal Tower,Joynal Market Dokkinkhan</p>
										<p>Uttara, Dhaka-1230</p>
										<p>01646981922-25</p>
									</div>
									<!--End Info-->
								</div>
								<div class="col-md-6">
									<div class="info">
										<h4>
											<b>Id #{{ viewTransaction.id }}</b>
										</h4>
										<p style="color:white">{{ viewTransaction.date | moment("Do MMMM YYYY") }}</p>
									</div>
									<!--End Info-->
								</div>
							</div>

							<hr class="margin" />

							<div class="row">
								<div class="col-sm-6 invoice-left" v-show="viewTransaction.details && viewTransaction.details.length>0">
									<h4>Customer Details</h4>
									<strong>Name:</strong>
									<span style="color:white">
										{{ viewTransaction.patient &&
										(
										viewTransaction.patient.customer_details ?
										(
										viewTransaction.patient.customer_details.pharmacy_name ?
										viewTransaction.patient.customer_details.pharmacy_name :
										viewTransaction.patient.name
										) :
										viewTransaction.patient.name
										) }}
									</span>
									<br />
									<strong>Phone:</strong>
									<span style="color:white">{{ viewTransaction.patient && viewTransaction.patient.phone }}</span>
									<br />
								</div>
							</div>

							<div class="margin"></div>

							<table class="table table-bordered" v-show="viewTransaction.details && viewTransaction.details.length>0">
								<thead>
									<tr>
										<th class="text-center">#</th>
										<th class="text-center">Invoice</th>
										<th class="text-center">Paid</th>
									</tr>
								</thead>

								<tbody>
									<tr v-for="(detail,index) in viewTransaction.details">
										<td class="text-center">{{ ++index }}</td>
										<td class="text-center">{{ detail.order.order_code }}</td>
										<td class="text-center">{{ detail.paying }}</td>
									</tr>
								</tbody>
							</table>
							<div class="row">
								<div class="col-sm-3 invoice-left"></div>
								<div class="col-sm-6"></div>
								<div class="col-sm-3 invoice-right">
									<table class="table table-bordered">
										<tbody>
											<tr>
												<td class="bg-light-2 text-right" style="color:white">
													<strong>Total:</strong>
												</td>
												<td class="bg-light-2 text-right" style="color:white">{{ viewTransaction.amount }}</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<!-- <div class="row" style="margin-top:35px">
								<div class="col-md-4 text-center">
									<p style="color:white">
										<b>Accounts</b>
									</p>
								</div>
								<div class="col-md-4 text-center">
									<p style="color:white">
										<b>Sales</b>
									</p>
								</div>
								<div class="col-md-4 text-center">
									<p style="color:white">
										<b>Prepared By</b>
									</p>
								</div>
							</div>-->
							<div class>
								<p style="color:white">Developed By BizIt BD</p>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button @click="print()" class="btn btn-success btn-icon icon-left hidden-print">
							Print Details
							<i class="entypo-doc-text"></i>
						</button>
						<button class="btn btn-secondary" data-dismiss="modal" ref="updateCloseBtn" type="button">Close</button>
					</div>
				</div>
			</div>
		</div>
		<!-- VIEW MODAL -->

		<!-- Transaction MODAL -->
		<div class="modal fade in" id="addTransaction">
			<div class="modal-dialog" style="width:80%">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Transaction</h5>
						<button aria-label="Close" class="close" data-dismiss="modal" type="button">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form @submit.prevent="submitTransaction()">
						<div class="modal-body">
							<div class="row">
								<div class="col-md-12">
									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title">
												<a data-parent="#accordion-test-2" data-toggle="collapse" href="#baseInfo">Basic Information</a>
											</h4>
										</div>
										<div class="panel-collapse collapse in" id="baseInfo">
											<div class="panel-body">
												<div class="col-md-6">
													<div class="form-group">
														<label>Date</label>
														<input :value="new Date() | moment('dddd, MMMM Do YYYY')" class="form-control" disabled />
													</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<label>By</label>
														<input :value="seller.name" class="form-control" disabled />
													</div>
												</div>
												<!-- <div class="col-md-6">
													<div class="form-group">
														<label>Customer</label>
														<model-select :options="customers" @input="CustomerInvoices()" placeholder="Select Customer" v-model="addTransaction.patient_id"></model-select>
													</div>
												</div>-->
												<div class="col-md-12" v-show="showInvoiceList">
													<div class="form-group">
														<label for="dues">Invoices</label>
														<input @keyup="searchInvoice" class="form-control" type="text" v-model="invoiceSearch" />

														<li :class="invoiceList.length>0 && invoiceSearch.length>0 ? 'open' : ''" class="notifications dropdown" style="list-style-type:none;">
															<ul class="dropdown-menu">
																<li>
																	<ul class="dropdown-menu-list scroller" style="overflow-y: scroll; outline: none; max-height:130px; width:380px" tabindex="5002">
																		<li style="margin-left:10px;margin-top:5px" v-for="data in invoiceList">
																			<a @click.prevent="selectInvoice(data)" href="javascript:void(0)">
																				<span class="line">
																					<strong style="color:black">Order: {{ data.order_code }}</strong>
																					<br />
																					<b style="color:blue">Total: {{ data.total_price }}</b>
																				</span>
																				<span>
																					<b style="color:blue">Due: {{ data.total_due }}</b>
																				</span>
																			</a>
																		</li>
																	</ul>
																</li>
															</ul>
														</li>
													</div>
												</div>
												<div class="col-md-12" v-show="selectedInvoice.length>0">
													<table class="table table-bordered">
														<thead>
															<th class="text-center">SL</th>
															<th class="text-center">Invoice</th>
															<th class="text-center">Total</th>
															<th class="text-center">Due</th>
															<th class="text-center" style="width:20%">Paying</th>
														</thead>
														<tbody>
															<tr v-for="(invoice,index) in selectedInvoice">
																<td class="text-center">{{ ++index }}</td>
																<td class="text-center">{{ invoice.code }}</td>
																<td class="text-center">{{ invoice.total }}</td>
																<td class="text-center">{{ invoice.due }}</td>
																<td class="text-center">
																	<input @keyup="calcTotal()" class="form-control" type="number" v-model="invoice.paying" />
																</td>
															</tr>
														</tbody>
													</table>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Payment Method</label>
														<model-select :options="payment_methods" placeholder="Select Payment Method" v-model="addTransaction.type_id"></model-select>
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Account</label>
														<model-select :options="accounts" placeholder="Select Account" v-model="addTransaction.account_id"></model-select>
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Transaction Info</label>
														<br />
														<input id="paying" name="trx_type" type="radio" v-model="addTransaction.trx_type" value="PAYING" />
														<label for="paying">PAYING</label>
														<input id="receiving" name="trx_type" type="radio" v-model="addTransaction.trx_type" value="RECEIVING" />
														<label for="receiving">RECEIVING</label>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title">
												<a data-parent="#accordion-test-2" data-toggle="collapse" href="#itemSelect">Transaction Details</a>
											</h4>
										</div>
										<div class="panel-collapse collapse" id="itemSelect">
											<div class="panel-body">
												<div class="col-md-6">
													<div class="form-group">
														<label for="amount">Transaction Head</label>
														<model-select :options="heads" placeholder="Select Transaction Head" v-model="addTransaction.head_id"></model-select>
													</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<label for="amount">Amount</label>
														<input class="form-control" type="number" v-model="addTransaction.amount" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="modal-footer">
							<button class="btn btn-secondary" data-dismiss="modal" ref="transactionCloseBtn" type="button">Close</button>
							<button class="btn btn-success">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- Transaction MODAL -->
	</div>
</template>
<script>
import { ModelSelect } from "vue-search-select";
export default {
	components: {
		ModelSelect,
	},
	name: "TransactionComponent",
	data() {
		return {
			transactionData: {},
			search: "",
			custom_row: 10,
			seller: "",
			select_row: [10, 20, 30, 40, 50],
			viewTransaction: {
				// date: "",
				// products: {},
				// suppliers: {},
			},
			selectedInvoice: [],
			invoiceList: {},
			allInvoiceList: {},
			invoiceSearch: "",
			showInvoiceList: false,
			addTransaction: {
				type_id: "",
				account_id: "",
				trx_type: "",
				amount: 0,
				head_id: "",
				patient_id: "",
				invoices: {},
			},
			payment_methods: [],
			accounts: [],
			customers: [],
			heads: [],
			settings: "",
		};
	},
	methods: {
		openModal: function (modalId) {
			$(`#${modalId}`).modal("show");
		},
		ViewTransaction: function (id, data) {
			const _this = this;
			// _this.openModal("viewModal");
			// axios.get(base_path + "stock/" + id).then((response) => {
			// 	_this.viewStock = response.data;
			// });
			_this.viewTransaction = data;
		},
		getTransaction: function (page = 1, custom_row = 10) {
			const _this = this;
			const main_url =
				base_path +
				"transaction?q=" +
				_this.search +
				"&page=" +
				page +
				"&row=" +
				_this.custom_row +
				"&search=" +
				_this.search;
			axios
				.get(main_url)
				.then((response) => {
					_this.transactionData = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		DeleteTransaction: function (id, index) {
			const _this = this;
			this.$swal({
				title: "Are you sure?",
				text: "You won't be able to revert this!",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, delete it!",
			}).then((result) => {
				if (result.value) {
					axios
						.delete(base_path + "transaction/" + id)
						.then((response) => {
							if (response.data.status === 200) {
								_this.getStock();
								_this.$swal("Deleted!", response.data.message, "success");
							}
							if (response.data.status === 400) {
								_this.$swal("Opps", "Something Went Wrong", "warning");
							}
						})
						.catch((error) => {
							console.log(error);
						});
				}
			});
		},
		print() {
			this.$htmlToPaper("printDiv");
		},
		getAccounts: function () {
			const self = this;
			axios
				.get(base_path + "allActiveAccount")
				.then((response) => {
					self.accounts = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		getTransactionHead: function () {
			const self = this;
			axios
				.get(base_path + "allActiveTransactionHead")
				.then((response) => {
					self.heads = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		getCustomer: function () {
			const self = this;
			axios
				.get(base_path + "allActiveFrontCustomer")
				.then((response) => {
					self.customers = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		getPaymentMethod: function () {
			const self = this;
			axios
				.get(base_path + "allPaymentMethod")
				.then((response) => {
					self.payment_methods = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},

		submitTransaction: function () {
			const self = this;
			self.addTransaction.invoices = self.selectedInvoice;
			self.validateSubmit();
		},
		validateSubmit: function () {
			const self = this;
			self.validate = 0;
			if (self.addTransaction.amount <= 0) {
				self.validate++;
				self.$toastr.warning("We cannot proceed without amount", "Sorry!", {
					timeOut: 5000,
				});
			}
			if (!self.addTransaction.trx_type) {
				self.validate++;
				self.$toastr.warning(
					"We can not proceed without transaction type",
					"Sorry!",
					{
						timeOut: 5000,
					}
				);
			}
			if (self.validate == 0) {
				self.AddNewTransaction();
			}
		},
		AddNewTransaction: function () {
			const self = this;
			axios
				.post(base_path + "transaction", self.addTransaction)
				.then((response) => {
					self.$toastr.success(response.data.message, "Transaction", {
						timeOut: 5000,
					});
					self.getTransaction();
					const elem = this.$refs.transactionCloseBtn;
					elem.click();
				})
				.catch((error) => {
					console.log(error);
				});
		},
		CustomerInvoices: function () {
			const self = this;
			self.showInvoiceList = true;
			self.addTransaction.trx_type = "RECEIVING";
			self.selectedInvoice = [];
			axios
				.get(
					base_path + "customer_wise_invoice/" + self.addTransaction.patient_id
				)
				.then((response) => {
					self.allInvoiceList = response.data;
					self.invoiceList = self.allInvoiceList;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		searchInvoice: function () {
			const self = this;
			let filter = [];
			self.invoiceList = self.allInvoiceList;
			filter = self.invoiceList.filter((element) => {
				return element.order_code.includes(self.invoiceSearch);
			});
			self.invoiceList = filter;
		},
		selectInvoice: function (data) {
			const self = this;
			self.invoiceSearch = "";
			let invoice = {
				code: data.order_code,
				id: data.id,
				due: data.total_due,
				total: data.total_price,
				paying: data.total_due,
			};
			self.selectedInvoice.push(invoice);
		},
		calcTotal: function () {
			const self = this;
			self.addTransaction.amount = 0;
			self.selectedInvoice.map((x) => {
				self.addTransaction.amount += Number(x.paying);
			});
		},
		getSeller: function () {
			const self = this;
			axios
				.get(base_path + "sellerDetails")
				.then((response) => {
					self.seller = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
	created() {
		this.getPaymentMethod();
		this.getAccounts();
		this.getCustomer();
		this.getTransactionHead();
		this.getSeller();
		this.getTransaction();
		this.getUserPermissions();
	},
};
</script>
<style>
.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td {
	background-color: #004a88 !important;
}
th {
	color: white !important;
	font-weight: 600;
}
td {
	color: white;
}
li.notifications.dropdown::marker {
	display: none !important;
}
.panel-default {
	border-style: dashed;
	border: 2px dashed white;
}
</style>
