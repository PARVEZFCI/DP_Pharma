<template>
	<div>
		<h3>User</h3>
		<br />
		<div class="panel panel-primary">
			<div class="panel-heading">
				<div class="panel-title">
					<b>User List</b>
				</div>
				<div class="panel-options">
					<router-link style="margin-top:4px;" to="/admin/user/create" type="button" v-if="permissions.includes('Add_User')">
						<button class="btn btn-primary btn-sm">+ Add</button>
					</router-link>
				</div>
			</div>

			<div class="panel-heading">
				<div class="pull-left col-sm-1">
					<div class="form-group">
						<label class="control-label" for="entries" style="margin-top: 15px;">Show</label>

						<select @change="getUser()" class="form-control" style="position: absolute; top: 6px; left: 59px;" v-model="custom_row">
							<option v-for="row in select_row" v-text="row"></option>
						</select>
					</div>
				</div>
				<div class="pull-right">
					<label>
						<input @keyup="getUser()" aria-controls="DataTables_Table_2" class="form-control" placeholder="Search" style="margin-top: 10px; margin-left:-12px" type="search" v-model="search" />
					</label>
				</div>
			</div>
			<div style="overflow-x: auto;">
				<table class="table table-bordered table-responsive">
					<thead>
						<tr>
							<th class="text-center">#</th>
							<th class="text-center">Name</th>
							<th class="text-center">Profile</th>
							<th class="text-center">Phone</th>
							<th class="text-center">Email</th>
							<th class="text-center">Action</th>
						</tr>
					</thead>

					<tbody>
						<tr :key="index" v-for="(data,index) in userData.data" v-if="data.email!=='admin@gmail.com'">
							<td class="text-center">{{ ++index }}</td>
							<td>{{ data.name }}</td>
							<td class="text-center">
								<img :src="data.profile_photo_path ? '/'+data.profile_photo_path : '/backend_assets/assets/images/avatar.png' " width="40" />
							</td>
							<td>{{ data.phone }}</td>
							<td>{{ data.email }}</td>
							<td class="text-center">
								<button @click="ViewUser(data.id)" class="btn btn-sm btn-default" data-target="#viewModal" data-toggle="modal" type="button" v-if="permissions.includes('View_User')">
									<i class="fa fa-eye"></i>
								</button>
								<router-link :to="{ name: '/admin/user/edit', params:{id: data.id }}" style="margin-top:4px;" type="button" v-if="permissions.includes('Edit_User')">
									<button class="btn btn-sm btn-info">
										<i class="fa fa-edit"></i>
									</button>
								</router-link>

								<button @click="DeleteUser(data.id,index)" class="btn btn-sm btn-red" v-if="permissions.includes('Delete_User')">
									<i class="fa fa-trash"></i>
								</button>
							</td>
						</tr>
					</tbody>
				</table>

				<pagination :data="userData" :limit="3" @pagination-change-page="getUser" style="margin-left:20px">
					<span slot="prev-nav">&lt; Previous</span>
					<span slot="next-nav">Next &gt;</span>
				</pagination>
			</div>
		</div>

		<div aria-hidden="true" class="modal fade in" id="viewModal" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title" id="exampleModalLabel">
							<b>View User</b>
						</h4>
						<button aria-label="Close" class="close" data-dismiss="modal" type="button">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="invoice" id="printDiv">
							<div class="row">
								<center>
									<div class="invoice-left">
										<img :src="viewUser.profile_photo_path ? viewUser.profile_photo_path : '/assets/images/avatar.png'" alt width="200" />
										<br />
										<br />
										<strong>Name:</strong>
										{{ viewUser.name ? viewUser.name : "Not Set" }}
										<br />
										<br />
										<strong>Email:</strong>
										{{ viewUser.email ? viewUser.email : "Not Set" }}
										<br />
										<br />
										<strong>Mobile:</strong>
										{{ viewUser.phone ? viewUser.phone : "Not Set" }}
										<br />
										<br />
										<strong>Address:</strong>
										{{ viewUser.address ? viewUser.address : "Not Set" }}
									</div>
								</center>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<!-- <button @click="print()" class="btn btn-success btn-icon icon-left hidden-print">
							Print Details
							<i class="entypo-doc-text"></i>
						</button>-->
						<button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "ListUserComponent",
	data() {
		return {
			userData: {},
			search: "",
			custom_row: 10,
			select_row: [10, 20, 30, 40, 50],
			viewUser: {
				name: "",
				phone: "",
				address: "",
				email: "",
				profile_photo_path: "",
			},
			tag: "svg",
			general_info: {
				name: "",
				phone: "",
				email: "",
				address: "",
				logo: "",
			},
			permissions: [],
		};
	},
	methods: {
		ViewUser: function (id) {
			axios.get(base_path + "user/" + id).then((response) => {
				this.viewUser = response.data;
			});
		},
		getUser: function (page = 1, custom_row = 10) {
			const _this = this;
			const main_url =
				base_path +
				"user?q=" +
				_this.search +
				"&page=" +
				page +
				"&row=" +
				_this.custom_row;
			axios
				.get(main_url)
				.then((response) => {
					_this.userData = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		getGeneralInfo: function () {
			const _this = this;
			axios.get(base_path + "general_settings").then((response) => {
				_this.general_info = response.data[0];
			});
		},
		DeleteUser: function (id, index) {
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
						.delete(base_path + "user/" + id)
						.then((response) => {
							if (response.data.status === 200) {
								this.getUser();
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
		changeUserStatus: function (id) {
			const _this = this;
			axios.get(base_path + "user/status/" + id).then((response) => {
				if (response.data.status === 200) {
					this.getUser();
					this.$swal("User!", response.data.message, "success");
				}
				if (response.data.status === 400) {
					this.$swal("Opps", "Something Went Wrong", "warning");
				}
			});
		},
		print() {
			this.$htmlToPaper("printDiv");
		},
	},
	created() {
		this.getUser();
		// this.getGeneralInfo();
		this.getUserPermissions();
	},
};
</script>
