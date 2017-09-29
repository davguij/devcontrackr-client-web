import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import Home from '@/components/Home';
import CreateConference from '@/components/conferences/CreateConference';
import CreateSpeaker from '@/components/speakers/CreateSpeaker';

Vue.use(Vuex);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/conferences/create',
      name: 'CreateConference',
      component: CreateConference,
    },
    {
      path: '/speakers/create',
      name: 'CreateSpeaker',
      component: CreateSpeaker,
    },
  ],
});
