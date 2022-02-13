<template>
	<div>
		<h3>Manufacturer List</h3>
		<br />

		<div class="panel panel-primary">
			<div class="panel-heading">
				<div class="panel-title">Manufacturer List</div>
				<div class="panel-options" style="padding: 7px 15px;" v-if="permissions.includes('Add_Manufacture')">
					<button @click="openModal('addModal')" class="btn btn-blue btn-sm" type="button">
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
							<input @keyup="getManufacturer()" aria-controls="DataTables_Table_2" class="form-control search-box" placeholder="Search according to manufacturer name" type="search" v-model="search" />
						</div>
					</div>
				</div>
			</div>

			<!-- Category List -->
			<table class="table table-bordered responsive">
				<thead>
					<tr>
						<th class="text-center">#</th>
						<th class="text-center">Manufacturer name</th>
						<th class="text-center">Modile</th>
						<th class="text-center">Email</th>
						<th class="text-center">Status</th>
						<th class="text-center" width="33%">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(manufacturer, index) in allManufactures.data">
						<td class="text-center">{{ ++index }}</td>
						<td class="text-center">{{ manufacturer.manufacture_name }}</td>
						<td class="text-center">{{ manufacturer.mobile }}</td>
						<td class="text-center">{{ manufacturer.email }}</td>
						<td class="text-center">
							<span :class="manufacturer.status == 1 ? 'badge-success' : 'badge-warning'" class="badge">{{ manufacturer.status == 1 ? 'Active' : 'Inactive' }}</span>
						</td>
						<td class="text-center">
							<button
								:class="manufacturer.status == 1 ? 'btn-success' : 'btn-warning'"
								@click="changeStatus(manufacturer.id)"
								class="btn btn-sm"
								type="button"
								v-if="permissions.includes('Status_Manufacture')"
							>
								<i class="fas fa-sync"></i>
							</button>
							<button @click="editManufacturer(manufacturer.id, manufacturer)" class="btn btn-sm btn-info" type="button" v-if="permissions.includes('Edit_Manufacture')">
								<i class="fas fa-pen"></i>
							</button>
							<button @click="deletemanufacturer(manufacturer.id, index)" class="btn btn-sm btn-danger" type="button" v-if="permissions.includes('Delete_Manufacture')">
								<i class="fas fa-trash"></i>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Pagination -->
		<div class="text-center">
			<pagination :data="allManufactures" @pagination-change-page="getManufacturer" style="margin-left: 20px">
				<span slot="prev-nav">&lt; Previous</span>
				<span slot="next-nav">Next &gt;</span>
			</pagination>
		</div>

		<!-- Manufacture Add Modal -->
		<modal :adaptive="true" :clickToClose="false" :draggable="true" :limit="3" :resizable="true" height="auto" name="addModal">
			<div class="modal-header">
				<button @click="closeModal('addModal')" aria-hidden="true" class="close" data-dismiss="modal" type="button">&times;</button>
				<h4 class="modal-title">
					<i class="entypo-plus-circled"></i>Add New Manufacturer
				</h4>
			</div>
			<div class="modal-body">
				<form @submit.prevent="addNewManufacture()">
					<div class="form-group">
						<label for>Manufacturer Name</label>
						<input class="form-control" placeholder="Enter Manufacturer Name" type="text" v-model="addManufacture.manufacture_name" />
						<span class="text-danger" v-if="allErrors.manufacture_name" v-text="allErrors.manufacture_name[0]"></span>
					</div>
					<div class="form-group">
						<label for>Mobile</label>
						<input class="form-control" placeholder="Enter Manufacturer Mobile" type="text" v-model="addManufacture.mobile" />
						<span class="text-danger" v-if="allErrors.mobile" v-text="allErrors.mobile[0]"></span>
					</div>
					<div class="form-group">
						<label for>Email</label>
						<input class="form-control" placeholder="Enter Manufacturer Email" type="text" v-model="addManufacture.email" />
						<span class="text-danger"></span>
					</div>
					<div class="form-group">
						<label for>City</label>
						<input class="form-control" placeholder="Enter Manufacturer City" type="text" v-model="addManufacture.city" />
						<span class="text-danger"></span>
					</div>
					<div class="form-group">
						<label for>Country</label>
						<select class="form-control" v-model="addManufacture.country">
							<option disabled selected>--select country--</option>
							<option>Bangladesh</option>
							<option>India</option>
							<option>Australia</option>
							<option>USA</option>
						</select>
						<span class="text-danger"></span>
					</div>
					<div class="form-group">
						<label for>Description</label>
						<textarea class="form-control" placeholder="Enter Category Description" rows="5" v-model="addManufacture.description"></textarea>
					</div>
					<div class="modal-footer">
						<button @click="closeModal('addModal')" class="btn btn-primary" data-dismiss="modal" type="button">Close</button>
						<button class="btn btn-success">Save</button>
					</div>
				</form>
			</div>
		</modal>
		<!-- End Manufacture Add Modal -->

		<!-- Manufacture Edit Modal -->
		<modal :adaptive="true" :clickToClose="false" :draggable="true" :limit="3" :resizable="true" height="auto" name="editModal">
			<div class="modal-header">
				<button @click="closeModal('addModal')" aria-hidden="true" class="close" data-dismiss="modal" type="button">&times;</button>
				<h4 class="modal-title">
					<i class="entypo-plus-circled"></i>
					Edi {{editManufactureData.manufacture_name}} Category
				</h4>
			</div>
			<div class="modal-body">
				<form @submit.prevent="updateManufacturer( editManufactureData.id )">
					<div class="form-group">
						<label for>Manufacturer Name</label>
						<input class="form-control" placeholder="Enter Manufacturer Name" type="text" v-model="editManufactureData.manufacture_name" />
						<span class="text-danger" v-if="allErrors.manufacture_name" v-text="allErrors.manufacture_name[0]"></span>
					</div>
					<div class="form-group">
						<label for>Mobile</label>
						<input class="form-control" placeholder="Enter Manufacturer Mobile" type="text" v-model="editManufactureData.mobile" />
						<span class="text-danger" v-if="allErrors.mobile" v-text="allErrors.mobile[0]"></span>
					</div>
					<div class="form-group">
						<label for>Email</label>
						<input class="form-control" placeholder="Enter Manufacturer Email" type="text" v-model="editManufactureData.email" />
						<span class="text-danger"></span>
					</div>
					<div class="form-group">
						<label for>City</label>
						<input class="form-control" placeholder="Enter Manufacturer City" type="text" v-model="editManufactureData.city" />
						<span class="text-danger"></span>
					</div>
					<div class="form-group">
						<label for>Country</label>
						<select class="form-control" v-model="editManufactureData.country">
							<option disabled selected>--select country--</option>
							<option>Bangladesh</option>
							<option>India</option>
							<option>Australia</option>
							<option>USA</option>
						</select>
						<span class="text-danger"></span>
					</div>
					<div class="form-group">
						<label for>Description</label>
						<textarea class="form-control" placeholder="Enter Category Description" rows="5" v-model="editManufactureData.description"></textarea>
					</div>
					<div class="modal-footer">
						<button @click="closeModal('editModal')" class="btn btn-primary" data-dismiss="modal" type="button">Close</button>
						<button class="btn btn-success">Save</button>
					</div>
				</form>
			</div>
		</modal>
		<!-- End Manufacture Edit Modal -->
	</div>
