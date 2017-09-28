export default {
  namespaced: true,
  state: {
    conferences: [],
  },
  actions: {
    async getConferences({ commit }) {
      //   const response = await getApplications();
      commit('SET_CONFERENCES', [{ id: 'a1', name: 'AngularConnect 2017' }]);
      //   return Promise.resolve();
    },
  },
  mutations: {
    /* eslint no-param-reassign: ['error', { 'props': false }] */
    SET_CONFERENCES(state, conferences) {
      state.conferences = conferences;
    },
  },
};
