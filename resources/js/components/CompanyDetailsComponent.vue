<template>
	<div>
		<h3>Company Details</h3>
		<br />
		<div class="row">
			<div class="col-md-12">
				<div class="panel panel-primary" data-collapsed="0">
					<div class="panel-heading">
						<div class="panel-title">
							<b>Company Details</b>
						</div>
					</div>
					<div class="panel-body">
						<form @submit.prevent="UpdateSettings()" class="form-horizontal" role="form">
							<div class="row">
								<div class="col-md-6">
									<div class="form-group col-md-12">
										<div class="col-sm-10">
											<label class="control-label" for="name">Name</label>
											<input class="form-control" id="name" placeholder="Enter Company Name" type="text" v-model="settings.name" />
											<span class="text-danger"></span>
										</div>
									</div>
									<div class="form-group col-md-12">
										<div class="col-sm-10">
											<label class="control-label" for="phone">Phone</label>
											<input class="form-control" id="phone" placeholder="Enter Company phone" type="text" v-model="settings.phone" />
											<span class="text-danger"></span>
										</div>
									</div>
									<div class="form-group col-md-12">
										<div class="col-sm-10">
											<label class="control-label" for="email">Email</label>
											<input class="form-control" id="email" placeholder="Enter Company Email" type="email" v-model="settings.email" />
											<span class="text-danger"></span>
										</div>
									</div>
									<div class="form-group col-md-12">
										<div class="col-sm-10">
											<label class="control-label" for="address">Address</label>
											<input class="form-control" id="address" placeholder="Enter Company Address" type="text" v-model="settings.address" />
											<span class="text-danger"></span>
										</div>
									</div>
									<div :class="AllError.logo ? 'validate-has-error' : ''" class="form-group col-md-12">
										<div class="col-sm-10">
											<label class="control-label" for="logo">Logo &nbsp&nbsp&nbsp&nbsp&nbsp</label>
											<input @change="getImage" class="form-control" id="logo" type="file" />
											<span class="text-danger" v-if="AllError.logo" v-text="AllError.logo[0]"></span>
										</div>
									</div>
									<div :class="AllError.favicon ? 'validate-has-error' : ''" class="form-group col-md-12">
										<div class="col-sm-10">
											<label class="control-label" for="favicon">Favicon &nbsp&nbsp&nbsp&nbsp&nbsp</label>
											<input @change="getImage" class="form-control" id="favicon" type="file" />
											<span class="text-danger" v-if="AllError.favicon" v-text="AllError.favicon[0]"></span>
										</div>
									</div>
								</div>
								<!-- <div class="col-md-6">
									<div class="form-group col-md-12">
										<div class="col-sm-12">
											<label class="control-label" for="terms_condition">Terms & Condition</label>
											<ckeditor :editor="editor" v-model="settings.terms_condition"></ckeditor>
											<span class="text-danger"></span>
										</div>
									</div>

									<div class="form-group col-md-12">
										<div class="col-sm-12">
											<label class="control-label" for="privacy_policy">Privacy & Policy</label>
											<ckeditor :editor="editor" v-model="settings.privacy_policy"></ckeditor>
											<span class="text-danger"></span>
										</div>
									</div>
								</div>-->
							</div>

							<div class="pull-right">
								<button class="btn btn-success">Update</button>
								<router-link style="margin-top:4px;" to="/manufacturer" type="button">
									<button class="btn btn-secondary" data-dismiss="modal">Close</button>
								</router-link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
	name: "CompanyDetailsComponent",
	data() {
		return {
			editor: ClassicEditor,
			editorConfig: {},
			settings: {
				name: "",
				address: "",
				email: "",
				phone: "",
				terms_condition: "",
				privacy_policy: "",
				logo: "",
				favicon: "",
			},
			AllError: [],
		};
	},
	methods: {
		getSettings: function () {
			const _this = this;
			axios.get(base_path + "company_details").then((response) => {
				_this.settings = response.data;
			});
		},
		UpdateSettings: function () {
			const _this = this;

			axios
				.put(base_path + "company_details/1", _this.settings)
				.then((response) => {
					if (response.status == 201) {
						this.$toastr.success(response.data.message, "Company Details", {
							timeOut: 5000,
						});
						location.reload();
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
		getImage: function (event) {
			const _this = this;
			const type = event.target.id;
			let file = event.target.files[0];
			let reader = new FileReader();
			reader.onload = (event) => {
				if (type == "logo") {
					_this.settings.logo = event.target.result;
				}
				if (type == "favicon") {
					_this.settings.favicon = event.target.result;
				}
			};
			reader.readAsDataURL(file);
		},
		// Backup: function () {
		// 	axios.get(base_path + "backup").then((response) => {
		// 		this.$toastr.success(response.data.message, "Settings", {
		// 			timeOut: 5000,
		// 		});
		// 	});
		// },
	},
	created() {
		// this.LoadingStatus();
		this.getSettings();
	},
};
</script>
