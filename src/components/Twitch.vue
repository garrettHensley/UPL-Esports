<template>
  <b-container class="text-center d-none d-xl-block my-3 py-2">
    <vue-twitch-player
      :channel="channel"
      width="667"
      height="375"
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
