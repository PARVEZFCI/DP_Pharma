<template>
	<div>
		<h3>User</h3>
		<br />
		<div class="row">
			<div class="col-md-12">
				<div class="panel panel-primary" data-collapsed="0">
					<div class="panel-heading">
						<div class="panel-title">
							<b>Create User</b>
						</div>
						<div class="panel-options">
							<router-link style="margin-top:4px;" to="/admin/user" type="button">
								<button class="btn btn-blue btn-sm">List</button>
							</router-link>
						</div>
					</div>
					<div class="panel-body">
						<form @submit.prevent="AddNewUser()" class="form-horizontal" role="form">
							<div class="col-md-7">
								<div class="form-group col-md-12">
									<div class="col-sm-7">
										<label class="control-label" for="image">Profile Photo &nbsp</label>

										<div class="fileinput fileinput-new" data-provides="fileinput">
											<div class="fileinput-new thumbnail" style="width: 200px; height: 150px;">
												<img :src="AddUser.profile_photo ? AddUser.profile_photo : '/backend_assets/assets/images/avatar.png'" alt="Profile Image" />
											</div>
											<div class="fileinput-preview fileinput-exists thumbnail" style="max-width: 200px; max-height: 150px"></div>
											<div>
												<span class="btn btn-white btn-file">
													<span class="fileinput-new">Select image</span>
													<span class="fileinput-exists">Change</span>
													<input @change="getImage" accept="image/*" id="image" type="file" />
												</span>
											</div>
										</div>
									</div>
								</div>

								<div :class="AllError.name ? 'validate-has-error' : ''" class="form-group col-md-12">
									<div class="col-sm-7">
										<label class="control-label" for="name">User Name*</label>
										<input class="form-control" id="name" placeholder="Enter User Name" type="text" v-model="AddUser.name" />
										<span class="text-danger" v-if="AllError.name" v-text="AllError.name[0]"></span>
									</div>
								</div>
								<div :class="AllError.phone ? 'validate-has-error' : ''" class="form-group col-md-12">
									<div class="col-sm-7">
										<label class="control-label" for="phone">User Phone</label>
										<input class="form-control" id="Phone" placeholder="Enter User Phone" type="text" v-model="AddUser.phone" />
										<span class="text-danger" v-if="AllError.phone" v-text="AllError.phone[0]"></span>
									</div>
								</div>
								<div class="form-group col-md-12">
									<div class="col-sm-7">
										<label class="control-label" for="address">User Address</label>
										<textarea class="form-control" cols="30" id="address" name="address" rows="3" v-model="AddUser.address"></textarea>
									</div>
								</div>
								<div :class="AllError.email ? 'validate-has-error' : ''" class="form-group col-md-12">
									<div class="col-sm-7">
										<label class="control-label" for="email">User Email*</label>
										<input class="form-control" id="email" placeholder="Enter User Email" type="email" v-model="AddUser.email" />
										<span class="text-danger" v-if="AllError.name" v-text="AllError.email[0]"></span>
									</div>
								</div>
								<div :class="AllError.password ? 'validate-has-error' : ''" class="form-group col-md-12">
									<div class="col-sm-7">
										<label class="control-label" for="password">User Password*</label>
										<input class="form-control" id="password" placeholder="Enter User Password" type="password" v-model="AddUser.password" />
										<span class="text-danger" v-if="AllError.password" v-text="AllError.password[0]"></span>
									</div>
								</div>
								<div class="form-group col-md-7">
									<div class="pull-right">
										<button class="btn btn-success">Save</button>
										<router-link style="margin-top:4px;" to="/admin/user" type="button">
											<button class="btn btn-default" data-dismiss="modal">Close</button>
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
	name: "AddUserComponent",
	data() {
		return {
			AddUser: {
				name: "",
				phone: "",
				email: "",
				address: "",
				password: "",
				profile_photo: "",
			},
			AllError: [],
		};
	},
	methods: {
		getImage: function () {
			let file = event.target.files[0];
			let reader = new FileReader();
			reader.onload = (event) => {
				this.AddUser.profile_photo = event.target.result;
			};
			reader.readAsDataURL(file);
		},
		AddNewUser: function () {
			const _this = this;
			axios
				.post(base_path + "user", _this.AddUser)
				.then((response) => {
					if (response.data.status == 201) {
						this.$toastr.success(response.data.message, "User", {
							timeOut: 5000,
						});
						_this.clearForm(_this.AddUser);
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
	mounted() {},
};
</script>
