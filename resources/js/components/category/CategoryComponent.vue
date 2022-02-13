<template>
	<div>
		<h3>Form List</h3>
		<br />

		<div class="panel panel-primary">
			<div class="panel-heading">
				<div class="panel-title">Form List</div>
				<div class="panel-options" style="padding: 7px 15px;">
					<button @click="openModal('addModal')" class="btn btn-blue btn-sm" type="button" v-if="permissions.includes('Add_Forms')">
						<i class="entypo-plus-circled"></i>Add
					</button>
				</div>
			</div>

			<div class="panel-heading" style="padding: 18px 0px 3px;">
				<div class="container">
					<div class="row">
						<div class="col-sm-1">
							<div class="form-group">
								<label class="control-label">Show</label>
								<select @change="getCategory" class="form-control" v-model="customRow">
									<option v-for="row in selectRow" v-text="row"></option>
								</select>
							</div>
						</div>
						<div class="col-md-2"></div>
						<div class="col-md-5">
							<input @keyup="getCategory()" aria-controls="DataTables_Table_2" class="form-control search-box" placeholder="Search according to category name & code" type="search" v-model="search" />
						</div>
					</div>
				</div>
			</div>

			<!-- Category List -->
			<table class="table table-bordered responsive">
				<thead>
					<tr>
						<th class="text-center">#</th>
						<th class="text-center">Name</th>
						<th class="text-center">Short</th>
						<th class="text-center">Details</th>
						<th class="text-center">Status</th>
						<th class="text-center" width="33%">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(category, index) in allCategories.data">
						<td class="text-center">{{ ++index }}</td>
						<td class="text-center">{{ category.category_name }}</td>
						<td class="text-center">{{ category.code }}</td>
						<td class="text-center">{{ category.description }}</td>
						<td class="text-center">
							<span :class="category.status == 1 ? 'badge-success' : 'badge-warning'" class="badge">{{ category.status == 1 ? 'Active' : 'Inactive'}}</span>
						</td>
						<td class="text-center">
							<button :class="category.status == 1 ? 'btn-success' : 'btn-warning'" @click="changeStatus(category.id)" class="btn-sm" type="button" v-if="permissions.includes('Status_Forms')">
								<i class="fas fa-sync"></i>
							</button>
							<button @click="editCategory(category.id, category)" class="btn btn-info btn-sm" type="button" v-if="permissions.includes('Edit_Forms')">
								<i class="fas fa-pen"></i>
							</button>
							<button @click="deleteCategory(category.id, index)" class="btn btn-danger btn-sm" type="button" v-if="permissions.includes('Delete_Forms')">
								<i class="fas fa-trash"></i>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Pagination -->
		<div class="text-center">
			<pagination :data="allCategories" @pagination-change-page="getCategory" style="margin-left: 20px">
				<span slot="prev-nav">&lt;Previous</span>
				<span slot="next-nav">Next &gt;</span>
			</pagination>
		</div>

		<!-- Category Add Modal -->
		<modal :adaptive="true" :clickToClose="false" :draggable="true" :limit="3" :resizable="true" height="auto" name="addModal">
			<div class="modal-header">
				<button @click="closeModal('addModal')" aria-hidden="true" class="close" data-dismiss="modal" type="button">&times;</button>
				<h4 class="modal-title">
					<i class="entypo-plus-circled"></i>Add New Form
				</h4>
			</div>
			<div class="modal-body">
				<form @submit.prevent="addNewCategory">
					<div class="form-group">
						<label for>Name</label>
						<input class="form-control" id="category_name" placeholder="Enter Category Name" type="text" v-model="addCategory.category_name" />
						<span class="text-danger" v-if="allErrors.category_name" v-text="allErrors.category_name[0]"></span>
					</div>
					<div :class="allErrors.category_name ? 'validate-has-error' : ''" class="form-group">
						<label for>Short</label>
						<input class="form-control" id="code" placeholder="Enter Form short Ex. tab, syr" type="text" v-model="addCategory.code" />
						<span class="text-danger" v-if="allErrors.code" v-text="allErrors.code[0]"></span>
					</div>
					<div class="form-group">
						<label for>Description</label>
						<textarea class="form-control" id="description" placeholder="Enter Category Description" rows="5" v-model="addCategory.description"></textarea>
					</div>
					<div class="modal-footer">
						<button @click="closeModal('addModal')" class="btn btn-primary" data-dismiss="modal" type="button">Close</button>
						<button class="btn btn-success">Save</button>
					</div>
				</form>
			</div>
		</modal>
		<!-- End Category Add Modal -->

		<!-- Category Edit Modal -->
		<modal :adaptive="true" :clickToClose="false" :draggable="true" :limit="3" :resizable="true" height="auto" name="editModal">
			<div class="modal-header">
				<button @click="closeModal('editModal')" aria-hidden="true" class="close" data-dismiss="modal" type="button">&times;</button>
				<h4 class="modal-title">
					<i class="entypo-plus-circled"></i>
					Edit {{editCategoryData.category_name}} Form
				</h4>
			</div>
			<div class="modal-body">
				<form @submit.prevent="updateCategory( editCategoryData.id )">
					<div class="form-group">
						<label for>Name</label>
						<input class="form-control" placeholder="Enter Category Name" type="text" v-model="editCategoryData.category_name" />
						<span class="text-danger" v-if="allErrors.category_name" v-text="allErrors.category_name[0]"></span>
					</div>
					<div :class="allErrors.category_name ? 'validate-has-error' : ''" class="form-group">
						<label for>Code</label>
						<input class="form-control" placeholder="Enter Form short Ex. tab, syr" type="text" v-model="editCategoryData.code" />
						<span class="text-danger" v-if="allErrors.code" v-text="allErrors.code[0]"></span>
					</div>
					<div class="form-group">
						<label for>Description</label>
						<textarea class="form-control" placeholder="Enter Category Description" rows="5" v-model="editCategoryData.description"></textarea>
					</div>
					<div class="modal-footer">
						<button @click="closeModal('editModal')" class="btn btn-primary" data-dismiss="modal" type="button">Close</button>
						<button class="btn btn-success">Save</button>
					</div>
				</form>
			</div>
		</modal>
		<!-- End Category Edit Modal -->
	</div>
