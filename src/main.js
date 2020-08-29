import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import { store } from "./store";
import VModal from 'vue-js-modal'
import router from './router/index'

Vue.config.productionTip = false
Vue.use(VModal, { dynamic: true })


new Vue({
  vuetify,
  render: h => h(App),
  store: store,
  router,
}).$mount('#app')
