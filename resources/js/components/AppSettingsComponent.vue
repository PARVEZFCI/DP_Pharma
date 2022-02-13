<template>
	<div>
		<h3>App Settings</h3>
		<br />
		<div class="row">
			<div class="col-md-12">
				<div class="panel panel-primary" data-collapsed="0">
					<div class="panel-heading">
						<div class="panel-title">
							<b>App Settings</b>
						</div>
					</div>
					<div class="panel-body">
						<form @submit.prevent="UpdateSettings()" class="form-horizontal" role="form">
							<div class="form-group col-md-12">
								<div class="col-sm-6">
									<label class="control-label" for="vat">Default Account</label>
									<model-select :options="accounts" placeholder="Select To Account" v-model="settings.account_id"></model-select>
									<span class="text-danger"></span>
								</div>
							</div>
							<div class="form-group col-md-12">
								<div class="col-sm-4">
									<label class="control-label" for="vat">Tax/VAT(%)</label>
									<input class="form-control" id="vat" placeholder="Enter Tax/VAT" type="text" v-model="settings.vat" />
									<span class="text-danger"></span>
								</div>
							</div>
							<div class="form-group col-md-12">
								<div class="col-sm-4">
									<label class="control-label" for="batch">Batch & Expiry Date?</label>
									<input id="batch" type="checkbox" v-model="settings.batch" />
									<span class="text-danger"></span>
								</div>
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
import { ModelSelect } from "vue-search-select";
export default {
	components: {
		ModelSelect,
	},
	name: "AppSettingsComponent",
	data() {
		return {
			settings: {
				batch: 0,
				vat: 17.4,
				account_id: "",
			},
			accounts: [],
			AllError: [],
		};
	},
	methods: {
		getAccounts: function () {
			const self = this;
			axios
				.get(base_path + "allActiveAccount")
				.then((response) => {
					self.accounts = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		getSettings: function () {
			const _this = this;
			axios.get(base_path + "app_settings").then((response) => {
				_this.settings = response.data;
			});
		},
		UpdateSettings: function () {
			const _this = this;

			axios
				.put(base_path + "app_settings/1", _this.settings)
				.then((response) => {
					if (response.status == 201) {
						this.$toastr.success(response.data.message, "Settings", {
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
	},
	created() {
		this.getSettings();
	},
	mounted() {
		this.getAccounts();
	},
};
</script>