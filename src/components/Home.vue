<template>
  <div id="home">
    <banner>
    </banner>
    <div class="container">
      <b-table :data="conferences" :stripped="true" :mobile-cards="true">
        <template scope="props">
          <b-table-column label="Conference name">{{props.row.name}}</b-table-column>
          <b-table-column label="Location">{{props.row.location.city}}, {{props.row.location.country}}</b-table-column>
          <b-table-column label="Topics">
            <b-taglist>
              <b-tag v-for="topic in props.row.topics" :key="topic" type="is-info">{{topic}}</b-tag>
            </b-taglist>
          </b-table-column>
          <b-table-column label="Dates">
            <template v-if="props.row.dates.length > 1">
              From {{new Date(parseInt(props.row.dates[0])) | moment("calendar")}} to {{new Date(parseInt(props.row.dates[1])) | moment("calendar")}}
            </template>
            <template v-else>
              {{new Date(parseInt(props.row.dates[0])) | moment("calendar")}}
            </template>
          </b-table-column>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Banner from './Banner';

export default {
  name: 'home',
  components: { Banner },
  data() {
    return {
    };
  },
  computed: {
    ...mapState('conferences', ['conferences']),
  },
  methods: {
    ...mapActions('conferences', ['getConferences']),
  },
  created() {
    if (!this.conferences.length) this.getConferences();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
