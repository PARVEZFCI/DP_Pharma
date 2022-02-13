<template>
	<div>
		<h3>Units List</h3>
		<br />

		<div class="panel panel-primary">
			<div class="panel-heading">
				<div class="panel-title">Units List</div>
				<div class="panel-options" style="padding: 7px 15px;">
					<button @click="openModal('addModal')" class="btn btn-blue btn-sm" type="button" v-if="permissions.includes('Add_Unit')">
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
								<select @change="getUnit()" class="form-control" v-model="customRow">
									<option v-for="row in selectRow" v-text="row"></option>
								</select>
							</div>
						</div>
						<div class="col-md-2"></div>
						<div class="col-md-5">
							<input @keyup="getUnit()" aria-controls="DataTables_Table_2" class="form-control search-box" placeholder="Search according to unit name" type="search" v-model="search" />
						</div>
					</div>
				</div>
			</div>

			<!-- Units List -->
			<table class="table table-bordered responsive">
				<thead>
					<tr>
						<th class="text-center">#</th>
						<th class="text-center">Unit name</th>
						<th class="text-center">Symbol</th>
						<th class="text-center">Details</th>
						<th class="text-center">Status</th>
						<th class="text-center" width="33%">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(unit, index) in allUnits.data">
						<td class="text-center">{{ ++index }}</td>
						<td class="text-center">{{ unit.unit_name }}</td>
						<td class="text-center">{{ unit.symbol }}</td>
						<td class="text-center">{{ unit.description }}</td>
						<td class="text-center">
							<span :class="unit.status == 1 ? 'badge-success' : 'badge-warning'" class="badge">{{ unit.status == 1 ? 'Active' : 'Inactive' }}</span>
						</td>
						<td class="text-center">
							<button :class="unit.status == 1 ? 'btn-success' : 'btn-warning'" @click="changeStatus(unit.id)" class="btn" type="button" v-if="permissions.includes('Status_Unit')">
								<i class="entypo-arrows-ccw"></i>
							</button>
							<button @click="editUnit(unit.id, unit)" class="btn btn-info" type="button" v-if="permissions.includes('Edit_Unit')">
								<i class="entypo-pencil"></i>
							</button>
							<button @click="deleteUnit(unit.id, index)" class="btn btn-danger" type="button" v-if="permissions.includes('Delete_Unit')">
								<i class="entypo-trash"></i>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Pagination -->
		<div class="text-center">
			<pagination :data="allUnits" @pagination-change-page="getUnit" style="margin-left: 20px">
				<span slot="prev-nav">&lt; Previous</span>
				<span slot="next-nav">Next &gt;</span>
			</pagination>
		</div>

		<!-- Unit Add Modal -->
		<modal :adaptive="true" :clickToClose="false" :draggable="true" :limit="3" :resizable="true" height="auto" name="addModal">
			<div class="modal-header">
				<button @click="closeModal('addModal')" aria-hidden="true" class="close" data-dismiss="modal" type="button">&times;</button>
				<h4 class="modal-title">
					<i class="entypo-plus-circled"></i>Add New Unit
				</h4>
			</div>
			<div class="modal-body">
				<form @submit.prevent="addNewUnit()">
					<div class="form-group">
						<label for>Unit Name</label>
						<input class="form-control" id="category_name" placeholder="Enter Unit Name" type="text" v-model="addUnit.unit_name" />
						<span class="text-danger" v-if="allErrors.unit_name" v-text="allErrors.unit_name[0]"></span>
					</div>
					<div class="form-group">
						<label for>Unit Symbol</label>
						<input class="form-control" placeholder="Enter Unit Symbol" type="text" v-model="addUnit.symbol" />
						<span class="text-danger" v-if="allErrors.symbol" v-text="allErrors.symbol[0]"></span>
					</div>
					<div class="form-group">
						<label for>Unit Description</label>
						<textarea class="form-control" placeholder="Enter Unit Description" rows="5" v-model="addUnit.description"></textarea>
					</div>
					<div class="modal-footer">
						<button @click="closeModal('addModal')" class="btn btn-primary" data-dismiss="modal" type="button">Close</button>
						<button class="btn btn-success">Save</button>
					</div>
				</form>
			</div>
		</modal>
		<!-- End Unit Add Modal -->

		<!-- Unit Edit Modal -->
		<modal :adaptive="true" :clickToClose="false" :draggable="true" :limit="3" :resizable="true" height="auto" name="editModal">
			<div class="modal-header">
				<button aria-hidden="true" class="close" data-dismiss="modal" type="button">&times;</button>
				<h4 class="modal-title">
					<i class="entypo-plus-circled"></i>
					Edi {{ editUnitData.unit_name }} Unit
				</h4>
			</div>
			<div class="modal-body">
				<form @submit.prevent="updateUnit( editUnitData.id )">
					<div class="form-group">
						<label for>Unit Name</label>
						<input class="form-control" placeholder="Enter Category Name" type="text" v-model="editUnitData.unit_name" />
						<span class="text-danger" v-if="allErrors.unit_name" v-text="allErrors.unit_name[0]"></span>
					</div>
					<div class="form-group">
						<label for>Unit Symbol</label>
						<input class="form-control" placeholder="Enter Category Code" type="text" v-model="editUnitData.symbol" />
						<span class="text-danger" v-if="allErrors.symbol" v-text="allErrors.symbol[0]"></span>
					</div>
					<div class="form-group">
						<label for>Category Description</label>
						<textarea class="form-control" placeholder="Enter Category Description" rows="5" v-model="editUnitData.description"></textarea>
					</div>
					<div class="modal-footer">
						<button @click="closeModal('editModal')" class="btn btn-primary" data-dismiss="modal" type="button">Close</button>
						<button class="btn btn-success">Save</button>
					</div>
				</form>
			</div>
		</modal>
		<!-- End Unit Edit Modal -->
	</div>
