<template>
	<div>
		<h3>
			Medicine List
		</h3>
		<br />

		<div class="panel panel-primary">
			<div class="panel-heading">
				<div class="panel-title">Cateogy List</div>
				<div class="panel-options" style="padding: 7px 15px;">
					<button class="btn btn-info btn-sm" data-toggle="modal" data-target="#importModal" type="button"><i class="fas fa-upload"></i>&nbsp&nbspImport</button>

					<button type="button" class="btn btn-blue btn-sm" ><i class="entypo-plus-circled"></i>Add</button>
				</div>
			</div>

			<div class="panel-heading" style="padding: 18px 0px 3px;">
				<div class="pull-left col-sm-1">
					<div class="form-group">
						<label class="control-label">Show</label>
						<select class="form-control" style="position: absolute; top: 6px; left: 59px;" @change="getMedicine()" v-model="custom_row">
							<option v-for="row in select_row" v-text="row"></option>
						</select>
					</div>
				</div>
				<div class="pull-right">
					<label class="d-block mr-4">
						<input type="search" style="margin-top: 10px; margin-left:-12px" v-model="search" @keyup="getMedicine()" class="form-control" placeholder="Search" aria-controls="DataTables_Table_2">
					</label>
				</div>
			</div>
			<!-- Medicine List -->
			<table class="table table-bordered responsive">
				<thead >
					<tr>
						<th class="text-center">#</th>
						<th class="text-center">Product name</th>
						<th class="text-center">Generic</th>
						<th class="text-center">Category</th>
						<th class="text-center">Image</th>
						<th class="text-center">Status</th>
						<th class="text-center" width="33%">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(data,index) in medicineData.data" :key="index">
						<td class="text-center">{{ ++index }}</td>
						<td>{{ data.name }}</td>
						<td>{{ data.generic_id ? data.generic_id : "Not Set"}}</td>
						<td>{{ data.category_id ? data.category_id : "Not Set"}}</td>
						<td><img :src="'/frontend_assets/assets/img/item.png'" width=40></td>
						<td class="text-center">
							<div class='label' :class="data.status==1 ? 'label-success' : 'label-warning'">{{ data.status == 1 ? 'On' : 'Off' }}</div>
						</td>
						<td class="text-center">

							<!-- <button type="button" class="btn btn-default" @click="ViewMedicine(data.id)" v-if="permissions.includes('Medicine_View')">
								<i class="entypo-eye"></i>
							</button>
							<button type="button" class="btn" :class="data.status==1 ? 'btn-success' : 'btn-warning'" @click="changeMedicineStatus(data.id)" v-if="permissions.includes('Medicine_Status')">
								<i class="entypo-arrows-ccw"></i>
							</button>
							<router-link :to="{ name: '/medicine/edit', params:{id: data.id }}" type="button" style="margin-top:4px;" v-if="permissions.includes('Medicine_Edit')">
								<button class="btn btn-info">
									<i class="entypo-pencil"></i>
								</button>
							</router-link>

							<button class="btn btn-red" @click="DeleteMedicine(data.id,index)" v-if="permissions.includes('Medicine_Delete')">
								<i class="entypo-cancel"></i>
							</button> -->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- Pagination -->
		<div class="text-center">
			<pagination style="margin-left:20px" :data="medicineData" :limit=3 @pagination-change-page="getMedicine">
				<span slot="prev-nav">&lt; Previous</span>
				<span slot="next-nav">Next &gt;</span>
			</pagination>
		</div>

	    <!-- Medicine Import  Modal -->
		<div class="modal fade in" id="importModal" tabindex="-1" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title" id="exampleModalLabel"> <b>Import Medicine</b></h4>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
					</div>
					<form method="post" enctype="multipart/form-data" @submit.prevent="ImportMedicine()">
						<div class="modal-body">
							<div class="fileinput fileinput-new" data-provides="fileinput">
								<strong>*Data must not contain ID column.</strong> <br>
								<label for="import">Import File(csv,xlsx):
									<span class="btn btn-info btn-file">
										<span class="fileinput-new">Select file</span>
										<input type="file" ref="file" name="import" id="import">
									</span>
								</label>
								<span class="fileinput-filename"></span>
								<a href="#" class="close fileinput-exists" data-dismiss="fileinput" style="float: none">&times;</a>
							</div>
						</div>
						<div class="modal-footer">
							<button class="btn btn-success btn-icon icon-left " type="submit">
								Import
								<i class="entypo-doc-text"></i>
							</button>
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						</div>
					</form>

				</div>
			</div>
		</div>
	    <!-- End Medicine Import Modal -->

	</div>
</template>

<script >
	export default {
	    name: "ListMedicineComponent",
		data() {
			return {
				medicineData: {},
				search: "",
				custom_row: 10,
				select_row: [10, 20, 30, 40, 50],
				importFile: "",
			};
		},
		methods: {
			ImportMedicine: function () {
				const _this = this;
				_this.importFile = _this.$refs.file.files[0];
				let formData = new FormData();
				formData.append("file", _this.importFile);
				axios
					.post(base_path + "medicine/import", formData)
					.then((response) => {
						console.log(response);
						if (response.data.status == 201) {
							this.$toastr.success(
								response.data.message,
								"Medicine",
								{
									timeOut: 5000,
								}
							);
							_this.getMedicine();
							$(`#importModal`).modal("hide");
						} else {
							this.$toastr.warning("Something Went Wrong", "Sorry!", {
								timeOut: 5000,
							});
						}
					});
			},
			getMedicine: function (page = 1, custom_row = 10) {
				const _this = this;
				const main_url =
					base_path +
					"medicine?q=" +
					_this.search +
					"&page=" +
					page +
					"&row=" +
					_this.custom_row;
				axios
					.get(main_url)
					.then((response) => {
						_this.medicineData = response.data;
					})
					.catch((error) => {
						console.log(error);
					});
			},
		},
		created() {
			this.getMedicine();
		},
        
	}
</script>
<style scoped>

	label {
	    margin-right: 15px;
	}

	.form-control {
		border: 1px solid #c8c1c1;
	}
</style>