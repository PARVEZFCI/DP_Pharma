import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let cartData = window.localStorage.getItem("cart");
let subTotal = window.localStorage.getItem("subTotal");

export default new Vuex.Store({
    state: {
        cartData: cartData ? JSON.parse(cartData) : [],
        subTotal: subTotal ? JSON.parse(subTotal) : 0,
        permissions: [],
        isAuthenticated: false
    },
    mutations: {
        addToCart(state, product) {
            let found = state.cartData.findIndex(
                item => item.id == product.medicineData.id
            );
            let new_data = {};
            if (found !== -1) {
                let new_data = {
                    ...state.cartData[found],
                    quantity:
                        Number(state.cartData[found].quantity) +
                        Number(product.medicineData.quantity)
                };
                Object.assign(state.cartData[found], new_data);
            } else {
                new_data = { ...product.medicineData };
                state.cartData.push(new_data);
            }
            if (product.medicineData.discount) {
                state.subTotal += parseFloat(
                    product.medicineData.discount_price *
                        product.medicineData.quantity
                );
            } else {
                state.subTotal += parseFloat(
                    product.medicineData.price * product.medicineData.quantity
                );
            }
            this.commit("cartToStorage");
        },

        removeFromCart(state, product) {
            let item = state.cartData.indexOf(product.medicineData);
            if (product.medicineData.discount_price) {
                state.subTotal -=
                    parseFloat(product.medicineData.discount_price * 1) *
                    parseInt(state.cartData[item].quantity);
            } else {
                state.subTotal -=
                    parseFloat(product.medicineData.price) *
                    parseInt(state.cartData[item].quantity);
            }
            state.cartData.splice(item, 1);
            this.commit("cartToStorage");
        },

        increaseFromCart(state, product) {
            let found = state.cartData.find(
                item => item.id === product.medicineData.id
            );
            if (found) {
                parseInt(found.quantity++);
                if (product.medicineData.discount_price) {
                    state.subTotal += parseFloat(
                        product.medicineData.discount_price * 1
                    );
                } else {
                    state.subTotal += parseFloat(
                        product.medicineData.price * 1
                    );
                }
            }
            this.commit("cartToStorage");
        },

        decreaseFromCart(state, product) {
            let found = state.cartData.find(
                item => item.id === product.medicineData.id
            );
            if (found) {
                if (found.quantity === 1) {
                    found.quantity = 1;
                } else {
                    parseInt(found.quantity--);
                    // Customer Type Wise Price Remove
                    // if (product.medicineData.customer_type == 2) {
                    if (product.medicineData.discount_price) {
                        state.subTotal -= parseFloat(
                            product.medicineData.discount_price * 1
                        );
                    } else {
                        state.subTotal -= parseFloat(
                            product.medicineData.price * 1
                        );
                    }
                    // } else {
                    //     if (product.medicineData.retailer_discount_price) {
                    //         state.subTotal -=
                    //             product.medicineData.retailer_discount_price *
                    //             1;
                    //     } else {
                    //         state.subTotal -=
                    //             product.medicineData.retailer_price * 1;
                    //     }
                    // }
                }
            }
            this.commit("cartToStorage");
        },

        cartToStorage(state) {
            window.localStorage.setItem("cart", JSON.stringify(state.cartData));
            window.localStorage.setItem(
                "subTotal",
                JSON.stringify(state.subTotal)
            );
        },

        clearCartStorage(state) {
            state.cartData = [];
            state.subTotal = 0;
            window.localStorage.setItem("cart", JSON.stringify(state.cartData));
            window.localStorage.setItem(
                "subTotal",
                JSON.stringify(state.subTotal)
            );
        },
        addUserAbility(state, abilities) {
            state.permissions = abilities.permissions;
            state.isAuthenticated = abilities.loggedIn;
        }
    }
});
