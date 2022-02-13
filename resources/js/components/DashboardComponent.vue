<template>
	<div>
		<div class="row">
			<div class="col-sm-3 col-xs-6">
				<div class="tile-stats tile-pink">
					<div class="icon">
						<i class="fas fa-hand-holding-usd"></i>
					</div>
					<countTo :duration="5000" :endVal="totalExpense" :startVal="0" class="num"></countTo>

					<h3>Today's Expense</h3>
					<p>Today's total expense.</p>
				</div>
			</div>

			<div class="col-sm-3 col-xs-6">
				<div class="tile-stats tile-black">
					<div class="icon">
						<i class="fas fa-file-invoice-dollar"></i>
					</div>
					<countTo :duration="5000" :endVal="totalIncome" :startVal="0" class="num"></countTo>
					<h3>Today's Income</h3>
					<p>Today's total income.</p>
				</div>
			</div>

			<div class="clear visible-xs"></div>

			<div class="col-sm-3 col-xs-6">
				<div class="tile-stats tile-aqua">
					<div class="icon">
						<i class="fas fa-coins"></i>
					</div>
					<countTo :duration="5000" :endVal="todaySale" :startVal="0" class="num"></countTo>
					<h3>Today's Sell</h3>
					<p>Total number of sold medicine today.</p>
				</div>
			</div>

			<div class="col-sm-3 col-xs-6">
				<div class="tile-stats tile-blue">
					<div class="icon">
						<i class="fa fa-users"></i>
					</div>
					<countTo :duration="5000" :endVal="todayStock" :startVal="0" class="num"></countTo>
					<h3>Today's Stock</h3>
					<p>Total number of stock medicine today.</p>
				</div>
			</div>
		</div>
		<br />

		<div class="row">
			<div class="col-sm-7">
				<div class="panel panel-primary" id="charts_env">
					<div class="panel-heading">
						<div class="panel-title">Income Stats</div>
					</div>

					<div class="panel-body">
						<IncomeStateDoughnut :chartData="IncomeStatsCollection" :height="180"></IncomeStateDoughnut>
					</div>
				</div>
			</div>
			<div class="col-sm-5">
				<div class="panel panel-primary">
					<div class="panel-heading">
						<div class="panel-title">
							<div class="panel-title">Sale Stats</div>
						</div>
					</div>
					<div class="panel-body">
						<SaleStatePie :chartData="SaleStatsCollection" :height="260"></SaleStatePie>
					</div>
				</div>
			</div>
		</div>
		<br />

		<div class="row">
			<div class="col-sm-5">
				<div class="panel panel-primary">
					<div class="panel-heading">
						<div class="panel-title">
							<div class="panel-title">Stock Overview</div>
						</div>
					</div>

					<div class="panel-body">
						<ExpenseStateLine :chartData="ExpenseStatsCollection" :height="220"></ExpenseStateLine>
					</div>
				</div>
			</div>
			<div class="col-sm-7">
				<div class="panel panel-primary" id="charts_env">
					<div class="panel-heading">
						<div class="panel-title">Manufacturer Overview(Last 30Day)</div>
					</div>
					<div class="panel-body">
						<ManufacturerStateBar :chartData="ManufacturerStatsCollection" :height="150"></ManufacturerStateBar>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SaleStatePie from "./SaleStatePie.js";
import ManufacturerStateBar from "./ManufacturerStateBar.js";
import IncomeStateDoughnut from "./IncomeStateDoughnut.js";
import ExpenseStateLine from "./ExpenseStateLine";
export default {
	name: "DashboardComponent",
	components: {
		SaleStatePie,
		ManufacturerStateBar,
		IncomeStateDoughnut,
		ExpenseStateLine,
	},
	data() {
		return {
			totalExpense: 0,
			totalIncome: 0,
			todayStock: 0,
			todaySale: 0,
			SaleStatsCollection: {
				labels: [],
				datasets: [
					{
						label: "Sale",
						backgroundColor: "#fff",
						data: [],
					},
				],
			},
			ManufacturerStatsCollection: {
				labels: [],
				datasets: [
					{
						label: "Stock",
						backgroundColor: "#fff",
						data: [],
					},
				],
			},
			IncomeStatsCollection: {
				labels: [],
				datasets: [
					{
						label: "Income",
						backgroundColor: "#fff",
						data: [],
					},
				],
			},
			ExpenseStatsCollection: {
				labels: [],
				datasets: [
					{
						label: "Expense",
						backgroundColor: "#fff",
						data: [],
					},
				],
			},
		};
	},
	methods: {
		getCounter: function () {
			const self = this;
			axios.get(base_path + "dashboard/counter").then((response) => {
				self.totalExpense = response.data.totalExpense;
				self.totalIncome = response.data.totalIncome;
				self.todayStock = response.data.todayStock;
				self.todaySale = response.data.todaySale;
			});
		},
		getSaleState: function () {
			const self = this;
			axios.get(base_path + "dashboard/sale_state").then((response) => {
				self.SaleStatsCollection = {
					labels: response.data.labels,
					datasets: [
						{
							label: "Sale State",
							backgroundColor: response.data.colors,
							borderWidth: 1,
							borderColor: response.data.colors,
							data: response.data.sale,
						},
					],
				};
			});
		},
		getManufacturerState: function () {
			const self = this;
			axios.get(base_path + "dashboard/manufacturer_state").then((response) => {
				self.ManufacturerStatsCollection = {
					labels: response.data.labels,
					datasets: [
						{
							label: "Stock",
							backgroundColor: response.data.colors,
							borderWidth: 1,
							borderColor: response.data.colors,
							data: response.data.stock,
						},
					],
				};
			});
		},
		getIncomeState: function () {
			const self = this;
			axios.get(base_path + "dashboard/income_state").then((response) => {
				self.IncomeStatsCollection = {
					labels: response.data.labels,
					datasets: [
						{
							label: "Sale State",
							backgroundColor: response.data.colors,
							borderWidth: 1,
							borderColor: response.data.colors,
							data: response.data.income,
						},
					],
				};
			});
		},
		getExpenseState: function () {
			const self = this;
			axios.get(base_path + "dashboard/expense_state").then((response) => {
				self.ExpenseStatsCollection = {
					labels: response.data.labels,
					datasets: [
						{
							label: "Expense",
							fill: false,
							borderColor: "#fff",
							backgroundColor: "#004a88",
							pointBackgroundColor: response.data.colors,
							data: response.data.expense,
							borderWidth: 3,
						},
					],
				};
			});
		},
	},
	mounted() {
		this.getCounter();
		this.getSaleState();
		this.getManufacturerState();
		this.getIncomeState();
		this.getExpenseState();
	},
};
</script>
<style>
canvas {
	color: white;
}
</style>
