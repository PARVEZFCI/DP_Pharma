<template>
	<div>
		<h3>Generic List</h3>
		<br />

		<div class="panel panel-primary">
			<div class="panel-heading">
				<div class="panel-title">Generic List</div>
				<div class="panel-options" style="padding: 7px 15px;" v-if="permissions.includes('Add_Generics')">
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
							<input @keyup="getGeneric()" aria-controls="DataTables_Table_2" class="form-control search-box" placeholder="Search according to generic name" type="search" v-model="search" />
						</div>
					</div>
				</div>
			</div>

			<!-- Generic List -->
			<table class="table table-bordered responsive">
				<thead>
					<tr>
						<th class="text-center">#</th>
						<th class="text-center">Generic name</th>
						<th class="text-center">Details</th>
						<th class="text-center">Status</th>
						<th class="text-center" width="33%">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(generic, index) in allGenerics.data">
						<td class="text-center">{{ ++index }}</td>
						<td class="text-center">{{ generic.generic_name }}</td>
						<td class="text-center">{{ generic.description }}</td>
						<td class="text-center">
							<span :class="generic.status == 1 ? 'badge-success' : 'badge-warning'" class="badge">{{ generic.status == 1 ? 'Active' : 'Inactive'}}</span>
						</td>
						<td class="text-center">
							<button :class="generic.status == 1 ? 'btn-success' : 'btn-warning'" @click="changeStatus(generic.id)" class="btn btn-sm" type="button" v-if="permissions.includes('Status_Generics')">
								<i class="fas fa-sync"></i>
							</button>
							<button @click="editGeneric(generic.id, generic)" class="btn btn-sm btn-info" type="button" v-if="permissions.includes('Edit_Generics')">
								<i class="fas fa-pen"></i>
							</button>
							<button @click="deleteGeneric(generic.id, index)" class="btn btn-sm btn-danger" type="button" v-if="permissions.includes('Delete_Generics')">
								<i class="fas fa-trash"></i>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Pagination -->
		<div class="text-center">
			<pagination :data="allGenerics" @pagination-change-page="getGeneric" style="margin-left: 20px">
				<span slot="prev-nav">&lt; Previous</span>
				<span slot="next-nav">Next &gt;</span>
			</pagination>
		</div>

		<!-- Generic Add Modal -->
		<modal :adaptive="true" :clickToClose="false" :draggable="true" :limit="3" :resizable="true" height="auto" name="addModal">
			<div class="modal-header">
				<button @click="closeModal('addModal')" aria-hidden="true" class="close" data-dismiss="modal" type="button">&times;</button>
				<h4 class="modal-title">
					<i class="entypo-plus-circled"></i>Add New Generic
				</h4>
			</div>
			<div class="modal-body">
				<form @submit.prevent="addNewGeneric()">
					<div class="form-group">
						<label for>Generic Name</label>
						<input class="form-control" id="generic_name" placeholder="Enter Generic Name" type="text" v-model="addGeneric.generic_name" />
						<span class="text-danger" v-if="allErrors.generic_name" v-text="allErrors.generic_name[0]"></span>
					</div>
					<div class="form-group">
						<label for>Generic Description</label>
						<textarea class="form-control" placeholder="Enter Generic Description" rows="5" v-model="addGeneric.description"></textarea>
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
					Edi {{ editGenericData.generic_name }} Generic
				</h4>
			</div>
			<div class="modal-body">
				<form @submit.prevent="updateGeneric( editGenericData.id )">
					<div class="form-group">
						<label for>Generic Name</label>
						<input class="form-control" placeholder="Enter Generic Name" type="text" v-model="editGenericData.generic_name" />
						<span class="text-danger"></span>
					</div>
					<div class="form-group">
						<label for>Generic Description</label>
						<textarea class="form-control" placeholder="Enter Generic Description" rows="5" v-model="editGenericData.description"></textarea>
					</div>
					<div class="modal-footer">
						<button @click="closeModal('editModal')" class="btn btn-primary" data-dismiss="modal" type="button">Close</button>
						<button class="btn btn-success">Save</button>
					</div>
				</form>
			</div>
		</modal>
		<!-- End Generic Edit Modal -->
	</div>
</template>

<script >
export default {
	name: "GenericComponent",
	data() {
		return {
			addGeneric: {
				generic_name: "",
				description: "",
			},
			allGenerics: {},
			editGenericData: {},
			allErrors: [],
			search: "",
			customRow: 10,
			selectRow: [10, 20, 30, 40, 50],
		};
	},
	methods: {
		addNewGeneric: function () {
			const _this = this;
			axios
				.post(base_path + "generic", _this.addGeneric)
				.then((response) => {
					if (response.data.code == 201) {
						this.$toastr.success(response.data.message, "Generic", {
							timeout: 5000,
						});
						_this.getGeneric();
						_this.closeModal("addModal");
						_this.clearForm(_this.addGeneric);
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

		getGeneric: function (page = 1, customRow = 10) {
			const _this = this;
			const url =
				base_path +
				"generic?q=" +
				_this.search +
				"&page=" +
				page +
				"&row=" +
				_this.customRow;

			axios
				.get(url)
				.then((response) => {
					_this.allGenerics = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},

		changeStatus: function (id) {
			const _this = this;
			axios
				.get(base_path + "generic/status/" + id)
				.then((response) => {
					_this.getGeneric();
					if (response.data.code === 200) {
						_this.$toastr.warning(
							"This generic is inactive successfully!",
							"Category",
							{
								timeOut: 5000,
							}
						);
					}
					if (response.data.code === 201) {
						_this.$toastr.success(
							"This generic is active successfully!",
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

		editGeneric: function (id, genericData) {
			const _this = this;
			_this.openModal("editModal");
			_this.editGenericData = genericData;
		},

		updateGeneric: function (id) {
			const _this = this;
			axios
				.put(base_path + "generic/" + id, _this.editGenericData)
				.then((response) => {
					if (response.data.code == 201) {
						this.$toastr.success(response.data.message, "Generic", {
							timeout: 5000,
						});
						_this.closeModal("editModal");
						_this.clearForm(_this.editGeneric);
						_this.getGeneric();
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

		deleteGeneric: function (id, index) {
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
						.delete(base_path + "generic/" + id)
						.then((response) => {
							if (response.status == 200) {
								this.$swal("Deleted!", response.data.message, "success");
							}
							_this.getGeneric();
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
		this.getGeneric();
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
