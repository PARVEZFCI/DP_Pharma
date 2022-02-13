<template>
	<div>
		<h3>Permission</h3>
		<br />
		<div class="panel panel-primary">
			<div class="panel-heading">
				<div class="panel-title">
					<b>Permission List</b>
				</div>
				<div class="panel-options">
					<router-link style="margin-top:4px;" to="/admin/role" type="button">
						<button class="btn btn-blue btn-sm" style="margin-top:4px;">Role</button>
					</router-link>
				</div>
			</div>

			<div class="panel-heading">
				<div class="pull-left col-sm-1"></div>
				<div class="pull-right"></div>
			</div>
			<div class="panel-body">
				<center>
					<div class="text-center" style="border: 1px solid #0072bc;height: 3rem;width: 35%;background-color: #0072bc; margin-bottom:1%">
						<b>
							<p style="color: white;margin-top: 3px;">{{ roleInfo.name }} Permissions</p>
						</b>
					</div>
				</center>
				<div class="row">
					<div class="col-md-4">
						<center>
							<div class="text-center" style="border: 1px solid darkgray;height: 3rem;width: 19rem;background-color: currentcolor; margin-bottom:1%">
								<b>
									<p style="color: white;margin-top: 3px;">Module's Permissions</p>
								</b>
							</div>
						</center>
						<table class="table table-bordered table-responsive">
							<thead>
								<tr>
									<th class="text-center">#</th>
									<th class="text-center">Name</th>
									<th class="text-center">Permission</th>
								</tr>
							</thead>

							<tbody>
								<tr :key="index" v-for="(data,index) in allPermission.module">
									<td class="text-center">{{ ++index }}</td>
									<td>{{ data.name }}</td>
									<td class="text-center">
										<input :value="data.id" @change="updatePermission" type="checkbox" v-model="permissions" />
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="col-md-4">
						<center>
							<div class="text-center" style="border: 1px solid darkgray;height: 3rem;width: 19rem;background-color: currentcolor; margin-bottom:1%">
								<b>
									<p style="color: white;margin-top: 3px;">Feature's Permissions</p>
								</b>
							</div>
						</center>
						<table class="table table-bordered table-responsive">
							<thead>
								<tr>
									<th class="text-center">#</th>
									<th class="text-center">Name</th>
									<th class="text-center">Permission</th>
								</tr>
							</thead>

							<tbody>
								<tr :key="index" v-for="(data,index) in allPermission.feature">
									<td class="text-center">{{ ++index }}</td>
									<td>{{ data.name }}</td>
									<td class="text-center">
										<input :value="data.id" @change="updatePermission" type="checkbox" v-model="permissions" />
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="col-md-4">
						<center>
							<div class="text-center" style="border: 1px solid darkgray;height: 3rem;width: 19rem;background-color: currentcolor; margin-bottom:1%">
								<b>
									<p style="color: white;margin-top: 3px;">Control's Permissions</p>
								</b>
							</div>
						</center>
						<table class="table table-bordered table-responsive">
							<thead>
								<tr>
									<th class="text-center">#</th>
									<th class="text-center">Name</th>
									<th class="text-center">Permission</th>
								</tr>
							</thead>

							<tbody>
								<tr :key="index" v-for="(data,index) in allPermission.control">
									<td class="text-center">{{ ++index }}</td>
									<td>{{ data.name }}</td>
									<td class="text-center">
										<input :value="data.id" @change="updatePermission" type="checkbox" v-model="permissions" />
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			allPermission: {},
			roleInfo: {},
			editId: this.$route.params.id,
			permissions: [],
		};
	},
	methods: {
		getPermissions: function () {
			const _this = this;
			axios.get(base_path + "permission").then((response) => {
				_this.allPermission = response.data;
			});
		},
		getRoleInfo: function () {
			const _this = this;
			axios.get(base_path + "role/" + _this.editId).then((response) => {
				_this.roleInfo = response.data;
			});
		},
		getRolePermission: function () {
			const _this = this;
			axios
				.get(base_path + "role_permission/" + _this.editId)
				.then((response) => {
					_this.permissions = response.data;
				});
		},
		updatePermission: function () {
			const _this = this;
			axios
				.post(base_path + "role_permission/" + _this.editId, _this.permissions)
				.then((response) => {
					if (response.data.status === 200) {
						_this.getRolePermission();
						_this.$toastr.success(response.data.message, "Permission", {
							timeOut: 5000,
						});
					}
					if (response.data.status === 400) {
						this.$swal("Opps", "Something Went Wrong", "warning");
					}
				});
		},
	},
	created() {
		this.getPermissions();
		this.getRoleInfo();
		this.getRolePermission();
	},
};
</script>
