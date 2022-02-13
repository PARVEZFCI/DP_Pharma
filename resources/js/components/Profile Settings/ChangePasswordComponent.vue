<template>
	<div>
		<h3>Password</h3>
		<br />

		<div class="panel panel-primary" data-collapsed="0">

			<div class="panel-heading">
				<div class="panel-title">
					Change Password
				</div>

				<div class="panel-options">
					<a href="#" data-rel="collapse"><i class="entypo-down-open"></i></a>
				</div>
			</div>

			<div class="panel-body">
				<form role="form" class="form-horizontal" @submit.prevent="UpdatePassword()">
					<div class="col-md-7">

						<div class="form-group col-md-12">
							<div class="col-sm-7">
								<label for="current_password" class="control-label">Current Password*</label>
								<input type="password" class="form-control" id="current_password" placeholder="Enter Current Password" v-model="credentials.current_password">
							</div>
						</div>
						<div class="form-group col-md-12">
							<div class="col-sm-7">
								<label for="password" class="control-label">New Password*</label>
								<input type="password" class="form-control" id="password" placeholder="Enter New Password" v-model="credentials.password" >
							</div>
						</div>
						<div class="form-group col-md-12">
							<div class="col-sm-7">
								<label for="password_confirmation" class="control-label">Confirm Password*</label>
								<input type="password" class="form-control" id="password_confirmation" placeholder="Confirm Password" v-model="credentials.password_confirmation">
							</div>
						</div>

						<div class="form-group col-md-7">
							<div class="pull-right">
								<button class="btn btn-success">Change Password</button>
								<router-link to="/admin" type="button" style="margin-top:4px;"><button class="btn btn-secondary" data-dismiss="modal">Close</button></router-link>
							</div>
						</div>
					</div>

				</form>
			</div>

		</div>

	</div>

	</div>
</template>
<script>
export default {
	name: "ChangePasswordComponent",
	data() {
		return {
            credentials:{
                current_password:"",
                password:"",
                password_confirmation:""
            },
		};
	},
	methods: {
		UpdatePassword: function () {
			const _this = this;
			axios
				.put(base_path + "change_password", _this.credentials)
				.then((response) => {
					if (response.data.status == 200) {
						_this.$toastr.success(
							"Password Changed Successfully",
							"Success!",
							{
								timeOut: 5000,
							}
						);
							location.reload();
					}
				});
		},
	},
	mounted() {
		// this.LoadingStatus();
	},
};
</script>
