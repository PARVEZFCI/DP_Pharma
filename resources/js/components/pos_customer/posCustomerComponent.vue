<template>
	<div>
		<h3>POS Customer List</h3>
		<br />

		<div class="panel panel-primary">
			<div class="panel-heading">
				<div class="panel-title">POS Customer List</div>
				<div class="panel-options" style="padding: 7px 15px;">
					<button @click="openModal('addModal')" class="btn btn-blue btn-sm" type="button" v-if="permissions.includes('Add_Customer')">
						<i class="entypo-plus-circled"></i>Add
					</button>
				</div>
			</div>

			<div class="panel-heading" style="padding: 6px 0px 3px;">
				<div class="container">
					<div class="row">
						<div class="col-sm-1">
							<div class="form-group">
								<label class="control-label">Show</label>
								<select class="form-control">
									<option v-for="row in selectRow" v-text="row"></option>
								</select>
							</div>
						</div>
						<div class="col-md-2"></div>
						<div class="col-md-5">
							<input @keyup="getPosCustomer()" aria-controls="DataTables_Table_2" class="form-control search-box" placeholder="Search according to generic name" type="search" v-model="search" />
						</div>
					</div>
				</div>
			</div>

			<!-- Generic List -->
			<table class="table table-bordered responsive">
				<thead>
					<tr>
						<th class="text-center">#</th>
						<th class="text-center">Name</th>
						<th class="text-center">Phone</th>
						<th class="text-center">Sex</th>
						<th class="text-center">Due</th>
						<th class="text-center">Status</th>
						<th class="text-center" width="33%">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(customer, index) in allPosCustomer.data">
						<td class="text-center">{{ ++index }}</td>
						<td class="text-center">{{ customer.name }}</td>
						<td class="text-center">{{ customer.phone }}</td>
						<td class="text-center">{{ customer.sex=='male' ? 'Male' : 'Female' }}</td>
						<td class="text-center">{{ customer.balance }}</td>

						<td class="text-center">
							<span :class="customer.status == 1 ? 'badge-success' : 'badge-warning'" class="badge">{{ customer.status == 1 ? 'Active' : 'Inactive'}}</span>
						</td>
						<td class="text-center">
							<button :class="customer.balance <=0 ? 'hide' :''" @click="duepayment(customer.id, customer)" class="btn btn-sm btn-warning" type="button" v-if="permissions.includes('Edit_Customer')">
								<i class="fas fa-dollar-sign"></i>
							</button>
							<button :class="customer.status == 1 ? 'btn-success' : 'btn-warning'" @click="changeStatus(customer.id)" class="btn btn-sm" type="button" v-if="permissions.includes('Status_Customer')">
								<i class="fas fa-sync"></i>
							</button>
							<button @click="editCustomer(customer.id, customer)" class="btn btn-sm btn-info" type="button" v-if="permissions.includes('Edit_Customer')">
								<i class="fas fa-pen"></i>
							</button>
							<button @click="deleteCustomer(customer.id, index)" class="btn btn-sm btn-danger" type="button" v-if="permissions.includes('Delete_Customer')">
								<i class="fas fa-trash"></i>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Pagination -->
		<div class="text-center">
			<pagination :data="allPosCustomer" @pagination-change-page="getPosCustomer" style="margin-left: 20px">
				<span slot="prev-nav">&lt; Previous</span>
				<span slot="next-nav">Next &gt;</span>
			</pagination>
		</div>

		<!-- Generic Add Modal -->
		<modal :adaptive="true" :clickToClose="false" :draggable="true" :limit="3" :resizable="true" height="auto" name="addModal">
			<div class="modal-header">
				<button @click="closeModal('addModal')" aria-hidden="true" class="close" data-dismiss="modal" type="button">&times;</button>
				<h4 class="modal-title">
					<i class="entypo-plus-circled"></i>Add POS Customer
				</h4>
			</div>
			<div class="modal-body">
				<form @submit.prevent="addNewPosCustomer()">
					<div class="form-group">
						<label for>Name</label>
						<input class="form-control" id="name" placeholder="Enter Customer Name" type="text" v-model="addPosCustomer.name" />
						<span class="text-danger" v-if="allErrors.name" v-text="allErrors.name[0]"></span>
					</div>
					<div class="form-group">
						<label for>Phone</label>
						<input class="form-control" id="phone" placeholder="Enter Customer Phone" type="text" v-model="addPosCustomer.phone" />
						<span class="text-danger" v-if="allErrors.phone" v-text="allErrors.phone[0]"></span>
					</div>
					<div class="form-group">
						<label for>Sex</label>
						<select class="form-control" v-model="addPosCustomer.sex">
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
						<span class="text-danger" v-if="allErrors.sex" v-text="allErrors.sex[0]"></span>
					</div>
					<div class="modal-footer">
						<button @click="closeModal('addModal')" class="btn btn-primary" data-dismiss="modal" type="button">Close</button>
						<button class="btn btn-success">Save</button>
					</div>
				</form>
			</div>
		</modal>
		<!-- End Generic Add Modal -->

		<!-- Generic Edit Modal -->
		<modal :adaptive="true" :clickToClose="false" :draggable="true" :limit="3" :resizable="true" height="auto" name="editModal">
			<div class="modal-header">
				<button @click="closeModal('editModal')" aria-hidden="true" class="close" data-dismiss="modal" type="button">&times;</button>
				<h4 class="modal-title">
					<i class="entypo-plus-circled"></i>
					Edi {{ editCustomerData.name }} Generic
				</h4>
			</div>
			<div class="modal-body">
				<form @submit.prevent="updatePosCustomer( editCustomerData.id )">
					<div class="form-group">
						<label for>Name</label>
						<input class="form-control" placeholder="Enter Customer Name" type="text" v-model="editCustomerData.name" />
						<span class="text-danger"></span>
					</div>
					<div class="form-group">
						<label for>Phone</label>
						<input class="form-control" placeholder="Enter Customer Phone" type="text" v-model="editCustomerData.phone" />
						<span class="text-danger"></span>
					</div>
					<div class="form-group">
						<label for>Sex</label>
						<select class="form-control" v-model="editCustomerData.sex">
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
						<span class="text-danger"></span>
					</div>

					<div class="modal-footer">
						<button @click="closeModal('editModal')" class="btn btn-primary" data-dismiss="modal" type="button">Close</button>
						<button class="btn btn-success">Save</button>
					</div>
				</form>
			</div>
		</modal>
		
		<!-- End Generic Edit Modal -->  

		<!-- Due Payment start --->
		<modal :adaptive="true" :clickToClose="false" :draggable="true" :limit="3" :resizable="true" height="auto" name="duepaymentModel">
			<div class="modal-header">
				<button @click="closeModal('duepaymentModel')" aria-hidden="true" class="close" data-dismiss="modal" type="button">&times;</button>
				<h4 class="modal-title">
					<i class="entypo-plus-circled"></i>
					Due Payment {{ editCustomerData.name }}
				</h4>
			</div>
			<div class="modal-body">
				<form @submit.prevent="DuePayment( editCustomerData.id )">
					<div class="form-group">
						<label for>Due</label>
						<input class="form-control" placeholder="Enter Customer Name" type="text" v-model="editCustomerData.balance" readonly />
						<span class="text-danger"></span>
					</div>
					<div class="form-group">
						<label for>Payment</label>
						<input class="form-control" placeholder="Enter Payment Amount" type="text" v-model="payment" />
						<span class="text-danger"></span>
					</div>
					<div class="form-group">
						<label>Account</label>
						<model-select :options="accounts" placeholder="Select Account" v-model="account_id"></model-select>
					
					</div>
												
					<div class="modal-footer">
						<button @click="closeModal('duepaymentModel')" class="btn btn-primary" data-dismiss="modal" type="button">Close</button>
						<button class="btn btn-success">Save</button>
					</div>
				</form>
			</div>
		</modal>
        <!-- ENd Deu Payment Model  -->
	</div>
