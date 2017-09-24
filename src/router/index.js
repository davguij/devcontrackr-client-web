import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import Hello from '@/components/Hello';

Vue.use(Vuex);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
  ],
});
