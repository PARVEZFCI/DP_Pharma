<template>
	<div>
		<h3>Profile</h3>
		<br />
		<div class="row">
			<div class="col-md-12">
				<div class="panel panel-primary" data-collapsed="0">
					<div class="panel-heading">
						<div class="panel-title">
							<b>Profile Settings</b>
						</div>
					</div>
					<div class="panel-body">
						<form @submit.prevent="UpdateUser()" class="form-horizontal" role="form">
							<div class="col-md-7">
								<div class="form-group col-md-12">
									<div class="col-sm-7">
										<label class="control-label" for="image">Profile Photo &nbsp</label>

										<div class="fileinput fileinput-new" data-provides="fileinput">
											<div class="fileinput-new thumbnail" style="width: 200px; height: 150px;">
												<img :src="userData.profile_photo_path ? '/'+userData.profile_photo_path : '/backend_assets/assets/images/avatar.png'" alt="Profile Image" />
											</div>
											<div>
												<span class="btn btn-white btn-file">
													<span class="fileinput-new">Change</span>
													<input @change="getImage" accept="image/*" id="image" type="file" />
												</span>
											</div>
										</div>
									</div>
								</div>

								<div :class="AllError.name ? 'validate-has-error' : ''" class="form-group col-md-12">
									<div class="col-sm-7">
										<label class="control-label" for="name">Name*</label>
										<input class="form-control" id="name" placeholder="Enter User Name" type="text" v-model="userData.name" />
										<span class="text-danger" v-if="AllError.name" v-text="AllError.name[0]"></span>
									</div>
								</div>
								<div :class="AllError.phone ? 'validate-has-error' : ''" class="form-group col-md-12">
									<div class="col-sm-7">
										<label class="control-label" for="phone">Phone</label>
										<input class="form-control" id="Phone" placeholder="Enter User Phone" type="text" v-model="userData.phone" />
										<span class="text-danger" v-if="AllError.phone" v-text="AllError.phone[0]"></span>
									</div>
								</div>
								<div :class="AllError.email ? 'validate-has-error' : ''" class="form-group col-md-12">
									<div class="col-sm-7">
										<label class="control-label" for="email">Email</label>
										<input class="form-control" id="email" placeholder="Enter User Email" type="email" v-model="userData.email" />
										<span class="text-danger" v-if="AllError.email" v-text="AllError.email[0]"></span>
									</div>
								</div>
								<div class="form-group col-md-12">
									<div class="col-sm-7">
										<label class="control-label" for="address">Address</label>
										<textarea class="form-control" cols="30" id="address" name="address" rows="3" v-model="userData.address"></textarea>
									</div>
								</div>

								<div class="form-group col-md-7">
									<div class="pull-right">
										<button class="btn btn-success">Upadte</button>
										<router-link style="margin-top:4px;" to="/admin" type="button">
											<button class="btn btn-secondary" data-dismiss="modal">Close</button>
										</router-link>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "EditUserComponent",
	data() {
		return {
			userData: {
				name: "",
				phone: "",
				email: "",
				address: "",
				profile_photo_path: "",
			},
			AllError: {},
		};
	},
	methods: {
		getUser: function () {
			const _this = this;
			axios.get(base_path + "get_profile").then((response) => {
				_this.userData = response.data;
			});
		},
		getImage: function () {
			let file = event.target.files[0];
			let reader = new FileReader();
			reader.onload = (event) => {
				this.userData.profile_photo_path = event.target.result;
			};
			reader.readAsDataURL(file);
		},
		UpdateUser: function () {
			const _this = this;
			axios
				.put(base_path + "update_profile", _this.userData)
				.then((response) => {
					if (response.data.status == 201) {
						_this.$toastr.success(response.data.message, "Profile", {
							timeOut: 5000,
						});
					} else {
						_this.$toastr.warning("Something Went Wrong", "Sorry!", {
							timeOut: 5000,
						});
					}
				})
				.catch((error) => {
					if (error.response.status === 422) {
						_this.AllError = error.response.data.errors;
					} else {
						_this.$toastr.error("Application Error", "Sorry");
					}
				});
		},
	},
	created() {
		this.getUser();
	},
};
</script>
