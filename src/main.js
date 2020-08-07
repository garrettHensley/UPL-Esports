import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Meta from 'vue-meta'
import VueSocialSharing from 'vue-social-sharing'
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "UA-173554771-1" }
});

Vue.use(VueSocialSharing)
Vue.use(Meta)

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";


// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";



Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted() {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
})