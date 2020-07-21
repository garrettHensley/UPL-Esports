<template>
  <div>
    <HomeHeader />
    <PlaceholderContainer />
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader.vue";
import PlaceholderContainer from "@/components/PlaceholderContainer.vue";

export default {
  name: "Home",
  components: {
    HomeHeader,
    PlaceholderContainer
  },
  mounted() {
    //do nothing
  },
  methods: {
    setTitle: function() {
      document.title = "UPL Esports | Competitive & Inclusive Gaming"
    }
  }
};
</script>
<style scoped></style>
