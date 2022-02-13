<template>
	<div>
		<h3>Purchase</h3>
		<br />
		<div class="panel panel-primary">
			<div class="panel-heading">
				<div class="panel-title">
					<b>Purchase List</b>
				</div>
				<div class="panel-options">
					<!-- <router-link style="margin-top:4px;" to="/stock/add" type="button"> -->
					<button class="btn btn-blue btn-sm" data-target="#addPurchase" data-toggle="modal" v-if="permissions.includes('Add_Stock')">+ Add</button>
					<!-- </router-link> -->
				</div>
			</div>

			<div class="panel-heading">
				<div class="pull-left col-sm-1">
					<div class="form-group">
						<label class="control-label" for="entries" style="margin-top: 15px;">Show</label>

						<select @change="getStock()" class="form-control" style="position: absolute; top: 6px; left: 59px;" v-model="custom_row">
							<option v-for="row in select_row" v-text="row"></option>
						</select>
					</div>
				</div>
				<div class="pull-right">
					<label>
						<input @keyup="getStock()" aria-controls="DataTables_Table_2" class="form-control" placeholder="Search" style="margin-top: 10px; margin-left:-12px" type="search" v-model="search" />
					</label>
				</div>
			</div>
			<div style="overflow-x: auto;">
				<table class="table table-responsive table-bordered">
					<thead>
						<tr>
							<th class="text-center">#</th>
							<th class="text-center">Date</th>
							<th class="text-center">Invoice</th>
							<th class="text-center">Supplier</th>
							<th class="text-center">SubTotal</th>
							<th class="text-center">Discount</th>
							<th class="text-center">Vat</th>
							<th class="text-center">Total</th>
							<th class="text-center">Paid</th>
							<th class="text-center">Due</th>
							<th class="text-center">Action</th>
						</tr>
					</thead>

					<tbody>
						<tr :key="index" v-for="(data,index) in stockData.data">
							<td class="text-center">{{ ++index }}</td>
							<td class="text-center">{{ data.date | moment("Do MMMM YYYY") }}</td>
							<td class="text-center">{{ data.code }}</td>
							<td class="text-center">{{ data.suppliers ? data.suppliers.manufacture_name : "Not Set" }}</td>
							<td class="text-center">{{ data.sub_total }}</td>
							<td class="text-center">{{ data.discounted_amount }}</td>
							<td class="text-center">{{ data.vat_amount }}</td>
							<td class="text-center">{{ data.total }}</td>
							<td class="text-center">{{ data.paid }}</td>
							<td class="text-center">{{ data.due }}</td>
							<td class="text-center">
								<button
									:class="data.due <=0 ? 'hide' :''"
									@click="Payment(data.id)"
									class="btn btn-gold btn-xs"
									data-target="#paymentModal"
									data-toggle="modal"
									type="button"
									v-if="permissions.includes('Due_Payment_Stock')"
								>
									<i class="fas fa-dollar-sign"></i>
								</button>
								<button @click="ViewStock(data.id)" class="btn btn-default btn-xs" data-target="#viewModal" data-toggle="modal" type="button" v-if="permissions.includes('View_Stock')">
									<i class="fas fa-eye"></i>
								</button>
								<button @click="DeleteStock(data.id,index)" class="btn btn-red btn-xs" v-if="permissions.includes('Delete_Stock')">
									<i class="fas fa-trash"></i>
								</button>
							</td>
						</tr>
					</tbody>
				</table>

				<pagination :data="stockData" :limit="3" @pagination-change-page="getStock" style="margin-left:20px">
					<span slot="prev-nav">&lt; Previous</span>
					<span slot="next-nav">Next &gt;</span>
				</pagination>
			</div>
		</div>
		<div class="invoice" hidden id="printDiv">
			<div class="row">
				<div class="col-md-6">
					<div class="clientlogo"></div>
					<div class="info">
						<h2>{{company_details.name}}</h2>
						<p>{{company_details.address}}</p>
						<p>{{company_details.phone}}</p>
					</div>
					<!--End Info-->
				</div>
				<div class="col-md-6">
					<div class="info">
						<h2>{{ viewStock.code }}</h2>
						<p>{{ viewStock.date | moment("Do MMMM YYYY") }}</p>
					</div>
					<!--End Info-->
				</div>
			</div>

			<hr class="margin" />

			<div class="row">
				<div class="col-sm-6 invoice-left">
					<h4>Supplier Details</h4>
					<strong>Name:</strong>
					<span style="color:black">{{ viewStock.suppliers && viewStock.suppliers.manufacture_name }}</span>
					<br />
					<strong>Phone:</strong>
					<span style="color:black">{{ viewStock.suppliers && viewStock.suppliers.mobile }}</span>
					<br />
					<strong>Email:</strong>
					<span style="color:black">{{ viewStock.suppliers && viewStock.suppliers.email }}</span>
					<br />
				</div>
			</div>

			<div class="margin"></div>

			<table class="table table-bordered">
				<thead>
					<tr>
						<th class="text-center">#</th>
						<!-- <th class="text-center">Batch</th> -->
						<th class="text-center">Product</th>
						<!-- <th class="text-center">Sku</th> -->
						<th class="text-center">PUPQ</th>
						<th class="text-center">Quantity</th>
						<th class="text-center">Rate</th>
						<th class="text-center">Vat</th>
						<th class="text-center">Discount</th>
						<th class="text-center">Total</th>
					</tr>
				</thead>

				<tbody>
					<tr v-for="(product,index) in viewStock.product_info">
						<td class="text-center">{{ ++index }}</td>
						<!-- <td class="text-center">{{ product.batch }}</td> -->
						<td class="text-center">{{ product.product_details && product.product_details.name }}</td>
						<!-- <td class="text-center">{{ product.products && product.products.sku }}</td> -->
						<td class="text-right">{{ product.pupq }}</td>
						<td class="text-right">{{ product.qty }}</td>
						<td class="text-right">{{ product.rate }}</td>
						<td class="text-right">{{ product.vat_amount }}</td>
						<td class="text-right">{{ product.discounted_amount }}</td>
						<td class="text-right">{{ product.total_amount }}</td>
					</tr>
				</tbody>
			</table>
			<div class="row">
				<div class="col-sm-4 invoice-left"></div>
				<div class="col-sm-4"></div>
				<div class="col-sm-4 invoice-right">
					<table class="table table-bordered">
						<tbody>
							<tr>
								<td class="bg-light-2 text-right" style="color:black">
									<strong>SubTotal:</strong>
								</td>
								<td class="bg-light-2 text-right" style="color:black">{{ viewStock.sub_total }}</td>
							</tr>
							<tr>
								<td class="bg-light-2 text-right" style="color:black">
									<strong>Discounted Amount:</strong>
								</td>
								<td class="bg-light-2 text-right" style="color:black">{{ viewStock.discounted_amount }}</td>
							</tr>
							<tr>
								<td class="bg-light-2 text-right" style="color:black">
									<strong>Vat:</strong>
								</td>
								<td class="bg-light-2 text-right" style="color:black">{{ viewStock.vat_amount }}</td>
							</tr>
							<tr>
								<td class="bg-light-2 text-right" style="color:black">
									<strong>Total:</strong>
								</td>
								<td class="bg-light-2 text-right" style="color:black">{{ viewStock.total }}</td>
							</tr>
							<tr>
								<td class="bg-light-2 text-right" style="color:black">
									<strong>Paid:</strong>
								</td>
								<td class="bg-light-2 text-right" style="color:black">{{ viewStock.paid }}</td>
							</tr>
							<tr>
								<td class="bg-light-2 text-right" style="color:black">
									<strong>Due:</strong>
								</td>
								<td class="bg-light-2 text-right" style="color:black">{{ viewStock.due }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="row" style="margin-top:35px">
				<div class="col-md-4 text-center">
					<p style="color:black">
						<b>Accounts</b>
					</p>
				</div>
				<div class="col-md-4 text-center">
					<p style="color:black">
						<b>Sales</b>
					</p>
				</div>
				<div class="col-md-4 text-center">
					<p style="color:black">
						<b>Prepared By</b>
					</p>
				</div>
			</div>
			<div class>
				<p style="color:black">Developed By BizIt BD</p>
			</div>
		</div>
		<!-- VIEW MODAL -->
		<div class="modal fade in" id="viewModal">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">View Purchase Details</h5>
						<button aria-label="Close" class="close" data-dismiss="modal" type="button">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>

					<div class="modal-body">
						<div class="invoice">
							<div class="row">
								<div class="col-md-6">
									<div class="clientlogo"></div>
									<div class="info">
										<h2>{{company_details.name}}</h2>
										<p>{{company_details.address}}</p>
										<p>{{company_details.phone}}</p>
									</div>
									<!--End Info-->
								</div>
								<div class="col-md-6">
									<div class="info">
										<h2>{{ viewStock.code }}</h2>
										<p>{{ viewStock.date | moment("Do MMMM YYYY") }}</p>
									</div>
									<!--End Info-->
								</div>
							</div>

							<hr class="margin" />

							<div class="row">
								<div class="col-sm-6 invoice-left">
									<h4>Supplier Details</h4>
									<strong>Name:</strong>
									<span style="color:white">{{ viewStock.suppliers && viewStock.suppliers.manufacture_name }}</span>
									<br />
									<strong>Phone:</strong>
									<span style="color:white">{{ viewStock.suppliers && viewStock.suppliers.mobile }}</span>
									<br />
									<strong>Email:</strong>
									<span style="color:white">{{ viewStock.suppliers && viewStock.suppliers.email }}</span>
									<br />
								</div>
							</div>

							<div class="margin"></div>

							<table class="table table-bordered">
								<thead>
									<tr>
										<th class="text-center">#</th>
										<th class="text-center">Product</th>
										<th class="text-center">PUPQ</th>
										<th class="text-center">Quantity</th>
										<th class="text-center">Rate</th>
										<th class="text-center">Vat</th>
										<th class="text-center">Discount</th>
										<th class="text-center">Total</th>
									</tr>
								</thead>

								<tbody>
									<tr v-for="(product,index) in viewStock.product_info">
										<td class="text-center">{{ ++index }}</td>
										<td class="text-center">{{ product.product_details && product.product_details.name }}</td>
										<td class="text-right">{{ product.pupq }}</td>
										<td class="text-right">{{ product.qty }}</td>
										<td class="text-right">{{ product.rate }}</td>
										<td class="text-right">{{ product.vat_amount }}</td>
										<td class="text-right">{{ product.discounted_amount }}</td>
										<td class="text-right">{{ product.total_amount }}</td>
									</tr>
								</tbody>
							</table>
							<div class="row">
								<div class="col-sm-4 invoice-left"></div>
								<div class="col-sm-4"></div>
								<div class="col-sm-4 invoice-right">
									<table class="table table-bordered">
										<tbody>
											<tr>
												<td class="bg-light-2 text-right" style="color:white">
													<strong>SubTotal:</strong>
												</td>
												<td class="bg-light-2 text-right" style="color:white">{{ viewStock.sub_total }}</td>
											</tr>
											<tr>
												<td class="bg-light-2 text-right" style="color:white">
													<strong>Discounted Amount:</strong>
												</td>
												<td class="bg-light-2 text-right" style="color:white">{{ viewStock.discounted_amount }}</td>
											</tr>
											<tr>
												<td class="bg-light-2 text-right" style="color:white">
													<strong>Vat:</strong>
												</td>
												<td class="bg-light-2 text-right" style="color:white">{{ viewStock.vat_amount }}</td>
											</tr>
											<tr>
												<td class="bg-light-2 text-right" style="color:white">
													<strong>Total:</strong>
												</td>
												<td class="bg-light-2 text-right" style="color:white">{{ viewStock.total }}</td>
											</tr>
											<tr>
												<td class="bg-light-2 text-right" style="color:white">
													<strong>Paid:</strong>
												</td>
												<td class="bg-light-2 text-right" style="color:white">{{ viewStock.paid }}</td>
											</tr>
											<tr>
												<td class="bg-light-2 text-right" style="color:white">
													<strong>Due:</strong>
												</td>
												<td class="bg-light-2 text-right" style="color:white">{{ viewStock.due }}</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div class="row" style="margin-top:35px">
								<div class="col-md-4 text-center">
									<p style="color:white">
										<b>Accounts</b>
									</p>
								</div>
								<div class="col-md-4 text-center">
									<p style="color:white">
										<b>Sales</b>
									</p>
								</div>
								<div class="col-md-4 text-center">
									<p style="color:white">
										<b>Prepared By</b>
									</p>
								</div>
							</div>
							<div class>
								<p style="color:white">Developed By BizIt BD</p>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button @click="print()" class="btn btn-success btn-icon icon-left hidden-print">
							Print Details
							<i class="entypo-doc-text"></i>
						</button>
						<button class="btn btn-secondary" data-dismiss="modal" ref="updateCloseBtn" type="button">Close</button>
					</div>
				</div>
			</div>
		</div>
		<!-- VIEW MODAL -->
		<!-- PAYMENT MODAL -->
		<div class="modal fade in" id="paymentModal">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Purchase Details</h5>
						<button aria-label="Close" class="close" data-dismiss="modal" type="button">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form @submit.prevent="paymentForm(viewStock.id)">
						<div class="modal-body">
							<div class="invoice" id="printDiv">
								<div class="row">
									<div class="col-md-6">
										<div class="clientlogo"></div>
										<div class="info">
											<h2>{{company_details.name}}</h2>
											<p>{{company_details.address}}</p>
											<p>{{company_details.phone}}</p>
										</div>
										<!--End Info-->
									</div>
									<div class="col-md-6">
										<div class="info">
											<h2>{{ viewStock.code }}</h2>
											<p>{{ viewStock.date | moment("Do MMMM YYYY") }}</p>
										</div>
										<!--End Info-->
									</div>
								</div>

								<hr class="margin" />

								<div class="row">
									<div class="col-sm-6 invoice-left">
										<h4>Supplier Details</h4>
										<strong>Name:</strong>
										<span style="color:white">{{ viewStock.suppliers && viewStock.suppliers.manufacture_name }}</span>
										<br />
										<strong>Phone:</strong>
										<span style="color:white">{{ viewStock.suppliers && viewStock.suppliers.mobile }}</span>
										<br />
										<strong>Email:</strong>
										<span style="color:white">{{ viewStock.suppliers && viewStock.suppliers.email }}</span>
										<br />
									</div>
								</div>

								<div class="margin"></div>

								<table class="table table-bordered">
									<thead>
										<tr>
											<th class="text-center">#</th>
											<!-- <th class="text-center">Batch</th> -->
											<th class="text-center">Product</th>
											<!-- <th class="text-center">Sku</th> -->
											<th class="text-center">PUPQ</th>
											<th class="text-center">Quantity</th>
											<th class="text-center">Rate</th>
											<th class="text-center">Vat</th>
											<th class="text-center">Discount</th>
											<th class="text-center">Total</th>
										</tr>
									</thead>

									<tbody>
										<tr v-for="(product,index) in viewStock.product_info">
											<td class="text-center">{{ ++index }}</td>
											<!-- <td class="text-center">{{ product.batch }}</td> -->
											<td class="text-center">{{ product.product_details && product.product_details.name }}</td>
											<!-- <td class="text-center">{{ product.products && product.products.sku }}</td> -->
											<td class="text-right">{{ product.pupq }}</td>
											<td class="text-right">{{ product.qty }}</td>
											<td class="text-right">{{ product.rate }}</td>
											<td class="text-right">{{ product.vat_amount }}</td>
											<td class="text-right">{{ product.discounted_amount }}</td>
											<td class="text-right">{{ product.total_amount }}</td>
										</tr>
									</tbody>
								</table>
								<div class="row">
									<div class="col-sm-4 invoice-left"></div>
									<div class="col-sm-4"></div>
									<div class="col-sm-4 invoice-right">
										<table class="table table-bordered">
											<tbody>
												<tr>
													<td class="bg-light-2 text-right" style="color:white">
														<strong>SubTotal:</strong>
													</td>
													<td class="bg-light-2 text-right" style="color:white">{{ viewStock.sub_total }}</td>
												</tr>
												<tr>
													<td class="bg-light-2 text-right" style="color:white">
														<strong>Discounted Amount:</strong>
													</td>
													<td class="bg-light-2 text-right" style="color:white">{{ viewStock.discounted_amount }}</td>
												</tr>
												<tr>
													<td class="bg-light-2 text-right" style="color:white">
														<strong>Vat:</strong>
													</td>
													<td class="bg-light-2 text-right" style="color:white">{{ viewStock.vat_amount }}</td>
												</tr>
												<tr>
													<td class="bg-light-2 text-right" style="color:white">
														<strong>Total:</strong>
													</td>
													<td class="bg-light-2 text-right" style="color:white">{{ viewStock.total }}</td>
												</tr>
												<tr>
													<td class="bg-light-2 text-right" style="color:white">
														<strong>Paid:</strong>
													</td>
													<td class="bg-light-2 text-right" style="color:white">{{ viewStock.paid }}</td>
												</tr>
												<tr>
													<td class="bg-light-2 text-right" style="color:white">
														<strong>Due:</strong>
													</td>
													<td class="bg-light-2 text-right" style="color:white">{{ viewStock.due }}</td>
												</tr>
												<tr>
													<td class="bg-light-2 text-right" style="color:white">
														<strong>Pay Now:</strong>
													</td>
													<td class="bg-light-2 text-right" style="color:black">
														<input class="form-control-sm form-control pull-right" id="pay" min="0" style="width:35%" type="text" v-model="payment" />
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button class="btn btn-success btn-icon icon-left hidden-print">
								Update
								<i class="fa fa-check"></i>
							</button>
							<button class="btn btn-secondary" data-dismiss="modal" ref="updateCloseBtn" type="button">Close</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- PAYMENT MODAL -->

		<div class="modal fade in" id="addPurchase">
			<div class="modal-dialog" style="width:80%">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Purchase</h5>
						<button aria-label="Close" class="close" data-dismiss="modal" type="button">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form @submit.prevent="submitStock()">
						<div class="modal-body">
							<div class="row">
								<div class="col-md-12">
									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title">
												<a data-parent="#accordion-test-2" data-toggle="collapse" href="#baseInfo">Basic Information</a>
											</h4>
										</div>
										<div class="panel-collapse collapse in" id="baseInfo">
											<div class="panel-body">
												<div class="col-md-6">
													<div class="form-group">
														<label>Date</label>
														<input :value="new Date() | moment('dddd, MMMM Do YYYY')" class="form-control" disabled />
													</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<label>Supplier</label>
														<model-select :options="supplierList" placeholder="Select Supplier" v-model="addStock.supplier_id"></model-select>
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Voucher</label>
														<input class="form-control form-control-sm" min="0" v-model="addStock.voucher" />
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Payment Method</label>
														<model-select :options="payment_methods" placeholder="Select Payment Method" v-model="addStock.payment_method"></model-select>
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Accounts</label>
														<model-select :options="accounts" placeholder="Select Account" v-model="addStock.account_id"></model-select>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title">
												<a data-parent="#accordion-test-2" data-toggle="collapse" href="#itemSelect">Select Item</a>
											</h4>
											<h4 class="panel-title" style="float:right;">
												Product Wise Vat Discount?
												<input @change="productWisevatChange" type="checkbox" v-model="productWiseVat" />
											</h4>
										</div>
										<div class="panel-collapse collapse" id="itemSelect">
											<div class="panel-body">
												<!-- <div class="col-md-6">
													<label class="control-label">Form:</label>
													<model-select :options="categoryList" placeholder="Select Form" v-model="category_id"></model-select>
												</div>-->
												<div class="col-md-12">
													<div class="form-group">
														<label>Search Medicine</label>
														<input @keyup="getProduct()" class="form-control" placeholder="Search Prdouct By Name, SKU etc." type="text" v-model="searchMed" />
														<li :class="productList.length>0 && searchMed.length>0 && showList ? 'open' : ''" class="notifications dropdown" style="list-style-type:none;">
															<ul class="dropdown-menu">
																<li>
																	<ul class="dropdown-menu-list scroller" style="overflow-y: scroll; outline: none; max-height:130px; width:380px" tabindex="5002">
																		<li style="margin-left:10px;margin-top:5px" v-for="data in productList">
																			<a @click.prevent="selectProduct(data)" href="javascript:void(0)">
																				<span class="line">
																					<strong>{{ data.category && data.category.category_name }} {{ data.name }}</strong>
																					- {{ data.dosage }}
																				</span>
																				<span class="line desc small">{{ data.manufacturer && data.manufacturer.manufacture_name }}</span>
																			</a>
																		</li>
																	</ul>
																</li>
															</ul>
														</li>
													</div>
												</div>
												<div class="col-sm-12" style="margin-top:10px">
													<table class="table table-bordered" style="display:cover;">
														<thead>
															<th class="text-center bg-primary" style="width: 102px;">Product</th>
															<th class="text-center bg-primary" style="width: 72px;">Unit</th>
															<th class="text-center bg-primary" style="width: 78px;" v-if="settings.batch">Batch</th>
															<th class="text-center bg-primary" style="width: 72px;">Purchase(Tk)</th>
															<th class="text-center bg-primary" style="width: 72px;" v-show="productWiseVat">Discount(%)</th>
															<th class="text-center bg-primary" style="width: 72px;" v-show="productWiseVat">Vat(%)</th>
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
																	<td class="text-center" style="width: 100px;">
																		<select @change="checkUnit(index)" class="form-control" v-model="product.unit_id">
																			<option :value="data.unit_id" v-for="data in product.units">{{ data.unit.symbol }}</option>
																		</select>
																	</td>
																	<td class="text-center" style="width: 75px;" v-if="settings.batch">
																		<input class="form-control form-control-sm" type="text" v-model="product.batch" />
																	</td>
																	<td class="text-center" style="width: 80px;">
																		<input @change="calcSubTotal(index)" @keyup="calcSubTotal(index)" class="form-control form-control-sm" id="purchase" min="0" step="0.1" type="text" v-model="product.purchase_price" />
																	</td>
																	<td class="text-center" style="width: 80px;" v-show="productWiseVat">
																		<input
																			@change="calcSubTotal(index)"
																			@keyup="calcSubTotal(index)"
																			class="form-control form-control-sm"
																			id="discount"
																			max="100"
																			min="0"
																			step="0.1"
																			type="text"
																			v-model="product.discount"
																		/>
																	</td>
																	<td class="text-center" style="width: 80px;" v-show="productWiseVat">
																		<input @change="calcSubTotal(index)" @keyup="calcSubTotal(index)" class="form-control form-control-sm" id="vat" min="0" step="0.1" type="text" v-model="product.vat" />
																	</td>
																	<td class="text-center" style="width: 80px;">
																		<input class="form-control" min="0" v-model="product.pupq" />
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
												</div>
											</div>
										</div>
									</div>

									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title">
												<a data-parent="#accordion-test-2" data-toggle="collapse" href="#totalInfo">Total, Pay, Due</a>
											</h4>
											<h4 class="panel-title" style="float:right;">
												Payable:
												<span style="color:yellow">
													<b>{{ addStock.grand_amount }}</b>
												</span>
											</h4>
										</div>
										<div class="panel-collapse collapse" id="totalInfo">
											<div class="panel-body">
												<div class="col-md-4">
													<div class="form-group">
														<label>SubTotal</label>
														<input class="form-control form-control-sm" disabled min="0" readonly v-model="addStock.total_amount" />
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>VAT</label>
														<input :disabled="productWiseVat" class="form-control form-control-sm" max="100" min="0" step="0.1" type="number" v-model="addStock.vat_rate" />
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>VAT Amount</label>
														<input class="form-control form-control-sm" disabled min="0" readonly step="0.1" v-model="addStock.vat_amount" />
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Discount</label>
														<input class="form-control form-control-sm" max="100" min="0" step="any" type="number" v-model="discount" />
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Discount Type</label>
														<select class="form-control form-control-sm" v-model="discount_type">
															<option value="1">Flat(Tk)</option>
															<option value="2">Percent(%)</option>
														</select>
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Discounted</label>
														<input class="form-control form-control-sm" disabled min="0" readonly v-model="addStock.discounted_amount" />
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Total</label>
														<input class="form-control form-control-sm" disabled min="0" readonly v-model="addStock.grand_amount" />
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Pay</label>
														<input class="form-control form-control-sm" min="0" step="any" type="number" v-model="addStock.paid_amount" />
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Due</label>
														<input class="form-control form-control-sm" disabled min="0" readonly v-model="addStock.due_amount" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="modal-footer">
							<button class="btn btn-secondary" data-dismiss="modal" ref="purchaseCloseBtn" type="button">Close</button>
							<button class="btn btn-success">Submit</button>
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
	name: "ListStockComponent",
	data() {
		return {
			stockData: {},
			search: "",
			searchMed: "",
			custom_row: 10,
			select_row: [10, 20, 30, 40, 50],
			viewStock: {
				date: "",
				products: {},
				suppliers: {},
			},
			addStock: {
				account_id: "",
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
			supplierList: [],
			categoryList: [],
			selectedProduct: [],
			payment_methods: [],
			accounts: [],
			payment: 0,
			discount_type: 1,
			discount: 0,
			category_id: "",
			permissions: "",
			productList: {},
			settings: "",
			showList: false,
			productWiseVat: false,
			company_details: {},
		};
	},
	methods: {
		openModal: function (modalId) {
			$(`#${modalId}`).modal("show");
		},
		ViewStock: function (id) {
			const _this = this;
			// _this.openModal("viewModal");
			axios.get(base_path + "stock/" + id).then((response) => {
				_this.viewStock = response.data;
			});
		},
		Payment: function (id) {
			const _this = this;
			// _this.openModal("paymentModal");
			axios.get(base_path + "stock/" + id).then((response) => {
				_this.viewStock = response.data;
			});
		},
		paymentForm: function (id) {
			const _this = this;
			let payment = { payment: _this.payment, id: id };
			axios
				.post(base_path + "stock_expense", payment)
				.then((response) => {
					if (response.status === 201) {
						_this.getStock();
						const elem = this.$refs.updateCloseBtn;
						elem.click();
						this.$swal("Payment!", response.data.message, "success");
						_this.payment = 0;
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
		getStock: function (page = 1, custom_row = 10) {
			const _this = this;
			const main_url =
				base_path +
				"stock?q=" +
				_this.search +
				"&page=" +
				page +
				"&row=" +
				_this.custom_row +
				"&search=" +
				_this.search;
			axios
				.get(main_url)
				.then((response) => {
					_this.stockData = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		DeleteStock: function (id, index) {
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
						.delete(base_path + "stock/" + id)
						.then((response) => {
							if (response.data.status === 200) {
								_this.getStock();
								_this.$swal("Deleted!", response.data.message, "success");
							}
							if (response.data.status === 400) {
								_this.$swal("Opps", "Something Went Wrong", "warning");
							}
						})
						.catch((error) => {
							console.log(error);
						});
				}
			});
		},
		print() {
			this.$htmlToPaper("printDiv");
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
		getAppSettings: function () {
			const _this = this;
			axios.get(base_path + "app_settings").then((response) => {
				_this.settings = response.data;
				_this.addStock.vat_rate = _this.settings.vat;
				_this.addStock.account_id = _this.settings.account_id;
			});
		},
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
		getProduct: function (page = 1) {
			const _this = this;
			_this.showList = true;
			const main_url =
				base_path +
				"product_search?search=" +
				_this.searchMed +
				"&category=" +
				_this.category_id;
			axios.get(main_url).then((response) => {
				_this.productList = response.data;
			});
		},
		selectProduct: function (product) {
			const self = this;
			self.showList = false;
			self.searchMed = "";
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
					unit_id: product.prices ? product.prices[0].unit.id : "",
					units: product.prices,
					quantity: 1,
					purchase_price: 0,
					batch: 0,
					sub_total: 0,
					discount: 0,
					discounted_amount: 0,
					vat: 0,
					vat_amount: 0,
					exp_date: "",
					pupq: product.conversion_factor * product.conversion_factor_third,
					conversion_factor: product.conversion_factor,
					conversion_factor_third : product.conversion_factor_third
				});
			}
		},
		checkUnit: function (index) {
			const _this = this;
			//console.log(_this.selectedProduct[index]);
			_this.selectedProduct[index].pupq = 1;
			this.selectedProduct[index].units.forEach((element) => {
				if (
					_this.selectedProduct[index].unit_id == element.unit_id &&
					element.type == "PRIMARY"
				) {
					_this.selectedProduct[index].pupq =
						 (_this.selectedProduct[index].conversion_factor)*(_this.selectedProduct[index].conversion_factor_third);
						 console.log(_this.selectedProduct[index].pupq);
				}
				else if(_this.selectedProduct[index].unit_id == element.unit_id &&
					element.type == "SECONDARY"){
						
					_this.selectedProduct[index].pupq =
						_this.selectedProduct[index].conversion_factor_third;
				}
			});
		},
		removeProduct: function (index) {
			const _this = this;
			_this.selectedProduct.splice(index, 1);
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
				self.addStock.total_amount = parseFloat(
					parseFloat(self.addStock.total_amount) + parseFloat(value.sub_total)
				).toFixed(2);
			});
			self.addStock.grand_amount = self.addStock.total_amount;
			self.calcVat();
			self.calcDiscount();
			self.calcDue();
		},
		calcVat: function () {
			const self = this;
			if (self.productWiseVat == false) {
				self.addStock.vat_amount = 0;
				if (self.addStock.vat_rate > 0) {
					self.addStock.vat_amount = parseFloat(
						self.addStock.grand_amount * (self.addStock.vat_rate / 100)
					).toFixed(2);
					self.addStock.grand_amount = parseFloat(
						parseFloat(self.addStock.grand_amount) +
							parseFloat(self.addStock.vat_amount)
					).toFixed(2);
				}
			} else {
				self.addStock.vat_amount = 0;
				self.selectedProduct.map((x) => {
					self.addStock.vat_amount += parseFloat(x.vat_amount);
				});
				self.addStock.vat_rate = 0;
			}
		},
		productWisevatChange: function () {
			const self = this;
			if (!self.productWiseVat) {
				self.addStock.vat_amount = 0;
				let i = 0;
				self.selectedProduct.map((x) => {
					x.vat_amount = 0;
					self.calcSubTotal(i);
					i++;
				});
			}
			self.addStock.vat_rate = self.settings.vat;
			self.calcTotal();
		},
		calcDiscount: function () {
			const self = this;
			if (self.discount_type == 1) {
				self.addStock.discounted_amount = self.discount;
				self.addStock.discount = self.discount;
				self.addStock.grand_amount = parseFloat(
					self.addStock.grand_amount - self.discount
				).toFixed(2);
			}
			if (self.discount_type == 2) {
				if (Number(self.discount) >= 100) {
					self.discount = 99;
					this.$toastr.warning("Highest Discount can be 99%", "Discount", {
						timeOut: 5000,
					});
				}
				self.addStock.discounted_amount = parseFloat(
					self.addStock.grand_amount * (self.discount / 100)
				).toFixed(2);
				self.addStock.grand_amount = parseFloat(
					self.addStock.grand_amount - self.addStock.discounted_amount
				).toFixed(2);
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
			self.addStock.due_amount = parseFloat(
				self.addStock.grand_amount - self.addStock.paid_amount
			).toFixed(2);
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
					self.getStock();
					const elem = this.$refs.purchaseCloseBtn;
					elem.click();
				})
				.catch((error) => {
					console.log(error);
				});
		},
		getComapnyDetails: function () {
			axios.get(base_path + "company_details").then((response) => {
				this.company_details = response.data;
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
		this.getPaymentMethod();
		this.getStock();
	},
	mounted() {
		this.getSupplier();
		this.getAppSettings();
		this.getCategory();
		this.getAccounts();
		this.getUserPermissions();
		this.getComapnyDetails();
	},
};
</script>
<style>
th {
	background-color: initial !important;
	color: white !important;
	font-weight: 600;
}
td {
	color: white;
}
li.notifications.dropdown::marker {
	display: none !important;
}
.panel-default {
	border-style: dashed;
	border: 2px dashed white;
}
</style>
