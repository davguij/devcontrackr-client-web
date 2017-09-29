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
    async createConference({ commit }, newConf) {
      try {
        const savedConf = await client.mutate({
          mutation: gql`
          mutation createConference($input: CreateConferenceInput!) {
            createConference(input: $input) {
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
          variables: {
            input: newConf,
          },
        });
        commit('ADD_CONFERENCE', savedConf.data.createConference);
        return savedConf.data.createConference;
      } catch (err) { throw err; }
    },
  },
  mutations: {
    /* eslint no-param-reassign: ['error', { 'props': false }] */
    SET_CONFERENCES(state, conferences) {
      state.conferences = conferences;
    },
    ADD_CONFERENCE(state, conference) {
      state.conferences = [conference, ...state.conferences];
    },
  },
};
