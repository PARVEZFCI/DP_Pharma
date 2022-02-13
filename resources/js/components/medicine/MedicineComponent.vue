<template>
	<div>
		<h3>Medicine List</h3>
		<br />

		<div class="panel panel-primary">
			<div class="panel-heading">
				<div class="panel-title">Medicine List</div>
				<div class="panel-options" style="padding: 7px 15px;">
					<button @click="print()" class="btn btn-primary btn-sm" type="button" v-if="permissions.includes('Print_Medicine')">
						<i class="fa fa-print"></i>&nbsp&nbspPrint
					</button>
				<!-- 	<button class="btn btn-info btn-sm" data-target="#importModal" data-toggle="modal" type="button" v-if="permissions.includes('Import_Medicine')">
						<i class="fa fa-upload"></i>&nbsp&nbspImport
					</button> -->
					<!-- <button class="btn btn-default btn-sm" data-target="#exportModal" data-toggle="modal" type="button" v-if="permissions.includes('Export_Medicine')">
						<i class="fa fa-download"></i>&nbsp&nbspExport
					</button> -->
					<button class="btn btn-success btn-sm" data-target="#addModal" data-toggle="modal" type="button" v-if="permissions.includes('Add_Medicine')">
						<i class="fa fa-plus"></i>&nbsp&nbspAdd
					</button>
				</div>
			</div>

			<div class="panel-heading" style="padding: 6px 0px 3px;">
				<div class="container">
					<div class="row">
						<div class="col-md-1">
							<div class="form-group">
								<label>Show</label>
								<select @change="getMedicine" class="form-control" v-model="custom_row">
									<option v-for="row in select_row" v-text="row"></option>
								</select>
							</div>
						</div>
						<div class="col-md-2"></div>
						<div class="col-md-5">
							<input
								@change="getMedicine()"
								@keyup="getMedicine()"
								aria-controls="DataTables_Table_2"
								class="form-control search-box col-sm-11"
								placeholder="Search"
								style="width:90%"
								type="search"
								v-model="search"
							/>
							<button @click="getMedicine()" class="btn btn-info btn-sm col-sm-1" style="margin-top:20px">
								<i class="fas fa-search"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
			<!-- Medicine List -->
			<div class="table-responsive">
				<table class="table table-bordered">
					<thead>
						<tr>
							<th class="text-center">#</th>
							<th class="text-center">Product name</th>
							<!-- <th class="text-center">Generic</th> -->
							<th class="text-center">Manufacturer</th>
							<th class="text-center">Price</th>
							<!-- <th class="text-center">Retailer Discount</th> -->
							<!-- <th class="text-center">Retail</th> -->
							<th class="text-center">Image</th>
							<th class="text-center">Status</th>
							<th class="text-center" width="12%">Action</th>
						</tr>
					</thead>
					<tbody>
						<tr :key="index" v-for="(data,index) in medicineData.data">
							<td class="text-center">{{ ++index }}</td>
							<td>
								{{ data.category && data.category.category_name}}
								<b style="color:white;font-weight:700;font-size:13px">{{ data.name }}</b>
								<br />
								{{ data.dosage }}
								<br />
								{{ data.manufacturer && data.manufacturer.manufacture_name }}
							</td>
							<td>{{ data.manufacturer ? data.manufacturer.manufacture_name : "Not Set"}}</td>
							<td>{{ data.prices ? (data.prices[0] ? data.prices[0].price : "0.00") : "0.00"}}</td>
							<td>
								<img :src="data.image ? (data.image.charAt(0)=='/' ? data.image : '/'+data.image) : '/frontend_assets/assets/img/item.png'" width="40" />
							</td>
							<td class="text-center">
								<span
									:class="data.status == 1 ? 'badge-success' : 'badge-warning'"
									@click="changeStatus(data.id)"
									class="badge"
									style="cursor:pointer"
									v-if="permissions.includes('Status_Medicine')"
								>{{ data.status == 1 ? 'Active' : 'Inactive'}}</span>
								<span :class="data.status == 1 ? 'badge-success' : 'badge-warning'" class="badge" style="cursor:pointer" v-else>{{ data.status == 1 ? 'Active' : 'Inactive'}}</span>
							</td>
							<td class="text-center">
								<button @click="viewStock(data.id)" class="btn btn-xs btn-primary" data-target="#viewModal" data-toggle="modal" v-if="permissions.includes('View_Medicine')">
									<i class="fas fa-eye"></i>
								</button>
								<button @click="editMedicine(data.id)" class="btn btn-xs btn-info" data-target="#editModal" data-toggle="modal" type="button" v-if="permissions.includes('Edit_Medicine')">
									<i class="fas fa-pen"></i>
								</button>
								<button @click="deleteMedicine(data.id)" class="btn btn-xs btn-danger" v-if="permissions.includes('Delete_Medicine')">
									<i class="fas fa-trash"></i>
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Print Section -->
		<div class="table-responsive" hidden id="printDiv">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th class="text-center">#</th>
						<th class="text-center">Product name</th>
						<th class="text-center">Generic</th>
						<th class="text-center">Manufacturer</th>
						<th class="text-center">Price</th>
						<th class="text-center">Status</th>
					</tr>
				</thead>
				<tbody>
					<tr :key="index" v-for="(data,index) in medicineData.data">
						<td class="text-center">{{ ++index }}</td>
						<td>
							{{ data.category && data.category.category_name}}
							<b style="color:black">{{ data.name }}</b>
							<br />
							{{ data.dosage }}
							<br />
							{{ data.manufacturer && data.manufacturer.manufacture_name }}
						</td>
						<td>{{ data.generic ? data.generic.generic_name : "Not Set"}}</td>
						<td>{{ data.manufacturer ? data.manufacturer.manufacture_name : "Not Set"}}</td>
						<td>{{ data.prices ? (data.prices[0] ? data.prices[0].price : "0.00") : "0.00"}}</td>
						<td class="text-center">{{ data.status == 1 ? 'Active' : 'Inactive'}}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- Print Section -->

		<!-- Pagination -->
		<div class="text-center">
			<pagination :data="medicineData" :limit="3" @pagination-change-page="getMedicine" style="margin-left:20px">
				<span slot="prev-nav">&lt; Previous</span>
				<span slot="next-nav">Next &gt;</span>
			</pagination>
		</div>

		<!-- MEDICINE STOCK VIEW -->
		<div aria-hidden="true" class="modal fade in" id="viewModal" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title" id="exampleModalLabel">
							<b>Medicine Stock View</b>
						</h4>
						<button aria-label="Close" class="close" data-dismiss="modal" type="button">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="col-md-12">
							<table class="table table-borderd">
								<thead>
									<tr>
										<th>Sl</th>
										<th>Batch</th>
										<th>Exp Date</th>
										<th>Current Stock</th>
										<th>Sell</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(stock,key) in ViewStock">
										<td>{{++key}}</td>
										<td>{{stock.batch}}</td>
										<td>{{stock.exp_date}}</td>
										<td>{{stock.stock}}</td>
										<td>{{stock.sale}}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="modal-footer">
						<a :href="'/medicine/export/'+exportType" @click="closeExportModal()" class="btn btn-success btn-icon icon-left">
							Export
							<i class="fa fa-download"></i>
						</a>
						<button class="btn btn-secondary" data-dismiss="modal" ref="exportCloseBtn" type="button">Close</button>
					</div>
				</div>
			</div>
		</div>
		<!-- MEDICINE STOCK VIEW -->

		<!-- Medicine Import  Modal -->
		<div aria-hidden="true" class="modal fade in" id="importModal" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title" id="exampleModalLabel">
							<b>Import Medicine</b>
						</h4>
						<button aria-label="Close" class="close" data-dismiss="modal" type="button">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<form @submit.prevent="ImportMedicine()" enctype="multipart/form-data" method="post">
						<div class="modal-body">
							<div class="fileinput fileinput-new" data-provides="fileinput">
								<strong>*Data must not contain ID column.</strong>
								<br />
								<label for="import">
									Import File(csv,xlsx):
									<span class="btn btn-info btn-file">
										<span class="fileinput-new">Select file</span>
										<input id="import" name="import" ref="file" type="file" />
									</span>
								</label>
								<span class="fileinput-filename"></span>
								<a class="close fileinput-exists" data-dismiss="fileinput" href="#" style="float: none">&times;</a>
							</div>
						</div>
						<div class="modal-footer">
							<button class="btn btn-success btn-icon icon-left" type="submit">
								Import
								<i class="entypo-doc-text"></i>
							</button>
							<button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- End Medicine Import Modal -->

		<!-- Medicine Export  Modal -->
		<div aria-hidden="true" class="modal fade in" id="exportModal" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title" id="exampleModalLabel">
							<b>Export Medicine</b>
						</h4>
						<button aria-label="Close" class="close" data-dismiss="modal" type="button">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="col-md-12">
							<div class="form-group">
								<label>File Type?</label>
								<select class="form-control" v-model="exportType">
									<option value="csv">CSV(.csv)</option>
									<option value="xlsx">EXCEL(.xlsx)</option>
								</select>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<a :href="'/medicine/export/'+exportType" @click="closeExportModal()" class="btn btn-success btn-icon icon-left">
							Export
							<i class="fa fa-download"></i>
						</a>
						<button class="btn btn-secondary" data-dismiss="modal" ref="exportCloseBtn" type="button">Close</button>
					</div>
				</div>
			</div>
		</div>
		<!-- End Medicine Import Modal -->

		<!-- Medicine Add Modal -->
		<div class="modal fade in" id="addModal">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title" id="exampleModalLabel">
							<b>Add Medicine</b>
						</h4>
						<button aria-label="Close" class="close" data-dismiss="modal" type="button">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<form @submit.prevent="addNewMedicine()" enctype="multipart/form-data" method="post">
						<div class="modal-body">
							<div class="row">
								<div class="col-md-4">
									<div class="form-group">
										<label>Medicine</label>
										<input class="form-control" name type="text" v-model="addMedicine.name" />
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label>Dosage</label>
										<input class="form-control" name type="text" v-model="addMedicine.dosage" />
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label>Alert Quantity</label>
										<input class="form-control" name type="number" v-model="addMedicine.alert_quantity" />
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Form</label>
										<!-- <input class="form-control" name type="text" v-model="editMedicineData.category_id" /> -->
										<model-select :options="categories" placeholder="Select Form" v-model="addMedicine.category_id"></model-select>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Manufacture</label>
										<model-select :options="manufactures" placeholder="Select Manufacturer" v-model="addMedicine.manufacturer_id"></model-select>
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label>Generic</label>
										<model-select :options="generics" placeholder="Select Generic" v-model="addMedicine.generic_id"></model-select>
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label>Primary Unit</label>
										<model-select :options="units" placeholder="Select Primary Unit" v-model="addMedicine.primary_unit"></model-select>
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label>Secondary Unit</label>
										<model-select :options="units" placeholder="Select Secondary Unit" v-model="addMedicine.secondary_unit"></model-select>
									</div>
								</div>


								<div class="col-md-4">
									<div class="form-group">
										<label>Conversion Factor</label>
										<input @keypress="filterNeg($event)" class="form-control" min="1" type="number" v-model="addMedicine.conversion_factor" />
									</div>
								</div>

								<div class="col-md-4">
									<div class="form-group">
										<label>Third Unit</label>
										<model-select :options="units" placeholder="Select Secondary Unit" v-model="addMedicine.third_unit"></model-select>
									</div>
								</div>

								<div class="col-md-4">
									<div class="form-group">
										<label>Conversion Factor Third</label>
										<input @keypress="filterNeg($event)" class="form-control" min="1" type="number" v-model="addMedicine.conversion_factor_third" />
									</div>
								</div>
								
								<div class="col-md-4">
									<div class="form-group">
										<label>MRP</label>
										<input class="form-control" step="0.01" type="number" v-model="addMedicine.price" />
									</div>
								</div>
								<!-- <div class="col-md-4"></div>
								<div class="col-md-4"></div> -->
								<div class="col-md-12">
									<div class="form-group">
										<label for>Image</label>
										<input @change="getImage()" name type="file" />
									</div>
									<center>
										<div class="mb-3" style="height: 100px; width:100px">
											<img :src="addMedicine.image ? addMedicine.image : '/backend_assets/assets/images/sample_img.jpg'" height="100" id="previmage" width="100" />
										</div>
									</center>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button class="btn btn-primary closeModal" data-dismiss="modal" ref="addCloseBtn" type="button">Close</button>
							<button class="btn btn-success" type="submit">Save</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- Medicine Add Modal -->

		<!-- Medicine Edit Modal -->
		<div class="modal fade" id="editModal">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Edit {{ editMedicineData.name }} Medicine</h5>
						<button aria-label="Close" class="close" data-dismiss="modal" type="button">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form @submit.prevent="updateMedicine(editMedicineData.id)" enctype="multipart/form-data" method="post">
						<div class="modal-body">
							<div class="row">
								<div class="col-md-4">
									<div class="form-group">
										<label>Medicine</label>
										<input class="form-control" name type="text" v-model="editMedicineData.name" />
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label>Dosage</label>
										<input class="form-control" name type="text" v-model="editMedicineData.dosage" />
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label>Alert Quantity</label>
										<input class="form-control" name type="number" v-model="editMedicineData.alert_quantity" />
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Form</label>
										<model-select :options="categories" placeholder="Select Form" v-model="editMedicineData.category_id"></model-select>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Manufacture</label>
										<model-select :options="manufactures" placeholder="Select Manufacture" v-model="editMedicineData.manufacturer_id"></model-select>
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label>Generic</label>
										<model-select :options="generics" placeholder="Select Generic" v-model="editMedicineData.generic_id"></model-select>
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label>Primary Unit</label>
										<model-select :options="units" placeholder="Select Primary Unit" v-model="editMedicineData.primary_unit"></model-select>
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label>Secondary Unit</label>
										<model-select :options="units" placeholder="Select Secondary Unit" v-model="editMedicineData.secondary_unit"></model-select>
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label>Conversion Factor</label>
										<input @keypress="filterNeg($event)" class="form-control" min="1" type="number" v-model="editMedicineData.conversion_factor" />
									</div>
								</div>

                               <div class="col-md-4">
									<div class="form-group">
										<label>Third Unit</label>
										<model-select :options="units" placeholder="Select Secondary Unit" v-model="editMedicineData.third_unit"></model-select>
									</div>
								</div>

								<div class="col-md-4">
									<div class="form-group">
										<label>Conversion Factor Third</label>
										<input @keypress="filterNeg($event)" class="form-control" min="1" type="number" v-model="editMedicineData.conversion_factor_third" />
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>MRP</label>
										<input class="form-control" step="0.01" type="number" v-model="editMedicineData.price" />
									</div>
								</div>

								<div class="col-md-12">
									<div class="form-group">
										<label for>Image</label>
										<input @change="getImage()" name type="file" />
									</div>
									<center>
										<div class="mb-3" style="height: 100px; width:100px">
											<img :src="editMedicineData.image ? editMedicineData.image : '/backend_assets/assets/images/sample_img.jpg'" height="100" id="previmage" width="100" />
										</div>
									</center>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button @click="show=true" class="btn btn-info" data-dismiss="modal" type="button" v-if="permissions.includes('Duplicate_Medicine')">Create New</button>
							<button class="btn btn-secondary" data-dismiss="modal" ref="updateCloseBtn" type="button">Close</button>
							<button class="btn btn-primary" type="submit">Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- End Medicine Edit Modal -->

		<!-- Duplicate Medicine Modal -->
		<div class="modal-mask" transition="modal" v-show="show">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-header">
						<slot name="header">
							<h3>
								<b>Create New Medicine</b>
							</h3>
						</slot>
					</div>
					<form @submit.prevent="duplicateMedicine()" enctype="multipart/form-data" method="post">
						<div class="modal-body">
							<slot name="body">
								<div class="row">
									<div class="col-md-4">
										<div class="form-group">
											<label>Medicine</label>
											<input class="form-control" name type="text" v-model="editMedicineData.name" />
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label>Dosage</label>
											<input class="form-control" name type="text" v-model="editMedicineData.dosage" />
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label>Alert Quantity</label>
											<input class="form-control" name type="number" v-model="editMedicineData.alert_quantity" />
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label>Form</label>
											<model-select :options="categories" placeholder="Select Form" v-model="editMedicineData.category_id"></model-select>
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label>Manufacture</label>
											<model-select :options="manufactures" placeholder="Select Manufacture" v-model="editMedicineData.manufacturer_id"></model-select>
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label>Generic</label>
											<model-select :options="generics" placeholder="Select Generic" v-model="editMedicineData.generic_id"></model-select>
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label>Primary Unit</label>
											<model-select :options="units" placeholder="Select Primary Unit" v-model="editMedicineData.primary_unit"></model-select>
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label>Secondary Unit</label>
											<model-select :options="units" placeholder="Select Secondary Unit" v-model="editMedicineData.secondary_unit"></model-select>
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label>Conversion Factor</label>
											<input class="form-control" type="number" v-model="editMedicineData.conversion_factor" />
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label>MRP</label>
											<input class="form-control" step="0.01" type="number" v-model="editMedicineData.price" />
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label for>Image</label>
											<input @change="getImage()" name type="file" />
										</div>
										<center>
											<div class="mb-3" style="height: 100px; width:100px">
												<img :src="editMedicineData.image ? editMedicineData.image : '/backend_assets/assets/images/sample_img.jpg'" height="100" id="previmage" width="100" />
											</div>
										</center>
									</div>
								</div>
							</slot>
						</div>

						<div class="modal-footer">
							<slot name="footer">
								<button class="btn btn-info">
									<i class="fas fa-check"></i>Submit
								</button>
								<button @click="show = false" class="btn btn-primary" type="button">Close</button>
							</slot>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- Duplicate Medicine Modal -->
	</div>
