import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import { store } from "./store";
import VModal from 'vue-js-modal'
import router from './router/index'
import Vuelidate from 'vuelidate'
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'

Vue.config.productionTip = false
Vue.use(VModal, { dynamic: true })
Vue.use(Vuelidate)
Vue.use(VueGoodTablePlugin);

new Vue({
  vuetify,
  render: h => h(App),
  store: store,
  router,
}).$mount('#app')
