import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import { router } from './components/index.js';
import { store } from "./store";

Vue.config.productionTip = false

import VModal from 'vue-js-modal'
Vue.use(VModal, { dynamic: true })


new Vue({
  vuetify,
  render: h => h(App),
  store: store,
  router,
}).$mount('#app')
