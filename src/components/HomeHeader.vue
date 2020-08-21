<template>
  <b-row class="home container text-center p-1 pb-4">
    <!-- Logo and text -->
    <b-col>
      <HomeHeaderLogo />
    </b-col>
    <!-- Portal for all current games -->
    <b-col class="py-5 text-center">
      <Twitch />
    </b-col>
  </b-row>
</template>

<script>
import HomeHeaderLogo from "@/components/HomeHeaderLogo.vue";
import Twitch from "@/components/Twitch.vue";
export default {
  name: "Home",
  components: {
    HomeHeaderLogo,
    Twitch,
  },
};
</script>
<style scoped></style>
