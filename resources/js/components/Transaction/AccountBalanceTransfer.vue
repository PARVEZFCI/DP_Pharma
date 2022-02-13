<template>
	<div>
		<h3>Balance Transfer</h3>
		<br />

		<div class="panel panel-primary">
			<div class="panel-heading">
				<div class="panel-title">Balance Transfer List</div>
				<div class="panel-options" style="padding: 7px 15px;">
					<button @click="openModal('addModal')" class="btn btn-blue btn-sm" type="button" v-if="permissions.includes('Add_Balance_Transfer')">
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
								<select @change="getBalanceTransfer" class="form-control" v-model="customRow">
									<option v-for="row in selectRow" v-text="row"></option>
								</select>
							</div>
						</div>
						<div class="col-md-2"></div>
						<div class="col-md-5">
							<input @keyup="getBalanceTransfer()" aria-controls="DataTables_Table_2" class="form-control search-box" placeholder="Search according to category name & code" type="search" v-model="search" />
						</div>
					</div>
				</div>
			</div>

			<!-- Category List -->
			<table class="table table-bordered responsive">
				<thead>
					<tr>
						<th class="text-center">#</th>
						<th class="text-center">Date</th>
						<th class="text-center">From</th>
						<th class="text-center">To</th>
						<th class="text-center">Amount</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(data, index) in allBalanceTransfer.data">
						<td class="text-center">{{ ++index }}</td>
						<td class="text-center">{{ data.date }}</td>
						<td class="text-center">{{ data.from && data.from.name }}</td>
						<td class="text-center">{{ data.to && data.to.name }}</td>
						<td class="text-center">{{ data.amount }}</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Pagination -->
		<div class="text-center">
			<pagination :data="allBalanceTransfer" @pagination-change-page="getBalanceTransfer" style="margin-left: 20px">
				<span slot="prev-nav">&lt;Previous</span>
				<span slot="next-nav">Next &gt;</span>
			</pagination>
		</div>

		<!-- Transfer Balance Modal -->
		<modal :adaptive="true" :clickToClose="false" :draggable="true" :limit="3" :resizable="true" height="auto" name="addModal">
			<div class="modal-header">
				<button @click="closeModal('addModal')" aria-hidden="true" class="close" data-dismiss="modal" type="button">&times;</button>
				<h4 class="modal-title">
					<i class="entypo-plus-circled"></i>Transfer Balance
				</h4>
			</div>
			<div class="modal-body">
				<form @submit.prevent="addNewBalanceTransfer">
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label>Date</label>
								<input :value="new Date() | moment('dddd, MMMM Do YYYY')" class="form-control" disabled />
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label for="to_id">Type</label>
								<model-select :options="payment_methods" placeholder="Select Payment Method" v-model="addTransfer.type_id"></model-select>
								<span class="text-danger" v-if="allErrors.type_id" v-text="allErrors.type_id[0]"></span>
							</div>
						</div>

						<div class="col-md-6">
							<div class="form-group">
								<label for="from_id">From</label>
								<model-select :options="accounts" placeholder="Select From Account" v-model="addTransfer.from_id"></model-select>
								<span class="text-danger" v-if="allErrors.from_id" v-text="allErrors.from_id[0]"></span>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label for="to_id">To</label>
								<model-select :options="accounts" placeholder="Select To Account" v-model="addTransfer.to_id"></model-select>
								<span class="text-danger" v-if="allErrors.to_id" v-text="allErrors.to_id[0]"></span>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label for="amount">Amount</label>
								<input class="form-control" type="number" v-model="addTransfer.amount" />
								<span class="text-danger" v-if="allErrors.amount" v-text="allErrors.amount[0]"></span>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label for="remarks">Remarks</label>
								<textarea class="form-control" cols="30" id="remarks" rows="3" v-model="addTransfer.remarks"></textarea>
								<span class="text-danger" v-if="allErrors.remarks" v-text="allErrors.remarks[0]"></span>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button @click="closeModal('addModal')" class="btn btn-primary" data-dismiss="modal" type="button">Close</button>
						<button class="btn btn-success">Save</button>
					</div>
				</form>
			</div>
		</modal>
		<!-- End Transfer Balance Modal -->
	</div>
</template>

<script >
import { ModelSelect } from "vue-search-select";
export default {
	components: {
		ModelSelect,
	},
	name: "TransactionHeadComponent",
	data() {
		return {
			addTransfer: {
				from_id: "",
				to_id: "",
				type_id: "",
				amount: 0,
				remarks: "",
			},
			payment_methods: [],
			accounts: [],
			allBalanceTransfer: {},
			allErrors: [],
			search: "",
			customRow: 10,
			selectRow: [10, 20, 30, 40, 50],
		};
	},
	methods: {
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
		addNewBalanceTransfer: function () {
			const _this = this;
			axios
				.post(base_path + "balance/transfer", _this.addTransfer)
				.then((response) => {
					if (response.data.code == 201) {
						this.$toastr.success(response.data.message, "Balance Transfer", {
							timeout: 5000,
						});
						_this.getBalanceTransfer();
						_this.closeModal("addModal");
						_this.clearForm(_this.addTransfer);
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

		getBalanceTransfer: function (page = 1, customRow = 10) {
			const _this = this;
			const url =
				base_path +
				"balance/transfer?q=" +
				_this.search +
				"&page=" +
				page +
				"&row=" +
				_this.customRow;

			axios
				.get(url)
				.then((response) => {
					_this.allBalanceTransfer = response.data;
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
		this.getBalanceTransfer();
		this.getUserPermissions();
	},
	mounted: function () {
		this.getAccounts();
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
