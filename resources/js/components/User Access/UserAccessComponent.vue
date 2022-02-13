<template>
	<div>
		<h3>User Access</h3>
		<br />
		<div class="panel panel-primary">
			<div class="panel-heading">
				<div class="panel-title">
					<b>User Access List</b>
				</div>
				<div class="panel-options">
					<button class="btn btn-blue btn-sm" data-target="#addModal" data-toggle="modal" style="margin-top:4px;" v-if="permissions.includes('Add_User_Access')">+ Add</button>
				</div>
			</div>

			<table class="table table-bordered table-responsive">
				<thead>
					<tr>
						<th class="text-center">#</th>
						<th class="text-center">Email</th>
						<th class="text-center">Role Name</th>
						<th class="text-center">Action</th>
					</tr>
				</thead>

				<tbody>
					<tr :key="index" v-for="(data,index) in userAccessData" v-if="data.users.email!=='admin@gmail.com'">
						<td class="text-center">{{ ++index }}</td>
						<td>{{ data.users ? data.users.email : "Not Set" }}</td>
						<td>{{ data.roles ? data.roles.name : "Not Set" }}</td>
						<td class="text-center">
							<button @click="DeleteUserAccess(data.id,index)" class="btn btn-sm btn-red" v-if="permissions.includes('Delete_User_Access') && data.roles.name!=='Super Admin'">
								<i class="fa fa-trash"></i>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div aria-hidden="true" class="modal fade in" id="addModal" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title" id="exampleModalLabel">
							<b>Add User Access</b>
						</h4>
						<button aria-label="Close" class="close" data-dismiss="modal" type="button">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<form @submit.prevent="addUserAccess">
						<div class="modal-body">
							<div class="modal-body">
								<div class="form-group">
									<label for="email">User Email:*</label>
									<select class="form-control" id="email" v-model="AddUserAccess.user_id">
										<option :value="data.id" v-for="(data,index) in user">{{ data.email }}</option>
									</select>
								</div>
								<div class="form-group">
									<label for="role">Role:</label>
									<select class="form-control" id="role" v-model="AddUserAccess.role_id">
										<option :value="data.id" v-for="(data,index) in role">{{ data.name }}</option>
									</select>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button class="btn btn-success">Save</button>
							<button @click="clearForm(AddUserAccess)" class="btn btn-secondary" data-dismiss="modal" ref="closeModal" type="button">Close</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "UserAccessComponent",
	data() {
		return {
			AddUserAccess: {
				user_id: null,
				role_id: null,
			},
			userAccessData: {},
			editUserAccess: {},
			user: {},
			role: {},
			permissions: [],
		};
	},
	methods: {
		getUser: function () {
			const _this = this;
			axios.get(base_path + "allUser").then((response) => {
				_this.user = response.data;
			});
		},
		getRole: function () {
			const _this = this;
			axios.get(base_path + "allRole").then((response) => {
				_this.role = response.data;
			});
		},
		addUserAccess: function () {
			const _this = this;
			axios
				.post(base_path + "user_access", _this.AddUserAccess)
				.then((response) => {
					if (response.data.status == 201) {
						this.$toastr.success(response.data.message, "User Access", {
							timeOut: 5000,
						});
						this.$refs.closeModal.click();
						_this.getUserAccess();
						_this.clearForm(_this.AddUserAccess);
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
		getUserAccess: function () {
			const _this = this;
			const main_url = base_path + "user_access";
			axios
				.get(main_url)
				.then((response) => {
					_this.userAccessData = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},

		DeleteUserAccess: function (id, index) {
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
						.delete(base_path + "user_access/" + id)
						.then((response) => {
							console.log(response.data);
							if (response.data.status === 200) {
								_this.getUserAccess();
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
		clearForm: function (form) {
			const _this = this;
			_this.AllError = [];
			Object.keys(form).forEach((key) => {
				form[key] = "";
			});
		},
	},
	created() {
		this.getUserAccess();
		this.getUser();
		this.getRole();
		this.getUserPermissions();
	},
};
</script>
