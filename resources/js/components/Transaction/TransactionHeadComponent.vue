<template>
	<div>
		<h3>Transaction Heads</h3>
		<br />

		<div class="panel panel-primary">
			<div class="panel-heading">
				<div class="panel-title">Transaction Head List</div>
				<div class="panel-options" style="padding: 7px 15px;">
					<button @click="openModal('addModal')" class="btn btn-blue btn-sm" type="button" v-if="permissions.includes('Add_Transaction_Head')">
						<i class="entypo-plus-circled"></i>Add
					</button>
				</div>
			</div>

			<div class="panel-heading" style="padding: 18px 0px 3px;">
				<div class="container">
					<div class="row">
						<div class="col-sm-1">
							<div class="form-group">
								<label class="control-label">Show</label>
								<select @change="getTransactionHead" class="form-control" v-model="customRow">
									<option v-for="row in selectRow" v-text="row"></option>
								</select>
							</div>
						</div>
						<div class="col-md-2"></div>
						<div class="col-md-5">
							<input @keyup="getTransactionHead()" aria-controls="DataTables_Table_2" class="form-control search-box" placeholder="Search according to category name & code" type="search" v-model="search" />
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
						<th class="text-center">Status</th>
						<th class="text-center" width="33%">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(data, index) in allTransactionHeads.data">
						<td class="text-center">{{ ++index }}</td>
						<td class="text-center">{{ data.name }}</td>
						<td class="text-center">
							<span :class="data.status == 1 ? 'badge-success' : 'badge-warning'" class="badge">{{ data.status == 1 ? 'Active' : 'Inactive'}}</span>
						</td>
						<td class="text-center">
							<button :class="data.status == 1 ? 'btn-success' : 'btn-warning'" @click="changeStatus(data.id)" class="btn btn-sm" type="button" v-if="permissions.includes('Status_Transaction_Head')">
								<i class="fa fa-sync"></i>
							</button>
							<button @click="editTransactionHead(data.id, data)" class="btn btn-sm btn-info" type="button" v-if="permissions.includes('Edit_Transaction_Head')">
								<i class="fa fa-edit"></i>
							</button>
							<button @click="deleteTransactionHead(data.id, index)" class="btn btn-sm btn-danger" type="button" v-if="permissions.includes('Delete_Transaction_Head')">
								<i class="fa fa-trash"></i>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Pagination -->
		<div class="text-center">
			<pagination :data="allTransactionHeads" @pagination-change-page="getTransactionHead" style="margin-left: 20px">
				<span slot="prev-nav">&lt;Previous</span>
				<span slot="next-nav">Next &gt;</span>
			</pagination>
		</div>

		<!-- Account Add Modal -->
		<modal :adaptive="true" :clickToClose="false" :draggable="true" :limit="3" :resizable="true" height="auto" name="addModal">
			<div class="modal-header">
				<button @click="closeModal('addModal')" aria-hidden="true" class="close" data-dismiss="modal" type="button">&times;</button>
				<h4 class="modal-title">
					<i class="entypo-plus-circled"></i>Add New Transaction
				</h4>
			</div>
			<div class="modal-body">
				<form @submit.prevent="addNewTransactionHead">
					<div class="form-group">
						<label for="name">Name</label>
						<input class="form-control" id="name" placeholder="Enter Transaction Head Name" type="text" v-model="addTransactionHead.name" />
						<span class="text-danger" v-if="allErrors.name" v-text="allErrors.name[0]"></span>
					</div>
					<div class="modal-footer">
						<button @click="closeModal('addModal')" class="btn btn-primary" data-dismiss="modal" type="button">Close</button>
						<button class="btn btn-success">Save</button>
					</div>
				</form>
			</div>
		</modal>
		<!-- End Account Add Modal -->

		<!-- Account Edit Modal -->
		<modal :adaptive="true" :clickToClose="false" :draggable="true" :limit="3" :resizable="true" height="auto" name="editModal">
			<div class="modal-header">
				<button @click="closeModal('editModal')" aria-hidden="true" class="close" data-dismiss="modal" type="button">&times;</button>
				<h4 class="modal-title">
					<i class="entypo-plus-circled"></i>
					Edit {{editHeadData.name}} Account
				</h4>
			</div>
			<div class="modal-body">
				<form @submit.prevent="updateTransactionHead( editHeadData.id )">
					<div class="form-group">
						<label for>Name</label>
						<input class="form-control" placeholder="Enter Transaction Head Name" type="text" v-model="editHeadData.name" />
						<span class="text-danger" v-if="allErrors.name" v-text="allErrors.name[0]"></span>
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
	name: "TransactionHeadComponent",
	data() {
		return {
			addTransactionHead: {
				name: "",
			},
			allTransactionHeads: {},
			editHeadData: {},
			allErrors: [],
			search: "",
			customRow: 10,
			selectRow: [10, 20, 30, 40, 50],
		};
	},
	methods: {
		addNewTransactionHead: function () {
			const _this = this;
			axios
				.post(base_path + "transaction/head", _this.addTransactionHead)
				.then((response) => {
					if (response.data.code == 201) {
						this.$toastr.success(response.data.message, "Category", {
							timeout: 5000,
						});
						_this.getTransactionHead();
						_this.closeModal("addModal");
						_this.clearForm(_this.addTransactionHead);
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

		getTransactionHead: function (page = 1, customRow = 10) {
			const _this = this;
			const url =
				base_path +
				"transaction/head?q=" +
				_this.search +
				"&page=" +
				page +
				"&row=" +
				_this.customRow;

			axios
				.get(url)
				.then((response) => {
					_this.allTransactionHeads = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},

		editTransactionHead: function (id, headData) {
			const _this = this;
			_this.openModal("editModal");
			_this.editHeadData = headData;
		},

		updateTransactionHead: function (id) {
			const _this = this;
			axios
				.put(base_path + "transaction/head/" + id, _this.editHeadData)
				.then((response) => {
					if (response.data.code == 201) {
						this.$toastr.success(response.data.message, "Transaction Head", {
							timeout: 5000,
						});
						_this.closeModal("editModal");
						_this.clearForm(_this.editHeadData);
						_this.getTransactionHead();
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

		deleteTransactionHead: function (id, index) {
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
						.delete(base_path + "transaction/head/" + id)
						.then((response) => {
							if (response.status == 200) {
								this.$swal("Deleted!", response.data.message, "success");
							}
							_this.getTransactionHead();
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
				.get(base_path + "transaction/head/status/" + id)
				.then((response) => {
					_this.getTransactionHead();
					if (response.data.code === 200) {
						_this.$toastr.warning(
							"This Transaction Head Status Changed successfully!",
							"Account",
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
		this.getTransactionHead();
		this.getUserPermissions();
		// this.getPaymentMethod();
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
