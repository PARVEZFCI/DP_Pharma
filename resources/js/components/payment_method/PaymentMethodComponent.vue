<template>
	<div>
		<h3>Payment Method List</h3>
		<br />

		<div class="panel panel-primary">
			<div class="panel-heading">
				<div class="panel-title">Payment Method List</div>
				<div class="panel-options" style="padding: 7px 15px;">
					<button @click="openModal('addModal')" class="btn btn-blue btn-sm" type="button" v-if="permissions.includes('Add_Payment_Method')">
						<i class="fa fa-plus-circle"></i>Add
					</button>
				</div>
			</div>

			<div class="panel-heading" style="padding: 18px 0px 3px;">
				<div class="container">
					<div class="row">
						<div class="col-sm-1">
							<div class="form-group">
								<label class="control-label">Show</label>
								<select @change="getPaymentMethod" class="form-control" v-model="customRow">
									<option v-for="row in selectRow" v-text="row"></option>
								</select>
							</div>
						</div>
						<div class="col-md-2"></div>
						<div class="col-md-5">
							<input @keyup="getPaymentMethod()" aria-controls="DataTables_Table_2" class="form-control search-box" placeholder="Search according to category name & code" type="search" v-model="search" />
						</div>
					</div>
				</div>
			</div>

			<!-- Category List -->
			<table class="table table-bordered responsive">
				<thead>
					<tr>
						<th class="text-center">#</th>
						<th class="text-center">Name</th>
						<th class="text-center">Details</th>
						<th class="text-center">Status</th>
						<th class="text-center" width="33%">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(data, index) in allPaymentMethod.data">
						<td class="text-center">{{ ++index }}</td>
						<td class="text-center">{{ data.name }}</td>
						<td class="text-center">{{ data.details }}</td>
						<td class="text-center">
							<span :class="data.status == 1 ? 'badge-success' : 'badge-warning'" class="badge">{{ data.status == 1 ? 'Active' : 'Inactive'}}</span>
						</td>
						<td class="text-center">
							<button :class="data.status == 1 ? 'btn-success' : 'btn-warning'" @click="changeStatus(data.id)" class="btn btn-sm" type="button" v-if="permissions.includes('Status_Payment_Method')">
								<i class="fas fa-sync"></i>
							</button>
							<button @click="editPaymentMethod(data.id, data)" class="btn btn-sm btn-info" type="button" v-if="permissions.includes('Edit_Payment_Method')">
								<i class="fas fa-pen"></i>
							</button>
							<button @click="deletePaymentMethod(data.id, index)" class="btn btn-sm btn-danger" type="button" v-if="permissions.includes('Delete_Payment_Method')">
								<i class="fas fa-trash"></i>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Pagination -->
		<div class="text-center">
			<pagination :data="allPaymentMethod" @pagination-change-page="getPaymentMethod" style="margin-left: 20px">
				<span slot="prev-nav">&lt;Previous</span>
				<span slot="next-nav">Next &gt;</span>
			</pagination>
		</div>

		<!-- Category Add Modal -->
		<modal :adaptive="true" :clickToClose="false" :draggable="true" :limit="3" :resizable="true" height="auto" name="addModal">
			<div class="modal-header">
				<button @click="closeModal('addModal')" aria-hidden="true" class="close" data-dismiss="modal" type="button">&times;</button>
				<h4 class="modal-title">
					<i class="entypo-plus-circled"></i>Add Payment Method
				</h4>
			</div>
			<div class="modal-body">
				<form @submit.prevent="addNewPaymentMethod">
					<div class="form-group">
						<label for="name">Name</label>
						<input class="form-control" id="name" placeholder="Enter Payment Method Name" type="text" v-model="addPaymentMethod.name" />
						<span class="text-danger" v-if="allErrors.name" v-text="allErrors.name[0]"></span>
					</div>
					<div class="form-group">
						<label for="details">Details</label>
						<textarea class="form-control" id="details" placeholder="Enter Payment Method Details" rows="3" v-model="addPaymentMethod.details"></textarea>
					</div>
					<div class="modal-footer">
						<button @click="closeModal('addModal')" class="btn btn-primary" data-dismiss="modal" type="button">Close</button>
						<button class="btn btn-success">Save</button>
					</div>
				</form>
			</div>
		</modal>
		<!-- End Category Add Modal -->

		<!-- Category Edit Modal -->
		<modal :adaptive="true" :clickToClose="false" :draggable="true" :limit="3" :resizable="true" height="auto" name="editModal">
			<div class="modal-header">
				<button @click="closeModal('editModal')" aria-hidden="true" class="close" data-dismiss="modal" type="button">&times;</button>
				<h4 class="modal-title">
					<i class="entypo-plus-circled"></i>
					Edit {{EditPaymentMethod.name}} Category
				</h4>
			</div>
			<div class="modal-body">
				<form @submit.prevent="updatePaymentMethod( EditPaymentMethod.id )">
					<div class="form-group">
						<label for="name">Name</label>
						<input class="form-control" placeholder="Enter Payment Method Name" type="text" v-model="EditPaymentMethod.name" />
						<span class="text-danger" v-if="allErrors.name" v-text="allErrors.name[0]"></span>
					</div>
					<div class="form-group">
						<label for="details">Details</label>
						<textarea class="form-control" placeholder="Enter Payment Method Details" rows="5" v-model="EditPaymentMethod.details"></textarea>
					</div>
					<div class="modal-footer">
						<button @click="closeModal('editModal')" class="btn btn-primary" data-dismiss="modal" type="button">Close</button>
						<button class="btn btn-success">Save</button>
					</div>
				</form>
			</div>
		</modal>
		<!-- End Category Edit Modal -->
	</div>
