<template>
  <b-jumbotron class="border-bottom mb-4 text-center">
    <upl-logo />
    <h2 class="main">Home of Underlords Pro League</h2>
  </b-jumbotron>
</template>

<script>
import UplLogo from "@/components/UplLogo.vue";
export default {
  components: {
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
