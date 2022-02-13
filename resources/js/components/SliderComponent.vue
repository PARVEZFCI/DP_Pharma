<template>
	<div>
		<h3>Slider</h3>

		<br />

		<div class="panel panel-primary">
			<div class="panel-heading">
				<div class="panel-title">
					<b>Slider List</b>
				</div>
				<div class="panel-options">
					<button @click="openModal('addModal')" class="btn btn-blue btn-sm" style="margin-top:4px;">+ Add</button>
				</div>
			</div>

			<div class="panel-heading">
				<div class="pull-left col-sm-1">
					<div class="form-group">
						<label class="control-label" for="entries" style="margin-top: 15px;">Show</label>

						<select @change="getSlider()" class="form-control" style="position: absolute; top: 6px; left: 59px;" v-model="custom_row">
							<option v-for="row in select_row" v-text="row"></option>
						</select>
					</div>
				</div>
			</div>

			<table class="table table-bordered table-responsive">
				<thead>
					<tr>
						<th class="text-center">#</th>
						<th class="text-center">Slider</th>
						<th class="text-center">Order</th>
						<th class="text-center">Status</th>
						<th class="text-center">Action</th>
					</tr>
				</thead>

				<tbody>
					<tr :key="index" v-for="(data,index) in sliderData.data">
						<td class="text-center">{{ ++index }}</td>
						<td class="text-center">
							<img :src="data.path ? '/'+data.path : '/backend_assets/assets/images/sample.jpg' " width="120" />
						</td>
						<td>{{ data.order }}</td>
						<td class="text-center">
							<div :class="data.status==1 ? 'label-success' : 'label-warning'" class="label">{{ data.status == 1 ? 'On' : 'Off' }}</div>
						</td>
						<td class="text-center">
							<button :class="data.status==1 ? 'btn-success' : 'btn-warning'" @click="changeSliderStatus(data.id)" class="btn btn-sm" type="button">
								<i class="fa fa-refresh"></i>
							</button>
							<button @click="EditSlider(data.id,data)" class="btn btn-sm btn-info" type="button">
								<i class="fa fa-edit"></i>
							</button>
							<button @click="DeleteSlider(data.id,index)" class="btn btn-sm btn-red">
								<i class="fa fa-trash"></i>
							</button>
						</td>
					</tr>
				</tbody>
			</table>

			<pagination :data="sliderData" :limit="3" @pagination-change-page="getSlider" style="margin-left:20px">
				<span slot="prev-nav">&lt; Previous</span>
				<span slot="next-nav">Next &gt;</span>
			</pagination>
		</div>

		<modal :adaptive="true" height="auto" name="addModal">
			<div class="modal-header">
				<h4 class="modal-title" id="exampleModalLabel">
					<b>Add Slider</b>
				</h4>
				<button aria-label="Close" class="close" data-dismiss="modal" type="button">
					<span aria-hidden="true">×</span>
				</button>
			</div>
			<form @submit.prevent="AddNewSlider">
				<div class="modal-body">
					<center>
						<div class="fileinput-new thumbnail" style="width:200px">
							<img :src="AddSlider.path ? AddSlider.path :  '/backend_assets/assets/images/sample.jpg'" id="previmage" width="200" />
						</div>
					</center>
					<div :class="AllError.path ? 'validate-has-error' : ''" class="form-group">
						<label for="image">Slider Image*:</label>
						<p style="color:white">
							Image standard size
							<span style="color:yellow">1600px*470px</span>
						</p>
						<input @change="getImage" class="form-control" id="image" type="file" />
						<span class="text-danger" v-if="AllError.path" v-text="AllError.path[0]"></span>
					</div>

					<div :class="AllError.header ? 'validate-has-error' : ''" class="form-group">
						<label for="order">Slider Order:</label>
						<input class="form-control" id="order" placeholder="Enter Slider Order" type="number" v-model="AddSlider.order" />
					</div>
				</div>
				<div class="modal-footer">
					<button @click="hideModal('addModal')" class="btn btn-secondary" style="float:right;margin-bottom:15px" type="button">Close</button>
					<button class="btn btn-success" style="float:right;margin-bottom:15px">Save</button>
				</div>
			</form>
		</modal>

		<modal :adaptive="true" height="auto" name="editModal">
			<div class="modal-header">
				<h4 class="modal-title" id="exampleModalLabel">
					<b>Edit Slider</b>
				</h4>
				<button @click="hideModal('editModal')" aria-label="Close" class="close" type="button">
					<span aria-hidden="true">×</span>
				</button>
			</div>
			<form @submit.prevent="updateSlider( editSlider.id )">
				<div class="modal-body">
					<center>
						<div class="fileinput-new thumbnail" style="width:200px">
							<img :src="imageSource" id="previmage" width="200" />
						</div>
					</center>
					<div :class="AllError.path ? 'validate-has-error' : ''" class="form-group">
						<label for="image">Slider Image*:</label>
						<p style="color:white">
							Image standard size
							<span style="color:yellow">1600px*470px</span>
						</p>
						<input @change="getImage" class="form-control" id="image" type="file" />
						<span class="text-danger" v-if="AllError.path" v-text="AllError.path[0]"></span>
					</div>

					<div :class="AllError.order ? 'validate-has-error' : ''" class="form-group">
						<label for="order">Slider Order:</label>
						<input class="form-control" placeholder="Enter Slider Order" type="number" v-model="editSlider.order" />
						<span class="text-danger" v-if="AllError.order" v-text="AllError.order[0]"></span>
					</div>
				</div>
				<div class="modal-footer">
					<button class="btn btn-success" style="float:right;margin-bottom:15px">Save Changes</button>
					<button @click="hideModal('editModal')" class="btn btn-secondary" style="float:right;margin-bottom:15px" type="button">Close</button>
				</div>
			</form>
		</modal>
	</div>
