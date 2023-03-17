import { createApp } from 'vue'
import App from './App.vue'

// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


import mdiVue from 'mdi-vue/v3'
import * as mdi from "@mdi/js"
import router from "./router";
import store from "./store";
import VueClickAway from 'vue3-click-away'

createApp(App)
    .use(router)
    .use(store)
    .use(VueClickAway)
    .use(mdiVue, { icons: mdi })
    .mount('#app')
