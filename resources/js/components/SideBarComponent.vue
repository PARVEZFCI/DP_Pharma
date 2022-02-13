<template>
	<div class="sidebar-menu">
		<div class="sidebar-menu-inner">
			<header class="logo-env">
				<!-- logo -->
				<div class="logo">
					<a class="logo" href="/admin">
						<img :src="settings.logo ? '/'+settings.logo : '/backend_assets/assets/images/logo.png'" width="100" />
					</a>
				</div>

				<!-- logo collapse icon -->
				<div class="sidebar-collapse">
					<a class="sidebar-collapse-icon" href="#">
						<!-- add class "with-animation" if you want sidebar to have animation during expanding/collapsing transition -->
						<i class="entypo-menu"></i>
					</a>
				</div>

				<!-- open/close menu icon (do not remove if you want to enable menu on mobile devices) -->
				<div class="sidebar-mobile-menu visible-xs">
					<a class="with-animation" href="#">
						<!-- add class "with-animation" to support animation -->
						<i class="entypo-menu"></i>
					</a>
				</div>
			</header>

			<div class="sidebar-user-info">
				<div class="sui-normal">
					<a class="user-link" href="#">
						<img :src="userData.profile_photo_path ? '/'+userData.profile_photo_path : '/backend_assets/assets/images/thumb-1@2x.png'" alt class="img-circle" width="55" />

						<span>Welcome,</span>
						<strong>{{userData.name}}</strong>
					</a>
				</div>
			</div>
			<ul class="main-menu" id="main-menu">
				<!-- add class "multiple-expanded" to allow multiple submenus to open -->
				<!-- class "auto-inherit-active-class" will automatically add "active" class for parent elements who are marked already with class "active" -->
				<li class="active opened">
					<router-link to="/admin">
						<i class="fas fa-home"></i>
						<span class="title">Dashboard</span>
					</router-link>
				</li>
				<li class="has-sub" v-show="permissions.includes('RBAC')">
					<a href="javascript:void(0)">
						<i aria-hidden="true" class="fa fa-user-cog"></i>
						<span class="title">RBAC</span>
					</a>
					<ul>
						<li v-show="permissions.includes('Role')">
							<router-link to="/admin/role">
								<i class="fa fa-user-edit"></i>
								<span class="title">Role</span>
							</router-link>
						</li>
						<li v-show="permissions.includes('User_Access')">
							<router-link to="/admin/user-access">
								<i aria-hidden="true" class="fa fa-user"></i>
								<span class="title">User Access</span>
							</router-link>
						</li>
						<li v-show="permissions.includes('User')">
							<router-link to="/admin/user">
								<i aria-hidden="true" class="fa fa-user-alt"></i>
								<span class="title">User</span>
							</router-link>
						</li>
					</ul>
				</li>
				<li class="has-sub" v-show="permissions.includes('PRODUCTS')">
					<a href="javascript:void(0)">
						<i class="fas fa-pills"></i>
						<span class="title">Products</span>
					</a>
					<ul>
						<li v-show="permissions.includes('Product_Forms')">
							<router-link to="/admin/category">
								<i class="fas fa-divide"></i>
								<span class="title">Product Forms</span>
							</router-link>
						</li>
						<li v-show="permissions.includes('Product_Generics')">
							<router-link to="/admin/generic">
								<i class="fas fa-layer-group"></i>
								<span class="title">Product Generics</span>
							</router-link>
						</li>
						<li v-show="permissions.includes('Manufacturing_Company')">
							<router-link to="/admin/manufacturer">
								<i class="fas fa-industry"></i>
								<span class="title">Manufacturing Company</span>
							</router-link>
						</li>
						<li v-show="permissions.includes('Products')">
							<router-link to="/admin/medicine">
								<i class="fas fa-capsules"></i>
								<span class="title">Products</span>
							</router-link>
						</li>

						<li v-show="permissions.includes('Units')">
							<router-link to="/admin/unit">
								<i class="fa fa-balance-scale"></i>
								<span class="title">Units</span>
							</router-link>
						</li>
					</ul>
				</li>
				<li class="has-sub" v-show="permissions.includes('INVENTORY')">
					<a href="javascript:void(0)">
						<i aria-hidden="true" class="fa fa-shopping-cart"></i>
						<span class="title">Inventory</span>
					</a>
					<ul>
						<li v-show="permissions.includes('Stock')">
							<router-link to="/admin/stock">
								<i class="fa fa-truck"></i>
								<span class="title">Stock</span>
							</router-link>
						</li>
						<li v-show="permissions.includes('Sell')">
							<router-link to="/admin/sale">
								<i aria-hidden="true" class="fa fa-cart-plus"></i>
								<span class="title">Sell</span>
							</router-link>
						</li>
						<li v-show="permissions.includes('Customer')">
							<router-link to="/admin/pos_customer">
								<i class="fa fa-users"></i>
								<span class="title">Customer</span>
							</router-link>
						</li>
						<li class="has-sub" v-show="permissions.includes('Inventory_Report')">
							<a href="javascript:void(0)">
								<i aria-hidden="true" class="fas fa-clipboard-list"></i>

								<span class="title">Report</span>
							</a>
							<ul>
								<li v-show="permissions.includes('Stock_Sale_Report')">
									<router-link to="/admin/stock/sale/report">
										<i class="fa fa-users"></i>
										<span class="title">Stock Sale Report</span>
									</router-link>
								</li>
								<li v-show="permissions.includes('Stock_Report')">
									<router-link to="/admin/stock/date/report">
										<span class="title">Stock Report</span>
									</router-link>
								</li>
								<li v-show="permissions.includes('Sell_Report')">
									<router-link to="/admin/sale/date/report">
										<span class="title">Sale Report</span>
									</router-link>
								</li>
							</ul>
						</li>
					</ul>
				</li>

				<!-- <li class="has-sub">
					<router-link to="/admin/order">
						<i aria-hidden="true" class="fa fa-search-dollar"></i>
						<span class="title">Orders</span>
					</router-link>
					<ul>
						<li>
							<router-link to="/admin/order">
								<i aria-hidden="true" class="fa fa-list"></i>
								<span class="title">Retailer Orders</span>
							</router-link>
						</li>
						<li>
							<router-link to="/admin/patient/order">
								<i aria-hidden="true" class="fa fa-list"></i>
								<span class="title">Patient Orders</span>
							</router-link>
						</li>
						<li>
							<router-link to="/admin/customer">
								<i aria-hidden="true" class="fa fa-users"></i>
								<span class="title">Customers</span>
							</router-link>
						</li>
					</ul>
				</li>-->

				<li class="has-sub" v-show="permissions.includes('ACCOUNTS')">
					<router-link to="/admin/account">
						<i aria-hidden="true" class="fa fa-search-dollar"></i>
						<span class="title">Accounts</span>
					</router-link>
					<ul>
						<li v-show="permissions.includes('Transaction')">
							<router-link to="/admin/transaction">
								<i aria-hidden="true" class="fas fa-coins"></i>
								<span class="title">Transaction</span>
							</router-link>
						</li>
						<li v-show="permissions.includes('Accounts')">
							<router-link to="/admin/account">
								<i aria-hidden="true" class="fas fa-wallet"></i>
								<span class="title">Accounts</span>
							</router-link>
						</li>
						<li v-show="permissions.includes('Transaction_Head')">
							<router-link to="/admin/transaction/head">
								<i aria-hidden="true" class="fas fa-file-invoice-dollar"></i>
								<span class="title">Transaction Head</span>
							</router-link>
						</li>
						<li v-show="permissions.includes('Balance_Transfer')">
							<router-link to="/admin/balance/transfer">
								<i aria-hidden="true" class="fas fa-hand-holding-usd"></i>
								<span class="title">Balance Transfer</span>
							</router-link>
						</li>
						<li class="has-sub" v-show="permissions.includes('Accounts_Report')">
							<a href="/admin/expense/date/report">
								<i aria-hidden="true" class="fas fa-clipboard-list"></i>
								<span class="title">Report</span>
							</a>
							<ul>
								<li v-show="permissions.includes('Expense_Report')">
									<router-link to="/admin/expense/date/report">
										<span class="title">Expense Report</span>
									</router-link>
								</li>
								<li v-show="permissions.includes('Income_Report')">
									<router-link to="/admin/income/date/report">
										<span class="title">Income Report</span>
									</router-link>
								</li>
								<li v-show="permissions.includes('Seller_Report')">
									<router-link to="/admin/seller/report">
										<span class="title">Seller Report</span>
									</router-link>
								</li>
							</ul>
						</li>
					</ul>
				</li>

				<li class="has-sub" v-show="permissions.includes('SETTINGS')">
					<a href="/admin/app_setting">
						<i aria-hidden="true" class="fas fa-cogs"></i>

						<span class="title">Settings</span>
					</a>
					<ul>
						<li v-show="permissions.includes('App_Settings')">
							<router-link to="/admin/app_setting">
								<i aria-hidden="true" class="fas fa-sliders-h"></i>
								<span class="title">App Setting</span>
							</router-link>
						</li>
						<li v-show="permissions.includes('Company_Details')">
							<router-link to="/admin/company_details">
								<i aria-hidden="true" class="fas fa-tasks"></i>
								<span class="title">Company Details</span>
							</router-link>
						</li>
						<li v-show="permissions.includes('ACCOUNTS')">
							<router-link to="/admin/payment_method">
								<i aria-hidden="true" class="fas fa-credit-card"></i>
								<span class="title">Payment Method</span>
							</router-link>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: "SideBarComponent",
	data() {
		return {
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
			userData: {
				name: "",
				phone: "",
				email: "",
				address: "",
				profile_photo_path: "",
			},
		};
	},
	methods: {
		getSettings: function () {
			const _this = this;
			axios.get(base_path + "company_details").then((response) => {
				_this.settings = response.data;
			});
		},
		getUser: function () {
			const _this = this;
			axios.get(base_path + "get_profile").then((response) => {
				_this.userData = response.data;
			});
		},
	},
	created() {
		this.getSettings();
		this.getUser();
		this.getUserPermissions();
	},
};
</script>
