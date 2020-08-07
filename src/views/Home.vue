<template>
  <b-container>
    <HomeHeader />
    <NewHome />
  </b-container>
</template>

<script>
import HomeHeader from "@/components/HomeHeader.vue";
import NewHome from "@/components/NewHome.vue";

export default {
  name: "Home",
  components: {
    HomeHeader,
    NewHome
  },
  mounted() {
    //do nothing
  },
  methods: {
    setTitle: function() {
      document.title = "UPL Esports | Competitive & Inclusive Gaming";
    }
  },
  metaInfo: {
    meta: [
      { name: "twitter:card", content: "summary" }, //need to make all this shit dynamic eventually
      {
        name: "twitter:title",
        content: "Competitive & Inclusive Gaming | UPL Esports "
      },
      {
        name: "twitter:description",
        content:
          "Homepage for UPL Esports. Discover tournaments & events for Esports."
      },
      { name: "twitter:image", content: "http://uplesports.com/logo.png" },
      { name: "twitter:site", content: "uplesports" },
      // og
      {
        property: "og:title",
        content: "Inclusive & Competitive Gaming | UPL Esports"
      },
      {
        property: "og:image",
        content: "http://uplesports.com/logo.png"
      }
    ]
  }
};
</script>
<style scoped></style>
