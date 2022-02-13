<template>
	<div>
		<h3>Sale</h3>
		<br />
		<div class="panel panel-primary">
			<div class="panel-heading">
				<div class="panel-title">
					<b>Sale List</b>
				</div>
				<div class="panel-options">
					<!-- <router-link style="margin-top:4px;" to="/stock/add" type="button"> -->
					<button class="btn btn-blue btn-sm" data-target="#addSell" data-toggle="modal" v-if="permissions.includes('Add_Sell')">
						<i class="fa fa-plus"></i> Add
					</button>
					<!-- </router-link> -->

				</div>
			</div>
			<div class="panel-heading">
				<div class="pull-left col-sm-1">
					<div class="form-group">
						<label class="control-label" for="entries" style="margin-top: 15px;">Show</label>
						<select @change="getSale()" class="form-control" style="position: absolute; top: 6px; left: 59px;" v-model="custom_row">
							<option v-for="row in select_row" v-text="row"></option>
						</select>
					</div>
				</div>
				<div class="pull-right">
					<label>
						<input @keyup="getSale()" aria-controls="DataTables_Table_2" class="form-control" placeholder="Search" style="margin-top: 10px; margin-left:-12px" type="search" v-model="search" />
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
							<th class="text-center">Customer</th>
							<th class="text-center">SubTotal</th>
							<th class="text-center">Discount</th>
							<th class="text-center">Vat</th>
							<th class="text-center">Total</th>
							<th class="text-center">Paid</th>
						
							<th class="text-center">Due</th>
							<!-- <th class="text-center">Status</th> -->
							<th class="text-center">Action</th>
						</tr>
					</thead>

					<tbody>
						<tr :key="index" v-for="(data,index) in saleData.data">
							<td class="text-center">{{ ++index }}</td>
							<td class="text-center">{{ data.date | moment("Do MMMM YYYY") }}</td>
							<td class="text-center">{{ data.code }}</td>
							<td class="text-center">{{ data.customer ? data.customer.name : "Not Set" }}</td>
							<td class="text-center">{{ data.sub_total }}</td>
							<td class="text-center">{{ data.discounted_amount }}</td>
							<td class="text-center">{{ data.vat_amount }}</td>
							<td class="text-center">{{ data.total }}</td>
							<td class="text-center">{{ data.paid }}</td>
							<td class="text-center">{{ data.due }}</td>
							<!-- <td class="text-center">
								<div :class="data.status==1 ? 'label-success' : 'label-warning'" class="label">{{ data.status == 1 ? 'On' : 'Off' }}</div>
							</td>-->
							<td class="text-center">
								<!-- <button
									:class="data.due <=0 ? 'hide' :''"
									@click="Payment(data.id)"
									class="btn btn-gold btn-xs"
									data-target="#paymentModal"
									data-toggle="modal"
									type="button"
									v-if="permissions.includes('Due_Payment_Sell')"
								>
									<i class="fas fa-dollar-sign"></i>
								</button> -->
								<button @click="ViewSell(data.id)" class="btn btn-default btn-xs" data-target="#viewModal" data-toggle="modal" type="button" v-if="permissions.includes('View_Sell')">
									<i class="fas fa-eye"></i>
								</button>
								<button @click="DeleteSell(data.id,index)" class="btn btn-red btn-xs" v-if="permissions.includes('Delete_Sell')">
									<i class="fas fa-trash"></i>
								</button>
							</td>
						</tr>
					</tbody>
				</table>

				<pagination :data="saleData" :limit="3" @pagination-change-page="getSale" style="margin-left:20px">
					<span slot="prev-nav">&lt; Previous</span>
					<span slot="next-nav">Next &gt;</span>
				</pagination>
			</div>
		</div>

		<div class="invoice" hidden id="printDiv">
			<div class="row">
				<div class="col-md-6">
					<div class="clientlogo"></div>
					<div class="info" style="color:black">
						<h4>{{company_details.name}}</h4>
						<p>{{company_details.address}}</p>
						<p>{{company_details.phone}}</p>
					</div>
					<!--End Info-->
				</div>
				<div class="col-md-6">
					<div class="info" style="color:black">
						<h4>{{ viewSell.code }}</h4>
						<p>{{ viewSell.date | moment("Do MMMM YYYY") }}</p>
					</div>
					<!--End Info-->
				</div>
			</div>

			<hr class="margin" />

			<div class="row">
				<div class="col-sm-6 invoice-left">
					<h4>Customer Details</h4>
					<strong>Name:</strong>
					<span style="color:black">{{ viewSell.customer && viewSell.customer.name }}</span>
					<br />
					<strong>Phone:</strong>
					<span style="color:black">{{ viewSell.customer && viewSell.customer.phone }}</span>
					<br />
				</div>
			</div>

			<div class="margin"></div>

			<table class="table table-bordered">
				<thead>
					<tr>
						<th class="text-center">#</th>
						<th class="text-center">Batch</th>
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
					<tr v-for="(product,index) in viewSell.detail_info">
						<td class="text-center">{{ ++index }}</td>
						<td class="text-center">{{ product.batch_info && product.batch_info.batch }}</td>
						<td class="text-center">{{ product.product && product.product.name }}</td>
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
								<td class="bg-light-2 text-right" style="color:black">{{ viewSell.sub_total }}</td>
							</tr>
							<tr>
								<td class="bg-light-2 text-right" style="color:black">
									<strong>Discounted Amount:</strong>
								</td>
								<td class="bg-light-2 text-right" style="color:black">{{ viewSell.discounted_amount }}</td>
							</tr>
							<tr>
								<td class="bg-light-2 text-right" style="color:black">
									<strong>Vat:</strong>
								</td>
								<td class="bg-light-2 text-right" style="color:black">{{ viewSell.vat_amount }}</td>
							</tr>
							<tr>
								<td class="bg-light-2 text-right" style="color:black">
									<strong>Total:</strong>
								</td>
								<td class="bg-light-2 text-right" style="color:black">{{ viewSell.total }}</td>
							</tr>
							<tr>
								<td class="bg-light-2 text-right" style="color:black">
									<strong>Paid:</strong>
								</td>
								<td class="bg-light-2 text-right" style="color:black">{{ viewSell.paid }}</td>
							</tr>
							<tr>
								<td class="bg-light-2 text-right" style="color:black">
									<strong>Due:</strong>
								</td>
								<td class="bg-light-2 text-right" style="color:black">{{ viewSell.due }}</td>
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
						<h5 class="modal-title">View Sell Details</h5>
						<button aria-label="Close" class="close" data-dismiss="modal" type="button">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>

					<div class="modal-body">
						<div class="invoice">
							<div class="row">
								<div class="col-md-6">
									<div class="clientlogo"></div>
									<div class="info" style="color:white">
										<h4>{{company_details.name}}</h4>
										<p>{{company_details.address}}</p>
										<p>{{company_details.phone}}</p>
									</div>
									<!--End Info-->
								</div>
								<div class="col-md-6">
									<div class="info" style="color:white">
										<h3>{{ viewSell.code }}</h3>
										<p>{{ viewSell.date | moment("Do MMMM YYYY") }}</p>
									</div>
									<!--End Info-->
								</div>
							</div>

							<hr class="margin" />

							<div class="row">
								<div class="col-sm-6 invoice-left">
									<h4>Customer Details</h4>
									<strong>Name:</strong>
									<span style="color:white">{{ viewSell.customer && viewSell.customer.name }}</span>
									<br />
									<strong>Phone:</strong>
									<span style="color:white">{{ viewSell.customer && viewSell.customer.phone }}</span>
									<br />
								</div>
							</div>

							<div class="margin"></div>

							<table class="table table-bordered">
								<thead>
									<tr>
										<th class="text-center">#</th>
										<th class="text-center">Batch</th>
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
									<tr v-for="(product,index) in viewSell.detail_info">
										<td class="text-center">{{ ++index }}</td>
										<td class="text-center">{{ product.batch_info && product.batch_info.batch }}</td>
										<td class="text-center">{{ product.product && product.product.name }}</td>
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
												<td class="bg-light-2 text-right" style="color:white">{{ viewSell.sub_total }}</td>
											</tr>
											<tr>
												<td class="bg-light-2 text-right" style="color:white">
													<strong>Discounted Amount:</strong>
												</td>
												<td class="bg-light-2 text-right" style="color:white">{{ viewSell.discounted_amount }}</td>
											</tr>
											<tr>
												<td class="bg-light-2 text-right" style="color:white">
													<strong>Vat:</strong>
												</td>
												<td class="bg-light-2 text-right" style="color:white">{{ viewSell.vat_amount }}</td>
											</tr>
											<tr>
												<td class="bg-light-2 text-right" style="color:white">
													<strong>Total:</strong>
												</td>
												<td class="bg-light-2 text-right" style="color:white">{{ viewSell.total }}</td>
											</tr>
											<tr>
												<td class="bg-light-2 text-right" style="color:white">
													<strong>Paid:</strong>
												</td>
												<td class="bg-light-2 text-right" style="color:white">{{ viewSell.paid }}</td>
											</tr>
											<tr>
												<td class="bg-light-2 text-right" style="color:white">
													<strong>Due:</strong>
												</td>
												<td class="bg-light-2 text-right" style="color:white">{{ viewSell.due }}</td>
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
						<h4 class="modal-title">Sell Details</h4>
						<button aria-label="Close" class="close" data-dismiss="modal" type="button">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form @submit.prevent="paymentForm(viewSell.id)">
						<div class="modal-body">
							<div class="invoice" id="printDiv">
								<div class="row">
									<div class="col-md-6">
										<div class="clientlogo"></div>
										<div class="info" style="color:white">
											<h4>{{company_details.name}}</h4>
											<p>{{company_details.address}}</p>
											<p>{{company_details.phone}}</p>
										</div>
										<!--End Info-->
									</div>
									<div class="col-md-6">
										<div class="info" style="color:white">
											<h3>{{ viewSell.code }}</h3>
											<p>{{ viewSell.date | moment("Do MMMM YYYY") }}</p>
										</div>
										<!--End Info-->
									</div>
								</div>

								<hr class="margin" />

								<div class="row">
									<div class="col-sm-6 invoice-left">
										<h4>Customer Details</h4>
										<strong>Name:</strong>
										<span style="color:white">{{ viewSell.customer && viewSell.customer.name }}</span>
										<br />
										<strong>Phone:</strong>
										<span style="color:white">{{ viewSell.customer && viewSell.customer.phone }}</span>
										<br />
									</div>
								</div>

								<div class="margin"></div>

								<table class="table table-bordered">
									<thead>
										<tr>
											<th class="text-center">#</th>
											<th class="text-center">Batch</th>
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
										<tr v-for="(product,index) in viewSell.detail_info">
											<td class="text-center">{{ ++index }}</td>
											<td class="text-center">{{ product.batch_info && product.batch_info.batch }}</td>
											<td class="text-center">{{ product.product && product.product.name }}</td>
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
													<td class="bg-light-2 text-right" style="color:white">{{ viewSell.sub_total }}</td>
												</tr>
												<tr>
													<td class="bg-light-2 text-right" style="color:white">
														<strong>Discounted Amount:</strong>
													</td>
													<td class="bg-light-2 text-right" style="color:white">{{ viewSell.discounted_amount }}</td>
												</tr>
												<tr>
													<td class="bg-light-2 text-right" style="color:white">
														<strong>Vat:</strong>
													</td>
													<td class="bg-light-2 text-right" style="color:white">{{ viewSell.vat_amount }}</td>
												</tr>
												<tr>
													<td class="bg-light-2 text-right" style="color:white">
														<strong>Total:</strong>
													</td>
													<td class="bg-light-2 text-right" style="color:white">{{ viewSell.total }}</td>
												</tr>
												<tr>
													<td class="bg-light-2 text-right" style="color:white">
														<strong>Paid:</strong>
													</td>
													<td class="bg-light-2 text-right" style="color:white">{{ viewSell.paid }}</td>
												</tr>
												<tr>
													<td class="bg-light-2 text-right" style="color:white">
														<strong>Due:</strong>
													</td>
													<td class="bg-light-2 text-right" style="color:white">{{ viewSell.due }}</td>
												</tr>
												<tr>
													<td class="bg-light-2 text-right" style="color:white">
														<strong>Pay Now:</strong>
													</td>
													<td class="bg-light-2 text-right" style="color:white">
														<input class="form-control-sm form-control pull-right" id="pay" min="0" style="width:35%" type="text" v-model="payment" />
													</td>
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

      <!-- customer model  -->
	  	<!-- Generic Add Modal -->
			<modal :adaptive="true" :clickToClose="false" :draggable="true" :limit="3" :resizable="true" height="auto" name="addModal">
				<div class="modal-header">
					<button @click="closeModal('addModal')" aria-hidden="true" class="close" data-dismiss="modal" type="button">&times;</button>
					<h4 class="modal-title">
						<i class="entypo-plus-circled"></i>Add POS Customer
					</h4>
				</div>
				<div class="modal-body">
					<form @submit.prevent="addNewPosCustomer()">
						<div class="form-group">
							<label for>Name</label>
							<input class="form-control" id="name" placeholder="Enter Customer Name" type="text" v-model="addPosCustomer.name" />
							<span class="text-danger" v-if="allErrors.name" v-text="allErrors.name[0]"></span>
						</div>
						<div class="form-group">
							<label for>Phone</label>
							<input class="form-control" id="phone" placeholder="Enter Customer Phone" type="text" v-model="addPosCustomer.phone" />
							<span class="text-danger" v-if="allErrors.phone" v-text="allErrors.phone[0]"></span>
						</div>
						<div class="form-group">
							<label for>Sex</label>
							<select class="form-control" v-model="addPosCustomer.sex">
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
							<span class="text-danger" v-if="allErrors.sex" v-text="allErrors.sex[0]"></span>
						</div>
						<div class="modal-footer">
							<button @click="closeModal('addModal')" class="btn btn-primary" data-dismiss="modal" type="button">Close</button>
							<button class="btn btn-success">Save</button>
						</div>
					</form>
				</div>
			</modal>
		<!-- End Generic Add Modal -->
       <!-- customer model end -->

		<!-- PAYMENT MODAL -->

		<div class="modal fade in" id="addSell">
			<div class="modal-dialog" style="width:80%">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Add Sell</h5>
						<button aria-label="Close" class="close" data-dismiss="modal" type="button">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form @submit.prevent="submitSale()">
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
												<div class="col-md-4">
													<div class="form-group">
														<label>Date</label>
														<input :value="new Date() | moment('dddd, MMMM Do YYYY')" class="form-control" disabled />
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Sell By</label>
														<input :value="seller.name" class="form-control" disabled />
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Payment Method</label>
														<model-select :options="payment_methods" placeholder="Select Payment Methods" v-model="addSale.payment_method"></model-select>
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Account</label>
														<model-select :options="accounts" placeholder="Select Account" v-model="addSale.account_id"></model-select>
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Customer</label>
														<model-select :options="customerList" placeholder="Select Customer" v-model="addSale.customer_id"></model-select>
													</div>
												</div>

												<!-- <form @submit.prevent="addNewPosCustomer()">
													<div class="col-md-3">
														<div class="form-group">
															<label>Customer Name</label>
															<input v-model="addPosCustomer.name" class="form-control"  placeholder="Customer Name" ></input>
														</div>
												    </div>
													<div class="col-md-1">
														<br>
														<button type="submit" class="form-control" style="background-color:#004a88">Add</button>
													</div>
												</form> -->
                                                 <br>
												 <div class="col-md-4">
													 <br> <br>
													 <button @click="openModal('addModal')" class="btn btn-blue btn-sm" type="button" >
													<i class="entypo-plus-circled"></i>Add
												   </button>

												 </div>
												

                                            <div class="col-md-4">
											<span style="color:#004a88">.</span>
											</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Remarks</label>
														<textarea class="form-control" rows="2" v-model="addSale.remarks"></textarea>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title">
												<a data-parent="#accordion-test-2" data-toggle="collapse" href="#itemSelect"> Select Item</a>
											</h4>
											<h4 class="panel-title" style="float:right;">
												Product Wise Vat Discount?
												<input @change="productWisevatChange" type="checkbox" v-model="productWiseVat" />
											</h4>
										</div>
										<div class="panel-collapse collapse in" id="itemSelect">
											<div class="panel-body">
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
																					{{ data.category && data.category.category_name }}
																					<strong style="color:blue">{{ data.name }}</strong>
																					- {{ data.dosage }} -
																					<b style="color:blue">Stock: {{ data.stock_sell ? (data.stock_sell[0] ? data.stock_sell[0].stock : "0") : "0" }}</b>
																				</span>
																				<span>
																					<b style="color:blue">Rate: {{ data.prices ? (data.prices[1] ? data.prices[1].price : data.prices[0].price) : "0.00" }}</b>
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
															<th class="text-center bg-primary" style="width: 100px;">Product</th>
															<th class="text-center bg-primary" style="width: 80px;">Unit</th>
															<th class="text-center bg-primary" style="width: 78px;">Batch</th>
															<th class="text-center bg-primary" style="width: 78px;">Stock</th>
															<th class="text-center bg-primary" style="width: 72px;">Sell(Tk)</th>
															<th class="text-center bg-primary" style="width: 72px;" v-show="productWiseVat">Discount(%)</th>
															<th class="text-center bg-primary" style="width: 72px;" v-show="productWiseVat">Vat(%)</th>
															<th class="text-center bg-primary" style="height: 5rem;width: 80px;">PUPQ</th>
															<th class="text-center bg-primary" style="height: 5rem;width: 80px;">QTY</th>
															<th class="text-center bg-primary" style="width: 82px;">Total Amount(Tk)</th>
															<th class="text-center bg-primary" style="width:71px;">
																<i class="fa fa-trash"></i>
															</th>
														</thead>
													</table>
													<div class="custom-div">
														<table class="table table-bordered">
															<tbody>
																<tr style="height:50px" v-for="(product,index) in selectedProduct">
																	<td class="text-center" style="width: 95px;">
																		{{ product.category}}
																		<b>{{product.name }}</b>
																	</td>
																	<td class="text-center" style="width: 75px;">
																		<select @change="checkUnit(index)" class="form-control" v-model="product.unit_id">
																			<option :value="data.unit_id" v-for="data in product.units">{{ data.unit.symbol }}</option>
																		</select>
																	</td>
																	<td class="text-center" style="width: 75px;">
																		<select @change="batchChange(index)" class="form-control" v-model="product.batch">
																			<option :value="data.id" v-for="data in product.batches">{{ data.batch }}</option>
																		</select>
																	</td>
																	
																	<td class="text-center" style="width: 80px;">{{ product.stock }}{{product.units[2] ? product.units[2].unit.symbol : product.units[1] ? product.units[1].unit.symbol :  product.units[0].unit.symbol}}</td>
																	<td class="text-center" style="width: 80px;">{{ product.sell_price }}</td>
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
																		<input class="form-control" disabled readonly v-model="product.pupq" />
																	</td>
																	<td class="text-center" style="width: 80px;">
																		<input @change="calcSubTotal(index)" @keyup="calcSubTotal(index)" class="form-control" min="0" type="number" v-model="product.quantity" />
																	</td>
																	<td class="text-center" style="width: 80px;">
																		<p>{{ product.sub_total.toFixed(2) }}</p>
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
													<b>{{ addSale.grand_amount }}</b>
												</span>
											</h4>
										</div>
										<div class="panel-collapse collapse in" id="totalInfo">
											<div class="panel-body">
												<div class="col-md-4">
													<div class="form-group">
														<label>SubTotal</label>
														<input class="form-control form-control-sm" disabled min="0" readonly v-model="addSale.total_amount" />
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>VAT</label>
														<input :disabled="productWiseVat" class="form-control form-control-sm" max="100" min="0" step="0.1" type="number" v-model="addSale.vat_rate" />
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>VAT Amount</label>
														<input class="form-control form-control-sm" disabled min="0" readonly step="0.1" v-model="addSale.vat_amount" />
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Discount</label>
														<input class="form-control form-control-sm" min="0" step="any" type="number" v-model="discount" />
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
														<input class="form-control form-control-sm" disabled min="0" readonly v-model="addSale.discounted_amount" />
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Total</label>
														<input class="form-control form-control-sm" disabled min="0" readonly v-model="addSale.grand_amount" />
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Pay</label>
														<input class="form-control form-control-sm" min="0" step="any" type="number" v-model="addSale.paid_amount" />
													</div>
												</div>
												<div class="col-md-4">
													<div class="form-group">
														<label>Due</label>
														<input class="form-control form-control-sm" disabled min="0" readonly v-model="addSale.due_amount" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="modal-footer">
							<button class="btn btn-secondary" data-dismiss="modal" ref="sellCloseBtn" type="button">Close</button>
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
			saleData: {},
			search: "",
			searchMed: "",
			allErrors: [],
			custom_row: 10,
			select_row: [10, 20, 30, 40, 50],
			viewSell: {
				date: "",
				products: {},
				customer: {},
			},
			addPosCustomer:{
               name: "",
			},
			addSale: {
				account_id: "",
				customer_id: "",
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
			customerList: [],
			accounts: [],
			categoryList: [],
			selectedProduct: [],
			payment_methods: [],
			payment: 0,
			discount_type: 1,
			discount: 0,
			category_id: "",
			permissions: "",
			productList: {},
			settings: "",
			showList: false,
			seller: "",
			productWiseVat: false,
			company_details: {},
		};
	},
	methods: {

		openModal: function (modal) {
			_this.show(modal);
		},

		closeModal: function (modal) {
			this.$modal.hide(modal);
		},
		addNewPosCustomer: function () {
			const _this = this;
			axios
				.post(base_path + "pos_customer", _this.addPosCustomer)
				.then((response) => {
					if (response.data.code == 201) {
						this.$toastr.success(response.data.message, "Pos Customer", {
							timeout: 5000,
						});
						// _this.getPosCustomer();
						// _this.closeModal("addModal");
						_this.clearForm(_this.addPosCustomer);
						_this.getCustomer();
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
		openModal: function (modalId) {
			$(`#${modalId}`).modal("show");
		},
		ViewSell: function (id) {
			const _this = this;
			// _this.openModal("viewModal");
			axios.get(base_path + "sell/" + id).then((response) => {
				_this.viewSell = response.data;
			});
		},
		Payment: function (id) {
			const _this = this;
			axios.get(base_path + "sell/" + id).then((response) => {
				_this.viewSell = response.data;
			});
		},
		paymentForm: function (id) {
			const _this = this;
			let payment = { payment: _this.payment, id: id };
			axios
				.post(base_path + "sell/payment", payment)
				.then((response) => {
					if (response.status === 201) {
						_this.getSale();
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
		getSale: function (page = 1, custom_row = 10) {
			const _this = this;
			const main_url =
				base_path +
				"sell?q=" +
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
					_this.saleData = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		DeleteSell: function (id, index) {
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
						.delete(base_path + "sell/" + id)
						.then((response) => {
							if (response.data.status === 200) {
								_this.getSale();
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
		getSeller: function () {
			const self = this;
			axios
				.get(base_path + "sellerDetails")
				.then((response) => {
					self.seller = response.data;
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
		getCustomer: function () {
			const self = this;
			axios
				.get(base_path + "allActiveCustomer")
				.then((response) => {
					self.customerList = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		getAppSettings: function () {
			const _this = this;
			axios.get(base_path + "app_settings").then((response) => {
				_this.settings = response.data;
				_this.addSale.vat_rate = _this.settings.vat;
				_this.addSale.account_id = _this.settings.account_id;
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
			// let found = self.selectedProduct.find((item) => item.id == product.id);
			// if (found) {
			// 	found.total_quantity++;
			// 	found.sub_total = found.purchase_price * found.total_quantity;
			// 	self.calcTotal;
		
			if (product.prices.length == 0) {
				self.$toastr.warning("Product price not added", "Sorry!", {
					timeOut: 5000,
				});
			} else if (product.stock_sell.length == 0) {
				self.$toastr.warning("No stock found", "Sorry!", {
					timeOut: 5000,
				});
			} else {
				self.selectedProduct.push({
					id: product.id,
					category: product.category.category_name,
					name: product.name,
					unit_id: product.prices
						? product.prices[1]
							? product.prices[1].unit.id
							: product.prices[0].unit.id
						: "",
					units: product.prices,
					batches: product.stock_sell ? product.stock_sell : "",
					batch: product.stock_sell && product.stock_sell[0].id,
					stock: product.stock_sell && product.stock_sell[0].stock,
					quantity: 0,
					sell_price: product.prices
						? product.prices[1]
							? product.prices[1].price
							: product.prices[0].price
						: "",
					sub_total: 0,
					discount: 0,
					discounted_amount: 0,
					vat: 0,
					vat_amount: 0,
					exp_date: "",
					pupq: product.prices
						? product.prices[1]
							? 1
							: product.conversion_factor
						: 1,
					conversion_factor: product.conversion_factor,
					conversion_factor_third : product.conversion_factor_third
				});
			}
		},
		batchChange: function (index) {
			const self = this;
			let product = self.selectedProduct[index];
			console.log(product);
			product.batches.map((x) => {
				if (x.id == product.batch) {
					product.stock = x.stock;
				}
			});
		},
		checkUnit: function (index) {
			const _this = this;
			let product = _this.selectedProduct[index];
			product.pupq = 1;
			product.units.forEach((element) => {
				if (product.unit_id == element.unit_id) {
					if (element.type == "PRIMARY") {
						product.pupq = product.conversion_factor * product.conversion_factor_third;
						console.log(product.pupq);
					}else if(element.type == "SECONDARY"){
                         product.pupq = product.conversion_factor_third;
						 console.log(product.pupq);
					}
					product.sell_price = element.price;
				}
			});
			this.calcSubTotal(index);
		},
		removeProduct: function (index) {
			const _this = this;
			_this.selectedProduct.splice(index, 1);
			// _this.Pay = 0;
			// _this.calcTotal();
			// _this.calcDue();
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
				self.selectedProduct[index].sell_price *
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
			self.addSale.total_amount = 0;
			self.selectedProduct.forEach(function (value) {
				self.addSale.total_amount = parseFloat(
					parseFloat(self.addSale.total_amount) + parseFloat(value.sub_total)
				).toFixed(2);
			});
			self.addSale.grand_amount = self.addSale.total_amount;
			self.calcVat();
			self.calcDiscount();
			self.calcDue();
		},
		calcVat: function () {
			const self = this;
			if (self.productWiseVat == false) {
				self.addSale.vat_amount = 0;
				if (self.addSale.vat_rate > 0) {
					self.addSale.vat_amount = parseFloat(
						self.addSale.grand_amount * (self.addSale.vat_rate / 100)
					).toFixed(2);
					self.addSale.grand_amount = parseFloat(
						parseFloat(self.addSale.grand_amount) +
							parseFloat(self.addSale.vat_amount)
					).toFixed(2);
				}
			} else {
				self.addSale.vat_amount = 0;
				self.selectedProduct.map((x) => {
					self.addSale.vat_amount += parseFloat(x.vat_amount);
				});
				self.addSale.vat_rate = 0;
			}
		},
		calcDiscount: function (event = "") {
			const self = this;
			if (self.discount_type == 1) {
				self.addSale.discounted_amount = self.discount;
				self.addSale.discount = self.discount;
				self.addSale.grand_amount = parseFloat(
					parseFloat(self.addSale.grand_amount) - parseFloat(self.discount)
				).toFixed(2);
			}
			if (self.discount_type == 2) {
				if (Number(self.discount) >= 100) {
					self.discount = 99;
					this.$toastr.warning("Highest Discount can be 99%", "Discount", {
						timeOut: 5000,
					});
				}
				self.addSale.discounted_amount = parseFloat(
					self.addSale.grand_amount * (self.discount / 100)
				).toFixed(2);
				self.addSale.grand_amount = parseFloat(
					parseFloat(self.addSale.grand_amount) -
						parseFloat(self.addSale.discounted_amount)
				).toFixed(2);
				self.addSale.discount = self.discount;
			}
		},
		clearDiscount: function () {
			const self = this;
			self.discount = 0;
			self.calcDiscount();
		},
		clearVat: function () {
			const self = this;
			self.addSale.vat_rate = 0;
			self.calcTotal();
		},
		productWisevatChange: function () {
			const self = this;
			if (!self.productWiseVat) {
				self.addSale.vat_amount = 0;
				let i = 0;
				self.selectedProduct.map((x) => {
					x.vat = 0;
					x.vat_amount = 0;
					self.calcSubTotal(i);
					i++;
				});
			}
			self.addSale.vat_rate = self.settings.vat;
			self.calcTotal();
		},
		calcDue: function () {
			const self = this;
			self.addSale.due_amount = parseFloat(
				self.addSale.grand_amount - self.addSale.paid_amount
			).toFixed(2);
		},
		submitSale: function () {
			const self = this;
			self.addSale.products = self.selectedProduct;
			self.addSale.products_qty = self.selectedProduct.length;
			self.validateSubmit();
		},
		validateSubmit: function () {
			const self = this;
			self.validate = 0;
			if (!self.addSale.paid_amount) {
				self.validate++;
				self.$toastr.warning("Without pay amount we cannot proceed", "Sorry!", {
					timeOut: 5000,
				});
			}
			// if (!self.addSale.customer_id) {
			// 	self.validate++;
			// 	self.$toastr.warning("Please select customer", "Sorry!", {
			// 		timeOut: 5000,
			// 	});
			// }
			if (self.addSale.products.length < 1) {
				self.validate++;
				self.$toastr.warning("Please select product for sell", "Sorry!", {
					timeOut: 5000,
				});
			}
			self.addSale.products.forEach(function (value) {
				if (!value.sell_price) {
					self.validate++;
					self.$toastr.warning("Please insert products sell price", "Sorry!", {
						timeOut: 5000,
					});
				}
				if (!value.quantity) {
					self.validate++;
					self.$toastr.warning("Please insert products quantity", "Sorry!", {
						timeOut: 5000,
					});
				}
				if(self.addSale.due_amount > 0){
				if (!self.addSale.customer_id ) {
					
					self.validate++;
					self.$toastr.warning("Please Select Customer ", "Sorry!", {
						timeOut: 5000,
					});
				}
				}

			});

			if (self.validate == 0) {
				self.AddNewSale();
			}
		},
		AddNewSale: function () {
			const self = this;
			axios
				.post(base_path + "sell", self.addSale)
				.then((response) => {
					self.$toastr.success(response.data.message, "Sell", {
						timeOut: 5000,
					});
					self.addSale.customer_id = "";
					self.addSale.total_amount = "";
					self.addSale.payment_method = "";
					self.addSale.discount = 0;
					self.addSale.discounted_amount = 0;
					self.addSale.vat_rate = 0;
					self.addSale.vat_amount = 0;
					self.addSale.grand_amount = 0;
					self.addSale.paid_amount = 0;
					self.addSale.due_amount = 0;
					self.addSale.products = "";
					self.addSale.products_qty = 0;
					self.addSale.remarks = "";
					self.selectedProduct = [];
					self.discount_type = 1;
					self.discount = 0;
					self.getSale();
					const elem = this.$refs.sellCloseBtn;
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
		"addSale.vat_rate": function () {
			this.calcTotal();
		},
		"addSale.paid_amount": function () {
			this.calcTotal();
		},
		category_id: function () {
			this.getProduct();
		},
	},
	created() {
		this.getSale();
	},
	mounted() {
		this.getComapnyDetails();
		this.getAccounts();
		this.getAppSettings();
		this.getPaymentMethod();
		this.getCustomer();
		this.getCategory();
		this.getSeller();
		this.getUserPermissions();
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
