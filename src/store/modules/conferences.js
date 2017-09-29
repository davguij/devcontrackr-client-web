import gql from 'graphql-tag';
import client from '../../graphql-client/graphql-client';

export default {
  namespaced: true,
  state: {
    conferences: [],
  },
  actions: {
    async getConferences({ commit }) {
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
    async createConference(context, newConf) {
      try {
        const mutation = await client.mutate({
          mutation: gql`
          mutation createConference($input: CreateConferenceInput!) {
            createConference(input: $input) {
              id
            }
          }
          `,
          variables: {
            input: newConf,
          },
        });
        return mutation.data.createConference.id;
      } catch (err) { throw err; }
    },
  },
  mutations: {
    /* eslint no-param-reassign: ['error', { 'props': false }] */
    SET_CONFERENCES(state, conferences) {
      state.conferences = conferences;
    },
  },
};
