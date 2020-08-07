<template>
  <div class="text-light">
    <b-row align-h="around">
      <b-col class="text-light" cols="12" sm="6">
        <b-row>
          <b-col class>
            <News />
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" sm="6">
        <b-row>
          <b-col>
            <Events />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import News from "@/views/News.vue";
import Events from "@/components/Events.vue";
export default {
  components: {
    News,
    Events
  }
};
</script>
<style>
.borderme {
  border: 1px solid #ec00de !important;
}
.col {
  padding: 0 !important;
}
</style>
