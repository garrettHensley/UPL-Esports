<template>
  <b-container fluid id="newhome" class="text-light px-3">
    <b-row align-h="around">
      <b-col class="text-light" cols="12" sm="6">
        <b-row>
          <b-col class>
            <h1 class="display-4 text-center text-light">News</h1>
            <NewsContainer />
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" sm="6">
        <b-row>
          <b-col>
            <h1 class="display-4 text-center text-light">Events</h1>
            <Events />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import NewsContainer from "@/components/NewsContainer.vue";
import Events from "@/components/Events.vue";
export default {
  components: {
    NewsContainer,
    Events,
  },
};
</script>
<style lang="scss">
$brand: #4fc8ff;
$accent: #ec00de;
$dark-shade: #292828;

#newhome {
  z-index: 2 !important;
  background: linear-gradient(4deg, $accent 1%, rgb(97, 6, 255) 100%);
}
.borderme {
  border: 1px solid #ec00de !important;
}
.col {
  padding: 0 !important;
}
</style>
