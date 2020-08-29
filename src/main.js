import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import { store } from "./store";
import axios from 'axios';
import VModal from 'vue-js-modal'
import router from './router/index'

Vue.config.productionTip = false
axios.defaults.baseURL = '/api'
axios.defaults.headers.common.Accept = 'application/json'
axios.interceptors.response.use(
    response => response,
    (error) => {
      return Promise.reject(error)
    }
)


Vue.use(VModal, { dynamic: true })


new Vue({
  vuetify,
  render: h => h(App),
  store: store,
  router,
}).$mount('#app')
