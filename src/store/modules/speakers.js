import gql from 'graphql-tag';
import client from '../../graphql-client/graphql-client';

export default {
  namespaced: true,
  state: {
    speakers: [],
  },
  actions: {
    async getSpeakers({ commit }) {
      const speakers = await client.query({
        query: gql`
      {
        speakers {
          id
          name
        }
      }
      `,
      });
      commit('SET_SPEAKERS', speakers.data.speakers);
    },

    async createSpeaker({ commit }, newSpeaker) {
      try {
        const savedSpeaker = await client.mutate({
          mutation: gql`
          mutation createSpeaker($input: CreateSpeakerInput!) {
            createSpeaker(input: $input) {
              name
              company
              twitter
              github
            }
          }        
          `,
          variables: {
            input: newSpeaker,
          },
        });
        commit('ADD_SPEAKER', savedSpeaker.data.createSpeaker);
        return savedSpeaker.data.createSpeaker;
      } catch (err) { throw err; }
    },
  },
  mutations: {
    /* eslint no-param-reassign: ['error', { 'props': false }] */
    SET_SPEAKERS(state, speakers) {
      state.speakers = speakers;
    },
    ADD_SPEAKER(state, speaker) {
      state.conferences = [speaker, ...state.speakers];
    },
  },
};
