const CategoryComponent = resolve => {
    require.ensure(["./components/category/CategoryComponent.vue"], () => {
        resolve(require("./components/category/CategoryComponent.vue"));
    });
};

const DashboardComponent = resolve => {
    require.ensure(["./components/DashboardComponent.vue"], () => {
        resolve(require("./components/DashboardComponent.vue"));
    });
};

const GenericComponent = resolve => {
    require.ensure(["./components/generic/GenericComponent.vue"], () => {
        resolve(require("./components/generic/GenericComponent.vue"));
    });
};

const ManufacturerComponent = resolve => {
    require.ensure(
        ["./components/Manufacturer/ManufacturerComponent.vue"],
        () => {
            resolve(
                require("./components/Manufacturer/ManufacturerComponent.vue")
            );
        }
    );
};

const MedicineComponent = resolve => {
    require.ensure(["./components/medicine/MedicineComponent.vue"], () => {
        resolve(require("./components/medicine/MedicineComponent.vue"));
    });
};

const UnitComponent = resolve => {
    require.ensure(["./components/unit/UnitComponent.vue"], () => {
        resolve(require("./components/unit/UnitComponent.vue"));
    });
};

const AppSetting = resolve => {
    require.ensure(["./components/AppSettingsComponent.vue"], () => {
        resolve(require("./components/AppSettingsComponent.vue"));
    });
};

const PaymentMethod = resolve => {
    require.ensure(
        ["./components/payment_method/PaymentMethodComponent.vue"],
        () => {
            resolve(
                require("./components/payment_method/PaymentMethodComponent.vue")
            );
        }
    );
};

const AddStock = resolve => {
    require.ensure(["./components/Stock/AddStockComponent.vue"], () => {
        resolve(require("./components/Stock/AddStockComponent.vue"));
    });
};

const ListStock = resolve => {
    require.ensure(["./components/Stock/ListStockComponent"], () => {
        resolve(require("./components/Stock/ListStockComponent"));
    });
};

const Sale = resolve => {
    require.ensure(["./components/Sale/SaleComponent"], () => {
        resolve(require("./components/Sale/SaleComponent"));
    });
};

const posCustomer = resolve => {
    require.ensure(["./components/pos_customer/posCustomerComponent"], () => {
        resolve(require("./components/pos_customer/posCustomerComponent"));
    });
};

const CompanyDetailsComponent = resolve => {
    require.ensure(["./components/CompanyDetailsComponent"], () => {
        resolve(require("./components/CompanyDetailsComponent"));
    });
};

const SliderComponent = resolve => {
    require.ensure(["./components/SliderComponent"], () => {
        resolve(require("./components/SliderComponent"));
    });
};

const TransactionComponent = resolve => {
    require.ensure(["./components/Transaction/TransactionComponent"], () => {
        resolve(require("./components/Transaction/TransactionComponent"));
    });
};

const AccountsComponent = resolve => {
    require.ensure(["./components/Transaction/AccountsComponent"], () => {
        resolve(require("./components/Transaction/AccountsComponent"));
    });
};

const TransactionHeadComponent = resolve => {
    require.ensure(
        ["./components/Transaction/TransactionHeadComponent"],
        () => {
            resolve(
                require("./components/Transaction/TransactionHeadComponent")
            );
        }
    );
};

const AccountBalanceTransfer = resolve => {
    require.ensure(
        ["./components/Transaction/AccountBalanceTransfer.vue"],
        () => {
            resolve(require("./components/Transaction/AccountBalanceTransfer"));
        }
    );
};

const StockSaleReport = resolve => {
    require.ensure(["./components/Report/MedicineStockSaleReport"], () => {
        resolve(require("./components/Report/MedicineStockSaleReport"));
    });
};

const DateWiseStockReport = resolve => {
    require.ensure(["./components/Report/DateWiseStockReport"], () => {
        resolve(require("./components/Report/DateWiseStockReport"));
    });
};

const DateWiseSaleReport = resolve => {
    require.ensure(["./components/Report/DateWiseSaleReport"], () => {
        resolve(require("./components/Report/DateWiseSaleReport"));
    });
};

const DateWiseExpenseReport = resolve => {
    require.ensure(["./components/Report/DateWiseExpenseReport"], () => {
        resolve(require("./components/Report/DateWiseExpenseReport"));
    });
};

const DateWiseIncomeReport = resolve => {
    require.ensure(["./components/Report/DateWiseIncomeReport"], () => {
        resolve(require("./components/Report/DateWiseIncomeReport"));
    });
};

const SellerReport = resolve => {
    require.ensure(["./components/Report/SellerReport"], () => {
        resolve(require("./components/Report/SellerReport"));
    });
};

const Role = resolve => {
    require.ensure(["./components/Role/RoleComponent"], () => {
        resolve(require("./components/Role/RoleComponent"));
    });
};

const RolePermission = resolve => {
    require.ensure(["./components/Role/PermissionComponent"], () => {
        resolve(require("./components/Role/PermissionComponent"));
    });
};

const UserAccess = resolve => {
    require.ensure(["./components/User Access/UserAccessComponent"], () => {
        resolve(require("./components/User Access/UserAccessComponent"));
    });
};

const UserList = resolve => {
    require.ensure(["./components/User/ListUserComponent"], () => {
        resolve(require("./components/User/ListUserComponent"));
    });
};

