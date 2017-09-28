import Vue from 'vue';
import Vuex from 'vuex';

import conferences from '@/store/modules/conferences';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    conferences,
  },
});