</template>
<script>
export default {
	name: "SliderComponent",
	data() {
		return {
			AddSlider: {
				path: "",
				order: "",
			},
			imageSource: "",
			AllError: [],
			sliderData: {},
			editSlider: {},
			custom_row: 10,
			select_row: [10, 20, 30, 40, 50],
		};
	},
	methods: {
		AddNewSlider: function () {
			const _this = this;
			axios
				.post(base_path + "slider", _this.AddSlider)
				.then((response) => {
					if (response.data.code == 201) {
						this.$toastr.success(response.data.message, "Category", {
							timeout: 5000,
						});
						_this.hideModal("addModal");
						_this.getSlider();
						_this.clearForm(_this.AddSlider);
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
						// this.$toastr.error("Application Error", "Sorry");
					}
				});
		},

		getImage: function () {
			let file = event.target.files[0];
			let reader = new FileReader();
			reader.onload = (event) => {
				this.AddSlider.path = event.target.result;
				this.editSlider.path = event.target.result;
				this.imageSource = event.target.result;
			};
			reader.readAsDataURL(file);
		},

		getSlider: function (page = 1, custom_row = 10) {
			const _this = this;
			const main_url =
				base_path + "slider?page=" + page + "&row=" + _this.custom_row;
			axios
				.get(main_url)
				.then((response) => {
					_this.sliderData = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		DeleteSlider: function (id, index) {
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
						.delete(base_path + "slider/" + id)
						.then((response) => {
							if (response.data.code == 200) {
								this.getSlider();
								this.$swal("Deleted!", response.data.message, "success");
							}
							if (response.data.code === 400) {
								this.$swal("Opps", "Something Went Wrong", "warning");
							}
						})
						.catch((error) => {
							console.log(error);
						});
				}
			});
		},
		changeSliderStatus: function (id) {
			const _this = this;
			axios.get(base_path + "slider/status/" + id).then((response) => {
				if (response.data.code === 200) {
					_this.getSlider();
					_this.$toastr.success(response.data.message, "Slider", {
						timeOut: 5000,
					});
				}
				if (response.data.code === 400) {
					_this.$swal("Opps", "Something Went Wrong", "warning");
				}
			});
		},
		EditSlider: function (id, data) {
			const _this = this;
			_this.openModal("editModal");
			_this.editSlider = data;
			_this.imageSource =
				"/" +
				(data.path ? data.path : "backend_assets/assets/images/sample.jpg");
		},
		updateSlider: function (id) {
			const _this = this;
			axios
				.put(base_path + "slider/" + id, _this.editSlider)
				.then((response) => {
					if (response.data.code == 201) {
						this.$toastr.success(response.data.message, "Slider", {
							timeOut: 5000,
						});

						_this.hideModal("editModal");
						this.getSlider();
					} else {
						this.$toastr.warning("Something Went Wrong", "Sorry!", {
							timeOut: 5000,
						});
					}
				})
				.catch((error) => {
					if (error.response.code === 422) {
						_this.AllError = error.response.data.errors;
					} else {
						// this.$toastr.error("Application Error", "Sorry");
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

		hideModal: function (modal) {
			this.$modal.hide(modal);
		},
		openModal: function (modal) {
			this.$modal.show(modal, { draggable: true }, { height: "auto" });
		},
	},
	created() {
		// this.getUserPermissions();
		this.getSlider();
	},
};
</script>