</template>

<script >

import { ModelSelect } from "vue-search-select";

export default {
	components: {
		ModelSelect,
	},
	name: "posCustomerComponent",
	data() {
		return {
			addPosCustomer: {
				name: "",
				phone: "",
				sex: "",
			},
			allPosCustomer: {},
			editCustomerData: {},
			allErrors: [],
			payment: 0,
			search: "",
			customRow: 10,
			selectRow: [10, 20, 30, 40, 50],
			accounts: [],
			account_id:"",
		};
	},
	methods: {
		addNewPosCustomer: function () {
			const _this = this;
			axios
				.post(base_path + "pos_customer", _this.addPosCustomer)
				.then((response) => {
					if (response.data.code == 201) {
						this.$toastr.success(response.data.message, "Pos Customer", {
							timeout: 5000,
						});
						_this.getPosCustomer();
						_this.closeModal("addModal");
						_this.clearForm(_this.addPosCustomer);
					}
				})
				.catch((error) => {
					if (error.response.status === 422) {
						_this.allErrors = error.response.data.errors;
					} else {
						_this.$toastr.warning("Application error", "Sorry", {
							timeOut: 5000,
						});
					}
				});
		},

		getPosCustomer: function (page = 1, customRow = 10) {
			const _this = this;
			const url =
				base_path +
				"pos_customer?q=" +
				_this.search +
				"&page=" +
				page +
				"&row=" +
				_this.customRow;

			axios
				.get(url)
				.then((response) => {
					_this.allPosCustomer = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},

		changeStatus: function (id) {
			const _this = this;
			axios
				.get(base_path + "pos_customer/status/" + id)
				.then((response) => {
					_this.getPosCustomer();
					if (response.data.code === 200) {
						_this.$toastr.warning(
							"This Customer is inactive successfully!",
							"Customer",
							{
								timeOut: 5000,
							}
						);
					}
					if (response.data.code === 201) {
						_this.$toastr.success(
							"This Customer is active successfully!",
							"Customer",
							{
								timeOut: 5000,
							}
						);
					}
				})
				.catch((error) => {
					console.log(error);
				});
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

		duepayment: function (id, data) {
			const _this = this;
			_this.openModal("duepaymentModel");
			_this.editCustomerData = data;
		},


		editCustomer: function (id, data) {
			const _this = this;
			_this.openModal("editModal");
			_this.editCustomerData = data;
		},
		DuePayment:function(id){
			const _this = this;
			let payment = { payment: _this.payment, id: id,account_id: _this.account_id };
			// console.log(payment);
            axios 
			.post(base_path + "sell/customerpayment", payment)
			.then((response)=>{
				if(response.data.code==201){
					this.$toastr.success(response.data.message,"Pos Customer",{
						timeout:5000,
					});
					_this.closeModal("duepaymentModel");
					_this.clearForm(_this.editCustomerData);
					_this.getPosCustomer();
				}else{
					this.$toastr.warning("Something went Wrong","Sorry",{
						timeout:5000,
					});
				}
			})
			.catch((error)=>{
				if(error.response.status===422){
					_this.allErrors = error.response.data.errors;

				}else{
					_this.$toastr.error("Application error ","Sorry");
				}
			});
		},

		updatePosCustomer: function (id) {
			const _this = this;
			axios
				.put(base_path + "pos_customer/" + id, _this.editCustomerData)
				.then((response) => {
					if (response.data.code == 201) {
						this.$toastr.success(response.data.message, "Pos Customer", {
							timeout: 5000,
						});
						_this.closeModal("editModal");
						_this.clearForm(_this.editCustomerData);
						_this.getPosCustomer();
					} else {
						this.$toastr.warning("Something went wrong", "Sorry", {
							timeout: 5000,
						});
					}
				})
				.catch((error) => {
					if (error.response.status === 422) {
						_this.allErrors = error.response.data.errors;
					} else {
						_this.$toastr.error("Application error", "Sorry", {
							timeOut: 5000,
						});
					}
				});
		},

		deleteCustomer: function (id, index) {
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
						.delete(base_path + "pos_customer/" + id)
						.then((response) => {
							if (response.status == 200) {
								this.$swal("Deleted!", response.data.message, "success");
							}
							_this.getPosCustomer();
						})
						.catch((error) => {
							console.log(error);
						});
				}
			});
		},

		openModal: function (modal) {
			this.$modal.show(modal);
		},

		closeModal: function (modal) {
			this.$modal.hide(modal);
		},

		clearForm: function (form) {
			const _this = this;
			_this.allErrors = [];
			Object.keys(form).forEach(function (key) {
				form[key] = "";
			});
		},
	},
	created: function () {
		this.getUserPermissions();
		this.getPosCustomer();
	},
	mounted(){
		this.getAccounts();
	}
};
</script>
<style scoped>
label {
	margin-right: 15px;
}

.form-control {
	border: 1px solid #c8c1c1;
}

table tr {
	text-align: center;
}

table tr th {
	color: #000000d4;
	font-weight: 700;
	text-align: center;
}

.search-box {
	height: 40px;
	margin: 12px 0px 8px;
}

::placeholder {
	color: #4e5157;
	opacity: 1;
}

:-ms-input-placeholder {
	color: #4e5157;
}

::-ms-input-placeholder {
	color: #4e5157;
}
</style>
