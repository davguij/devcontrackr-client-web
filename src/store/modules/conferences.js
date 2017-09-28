import gql from 'graphql-tag';
import client from '../../graphql-client/graphql-client';

export default {
  namespaced: true,
  state: {
    conferences: [],
  },
  actions: {
    async getConferences({ commit }) {
      //   const response = await getApplications();
      const conferences = await client.query({
        query: gql`
        {
          conferences {
            name
            dates
            topics
            location {
              venue
              city
              country
            }
          }
        }
        `,
      });
      commit('SET_CONFERENCES', conferences.data.conferences);
    },
  },
  mutations: {
    /* eslint no-param-reassign: ['error', { 'props': false }] */
    SET_CONFERENCES(state, conferences) {
      state.conferences = conferences;
    },
  },
};
