/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue").default;

import "vue-js-modal/dist/styles.css";
import "vue-toastr-2/dist/vue-toastr-2.min.css";
import "vue-search-select/dist/VueSearchSelect.css";
import "sweetalert2/dist/sweetalert2.min.css";

import CKEditor from "@ckeditor/ckeditor5-vue2";
import VModal from "vue-js-modal/dist/index.nocss.js";
import VueCarousel from "@chenfengyuan/vue-carousel";
import VueHtmlToPaper from "vue-html-to-paper";
import VueRouter from "vue-router";
import VueSweetalert2 from "vue-sweetalert2";
import VueToastr2 from "vue-toastr-2";
import { routes } from "./router";
import store from "./store";
import vmodal from "vue-js-modal";
import countTo from "vue-count-to";
import axios from "axios";

Vue.use(CKEditor);
Vue.use(VueCarousel);

//Custom Filters
Vue.filter("to-uppercase", function(value) {
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});

// Vue Print
const options = {
    name: "_blank",
    specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
    styles: [
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
        "https://unpkg.com/kidlat-css/css/kidlat.css"
    ]
};
Vue.use(VueHtmlToPaper, options);

window.toastr = require("toastr");

Vue.use(VueRouter);
Vue.use(VModal);
Vue.use(VueToastr2, {
    preventDuplicates: true,
    closeButton: true,
    positionClass: "toast-bottom-right",
    timeOut: "2000"
});

Vue.use(VueSweetalert2);
Vue.use(require("vue-moment"));

Vue.component("pagination", require("laravel-vue-pagination"));
Vue.component("countTo", countTo);

window.base_path = "/api/v1/";
// For frontend
window.base_url = "/api/v1/frontend/";
Vue.mixin({
    data() {
        return {
            permissions: []
        };
    },
    methods: {
        clearForm: function(form) {
            const _this = this;
            _this.AllError = [];
            Object.keys(form).forEach(key => {
                form[key] = "";
            });
        },
        getUserPermissions: function() {
            axios.get(base_path + "user_ability").then(response => {
                this.permissions = response.data.permissions;
            });
        }
    }
});

Vue.component("sidebar", require("./components/SideBarComponent").default);

const router = new VueRouter({
    routes,
    mode: "history"
});

router.beforeEach((to, from, next) => {
    axios.get(base_path + "user_ability").then(response => {
        store.commit("addUserAbility", response.data);
        // console.log(store.state.permissions);

        if (to.matched.some(record => record.meta.requiresAuth)) {
            if (store.state.isAuthenticated == true) {
                if (to.meta.requiresPermission) {
                    if (store.state.permissions.includes(to.meta.permission)) {
                        next();
                    } else {
                        toastr.warning(
                            "You are unauthorized for this page.",
                            "Sorry",
                            {
                                timeOut: 5000
                            }
                        );
                        next({ name: "/admin" });
                    }
                } else {
                    next();
                }

                // router.push("/admin");
                // go to wherever I'm going
            } else {
                location.reload();
            }
        } else {
            next(); // does not require auth, make sure to always call next()!
        }
    });
});

const app = new Vue({
    el: "#app",
    router,
    store
});
