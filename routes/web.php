<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SellController;
use App\Http\Controllers\UnitController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ExportOrderList;
use App\Http\Controllers\StockController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\GenericController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DownloadController;
use App\Http\Controllers\CustomerDuePaymentController;
// Frontend
use App\Http\Controllers\MedicineController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AppSettingController;
use App\Http\Controllers\OrderPrintController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\SellIncomeController;
use App\Http\Controllers\UserAccessController;
use App\Http\Controllers\PosCustomerController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UserAbilityController;
use App\Http\Controllers\ManufacturerController;
use App\Http\Controllers\Report\StockSaleReport;
use App\Http\Controllers\StockExpenseController;
use App\Http\Controllers\CompanyDetailController;
use App\Http\Controllers\PaymentMethodController;
use App\Http\Controllers\SellerDetailsController;
use App\Http\Controllers\MedicineExportController;
use App\Http\Controllers\MedicineImportController;
use App\Http\Controllers\RolePermissionController;
use App\Http\Controllers\AllActiveSellerController;
use App\Http\Controllers\ProfileSettingsController;
use App\Http\Controllers\Report\DateWiseSaleReport;
use App\Http\Controllers\TransactionHeadController;
use App\Http\Controllers\AllActiveAccountController;
use App\Http\Controllers\Report\DateWiseStockReport;
use App\Http\Controllers\Report\DateWiseIncomeReport;
use App\Http\Controllers\Report\DateWiseSellerReport;
use App\Http\Controllers\Report\DateWiseExpenseReport;
use App\Http\Controllers\CustomerWiseInvoiceController;
use App\Http\Controllers\Report\ExportDateWiseSaleReport;
use App\Http\Controllers\AccountBalanceTransferController;
use App\Http\Controllers\Report\ExportDateWiseStockReport;
use App\Http\Controllers\Report\ExportDateWiseIncomeReport;
use App\Http\Controllers\Report\ExportDateWiseSellerReport;
use App\Http\Controllers\AllActiveTransactionHeadController;
use App\Http\Controllers\Report\ExportDateWiseExpenseReport;
use App\Http\Controllers\Auth\LoginController as AuthLoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['auth'])->get('/admin', function () {
    return view('layouts.app');
})->name('admin');

Route::redirect('/', '/admin', 301);

