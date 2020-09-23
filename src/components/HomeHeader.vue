<template>
  <b-jumbotron
    id="header"
    class="text-center sticky-top d-flex justify-content-center align-items-center"
  >
    <div id="header-content" class="mt-2">
      <upl-logo />
      <div class="d-flex justify-content-center">
        <span class="main blur subtitle">Home of Underlords Pro League</span>
      </div>
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
#header-content {
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: fadein 2s;
}

.jumbotron {
  z-index: -2;
  background-color: #292828;
  background: url("~@/assets/img/ulBG.png");
  background-size: cover;
  margin-bottom: 0;
  border-radius: 0;
  height: 75vh;
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
  .subtitle {
    font-size: 1.5em;
  }
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/* Animations B) */
/* Firefox < 16 */
@-moz-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/* Internet Explorer */
@-ms-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/* Opera < 12.1 */
@-o-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
