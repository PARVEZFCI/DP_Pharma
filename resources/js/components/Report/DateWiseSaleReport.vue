<template>
	<div>
		<h3>Sell Report</h3>
		<br />
		<div class="panel panel-primary">
			<div class="panel-heading">
				<div class="panel-title">
					<b>Sell Report</b>
				</div>
				<div class="panel-options">
					<a :href="'/export/' + url" class="btn btn-default btn-sm" style="margin-top:4px;" type="button">
						<i class="fas fa-download"></i> Export
					</a>
					<button @click="print()" class="btn btn-primary btn-sm" style="margin-top:4px;" type="button">
						<i class="entypo-print"></i>Print
					</button>
				</div>
			</div>

			<div class="panel-heading">
				<div class="pull-left col-sm-1">
					<div class="form-group">
						<label class="control-label" for="entries" style="margin-top: 15px;">Show</label>
						<select @change="getSaleInfo()" class="form-control" style="position: absolute; top: 6px; left: 59px;" v-model="custom_row">
							<option :value="index" v-for="(row, index) in select_row" v-text="row"></option>
						</select>
					</div>
				</div>
				<div class="col-md-2"></div>
				<div class="col-md-3" v-show="showCustom">
					<input @change="getSaleInfo()" class="form-control search-box" id="from" type="date" v-model="from" />
				</div>
				<div class="col-md-3" v-show="showCustom">
					<input @change="getSaleInfo()" class="form-control search-box" id="to" type="date" v-model="to" />
				</div>
			</div>
			<div style="overflow-x: auto;background-color:#004a88">
				<table class="table table-bordered table-responsive">
					<thead>
						<tr>
							<th class="text-center">#</th>
							<th class="text-center">Date</th>
							<th class="text-center">Name</th>
							<th class="text-center">Sell</th>
							<th class="text-center">Amount</th>
						</tr>
					</thead>

					<tbody>
						<tr :key="index" v-for="(data,index) in allData.dateWise">
							<td class="text-center">{{ ++index }}</td>
							<td class="text-center">{{ data.date }}</td>
							<td class="text-center">{{ data.name }}</td>
							<td class="text-center">{{ data.sell }}</td>
							<td class="text-center">{{ data.amount }}</td>
						</tr>
					</tbody>
				</table>
				<div class="col-sm-10"></div>
				<div class="col-sm-2">
					<table class="table table-bordered">
						<tbody>
							<tr>
								<td>Total</td>
								<td>
									<b>{{allData.amount}}</b>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
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
						<th class="text-center">Date</th>
						<th class="text-center">Name</th>
						<th class="text-center">Sell</th>
						<th class="text-center">Amount</th>
					</tr>
				</thead>

				<tbody>
					<tr :key="index" v-for="(data,index) in allData.dateWise">
						<td class="text-center">{{ ++index }}</td>
						<td class="text-center">{{ data.date }}</td>
						<td class="text-center">{{ data.name }}</td>
						<td class="text-center">{{ data.sell }}</td>
						<td class="text-center">{{ data.amount }}</td>
					</tr>
				</tbody>
			</table>
			<div style="float:right">
				<table class="table table-bordered">
					<tbody>
						<tr>
							<td>Total</td>
							<td>
								<b>{{allData.amount}}</b>
							</td>
						</tr>
					</tbody>
				</table>
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
</template>
<script>
export default {
	name: "DateWiseSaleReport",
	data() {
		return {
			allData: {},
			select_row: {
				today: "Today",
				yesterday: "Yesterday",
				last7: "Last 7 Days",
				last30: "Last 30 Days",
				thismonth: "This Month",
				lastmonth: "Last Month",
				custom: "Custom Range",
			},
			showCustom: false,
			permissions: [],
			from: "",
			to: "",
			custom_row: "today",
			url: "",
		};
	},
	methods: {
		getSaleInfo: function () {
			const _this = this;
			if (_this.custom_row == "custom") {
				_this.showCustom = true;
			} else {
				_this.showCustom = false;
			}
			_this.url =
				"date/sale_report?type=" +
				_this.custom_row +
				"&from=" +
				_this.from +
				"&to=" +
				_this.to;
			axios.get(base_path + _this.url).then((response) => {
				_this.allData = response.data;
			});
		},

		print() {
			this.$htmlToPaper("printDiv");
		},
	},
	created() {
		this.getSaleInfo();
	},
	mounted() {},
};
</script>

<style scoped>
</style>