</template>

<script >
export default {
	name: "PaymentMethodComponent",
	data() {
		return {
			addPaymentMethod: {
				name: "",
				details: "",
			},
			allPaymentMethod: {},
			EditPaymentMethod: {},
			allErrors: [],
			search: "",
			customRow: 10,
			selectRow: [10, 20, 30, 40, 50],
		};
	},
	methods: {
		addNewPaymentMethod: function () {
			const _this = this;
			axios
				.post(base_path + "payment_method", _this.addPaymentMethod)
				.then((response) => {
					if (response.data.code == 201) {
						this.$toastr.success(response.data.message, "Payment Method", {
							timeout: 5000,
						});
						_this.getPaymentMethod();
						_this.closeModal("addModal");
						_this.clearForm(_this.addPaymentMethod);
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

		getPaymentMethod: function (page = 1, customRow = 10) {
			const _this = this;
			const url =
				base_path +
				"payment_method?q=" +
				_this.search +
				"&page=" +
				page +
				"&row=" +
				_this.customRow;

			axios
				.get(url)
				.then((response) => {
					_this.allPaymentMethod = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},

		editPaymentMethod: function (id, paymentMethodData) {
			const _this = this;
			_this.openModal("editModal");
			_this.EditPaymentMethod = paymentMethodData;
		},

		updatePaymentMethod: function (id) {
			const _this = this;
			axios
				.put(base_path + "payment_method/" + id, _this.EditPaymentMethod)
				.then((response) => {
					if (response.data.code == 201) {
						this.$toastr.success(response.data.message, "Edit Payment Method", {
							timeout: 5000,
						});
						_this.closeModal("editModal");
						_this.clearForm(_this.editPaymentMethod);
						_this.getPaymentMethod();
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

		deletePaymentMethod: function (id, index) {
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
						.delete(base_path + "payment_method/" + id)
						.then((response) => {
							if (response.status == 200) {
								this.$swal("Deleted!", response.data.message, "success");
							}
							_this.getPaymentMethod();
						})
						.catch((error) => {
							console.log(error);
						});
				}
			});
		},

		changeStatus: function (id) {
			const _this = this;
			axios
				.get(base_path + "payment_method/status/" + id)
				.then((response) => {
					_this.getPaymentMethod();
					if (response.data.code === 200) {
						_this.$toastr.warning(
							"This Payment Method is inactive successfully!",
							"Payment Method",
							{
								timeOut: 5000,
							}
						);
					}
					if (response.data.code === 201) {
						_this.$toastr.success(
							"This Payment Method is active successfully!",
							"Payment Method",
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
		this.getPaymentMethod();
	},
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
	color: #fff;
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
