<template>
	<div>
		<h3>Sale & Stock Report</h3>
		<br />
		<div class="panel panel-primary">
			<div class="panel-heading">
				<div class="panel-title">
					<b>Sale & Stock Report</b>
				</div>
				<div class="panel-options">
					<button @click="print()" class="btn btn-primary btn-sm" style="margin-top:4px;" type="button">
						<i class="entypo-print"></i>Print
					</button>
				</div>
			</div>

			<div class="panel-heading"></div>
			<div style="overflow-x: auto;">
				<table class="table table-bordered table-responsive">
					<thead>
						<tr>
							<th class="text-center">#</th>
							<th class="text-center">Name</th>
							<th class="text-center">Manufacturer</th>
							<th class="text-center">Unit</th>
							<th class="text-center">Current Stock</th>
							<th class="text-center">Total Sold</th>
						</tr>
					</thead>

					<tbody>
						<tr :key="index" v-for="(data,index) in allData">
							<td class="text-center">{{ ++index }}</td>
							<td class="text-center">{{ data.medicine }}</td>
							<td class="text-center">{{ data.manufacturer }}</td>
							<td class="text-center">{{ data.unit }}</td>
							<td class="text-center">{{ data.total_stock }}</td>
							<td class="text-center">{{ data.total_sale }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div class="invoice" hidden id="printDiv">
			<div class="row">
				<div class="col-sm-3"></div>
				<div class="col-md-6">
					<div class="clientlogo"></div>
					<div class="info">
						<h2>Dhaka Pharmacy</h2>
						<p>Joynal Tower,Joynal Market Dokkinkhan</p>
						<p>Uttara, Dhaka-1230</p>
						<p>01646981922-25</p>
					</div>
				</div>
				<div class="col-sm-3"></div>
			</div>

			<div style="margin-top: 30px;"></div>

			<table class="table table-bordered">
				<thead>
					<tr>
						<th class="text-center">#</th>
						<th class="text-center">Name</th>
						<th class="text-center">Manufacturer</th>
						<th class="text-center">Current Stock</th>
						<th class="text-center">Total Sold</th>
					</tr>
				</thead>

				<tbody>
					<tr :key="index" v-for="(data,index) in allData">
						<td class="text-center">{{ ++index }}</td>
						<td class="text-center">{{ data.medicine }}</td>
						<td class="text-center">{{ data.manufacturer }}</td>
						<td class="text-center">{{ data.total_stock }}</td>
						<td class="text-center">{{ data.total_sale }}</td>
					</tr>
				</tbody>
			</table>

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
</template>
<script>
export default {
	name: "MedicineStockSaleReport",
	data() {
		return {
			allData: {},
		};
	},
	methods: {
		getStockInfo: function (page = 1, custom_row = 10) {
			const _this = this;
			axios.get(base_path + "stock_sale_report").then((response) => {
				_this.allData = response.data;
			});
		},
		print() {
			this.$htmlToPaper("printDiv");
		},
	},
	created() {
		this.getStockInfo();
	},
	mounted() {},
};
</script>

<style scoped>
</style>
