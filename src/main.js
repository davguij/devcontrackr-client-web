import Vue from 'vue';
import VueMoment from 'vue-moment';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import './assets/fontawesome/css/font-awesome.css';
import App from './App';
import router from './router';
import store from './store';

Vue.use(VueMoment);
Vue.use(Buefy, {
  defaultIconPack: 'fa',
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