</template>

<script >
export default {
	name: "ManufacturerComponent",
	data() {
		return {
			addManufacture: {
				manufacture_name: "",
				mobile: "",
				email: "",
				city: "",
				country: "",
				details: "",
			},
			allManufactures: {},
			editManufactureData: {},
			allErrors: [],
			search: "",
			customRow: 10,
			selectRow: [10, 20, 30, 40, 50],
		};
	},
	methods: {
		addNewManufacture: function () {
			const _this = this;
			axios
				.post(base_path + "manufacturer", _this.addManufacture)
				.then((response) => {
					console.log(response);
					if (response.data.status == 201) {
						_this.$toastr.success(response.data.message, "Manufacture", {
							timeOut: 5000,
						});
					}
					_this.getManufacturer();
					_this.closeModal("addModal");
					_this.clearForm(_this.addManufacture);
				})
				.catch((error) => {
					if (error.response.status == 422) {
						_this.allErrors = error.response.data.errors;
					} else {
						_this.$toastr.error("Application Error", "Sorry!");
					}
				});
		},

		getManufacturer: function (page = 1, customRow = 10) {
			const _this = this;
			const url =
				base_path +
				"manufacturer?q=" +
				_this.search +
				"&page=" +
				page +
				"&row=" +
				_this.customRow;

			axios
				.get(url)
				.then((response) => {
					_this.allManufactures = response.data;
				})
				.catch((error) => {});
		},

		changeStatus: function (id) {
			const _this = this;
			axios
				.get(base_path + "manufacturer/status/" + id)
				.then((response) => {
					_this.getManufacturer();
					if (response.data.code === 200) {
						_this.$toastr.warning(
							"This manufacturer is inactive successfully!",
							"Category",
							{
								timeOut: 5000,
							}
						);
					}
					if (response.data.code === 201) {
						_this.$toastr.success(
							"This manufacturer is active successfully!",
							"Category",
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

		editManufacturer: function (id, ManufacturerData) {
			const _this = this;
			_this.openModal("editModal");
			_this.editManufactureData = ManufacturerData;
		},

		updateManufacturer: function (id) {
			const _this = this;
			axios
				.put(base_path + "manufacturer/" + id, _this.editManufactureData)
				.then((response) => {
					if (response.data.code == 201) {
						this.$toastr.success(response.data.message, "Manufacturer", {
							timeout: 5000,
						});
						_this.closeModal("editModal");
						_this.clearForm(_this.editManufacturer);
						_this.getManufacturer();
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

		deletemanufacturer: function (id, index) {
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
						.delete(base_path + "manufacturer/" + id)
						.then((response) => {
							if (response.status == 200) {
								this.$swal("Deleted!", response.data.message, "success");
							}
							_this.getCategory();
						})
						.catch((error) => {
							console.log(error);
						});

					_this.getManufacturer();
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
		this.getManufacturer();
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