</template>

<script >
export default {
	name: "UnitComponent",
	data() {
		return {
			addUnit: {
				unit_name: "",
				symbol: "",
				description: "",
			},
			allUnits: {},
			editUnitData: {},
			allErrors: [],
			customRow: 10,
			selectRow: [10, 20, 30, 40, 50],
			search: "",
		};
	},

	methods: {
		addNewUnit: function () {
			const _this = this;
			axios
				.post(base_path + "unit", _this.addUnit)
				.then((response) => {
					if (response.data.code == 201) {
						_this.$toastr.success(response.data.message, "Unit", {
							timeOut: 5000,
						});
						_this.$modal.hide("addModal");
						_this.clearForm(_this.addUnit);
						_this.getUnit();
					} else {
						_this.$toastr.warning("Something went wrong", "Sorry!", {
							timeOut: 5000,
						});
					}
				})
				.catch((error) => {
					if (error.response.status == 422) {
						_this.allErrors = error.response.data.errors;
					} else {
						_this.$toastr.error("Application error", "Sorry!");
					}
				});
		},

		getUnit: function (page = 1, customRow = 10) {
			const _this = this;
			const url =
				base_path +
				"unit?q=" +
				_this.search +
				"&page=" +
				page +
				"&row=" +
				_this.customRow;

			axios
				.get(url)
				.then((response) => {
					_this.allUnits = response.data;
				})
				.catch((response) => {
					console.log(error);
				});
		},

		changeStatus: function (id) {
			const _this = this;
			axios
				.get(base_path + "unit/status/" + id)
				.then((response) => {
					if (response.data.code == 200) {
						_this.$toastr.warning("Unit status inactive successfully", "Unit", {
							timeOut: 5000,
						});
						_this.getUnit();
					} else {
						_this.$toastr.success("Unit status active successfully", "Unit", {
							timeOut: 5000,
						});
						_this.getUnit();
					}
				})
				.catch((error) => {
					_this.$toastr.error("Application Error", "Sorry", {
						timeOut: 5000,
					});
					_this.getUnit();
				});
		},

		editUnit: function (id, unitData) {
			const _this = this;
			_this.$modal.show("editModal");
			_this.editUnitData = unitData;
		},

		updateUnit: function (id) {
			const _this = this;
			axios
				.put(base_path + "unit/" + id, _this.editUnitData)
				.then((response) => {
					if (response.data.code == 201) {
						_this.$toastr.success(response.data.message, "Unit", {
							timeOut: 5000,
						});
						_this.$modal.hide("editModal");
						_this.clearForm(_this.editUnitData);
						_this.getUnit();
					} else {
						_this.$toastr.warning("Something went wrong", "Sorry!", {
							timeOut: 5000,
						});
					}
				})
				.catch((error) => {
					if (error.response.status == 422) {
						_this.allErrors = error.response.data.errors;
					} else {
						_this.$toastr.error("Application error", "Sorry!");
					}
				});
		},

		deleteUnit: function (id, index) {
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
						.delete(base_path + "unit/" + id)
						.then((response) => {
							if (response.status == 200) {
								this.$swal("Deleted!", response.data.message, "success");
							}
							_this.getUnit();
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
		this.getUnit();
		this.getUserPermissions();
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
