<template>
  <div id="CreateSpeaker">
    <banner></banner>
    <section class="container">
      <b-field label="Speaker name">
        <b-input v-model="newSpeaker.name"></b-input>
      </b-field>
      <b-field label="Company">
        <b-input v-model="newSpeaker.company"></b-input>
      </b-field>
      <b-field label="Twitter handle">
        <b-input v-model="newSpeaker.twitter"></b-input>
      </b-field>
      <b-field label="Github username">
        <b-input v-model="newSpeaker.github"></b-input>
      </b-field>
      <b-field>
        <button class="button is-primary" @click="submit()">Submit</button>
      </b-field>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Banner from '../Banner';

export default {
  components: { Banner },
  data() {
    return {
      newSpeaker: {},
    };
  },
  methods: {
    ...mapActions('speakers', ['createSpeaker']),
    submit() {
      this.createSpeaker(this.newSpeaker).then(() => {
        this.$router.push('/');
      });
    },
  },
};
</script>

<style>

</style>
