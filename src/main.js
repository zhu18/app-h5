import Vue from 'vue'
import axios from 'axios'
import 'babel-polyfill';
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/rem'
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import '@/assets/css/index.css';
Vue.config.productionTip = false
Vue.use(MintUI);
Vue.prototype.slideName = 'slide-left';
axios.interceptors.response.use(res=>{
  if (res.data.code==200 || res.data.status==200) {
    return res.data.data
  }else{
    Message.error(res.data.message)
  }
},err=>{
  Message.error(err.toString())
})

// axios.defaults.baseURL = 'http://202.106.10.250:8877/apple';
Vue.prototype.axios=axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