Route::group(['prefix' => 'api/v1/'], function () {
    Route::resource('category', CategoryController::class);
    Route::get('category/status/{id}', [CategoryController::class, 'status']);
    Route::get('allActiveCategory', [CategoryController::class, 'allActiveCategory']);

    Route::resource('generic', GenericController::class);
    Route::get('generic/status/{id}', [GenericController::class, 'status']);
    Route::get('allActiveGeneric', [GenericController::class, 'allActiveGeneric']);

    Route::resource('manufacturer', ManufacturerController::class);
    Route::get('manufacturer/status/{id}', [ManufacturerController::class, 'status']);
    Route::get('allActiveManufacture', [ManufacturerController::class, 'allActiveManufacture']);

    Route::resource('unit', UnitController::class);
    Route::get('unit/status/{id}', [UnitController::class, 'status']);
    Route::get('allActiveUnit', [UnitController::class, 'allActiveUnit']);

    Route::resource('medicine', MedicineController::class);
    Route::get('medicine/status/{id}', [MedicineController::class, 'status']);
    Route::post('medicine/import', MedicineImportController::class);
    Route::get('/product_search', [MedicineController::class, 'productSearch']);

    // Route::get('/customer', [CustomerController::class, 'index']);
    // Route::get('/customer/status/{id}', [CustomerController::class, 'status']);
    // Route::get('/allActiveFrontCustomer', [CustomerController::class, 'allActiveCustomer']);
    // Route::get('/customer/{id}', [CustomerController::class, 'show']);
    Route::resource('app_settings', AppSettingController::class);

    Route::resource('payment_method', PaymentMethodController::class);
    Route::get('payment_method/status/{id}', [PaymentMethodController::class, 'status']);
    Route::get('allPaymentMethod', [PaymentMethodController::class, 'allPaymentMethod']);

    Route::resource('stock', StockController::class);
    Route::post("stock_expense", StockExpenseController::class);

    Route::resource('pos_customer', PosCustomerController::class);
    Route::get('pos_customer/status/{id}', [PosCustomerController::class, 'status']);
    Route::get('allActiveCustomer', [PosCustomerController::class, 'allActiveCustomer']);
//Customer Due Payment
    Route::post('sell/customerpayment', CustomerDuePaymentController::class);


    Route::resource('sell', SellController::class);
    Route::post('sell/payment', SellIncomeController::class);

    Route::get('sellerDetails', SellerDetailsController::class);
    Route::get("download", DownloadController::class);

    Route::resource('company_details', CompanyDetailController::class);

    Route::resource('slider', SliderController::class);
    Route::get('slider/status/{id}', [SliderController::class, 'status']);

    Route::resource('account', AccountController::class);
    Route::get('account/status/{id}', [AccountController::class, 'status']);
    Route::get("allActiveAccount", AllActiveAccountController::class);

    Route::resource('transaction/head', TransactionHeadController::class);
    Route::get('transaction/head/status/{id}', [TransactionHeadController::class, 'status']);
    Route::get('allActiveTransactionHead', AllActiveTransactionHeadController::class);

    Route::get("customer_wise_invoice/{id}", CustomerWiseInvoiceController::class);

    Route::resource('transaction', TransactionController::class);

    Route::resource('balance/transfer', AccountBalanceTransferController::class);
    Route::get('allActiveSeller', AllActiveSellerController::class);

    Route::resource('role', RoleController::class);
    Route::get("role/status/{id}", [RoleController::class, 'status']);

    Route::get('permission', PermissionController::class);
    Route::post('role_permission/{id}', [RolePermissionController::class, 'updateRolePermission']);
    Route::get('role_permission/{id}', [RolePermissionController::class, 'getRolePermission']);
    Route::get('allRole', [RoleController::class, 'allRole']);
    Route::resource('user', UserController::class);
    Route::get('allUser', [UserController::class, 'allUser']);

    Route::post('user_access', [UserAccessController::class, 'updateUserAccess']);
    Route::delete('user_access/{id}', [UserAccessController::class, 'deleteUserAccess']);
    Route::get('user_access', [UserAccessController::class, 'allUserAccess']);

    Route::get("get_profile", [ProfileSettingsController::class, 'index']);
    Route::put("update_profile", [ProfileSettingsController::class, 'updateProfile']);
    Route::put("change_password", [ProfileSettingsController::class, 'changePassword']);
    Route::get('user_ability', UserAbilityController::class);

    Route::get("stock_sale_report", StockSaleReport::class);
    Route::get("date/stock_report", DateWiseStockReport::class);
    Route::get("date/sale_report", DateWiseSaleReport::class);
    Route::get("date/expense_report", DateWiseExpenseReport::class);
    Route::get("date/income_report", DateWiseIncomeReport::class);
    Route::get("date/seller_report", DateWiseSellerReport::class);
    Route::get("dashboard/sale_state", [DashboardController::class, 'saleState']);
    Route::get("dashboard/manufacturer_state", [DashboardController::class, 'manufacturerState']);
    Route::get("dashboard/income_state", [DashboardController::class, 'incomeState']);
    Route::get("dashboard/expense_state", [DashboardController::class, 'expenseState']);
    Route::get("dashboard/counter", [DashboardController::class, 'counter']);
});

Route::get('medicine/export/{type}', MedicineExportController::class);

Route::get('admin/{vue_capture?}', function () {
    if (Auth::check()) {
        return view('layouts.app');
    } else {
        return redirect()->to("/login");
    }
})->where('vue_capture', '[\/\w\.-]*');

Route::get('order/print/{id}', OrderPrintController::class);
Route::get("export/date/stock_report", ExportDateWiseStockReport::class);
Route::get("export/date/sale_report", ExportDateWiseSaleReport::class);
Route::get("export/date/expense_report", ExportDateWiseExpenseReport::class);
Route::get("export/date/income_report", ExportDateWiseIncomeReport::class);
Route::get("export/date/seller_report", ExportDateWiseSellerReport::class);
Route::get('export/invoice_list', ExportOrderList::class);
Route::post('logout', [AuthLoginController::class, 'logout'])
    ->name('logout');