const UserAdd = resolve => {
    require.ensure(["./components/User/AddUserComponent"], () => {
        resolve(require("./components/User/AddUserComponent"));
    });
};

const UserEdit = resolve => {
    require.ensure(["./components/User/EditUserComponent"], () => {
        resolve(require("./components/User/EditUserComponent"));
    });
};

const ProfileSettingsComponent = resolve => {
    require.ensure(
        ["./components/Profile Settings/ProfileSettingsComponent"],
        () => {
            resolve(
                require("./components/Profile Settings/ProfileSettingsComponent")
            );
        }
    );
};
const ChangePasswordComponent = resolve => {
    require.ensure(
        ["./components/Profile Settings/ChangePasswordComponent"],
        () => {
            resolve(
                require("./components/Profile Settings/ChangePasswordComponent")
            );
        }
    );
};
export const routes = [
    {
        path: "/admin",
        component: DashboardComponent,
        name: "/admin",
        meta: {
            requiresAuth: true,
            requiresPermission: false
        }
    },
    {
        path: "/admin/category",
        component: CategoryComponent,
        name: "/admin/category",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Product_Forms"
        }
    },
    {
        path: "/admin/generic",
        component: GenericComponent,
        name: "/admin/generic",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Product_Generics"
        }
    },
    {
        path: "/admin/manufacturer",
        component: ManufacturerComponent,
        name: "/admin/manufacturer",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Manufacturing_Company"
        }
    },
    {
        path: "/admin/unit",
        component: UnitComponent,
        name: "/admin/unit",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Units"
        }
    },
    {
        path: "/admin/medicine",
        component: MedicineComponent,
        name: "/admin/medicine",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Products"
        }
    },
    {
        path: "/admin/app_setting",
        component: AppSetting,
        name: "/admin/app_setting",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "App_Settings"
        }
    },
    {
        path: "/admin/payment_method",
        component: PaymentMethod,
        name: "/admin/payment_method",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Payment_Method"
        }
    },
    {
        path: "/admin/stock/add",
        component: AddStock,
        name: "/admin/stock/add",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Stock"
        }
    },
    {
        path: "/admin/stock",
        component: ListStock,
        name: "/admin/stock",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Stock"
        }
    },
    {
        path: "/admin/sale",
        component: Sale,
        name: "/admin/sale",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Sell"
        }
    },
    {
        path: "/admin/pos_customer",
        component: posCustomer,
        name: "/admin/pos_customer",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Customer"
        }
    },
    {
        path: "/admin/company_details",
        component: CompanyDetailsComponent,
        name: "/admin/company_details",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Company_Details"
        }
    },
    {
        path: "/admin/slider",
        component: SliderComponent,
        name: "/admin/slider",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "slider"
        }
    },
    {
        path: "/admin/transaction",
        component: TransactionComponent,
        name: "/admin/transaction",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Transaction"
        }
    },
    {
        path: "/admin/account",
        component: AccountsComponent,
        name: "/admin/account",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Accounts"
        }
    },
    {
        path: "/admin/transaction/head",
        component: TransactionHeadComponent,
        name: "/admin/transaction/head",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Transaction_Head"
        }
    },
    {
        path: "/admin/balance/transfer",
        component: AccountBalanceTransfer,
        name: "/admin/balance/transfer",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Balance_Transfer"
        }
    },
    {
        path: "/admin/stock/sale/report",
        component: StockSaleReport,
        name: "/admin/stock/sale/report",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Stock_Sale_Report"
        }
    },
    {
        path: "/admin/stock/date/report",
        component: DateWiseStockReport,
        name: "/admin/stock/date/report",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Stock_Report"
        }
    },
    {
        path: "/admin/sale/date/report",
        component: DateWiseSaleReport,
        name: "/admin/sale/date/report",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Sell_Report"
        }
    },
    {
        path: "/admin/expense/date/report",
        component: DateWiseExpenseReport,
        name: "/admin/expense/date/report",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Expense_Report"
        }
    },
    {
        path: "/admin/income/date/report",
        component: DateWiseIncomeReport,
        name: "/admin/income/date/report",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Income_Report"
        }
    },
    {
        path: "/admin/seller/report",
        component: SellerReport,
        name: "/admin/seller/report",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Seller_Report"
        }
    },
    {
        path: "/admin/role",
        component: Role,
        name: "/admin/role",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Role"
        }
    },
    {
        path: "/admin/role/view/:id",
        component: RolePermission,
        name: "/admin/role/view",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Permission_Role"
        }
    },
    {
        path: "/admin/user-access",
        component: UserAccess,
        name: "/admin/user-access",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "User_Access"
        }
    },
    {
        path: "/admin/user",
        component: UserList,
        name: "/admin/user",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "User"
        }
    },
    {
        path: "/admin/user/create",
        component: UserAdd,
        name: "/admin/user/create",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Add_User"
        }
    },
    {
        path: "/admin/user/edit/:id",
        component: UserEdit,
        name: "/admin/user/edit",
        meta: {
            requiresAuth: true,
            requiresPermission: true,
            permission: "Edit_User"
        }
    },
    {
        path: "/admin/profile/settings",
        component: ProfileSettingsComponent,
        name: "/admin/profile/settings",
        meta: {
            requiresAuth: true,
            requiresPermission: false
        }
    },
    {
        path: "/admin/profile/password",
        component: ChangePasswordComponent,
        name: "/admin/profile/password",
        meta: {
            requiresAuth: true,
            requiresPermission: false
        }
    }
];
