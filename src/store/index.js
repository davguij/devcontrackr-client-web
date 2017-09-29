import Vue from 'vue';
import Vuex from 'vuex';

import conferences from '@/store/modules/conferences';
import speakers from '@/store/modules/speakers';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    conferences,
    speakers,
  },
});
