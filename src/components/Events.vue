<template>
  <b-container>
    <b-card-group deck>
      <b-card
        v-for="event in events"
        :key="event.id"
        :header="new Date(event.Date).toString().substring(0, 10)"
        :footer="getGame(event.Game)"
        class="card mb-2"
      >
        <b-card-title>
          {{ event.Title }}
        </b-card-title>
        <b-card-text class="small">
          <em>{{ event.Date.substring(0, 10) }}</em>
        </b-card-text>
        <b-card-text>{{ event.Description }}</b-card-text>
        <b-card-text v-if="event.PrizePool">
          <em>
            Prize:
            <span v-if="event.PrizePool.isNAN">$</span>
            {{ event.PrizePool }}
          </em>
        </b-card-text>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      events: null,
    };
  },
  created() {
    axios.get("https://uplesports.herokuapp.com/events").then(
      (response) =>
        (this.events = response.data
          .sort((a, b) => {
            return new Date(b.Date) - new Date(a.Date);
          })
          .reverse()) // please refactor this
    );
  },
  methods: {
    getGame: function(game) {
      switch (game) {
        case "Underlords":
          return "Dota Underlords";
      }
    },
  },
};
</script>
<style scoped>
.border {
  border-color: #4fc8ff !important;
}
.card {
  min-width: 18rem;
}
</style>
