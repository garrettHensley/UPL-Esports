<template>
  <b-jumbotron id="header" class="text-center sticky-top">
    <upl-logo />
    <div class="d-flex justify-content-center">
      <span class="main blur subtitle">Home of Underlords Pro League</span>
    </div>
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
  z-index: -2;
  background-color: #292828;
  background: url("~@/assets/img/ulBG.png");
  background-size: cover;
  margin-bottom: 0;
  border-radius: 0;
}
.border-bottom {
  border-bottom: #ec00de 1px solid !important;
}
.subtitle {
  font-size: 2em;
  font-weight: 300;
}

@media (max-width: 576px) {
  #header {
    padding-top: 4em;
  }
}
</style>
