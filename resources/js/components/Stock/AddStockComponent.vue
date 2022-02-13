<template>
	<div>
		<div>
			<h3>Add Stock</h3>
			<br />
			<div class="panel panel-default">
				<div class="panel-heading">
					<div class="panel-title">
						Stock Product
						<p style>{{ new Date() | moment("dddd, MMMM Do YYYY") }}</p>
					</div>
					<div class="panel-options">
						<router-link style="margin-top:4px;" to="/stock" type="button">
							<button class="btn btn-blue btn-sm">List</button>
						</router-link>
					</div>
				</div>
				<div class="container-fluid panel panel-primary">
					<form @submit.prevent="submitStock()">
						<div class="row">
							<div class="col-sm-12">
								<div class="row" style="padding-bottom:5px">
									<div class="col-md-6">
										<label class="control-label">Form:</label>
										<model-select :options="categoryList" placeholder="Select Form" v-model="category_id"></model-select>
									</div>
									<div class="col-md-6">
										<label class="control-label">Search:</label>
										<input @keyup="getProduct()" class="form-control" placeholder="Search Prdouct By Name, SKU etc." type="text" v-model="search" />
									</div>
								</div>

								<div class="custom-div3">
									<div class="custom-div2">
										<div :key="index" class="col-md-2 col-sm-4 col-xs-6 col-lg-2" v-for="(product,index) in productList.data">
											<div @click="selectProduct(product)" class="card text-center">
												<div class="card-body">
													<h5 style="padding-top:10px">
														<b>
															{{ product.category ? product.category.category_name :"" }}
															{{ product.name }} {{ product.dosage }}
														</b>
													</h5>
													<p>{{ product.manufacturer.manufacture_name }}</p>
												</div>
											</div>
										</div>
									</div>
									<pagination :data="productList" :limit="3" @pagination-change-page="getProduct" style="margin-left:2rem">
										<span slot="prev-nav">&lt; Previous</span>
										<span slot="next-nav">Next &gt;</span>
									</pagination>
								</div>
							</div>
							<div class="col-sm-12">
								<table class="table table-bordered" style="display:cover;">
									<thead>
										<th class="text-center bg-primary" style="width: 102px;">Product</th>
										<th class="text-center bg-primary" style="width: 72px;">Unit</th>
										<th class="text-center bg-primary" style="width: 78px;" v-if="settings.batch">Batch</th>
										<!-- <th class="text-center bg-primary" style="width: 110px;">Exp Date</th> -->
										<th class="text-center bg-primary" style="width: 72px;">Purchase(Tk)</th>
										<th class="text-center bg-primary" style="width: 72px;">Discount(%)</th>
										<th class="text-center bg-primary" style="width: 72px;">Vat(%)</th>
										<th class="text-center bg-primary" style="height: 5rem;width: 80px;">PUPQ</th>
										<th class="text-center bg-primary" style="height: 5rem;width: 80px;">QTY</th>
										<th class="text-center bg-primary" style="width: 82px;">Total Amount(Tk)</th>
										<th class="text-center bg-primary" style="width: 82px;" v-if="settings.batch">Expiry</th>
										<th class="text-center bg-primary" style="width:71px;">
											<i class="fa fa-trash"></i>
										</th>
									</thead>
								</table>
								<div class="custom-div">
									<table class="table table-bordered">
										<tbody>
											<tr style="height:50px" v-for="(product,index) in selectedProduct">
												<td class="text-center" style="width: 100px;">{{ product.category+' '+product.name }}</td>
												<td class="text-center" style="width: 100px;">{{ product.unit }}</td>
												<td class="text-center" style="width: 75px;" v-if="settings.batch">
													<input class="form-control form-control-sm" type="text" v-model="product.batch" />
												</td>
												<td class="text-center" style="width: 80px;">
													<input @change="calcSubTotal(index)" @keyup="calcSubTotal(index)" class="form-control form-control-sm" id="purchase" min="0" step="0.1" type="text" v-model="product.purchase_price" />
												</td>
												<td class="text-center" style="width: 80px;">
													<input @change="calcSubTotal(index)" @keyup="calcSubTotal(index)" class="form-control form-control-sm" id="discount" min="0" step="0.1" type="text" v-model="product.discount" />
												</td>
												<td class="text-center" style="width: 80px;">
													<input @change="calcSubTotal(index)" @keyup="calcSubTotal(index)" class="form-control form-control-sm" id="vat" min="0" step="0.1" type="text" v-model="product.vat" />
												</td>
												<td class="text-center" style="width: 80px;">
													<input :disabled="product.conversion_factor == 1" class="form-control" min="0" v-model="product.pupq" />
												</td>
												<td class="text-center" style="width: 80px;">
													<input @change="calcSubTotal(index)" @keyup="calcSubTotal(index)" class="form-control" min="0" v-model="product.quantity" />
												</td>
												<td class="text-center" style="width: 80px;">
													<p>{{ product.sub_total.toFixed(2) }}</p>
												</td>
												<td class="text-center" style="width: 80px;" v-if="settings.batch">
													<input class="form-control" type="date" v-model="product.exp_date" />
												</td>
												<td class="text-center" style="width: 50px;">
													<button @click="removeProduct(index)" class="btn btn-danger" type="button">
														<i class="fa fa-trash"></i>
													</button>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<table class="table table-bordered">
									<tfoot>
										<tr>
											<td>
												<h4>
													<b>Supplier:</b>
												</h4>
											</td>
											<td>
												<model-select :options="supplierList" placeholder="Select Form" v-model="addStock.supplier_id"></model-select>
											</td>
											<td>
												<h4>
													<b>Payment Method:</b>
												</h4>
											</td>
											<td>
												<model-select :options="payment_methods" placeholder="Select Form" v-model="addStock.payment_method"></model-select>
											</td>
											<td>
												<h4>
													<b>Voucher</b>
												</h4>
											</td>
											<td>
												<input class="form-control form-control-sm" min="0" style="width:70%" v-model="addStock.voucher" />
											</td>
										</tr>
										<tr>
											<td>
												<h4>
													<b>Sub Total:</b>
												</h4>
											</td>
											<td colspan="5">
												<h4>{{ addStock.total_amount.toFixed(2) }}</h4>
											</td>
										</tr>
										<tr>
											<td>
												<h4>
													<b>Discount:</b>
												</h4>
											</td>
											<td>
												<div class="row">
													<div class="col-md-4">
														<input class="form-control form-control-sm" min="0" step="any" style="width:70%" type="number" v-model="discount" />
													</div>
													<div class="col-md-4">
														<select class="form-control form-control-sm" style="width:70%" v-model="discount_type">
															<option value="1">Flat(Tk)</option>
															<option value="2">Percent(%)</option>
														</select>
													</div>
													<div class="col-md-4"></div>
												</div>
											</td>
											<td>
												<h4>
													<b>Discounted Amount:</b>
												</h4>
											</td>
											<td colspan="4">
												<h4>{{ addStock.discounted_amount }}</h4>
											</td>
										</tr>
										<tr>
											<td>
												<h4>
													<b>Tax/Vat:</b>
												</h4>
											</td>
											<td>
												<div class="row">
													<div class="col-md-4" style="display:flex;">
														<input class="form-control form-control-sm" max="100" min="0" step="0.1" style="width:70%" type="number" v-model="addStock.vat_rate" />
														<span style="color:black;font-size:15px;margin:auto 0px;">
															<b>%</b>
														</span>
													</div>
												</div>
											</td>
											<td>
												<h4>
													<b>Vat Amount:</b>
												</h4>
											</td>
											<td colspan="4">
												<h4>{{ addStock.vat_amount.toFixed(2) }}</h4>
											</td>
										</tr>
										<tr>
											<td>
												<h4>
													<b>Grand Total:</b>
												</h4>
											</td>
											<td colspan="5">
												<h4>{{ addStock.grand_amount.toFixed(2) }}</h4>
											</td>
										</tr>
										<tr>
											<td>
												<h4>
													<b>Pay:</b>
												</h4>
											</td>
											<td>
												<input class="form-control form-control-sm" step="any" style="width:30%" type="number" v-model="addStock.paid_amount" />
											</td>
											<td>
												<h4>
													<b>Due:</b>
												</h4>
											</td>
											<td colspan="4">
												<h4>{{ addStock.due_amount.toFixed(2) }}</h4>
											</td>
										</tr>
										<tr>
											<td>
												<h4>
													<b>Remarks:</b>
												</h4>
											</td>
											<td colspan="5">
												<textarea class="form-control" cols="30" name="remarks" rows="3" v-model="addStock.remarks"></textarea>
											</td>
										</tr>

										<tr>
											<td colspan="6">
												<button class="btn btn-success btn-lg" style="display:block;width:100%;height:100%" type="submit">Stock</button>
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
						</div>
					</form>
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
	name: "AddStockComponent",
	data() {
		return {
			supplierList: [],
			categoryList: [],
			productList: {},
			search: "",
			category_id: "",
			discount_type: 1,
			discount: 0,
			selectedProduct: [],
			validate: 0,
			addStock: {
				supplier_id: "",
				voucher: "",
				total_amount: 0,
				payment_method: "",
				discount: 0,
				discounted_amount: 0,
				vat_rate: 0,
				vat_amount: 0,
				grand_amount: 0,
				paid_amount: 0,
				due_amount: 0,
				products: [],
				products_qty: 0,
				remarks: "",
			},
			payment_methods: [],
			settings: "",
		};
	},
	methods: {
		getCategory: function () {
			const self = this;
			axios
				.get(base_path + "allActiveCategory")
				.then((response) => {
					self.categoryList = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		getAppSettings: function () {
			const _this = this;
			axios.get(base_path + "app_settings").then((response) => {
				_this.settings = response.data;
				_this.addStock.vat_rate = _this.settings.vat;
			});
		},
		getSupplier: function () {
			const self = this;
			axios
				.get(base_path + "allActiveManufacture")
				.then((response) => {
					self.supplierList = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		getProduct: function (page = 1) {
			const _this = this;
			const main_url =
				base_path +
				"product_search?page=" +
				page +
				"&category=" +
				_this.category_id +
				"&search=" +
				_this.search;
			axios.get(main_url).then((response) => {
				_this.productList = response.data;
			});
		},
		getPaymentMethod: function () {
			const self = this;
			axios
				.get(base_path + "allPaymentMethod")
				.then((response) => {
					self.payment_methods = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		selectProduct: function (product) {
			const self = this;
			let found = self.selectedProduct.find((item) => item.id === product.id);
			if (found) {
				found.total_quantity++;
				found.sub_total = found.purchase_price * found.total_quantity;
				self.calcTotal;
			} else {
				self.selectedProduct.push({
					id: product.id,
					category: product.category.category_name,
					name: product.name,
					unit: product.prices ? product.prices[0].unit.symbol : "",
					unit_id: product.prices ? product.prices[0].unit.id : "",
					quantity: 1,
					purchase_price: 0,
					batch: 0,
					sub_total: 0,
					discount: 0,
					discounted_amount: 0,
					vat: 0,
					vat_amount: 0,
					exp_date: "",
					pupq: 1,
					conversion_factor: product.conversion_factor,
				});
				console.log(product.conversion_factor);
			}
		},
		removeProduct: function (index) {
			const _this = this;
			_this.selectedProduct.splice(index, 1);
			// _this.Pay = 0;
			// _this.calcTotal();
			// _this.calcDue();
		},
		calcSubTotal: function (index) {
			const self = this;
			self.selectedProduct[index].sub_total =
				self.selectedProduct[index].purchase_price *
				self.selectedProduct[index].quantity;

			if (self.selectedProduct[index].discount > 0) {
				self.selectedProduct[index].discounted_amount =
					self.selectedProduct[index].sub_total *
					(self.selectedProduct[index].discount / 100);
				self.selectedProduct[index].sub_total =
					self.selectedProduct[index].sub_total -
					self.selectedProduct[index].discounted_amount;
			}

			if (self.selectedProduct[index].vat > 0) {
				self.selectedProduct[index].vat_amount =
					self.selectedProduct[index].sub_total *
					(self.selectedProduct[index].vat / 100);

				self.selectedProduct[index].sub_total =
					self.selectedProduct[index].sub_total +
					self.selectedProduct[index].vat_amount;
			}
			self.calcTotal();
		},
		calcTotal: function () {
			const self = this;
			self.addStock.total_amount = 0;
			self.selectedProduct.forEach(function (value) {
				self.addStock.total_amount += value.sub_total;
			});
			self.addStock.grand_amount = self.addStock.total_amount;
			self.calcVat();
			self.calcDiscount();
			self.calcDue();
		},
		calcVat: function () {
			const self = this;
			if (self.addStock.vat_rate > 0) {
				self.addStock.vat_amount =
					self.addStock.grand_amount * (self.addStock.vat_rate / 100);
				self.addStock.grand_amount += self.addStock.vat_amount;
			}
		},
		calcDiscount: function () {
			const self = this;
			if (self.discount_type == 1) {
				self.addStock.discounted_amount = self.discount;
				self.addStock.discount = self.discount;
				self.addStock.grand_amount -= self.discount;
			}
			if (self.discount_type == 2) {
				self.addStock.discounted_amount =
					self.addStock.grand_amount * (self.discount / 100);
				self.addStock.grand_amount -= self.addStock.discounted_amount;
				self.addStock.discount = self.discount;
			}
		},
		clearDiscount: function () {
			const self = this;
			self.discount = 0;
			self.calcDiscount();
		},
		clearVat: function () {
			const self = this;
			self.addStock.vat_rate = 0;
			self.calcTotal();
		},
		calcDue: function () {
			const self = this;
			self.addStock.due_amount =
				self.addStock.grand_amount - self.addStock.paid_amount;
		},
		submitStock: function () {
			const self = this;
			self.addStock.products = self.selectedProduct;
			self.addStock.products_qty = self.selectedProduct.length;
			self.validateSubmit();
		},
		validateSubmit: function () {
			const self = this;
			self.validate = 0;
			if (!self.addStock.paid_amount) {
				self.validate++;
				self.$toastr.warning("Without pay amount we cannot proceed", "Sorry!", {
					timeOut: 5000,
				});
			}
			if (!self.addStock.supplier_id) {
				self.validate++;
				self.$toastr.warning("Please select supplier", "Sorry!", {
					timeOut: 5000,
				});
			}
			if (self.addStock.products.length < 1) {
				self.validate++;
				self.$toastr.warning("Please select product for stock", "Sorry!", {
					timeOut: 5000,
				});
			}
			self.addStock.products.forEach(function (value) {
				if (self.settings.batch && !value.batch) {
					self.validate++;
					self.$toastr.warning("Please insert products batch", "Sorry!", {
						timeOut: 5000,
					});
				}
				if (!value.purchase_price) {
					self.validate++;
					self.$toastr.warning(
						"Please insert products purchase price",
						"Sorry!",
						{
							timeOut: 5000,
						}
					);
				}
				if (!value.quantity) {
					self.validate++;
					self.$toastr.warning("Please insert products quantity", "Sorry!", {
						timeOut: 5000,
					});
				}
			});

			if (self.validate == 0) {
				self.AddNewStock();
			}
		},
		AddNewStock: function () {
			const self = this;
			axios
				.post(base_path + "stock", self.addStock)
				.then((response) => {
					self.$toastr.success(response.data.message, "Stock", {
						timeOut: 5000,
					});
					self.addStock.supplier_id = "";
					self.addStock.voucher = "";
					self.addStock.total_amount = "";
					self.addStock.payment_method = "";
					self.addStock.discount = 0;
					self.addStock.discounted_amount = 0;
					self.addStock.vat_rate = 0;
					self.addStock.vat_amount = 0;
					self.addStock.grand_amount = 0;
					self.addStock.paid_amount = 0;
					self.addStock.due_amount = 0;
					self.addStock.products = "";
					self.addStock.products_qty = 0;
					self.addStock.remarks = "";
					self.selectedProduct = [];
					self.discount_type = 1;
					self.discount = 0;
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
	watch: {
		discount: function () {
			this.calcTotal();
		},
		discount_type: function () {
			this.clearDiscount();
		},
		"addStock.vat_rate": function () {
			this.calcTotal();
		},
		"addStock.paid_amount": function () {
			this.calcTotal();
		},
		category_id: function () {
			this.getProduct();
		},
	},
	created() {
		this.getCategory();
		this.getSupplier();
		this.getProduct();
		this.getAppSettings();
		this.getPaymentMethod();
	},
};
</script>
<style scoped>
.card-img-top {
	display: cover;
	width: 17rem;
	height: 9rem;
}
.card {
	cursor: pointer;
	background-color: #ffffff;
	margin: 2rem 0rem 2rem 0rem;
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	border-radius: 4px;
	box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
		0 2px 4px -1px rgba(0, 0, 0, 0.3);
}
.card:hover {
	box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
		0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);
	color: black;
}
.card-body {
	height: 85px;
}
.card-body p {
	padding: 0px 5px 5px 5px;
}
.panel-primary {
	padding-top: 20px;
	padding-bottom: 3rem;
}
.custom-div {
	min-height: 43rem;
	max-height: 40rem;
	overflow: scroll;
	margin-top: -2rem;
}
.custom-div2 {
	min-height: 20rem;
	max-height: 20rem;
	/* overflow: scroll; */
	/* margin-top: 1rem; */
}
</style>