<template>
  <b-jumbotron class="border-bottom mb-4">
    <b-row>
      <b-col class="text-center" cols="12" xl="6">
        <upl-logo />
      </b-col>
      <b-col class="text-center p-4">
        <h2 class="main">Home of Underlords Pro League</h2>
        <Twitch />
      </b-col>
    </b-row>
  </b-jumbotron>
</template>

<script>
import Twitch from "@/components/Twitch.vue";
import UplLogo from "@/components/UplLogo.vue";
export default {
  components: {
    Twitch,
    UplLogo,
  },
};
</script>

<style scoped>
.jumbotron {
  background-color: transparent;
  margin-bottom: 0;
}
.border-bottom {
  border-bottom: #ec00de 1px solid !important;
}
h2 {
  font-weight: 100;
}
</style>
