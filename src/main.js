import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "@/logic/vuetify";
import VueGoodTablePlugin from "vue-good-table";
import "vue-good-table/dist/vue-good-table.css";
import { apolloProvider } from "./graphql/apollo";

Vue.use(VueGoodTablePlugin);

import VueNumericInput from "vue-numeric-input";

Vue.use(VueNumericInput);

new Vue({ router, vuetify, apolloProvider, render: (h) => h(App) }).$mount(
  "#app"
);
