<template>
  <b-container class="text-center d-none d-xl-block my-3">
    <vue-twitch-player
      :channel="channel"
      width="800"
      height="450"
    ></vue-twitch-player>
  </b-container>
</template>

<script>
import VueTwitchPlayer from "vue-twitch-player";

export default {
  // ...
  components: {
    VueTwitchPlayer,
  },
  data() {
    return {
      channel: "uplesports",
    };
  },
  // ...
};
</script>
