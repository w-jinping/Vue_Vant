import Vue from 'vue';
import App from './App.vue';
import store from './store'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@vant/touch-emulator';


Vue.config.productionTip = false

Vue.use(Vant);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
