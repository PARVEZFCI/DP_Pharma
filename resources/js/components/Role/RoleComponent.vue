<template>
	<div>
		<h3>Role</h3>
		<br />
		<div class="panel panel-primary">
			<div class="panel-heading">
				<div class="panel-title">
					<b>Role List</b>
				</div>
				<div class="panel-options" v-if="permissions.includes('Add_Role')">
					<button class="btn btn-blue btn-sm" data-target="#addModal" data-toggle="modal" style="margin-top:4px;">+ Add</button>
				</div>
			</div>

			<div class="panel-heading">
				<div class="pull-left col-sm-1">
					<div class="form-group">
						<label class="control-label" for="entries" style="margin-top: 15px;">Show</label>

						<select @change="getRole()" class="form-control" style="position: absolute; top: 6px; left: 59px;" v-model="custom_row">
							<option v-for="row in select_row" v-text="row"></option>
						</select>
					</div>
				</div>
				<div class="pull-right">
					<label>
						<input @keyup="getRole" aria-controls="DataTables_Table_2" class="form-control" placeholder="Search" style="margin-top: 10px; margin-left:-12px" type="search" v-model="search" />
					</label>
				</div>
			</div>

			<table class="table table-bordered table-responsive">
				<thead>
					<tr>
						<th class="text-center">#</th>
						<th class="text-center">Name</th>
						<th class="text-center">Status</th>
						<th class="text-center">Action</th>
					</tr>
				</thead>

				<tbody>
					<tr :key="index" v-for="(data,index) in roleData.data" v-if="data.name!=='Super Admin'">
						<td class="text-center">{{ ++index }}</td>
						<td>{{ data.name }}</td>
						<td class="text-center">
							<div :class="data.status==1 ? 'label-success' : 'label-warning'" class="label">{{ data.status == 1 ? 'On' : 'Off' }}</div>
						</td>
						<td class="text-center">
							<router-link :to="{ name: '/admin/role/view', params:{id: data.id }}" style="margin-top:4px;" type="button" v-if="permissions.includes('Permission_Role')">
								<button class="btn btn-default btn-sm" type="button">
									<i class="fa fa-eye"></i>
								</button>
							</router-link>
							<button :class="data.status==1 ? 'btn-success' : 'btn-warning'" @click="chageRoleStatus(data.id)" class="btn btn-sm" type="button" v-if="permissions.includes('Status_Role')">
								<i class="fa fa-sync"></i>
							</button>
							<button @click="EditRole(data.id,data)" class="btn btn-info btn-sm" data-target="#editModal" data-toggle="modal" type="button" v-if="permissions.includes('Edit_Role')">
								<i class="fa fa-edit"></i>
							</button>
							<button @click="DeleteRole(data.id,index)" class="btn btn-red btn-sm" v-if="permissions.includes('Delete_Role')">
								<i class="fa fa-trash"></i>
							</button>
						</td>
					</tr>
				</tbody>
			</table>

			<pagination :data="roleData" :limit="3" @pagination-change-page="getRole" style="margin-left:20px">
				<span slot="prev-nav">&lt; Previous</span>
				<span slot="next-nav">Next &gt;</span>
			</pagination>
		</div>

		<div aria-hidden="true" class="modal fade in" id="addModal" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title" id="exampleModalLabel">
							<b>Add Role</b>
						</h4>
						<button aria-label="Close" class="close" data-dismiss="modal" type="button">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<form @submit.prevent="AddNewRole">
						<div class="modal-body">
							<div class="modal-body">
								<div :class="AllError.name ? 'validate-has-error' : ''" class="form-group">
									<label for="name">Role name:*</label>
									<input class="form-control" id="name" placeholder="Enter Role name" type="text" v-model="AddRole.name" />
									<span class="text-danger" v-if="AllError.name" v-text="AllError.name[0]"></span>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button class="btn btn-success">Save</button>
							<button @click="clearForm(AddRole)" class="btn btn-secondary" data-dismiss="modal" ref="addFormClose" type="button">Close</button>
						</div>
					</form>
				</div>
			</div>
		</div>

		<div aria-hidden="true" class="modal fade in" id="editModal" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title" id="exampleModalLabel">
							<b>Edit Role</b>
						</h4>
						<button aria-label="Close" class="close" data-dismiss="modal" type="button">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<form @submit.prevent="updateRole( editRole.id )">
						<div class="modal-body">
							<div class="modal-body">
								<div :class="AllError.name ? 'validate-has-error' : ''" class="form-group">
									<label for="name">Role name:*</label>
									<input class="form-control" placeholder="Enter Role name" type="text" v-model="editRole.name" />
									<span class="text-danger" v-if="AllError.name" v-text="AllError.name[0]"></span>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button class="btn btn-success">Save Changes</button>
							<button class="btn btn-secondary" data-dismiss="modal" ref="editModalClose" type="button">Close</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "RoleComponent",
	data() {
		return {
			AddRole: {
				name: "",
			},
			AllError: [],
			roleData: {},
			search: "",
			custom_row: 10,
			select_row: [10, 20, 30, 40, 50],
			editRole: {},
			permissions: [],
		};
	},
	methods: {
		AddNewRole: function () {
			const _this = this;
			axios
				.post(base_path + "role", _this.AddRole)
				.then((response) => {
					if (response.data.status == 201) {
						this.$toastr.success(response.data.message, "Role", {
							timeOut: 5000,
						});
						this.$refs.addFormClose.click();
						_this.getRole();
						_this.clearForm(_this.AddRole);
					} else {
						this.$toastr.warning("Something Went Wrong", "Sorry!", {
							timeOut: 5000,
						});
					}
				})
				.catch((error) => {
					if (error.response.status === 422) {
						_this.AllError = error.response.data.errors;
					} else {
						this.$toastr.error("Application Error", "Sorry");
					}
				});
		},
		getRole: function (page = 1, custom_row = 10) {
			const _this = this;
			const main_url =
				base_path +
				"role?q=" +
				_this.search +
				"&page=" +
				page +
				"&row=" +
				_this.custom_row;
			axios
				.get(main_url)
				.then((response) => {
					_this.roleData = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},

		DeleteRole: function (id, index) {
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
						.delete(base_path + "role/" + id)
						.then((response) => {
							if (response.data.status === 200) {
								this.getRole();
								this.$swal("Deleted!", response.data.message, "success");
							}
							if (response.data.status === 400) {
								this.$swal("Opps", "Something Went Wrong", "warning");
							}
						})
						.catch((error) => {
							console.log(error);
						});
				}
			});
		},
		chageRoleStatus: function (id) {
			const _this = this;
			axios.get(base_path + "role/status/" + id).then((response) => {
				if (response.data.status === 200) {
					this.getRole();
					this.$swal("Role!", response.data.message, "success");
				}
				if (response.data.status === 400) {
					this.$swal("Opps", "Something Went Wrong", "warning");
				}
			});
		},
		EditRole: function (id, data) {
			const _this = this;
			_this.editRole = data;
		},
		updateRole: function (id) {
			const _this = this;
			axios
				.put(base_path + "role/" + id, _this.editRole)
				.then((response) => {
					if (response.data.status == 201) {
						this.$toastr.success(response.data.message, "Role", {
							timeOut: 5000,
						});
						this.$refs.editModalClose.click();
						this.getRole();
					} else {
						this.$toastr.warning("Something Went Wrong", "Sorry!", {
							timeOut: 5000,
						});
					}
				})
				.catch((error) => {
					if (error.response.status === 422) {
						_this.AllError = error.response.data.errors;
					} else {
						this.$toastr.error("Application Error", "Sorry");
					}
				});
		},

		clearForm: function (form) {
			const _this = this;
			_this.AllError = [];
			Object.keys(form).forEach((key) => {
				form[key] = "";
			});
		},
	},
	created() {
		this.getRole();
		this.getUserPermissions();
	},
};
</script>
