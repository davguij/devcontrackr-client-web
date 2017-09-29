<template>
  <div id="CreateConference">
    <banner>
    </banner>
    <section class="container">
      <b-field label="Conference name">
        <b-input v-model="newConf.name"></b-input>
      </b-field>
      <b-field label="Description">
        <b-input v-model="newConf.description"></b-input>
      </b-field>
      <b-field grouped>
        <b-field label="City" expanded>
          <b-input v-model="newConf.location.city"></b-input>
        </b-field>
        <b-field label="State">
          <b-input v-model="newConf.location.state"></b-input>
        </b-field>
        <b-field label="Country" expanded>
          <b-input v-model="newConf.location.country"></b-input>
        </b-field>
      </b-field>
      <b-field grouped>
        <b-field label="Dates">
          <b-field grouped>
            <b-datepicker v-model="newConf.dates[0]" placeholder="Click to select..." icon="calendar" icon-pack="fa">
            </b-datepicker>
            <b-datepicker v-model="newConf.dates[1]" placeholder="Click to select..." icon="calendar" icon-pack="fa">
            </b-datepicker>
          </b-field>
        </b-field>
        <b-field label="Topics">
          <b-input v-model="newConf.topics"></b-input>
        </b-field>
        <b-field label="Languages">
          <b-input v-model="newConf.languages"></b-input>
        </b-field>
        <b-field label="Speakers">
          <b-select multiple>
            <!-- <option v-for="option in options" :value="option.id" :key="option.id">
                                                        {{ option.user.first_name }}
                                                      </option> -->
          </b-select>

        </b-field>
      </b-field>
      <b-field grouped>
        <b-field label="Homepage">
          <b-input v-model="newConf.web_presence.homepage"></b-input>
        </b-field>
        <b-field label="Agenda">
          <b-input v-model="newConf.web_presence.agenda"></b-input>
        </b-field>
        <b-field label="Tickets">
          <b-input v-model="newConf.web_presence.tickets"></b-input>
        </b-field>
        <b-field label="Twitter">
          <b-input v-model="newConf.web_presence.twitter"></b-input>
        </b-field>
      </b-field>
      <b-field label="Organizer">
        <b-input v-model="newConf.organizer"></b-input>
      </b-field>
      <b-field label="Sponsors">
        <b-input v-model="newConf.sponsors"></b-input>
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
      newConf: {
        location: {},
        dates: [],
        web_presence: {},
      },
    };
  },
  methods: {
    ...mapActions('conferences', ['createConference']),
    submit() {
      this.newConf.topics = this.newConf.topics.split(', ');
      this.createConference(this.newConf).then(() => {
        this.$router.push('/');
      });
    },
  },
};
</script>

<style>

</style>
