<template>
  <div>
    <h1 class="display-4 text-center">Events</h1>
    <b-card-group deck>
      <b-card
        v-for="event in events"
        :key="event.id"
        :title="event.Title"
        :footer="getGame(event.Game)"
        class="card mb-2"
      >
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      events: null,
    };
  },
  mounted() {
    axios
      .get("https://uplesports.herokuapp.com/events")
      .then((response) => (this.events = response.data));
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
  background-color: #2a3032;
}
.card-title {
  color: #4fc8ff;
}
.card-footer {
  color: #ec00de;
}
</style>
