<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            [
                'name'          => 'PRODUCTS',
                'display_name'  => 'PRODUCTS',
                'module'        => null,
                'details'       => 'MODULE',
                'type'          => null,
            ],
            [
                'name'          => 'Product_Forms',
                'display_name'  => 'Product Forms',
                'module'        => "PRODUCTS",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Product_Generics',
                'display_name'  => 'Product Generics',
                'module'        => "PRODUCTS",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Manufacturing_Company',
                'display_name'  => 'Manufacturing Company',
                'module'        => "PRODUCTS",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Products',
                'display_name'  => 'Products',
                'module'        => "PRODUCTS",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Units',
                'display_name'  => 'Units',
                'module'        => "PRODUCTS",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Add_Forms',
                'display_name'  => 'Add Forms',
                'module'        => "PRODUCTS",
                'details'       => 'Product_Forms',
                'type'          => 1,
            ],
            [
                'name'          => 'Edit_Forms',
                'display_name'  => 'Edit Forms',
                'module'        => "PRODUCTS",
                'details'       => 'Product_Forms',
                'type'          => 2,
            ],
            [
                'name'          => 'Delete_Forms',
                'display_name'  => 'Delete Forms',
                'module'        => "PRODUCTS",
                'details'       => 'Product_Forms',
                'type'          => 3,
            ],
            [
                'name'          => 'Status_Forms',
                'display_name'  => 'Status Forms',
                'module'        => "PRODUCTS",
                'details'       => 'Product_Forms',
                'type'          => 4,
            ],
            [
                'name'          => 'Add_Generics',
                'display_name'  => 'Add Generics',
                'module'        => "PRODUCTS",
                'details'       => 'Product_Generics',
                'type'          => 1,
            ],
            [
                'name'          => 'Edit_Generics',
                'display_name'  => 'Edit Generics',
                'module'        => "PRODUCTS",
                'details'       => 'Product_Generics',
                'type'          => 2,
            ],
            [
                'name'          => 'Delete_Generics',
                'display_name'  => 'Delete Generics',
                'module'        => "PRODUCTS",
                'details'       => 'Product_Generics',
                'type'          => 3,
            ],
            [
                'name'          => 'Status_Generics',
                'display_name'  => 'Status Generics',
                'module'        => "PRODUCTS",
                'details'       => 'Product_Generics',
                'type'          => 4,
            ],
            [
                'name'          => 'Add_Manufacture',
                'display_name'  => 'Add Manufacture',
                'module'        => "PRODUCTS",
                'details'       => 'Manufacturing_Company',
                'type'          => 1,
            ],
            [
                'name'          => 'Edit_Manufacture',
                'display_name'  => 'Edit Manufacture',
                'module'        => "PRODUCTS",
                'details'       => 'Manufacturing_Company',
                'type'          => 2,
            ],
            [
                'name'          => 'Delete_Manufacture',
                'display_name'  => 'Delete Manufacture',
                'module'        => "PRODUCTS",
                'details'       => 'Manufacturing_Company',
                'type'          => 3,
            ],
            [
                'name'          => 'Status_Manufacture',
                'display_name'  => 'Status Manufacture',
                'module'        => "PRODUCTS",
                'details'       => 'Manufacturing_Company',
                'type'          => 4,
            ],
            [
                'name'          => 'Add_Medicine',
                'display_name'  => 'Add Medicine',
                'module'        => "PRODUCTS",
                'details'       => 'Products',
                'type'          => 1,
            ],
            [
                'name'          => 'Edit_Medicine',
                'display_name'  => 'Edit Medicine',
                'module'        => "PRODUCTS",
                'details'       => 'Products',
                'type'          => 2,
            ],
            [
                'name'          => 'Delete_Medicine',
                'display_name'  => 'Delete Medicine',
                'module'        => "PRODUCTS",
                'details'       => 'Products',
                'type'          => 3,
            ],
            [
                'name'          => 'Status_Medicine',
                'display_name'  => 'Status Medicine',
                'module'        => "PRODUCTS",
                'details'       => 'Products',
                'type'          => 4,
            ],
            [
                'name'          => 'View_Medicine',
                'display_name'  => 'View Medicine',
                'module'        => "PRODUCTS",
                'details'       => 'Products',
                'type'          => 5,
            ],
            [
                'name'          => 'Import_Medicine',
                'display_name'  => 'Import Medicine',
                'module'        => "PRODUCTS",
                'details'       => 'Products',
                'type'          => 6,
            ],
            [
                'name'          => 'Export_Medicine',
                'display_name'  => 'Export Medicine',
                'module'        => "PRODUCTS",
                'details'       => 'Products',
                'type'          => 7,
            ],
            [
                'name'          => 'Print_Medicine',
                'display_name'  => 'Print Medicine',
                'module'        => "PRODUCTS",
                'details'       => 'Products',
                'type'          => 8,
            ],
            [
                'name'          => 'Duplicate_Medicine',
                'display_name'  => 'Duplicate Medicine',
                'module'        => "PRODUCTS",
                'details'       => 'Products',
                'type'          => 9,
            ],
            [
                'name'          => 'Add_Unit',
                'display_name'  => 'Add Unit',
                'module'        => "PRODUCTS",
                'details'       => 'Units',
                'type'          => 1,
            ],
            [
                'name'          => 'Edit_Unit',
                'display_name'  => 'Edit Unit',
                'module'        => "PRODUCTS",
                'details'       => 'Units',
                'type'          => 2,
            ],
            [
                'name'          => 'Delete_Unit',
                'display_name'  => 'Delete Unit',
                'module'        => "PRODUCTS",
                'details'       => 'Units',
                'type'          => 3,
            ],
            [
                'name'          => 'Status_Unit',
                'display_name'  => 'Status Unit',
                'module'        => "PRODUCTS",
                'details'       => 'Units',
                'type'          => 4,
            ],
            [
                'name'          => 'INVENTORY',
                'display_name'  => 'INVENTORY',
                'module'        => null,
                'details'       => 'MODULE',
                'type'          => null,
            ],
            [
                'name'          => 'Stock',
                'display_name'  => 'Stock',
                'module'        => "INVENTORY",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Sell',
                'display_name'  => 'Sell',
                'module'        => "INVENTORY",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Customer',
                'display_name'  => 'Customer',
                'module'        => "INVENTORY",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Stock_Sale_Report',
                'display_name'  => 'Stock Sale Report',
                'module'        => "INVENTORY",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Inventory_Report',
                'display_name'  => 'Inventory Report',
                'module'        => "INVENTORY",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Stock_Report',
                'display_name'  => 'Stock Report',
                'module'        => "INVENTORY",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Sell_Report',
                'display_name'  => 'Sell Report',
                'module'        => "INVENTORY",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Add_Stock',
                'display_name'  => 'Add Stock',
                'module'        => "INVENTORY",
                'details'       => 'Stock',
                'type'          => 1,
            ],
            [
                'name'          => 'Delete_Stock',
                'display_name'  => 'Delete Stock',
                'module'        => "INVENTORY",
                'details'       => 'Stock',
                'type'          => 3,
            ],
            [
                'name'          => 'View_Stock',
                'display_name'  => 'View Stock',
                'module'        => "INVENTORY",
                'details'       => 'Stock',
                'type'          => 4,
            ],
            [
                'name'          => 'Due_Payment_Stock',
                'display_name'  => 'Due Payment Stock',
                'module'        => "INVENTORY",
                'details'       => 'Stock',
                'type'          => 11,
            ],
            [
                'name'          => 'Add_Sell',
                'display_name'  => 'Add Sell',
                'module'        => "INVENTORY",
                'details'       => 'Sell',
                'type'          => 1,
            ],
            [
                'name'          => 'Delete_Sell',
                'display_name'  => 'Delete Sell',
                'module'        => "INVENTORY",
                'details'       => 'Sell',
                'type'          => 3,
            ],
            [
                'name'          => 'View_Sell',
                'display_name'  => 'View Sell',
                'module'        => "INVENTORY",
                'details'       => 'Sell',
                'type'          => 4,
            ],
            [
                'name'          => 'Due_Payment_Sell',
                'display_name'  => 'Due Payment Sell',
                'module'        => "INVENTORY",
                'details'       => 'Sell',
                'type'          => 11,
            ],
            [
                'name'          => 'Add_Customer',
                'display_name'  => 'Add Customer',
                'module'        => "INVENTORY",
                'details'       => 'Customer',
                'type'          => 1,
            ],
            [
                'name'          => 'Edit_Customer',
                'display_name'  => 'Edit Customer',
                'module'        => "INVENTORY",
                'details'       => 'Customer',
                'type'          => 2,
            ],
            [
                'name'          => 'Delete_Customer',
                'display_name'  => 'Delete Customer',
                'module'        => "INVENTORY",
                'details'       => 'Customer',
                'type'          => 3,
            ],
            [
                'name'          => 'Status_Customer',
                'display_name'  => 'Status Customer',
                'module'        => "INVENTORY",
                'details'       => 'Customer',
                'type'          => 4,
            ],
            [
                'name'          => 'ACCOUNTS',
                'display_name'  => 'ACCOUNTS',
                'module'        => null,
                'details'       => 'MODULE',
                'type'          => null,
            ],
            [
                'name'          => 'Transaction',
                'display_name'  => 'Transaction',
                'module'        => "ACCOUNTS",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Accounts',
                'display_name'  => 'Accounts',
                'module'        => "ACCOUNTS",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Transaction_Head',
                'display_name'  => 'Transaction Head',
                'module'        => "ACCOUNTS",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Balance_Transfer',
                'display_name'  => 'Balance Transfer',
                'module'        => "ACCOUNTS",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Accounts_Report',
                'display_name'  => 'Accounts Report',
                'module'        => "ACCOUNTS",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Expense_Report',
                'display_name'  => 'Expense Report',
                'module'        => "ACCOUNTS",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Income_Report',
                'display_name'  => 'Income Report',
                'module'        => "ACCOUNTS",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Seller_Report',
                'display_name'  => 'Seller Report',
                'module'        => "ACCOUNTS",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Add_Transaction',
                'display_name'  => 'Add Transaction',
                'module'        => "ACCOUNTS",
                'details'       => 'Transaction',
                'type'          => 1,
            ],
            [
                'name'          => 'Delete_Transaction',
                'display_name'  => 'Delete Transaction',
                'module'        => "ACCOUNTS",
                'details'       => 'Transaction',
                'type'          => 3,
            ],
            [
                'name'          => 'View_Transaction',
                'display_name'  => 'View Transaction',
                'module'        => "ACCOUNTS",
                'details'       => 'Transaction',
                'type'          => 4,
            ],
            [
                'name'          => 'Add_Account',
                'display_name'  => 'Add Account',
                'module'        => "ACCOUNTS",
                'details'       => 'Transaction',
                'type'          => 1,
            ],
            [
                'name'          => 'Edit_Account',
                'display_name'  => 'Edit Account',
                'module'        => "ACCOUNTS",
                'details'       => 'Transaction',
                'type'          => 2,
            ],
            [
                'name'          => 'Delete_Account',
                'display_name'  => 'Delete Account',
                'module'        => "ACCOUNTS",
                'details'       => 'Transaction',
                'type'          => 3,
            ],
            [
                'name'          => 'Status_Account',
                'display_name'  => 'Status Account',
                'module'        => "ACCOUNTS",
                'details'       => 'Transaction',
                'type'          => 4,
            ],
            [
                'name'          => 'Add_Transaction_Head',
                'display_name'  => 'Add Transaction Head',
                'module'        => "ACCOUNTS",
                'details'       => 'Transaction_Head',
                'type'          => 1,
            ],
            [
                'name'          => 'Edit_Transaction_Head',
                'display_name'  => 'Edit Transaction Head',
                'module'        => "ACCOUNTS",
                'details'       => 'Transaction_Head',
                'type'          => 2,
            ],
            [
                'name'          => 'Delete_Transaction_Head',
                'display_name'  => 'Delete Transaction Head',
                'module'        => "ACCOUNTS",
                'details'       => 'Transaction_Head',
                'type'          => 3,
            ],
            [
                'name'          => 'Status_Transaction_Head',
                'display_name'  => 'Status Transaction Head',
                'module'        => "ACCOUNTS",
                'details'       => 'Transaction_Head',
                'type'          => 4,
            ],
            [
                'name'          => 'Add_Balance_Transfer',
                'display_name'  => 'Add Balance Transfer',
                'module'        => "ACCOUNTS",
                'details'       => 'Balance_Transfer',
                'type'          => 1,
            ],
            [
                'name'          => 'SETTINGS',
                'display_name'  => 'SETTINGS',
                'module'        => null,
                'details'       => 'MODULE',
                'type'          => null,
            ],
            [
                'name'          => 'App_Settings',
                'display_name'  => 'App Settings',
                'module'        => "SETTINGS",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Company_Details',
                'display_name'  => 'Company Details',
                'module'        => "SETTINGS",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Payment_Method',
                'display_name'  => 'Payment Method',
                'module'        => "SETTINGS",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Add_Payment_Method',
                'display_name'  => 'Add Payment Method',
                'module'        => "SETTINGS",
                'details'       => 'Payment_Method',
                'type'          => 1,
            ],
            [
                'name'          => 'Edit_Payment_Method',
                'display_name'  => 'Edit Payment Method',
                'module'        => "SETTINGS",
                'details'       => 'Payment_Method',
                'type'          => 2,
            ],
            [
                'name'          => 'Delete_Payment_Method',
                'display_name'  => 'Delete Payment Method',
                'module'        => "SETTINGS",
                'details'       => 'Payment_Method',
                'type'          => 3,
            ],
            [
                'name'          => 'Status_Payment_Method',
                'display_name'  => 'Status Payment Method',
                'module'        => "SETTINGS",
                'details'       => 'Payment_Method',
                'type'          => 4,
            ],
            [
                'name'          => 'RBAC',
                'display_name'  => 'RBAC',
                'module'        => null,
                'details'       => 'MODULE',
                'type'          => null,
            ],
            [
                'name'          => 'Role',
                'display_name'  => 'Role',
                'module'        => "RBAC",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'User_Access',
                'display_name'  => 'User Access',
                'module'        => "RBAC",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'User',
                'display_name'  => 'User',
                'module'        => "RBAC",
                'details'       => 'FEATURE',
                'type'          => null,
            ],
            [
                'name'          => 'Add_Role',
                'display_name'  => 'Add Role',
                'module'        => "RBAC",
                'details'       => 'Role',
                'type'          => 1,
            ],
            [
                'name'          => 'Edit_Role',
                'display_name'  => 'Edit Role',
                'module'        => "RBAC",
                'details'       => 'Role',
                'type'          => 2,
            ],
            [
                'name'          => 'Delete_Role',
                'display_name'  => 'Delete Role',
                'module'        => "RBAC",
                'details'       => 'Role',
                'type'          => 3,
            ],
            [
                'name'          => 'Status_Role',
                'display_name'  => 'Status Role',
                'module'        => "RBAC",
                'details'       => 'Role',
                'type'          => 4,
            ],
            [
                'name'          => 'Permission_Role',
                'display_name'  => 'Permission Role',
                'module'        => "RBAC",
                'details'       => 'Role',
                'type'          => 12,
            ],
            [
                'name'          => 'Add_User_Access',
                'display_name'  => 'Add User Access',
                'module'        => "RBAC",
                'details'       => 'User_Access',
                'type'          => 1,
            ],
            [
                'name'          => 'Delete_User_Access',
                'display_name'  => 'Delete User Access',
                'module'        => "RBAC",
                'details'       => 'User_Access',
                'type'          => 3,
            ],
            [
                'name'          => 'Add_User',
                'display_name'  => 'Add User',
                'module'        => "RBAC",
                'details'       => 'User',
                'type'          => 1,
            ],
            [
                'name'          => 'Edit_User',
                'display_name'  => 'Edit User',
                'module'        => "RBAC",
                'details'       => 'User',
                'type'          => 2,
            ],
            [
                'name'          => 'Delete_User',
                'display_name'  => 'Delete User',
                'module'        => "RBAC",
                'details'       => 'User',
                'type'          => 3,
            ],
            [
                'name'          => 'View_User',
                'display_name'  => 'View User',
                'module'        => "RBAC",
                'details'       => 'User',
                'type'          => 5,
            ],
        ];
        Permission::insert($permissions);
    }
}