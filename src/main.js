import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import './assets/fontawesome/css/font-awesome.css';
import App from './App';
import router from './router';

Vue.use(Buefy, {
  defaultIconPack: 'fa',
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