</template>

<script >
export default {
	name: "CategoryComponent",
	data() {
		return {
			addCategory: {
				category_name: "",
				code: "",
				description: "",
			},
			allCategories: {},
			editCategoryData: {},
			allErrors: [],
			search: "",
			customRow: 10,
			selectRow: [10, 20, 30, 40, 50],
		};
	},
	methods: {
		addNewCategory: function () {
			const _this = this;
			axios
				.post(base_path + "category", _this.addCategory)
				.then((response) => {
					if (response.data.code == 201) {
						this.$toastr.success(response.data.message, "Category", {
							timeout: 5000,
						});
						_this.getCategory();
						_this.closeModal("addModal");
						_this.clearForm(_this.addCategory);
					}
				})
				.catch((error) => {
					if (error.response.status === 422) {
						_this.allErrors = error.response.data.errors;
					} else {
						_this.$toastr.warning("Application error", "Sorry", {
							timeOut: 5000,
						});
					}
				});
		},

		getCategory: function (page = 1, customRow = 10) {
			const _this = this;
			const url =
				base_path +
				"category?q=" +
				_this.search +
				"&page=" +
				page +
				"&row=" +
				_this.customRow;

			axios
				.get(url)
				.then((response) => {
					_this.allCategories = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},

		editCategory: function (id, categoryData) {
			const _this = this;
			_this.openModal("editModal");
			_this.editCategoryData = categoryData;
		},

		updateCategory: function (id) {
			const _this = this;
			axios
				.put(base_path + "category/" + id, _this.editCategoryData)
				.then((response) => {
					if (response.data.code == 201) {
						this.$toastr.success(response.data.message, "Category", {
							timeout: 5000,
						});
						_this.closeModal("editModal");
						_this.clearForm(_this.editCategory);
						_this.getCategory();
					} else {
						this.$toastr.warning("Something went wrong", "Sorry", {
							timeout: 5000,
						});
					}
				})
				.catch((error) => {
					if (error.response.status === 422) {
						_this.allErrors = error.response.data.errors;
					} else {
						_this.$toastr.error("Application error", "Sorry", {
							timeOut: 5000,
						});
					}
				});
		},

		deleteCategory: function (id, index) {
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
						.delete(base_path + "category/" + id)
						.then((response) => {
							if (response.status == 200) {
								this.$swal("Deleted!", response.data.message, "success");
							}
							_this.getCategory();
						})
						.catch((error) => {
							console.log(error);
						});
				}
			});
		},

		changeStatus: function (id) {
			const _this = this;
			axios
				.get(base_path + "category/status/" + id)
				.then((response) => {
					_this.getCategory();
					if (response.data.code === 200) {
						_this.$toastr.warning(
							"This category is inactive successfully!",
							"Category",
							{
								timeOut: 5000,
							}
						);
					}
					if (response.data.code === 201) {
						_this.$toastr.success(
							"This category is active successfully!",
							"Category",
							{
								timeOut: 5000,
							}
						);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},

		openModal: function (modal) {
			this.$modal.show(modal);
		},

		closeModal: function (modal) {
			this.$modal.hide(modal);
		},

		clearForm: function (form) {
			const _this = this;
			_this.allErrors = [];
			Object.keys(form).forEach(function (key) {
				form[key] = "";
			});
		},
	},
	created: function () {
		this.getCategory();
		this.getUserPermissions();
	},
};
</script>
<style scoped>
label {
	margin-right: 15px;
}

.form-control {
	border: 1px solid #c8c1c1;
}

table tr {
	text-align: center;
}

table tr th {
	color: #000000d4;
	font-weight: 700;
	text-align: center;
}

.search-box {
	height: 40px;
	margin: 12px 0px 8px;
}

::placeholder {
	color: #4e5157;
	opacity: 1;
}

:-ms-input-placeholder {
	color: #4e5157;
}

::-ms-input-placeholder {
	color: #4e5157;
}
</style>
