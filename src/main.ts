import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "vue-query";
import { createHead } from "@vueuse/head";

import App from "./App.vue";
import router from "./router";

import "./assets/tailwind.css";
import "./assets/scrollbar.css";

const app = createApp(App);
const head = createHead();

app.use(head);
app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin);

app.mount("#app");
