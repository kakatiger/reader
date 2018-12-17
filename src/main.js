import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

Vue.use(MintUI); //两个ui框架
Vue.prototype.axios = axios;
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