</template>

<script >
import { ModelSelect } from "vue-search-select";
export default {
	components: {
		ModelSelect,
	},
	name: "ListMedicineComponent",
	data() {
		return {
			medicineData: {},
			addMedicine: {
				name: "",
				dosage: "",
				category_id: "",
				generic_id: "",
				manufacturer_id: "",
				alert_quantity: 5,
				image: "",
				details: "",
				price: "",
				primary_unit: 2,
				secondary_unit: "",
				third_unit: "",
				conversion_factor: 1,
				duplicate: 0,
				conversion_factor_third: 1
			},
			search: "",
			show: false,
			custom_row: 20,
			select_row: [20, 40, 60, 80, 100, 500, 1000],
			importFile: "",
			categories: [],
			manufactures: [],
			units: [],
			generics: [],
			editMedicineData: {
				name: "",
				dosage: "",
				alert_quantity: "",
				category_id: "",
				manufacturer_id: "",
				generic_id: "",
				primary_unit: "",
				secondary_unit: "",
				conversion_factor: "",
				price: "",
				conversion_factor_third: "",
				third_unit: "",
			},
			exportType: "xlsx",
			page: "",
			current_page: "",
			ViewStock: {},
		};
	},
	methods: {
		getCategory: function () {
			const _this = this;
			axios
				.get(base_path + "allActiveCategory")
				.then((response) => {
					_this.categories = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},

		getGenerics: function () {
			const _this = this;
			axios
				.get(base_path + "allActiveGeneric")
				.then((response) => {
					_this.generics = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},

		getManufactures: function () {
			const _this = this;
			axios
				.get(base_path + "allActiveManufacture")
				.then((response) => {
					_this.manufactures = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},

		getUnits: function () {
			const _this = this;
			axios
				.get(base_path + "allActiveUnit")
				.then((response) => {
					_this.units = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},

		getImage: function () {
			let file = event.target.files[0];
			let reader = new FileReader();
			reader.onload = (event) => {
				this.addMedicine.image = event.target.result;
				this.editMedicineData.image = event.target.result;
			};
			reader.readAsDataURL(file);
		},

		addNewMedicine: function () {
			const _this = this;
			
			
			axios
				.post(base_path + "medicine", _this.addMedicine)
				.then((response) => {
					console.log(response);
					if (response.data.code == 201) {
						this.$toastr.success(response.data.message, "Medicine", {
							timeout: 5000,
						});
						const elem = this.$refs.addCloseBtn;
						elem.click();
						_this.show = false;
						_this.clearForm(_this.addMedicine);
						_this.getMedicine(_this.current_page);
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

		clearForm: function (form) {
			const _this = this;
			_this.AllError = [];
			Object.keys(form).forEach((key) => {
				form[key] = "";
			});
		},

		ImportMedicine: function () {
			const _this = this;
			_this.importFile = _this.$refs.file.files[0];
			let formData = new FormData();
			formData.append("file", _this.importFile);
			axios
				.post(base_path + "medicine/import", formData)
				.then((response) => {
					if (response.status == 200) {
						this.$toastr.success(response.data[0], {
							timeOut: 5000,
						});
						_this.getMedicine();
						$("#importModal").modal("hide");
						$(".modal-backdrop").hide();
					} else {
						this.$toastr.warning("Something Went Wrong", "Sorry!", {
							timeOut: 5000,
						});
					}
				})
				.catch((error) => {
					if (error.response.status === 422) {
						this.$toastr.error("File not valid", "Sorry!", {
							timeOut: 5000,
						});
					} else {
						_this.$toastr.warning("Application error", "Sorry", {
							timeOut: 5000,
						});
					}
				});
		},
		closeExportModal: function () {
			const self = this;
			self.$toastr.success("Medicine export is processing", "Please Wait", {
				timeOut: 5000,
			});
			const elem = this.$refs.exportCloseBtn;
			elem.click();
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
					console.log(response.data);
					_this.page = page;
					_this.current_page = response.data.current_page;
					_this.medicineData = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},

		editMedicine: function (id) {
			const _this = this;
			axios
				.get(base_path + "medicine/" + id + "/edit")
				.then((response) => {
					_this.editMedicineData.id = response.data.id;
					_this.editMedicineData.name = response.data.name;
					_this.editMedicineData.dosage = response.data.dosage;
					_this.editMedicineData.category_id = response.data.category_id;
					_this.editMedicineData.alert_quantity = response.data.alert_quantity;
					_this.editMedicineData.conversion_factor =
						response.data.conversion_factor;
					_this.editMedicineData.generic_id = response.data.generic_id;
					_this.editMedicineData.manufacturer_id =
						response.data.manufacturer_id;
					_this.editMedicineData.price = response.data.prices[0].price;
					_this.editMedicineData.primary_unit = response.data.prices[0].unit_id
						? response.data.prices[0].unit_id
						: 2;
					_this.editMedicineData.secondary_unit = response.data.prices[1]
						? response.data.prices[1].unit_id
						: 3;

					_this.editMedicineData.third_unit = response.data.prices[2]
						? response.data.prices[2].unit_id
						: 4;
					_this.editMedicineData.conversion_factor_third = response.data.conversion_factor_third ?  response.data.conversion_factor_third : 1;
				})
				.catch((error) => {
					console.log(error);
				});
		},

		filterNeg: function (event) {
			if (
				!(
					(event.keyCode > 95 && event.keyCode < 106) ||
					(event.keyCode > 47 && event.keyCode < 58) ||
					event.keyCode == 8
				)
			) {
				return event.preventDefault();
			}
		},

		updateMedicine: function (id) {
			const _this = this;
			axios
				.put(base_path + "medicine/" + id, _this.editMedicineData)
				.then((response) => {
					if (response.data.code == 201) {
						_this.$toastr.success(response.data.message, "Medicine", {
							timeout: 5000,
						});
						_this.getMedicine(_this.current_page);
						const elem = this.$refs.updateCloseBtn;
						elem.click();
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},

		duplicateMedicine: function () {
			const _this = this;
			_this.addMedicine = _this.editMedicineData;
			_this.addMedicine.status = 0;
			_this.addMedicine.duplicate = 1;
			_this.addNewMedicine();
		},

		// addDiscount: function (discountType) {
		// 	const _this = this;
		// 	let percentage = "";
		// 	if (discountType == "patient") {
		// 		percentage = parseFloat(_this.addMedicine.patient_discount_percent);
		// 		let discount_price =
		// 			_this.addMedicine.price -
		// 			_this.addMedicine.price * (percentage / 100);
		// 		_this.addMedicine.patient_discount_price = discount_price;
		// 	} else {
		// 		percentage = parseFloat(_this.addMedicine.retailer_discount_percent);
		// 		let discount_price =
		// 			_this.addMedicine.price -
		// 			_this.addMedicine.price * (percentage / 100);
		// 		_this.addMedicine.retailer_discount_price = discount_price;
		// 	}
		// },

		// clearDiscount: function (type) {
		// 	const self = this;
		// 	if (type == "add") {
		// 		self.addMedicine.retailer_discount_percent = 12;
		// 		self.addMedicine.retailer_discount_price = 0;
		// 		self.addMedicine.patient_discount_percent = 0;
		// 		self.addMedicine.patient_discount_price = 0;
		// 		this.addDiscount("retailer");
		// 	}
		// 	if (type == "edit") {
		// 		self.editMedicineData.retailer_discount_percent = 12;
		// 		self.editMedicineData.retailer_discount_price = 0;
		// 		self.editMedicineData.patient_discount_percent = 0;
		// 		self.editMedicineData.patient_discount_price = 0;
		// 		this.discount("retailer");
		// 	}
		// },

		// discount: function (discountType) {
		// 	const _this = this;

		// 	if (discountType == "patient") {
		// 		let percentage = parseFloat(
		// 			_this.editMedicineData.patient_discount_percent
		// 		);
		// 		let discount_price =
		// 			_this.editMedicineData.price -
		// 			_this.editMedicineData.price * (percentage / 100);
		// 		_this.editMedicineData.patient_discount_price = discount_price;
		// 	} else {
		// 		let percentage = parseFloat(
		// 			_this.editMedicineData.retailer_discount_percent
		// 		);
		// 		let discount_price =
		// 			_this.editMedicineData.price -
		// 			_this.editMedicineData.price * (percentage / 100);
		// 		_this.editMedicineData.retailer_discount_price = discount_price;
		// 	}
		// },

		changeStatus: function (id) {
			const _this = this;

			axios
				.get(base_path + "medicine/status/" + id)
				.then((response) => {
					_this.getMedicine(_this.current_page);
					if (response.data.code === 200) {
						_this.$toastr.warning("Inactive successfully!", "Medicine", {
							timeOut: 5000,
						});
					}
					if (response.data.code === 201) {
						_this.$toastr.success("Active successfully!", "Medicine", {
							timeOut: 5000,
						});
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},

		deleteMedicine: function (id) {
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
						.delete(base_path + "medicine/" + id)
						.then((response) => {
							_this.getMedicine(_this.current_page);
							if (response.data.code === 200) {
								_this.$toastr.success("Delete successfully!", "Medicine", {
									timeOut: 5000,
								});
							}
						})
						.catch((error) => {
							console.log(error);
						});
				}
			});
		},

		openModal: function (modal) {
			this.$modal.show(modal);
		},
		viewStock: function (id) {
			const self = this;
			axios
				.get(base_path + "medicine/" + id)
				.then((response) => {
					self.ViewStock = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},

		print() {
			this.$htmlToPaper("printDiv");
		},
	},
	created() {
		this.getCategory();
		this.getGenerics();
		this.getManufactures();
		this.getUnits();
		this.getMedicine();
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
	height: 30px;
	margin: 20px 0px 8px;
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
.dropbtn {
	background-color: #4caf50;
	color: white;
	border: none;
	cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
	position: relative;
	display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
	display: none;
	position: absolute;
	background-color: #f9f9f9;
	min-width: 100px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
	color: black;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
	cursor: pointer;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
	background-color: #f1f1f1;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
	display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
	background-color: #004a88;
}
.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: table;
	transition: opacity 0.3s ease;
}

.modal-wrapper {
	display: table-cell;
	vertical-align: middle;
}

.modal-container {
	width: 60%;
	margin: 0px auto;
	padding: 0.5%;
	background-color: #004a88;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;
	font-family: Helvetica, Arial, sans-serif;
	overflow: auto;
	max-height: 90%;
	height: 90%;
}

.modal-header h3 {
	margin-top: 0;
	color: #42b983;
}

.modal-body {
	margin: 20px 0;
}

.modal-default-button {
	float: right;
}

/*
 * the following styles are auto-applied to elements with
 * v-transition="modal" when their visiblity is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter,
.modal-leave {
	opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
</style>
