<template>
  <div id="home">
    <banner>
    </banner>
    <div class="container">
      <b-table :data="conferences" :stripped="true" :mobile-cards="true">
        <template scope="props">
          <b-table-column label="ID">{{props.row.id}}</b-table-column>
          <b-table-column label="Name">{{props.row.name}}</b-table-column>
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
      // conferences: [{ id: 'this is an id', first: 'first' }],
    };
  },
  computed: {
    ...mapState('conferences', ['conferences']),
  },
  methods: {
    ...mapActions('conferences', ['getConferences']),
  },
  created() {
    this.getConferences();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
