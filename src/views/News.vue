<template>
  <div>
    <h1 class="display-4 text-center text-light">News</h1>
    <NewsContainer />
  </div>
</template>

<style scoped>
.articles {
  background-color: #2a3032;
}
a {
  text-decoration: none;
}
.hover:hover {
  box-shadow: 0.1em 0.5em 1em 1em rgba(58, 58, 58, 0.315);
}
</style>

<script>
import NewsContainer from "@/components/NewsContainer.vue";
export default {
  components: {
    NewsContainer,
  },
  metaInfo: {
    title: "News & Esports Info for Dota Underlords, Artifact, and more",
    meta: [
      { name: "twitter:card", content: "summary" }, //need to make all this shit dynamic eventually
      {
        name: "twitter:title",
        content: "News - UPL Esports",
      },
      {
        name: "twitter:description",
        content: "News & Esports Info for Dota Underlords, Artifact, and more.",
      },
      { name: "twitter:image", content: "http://uplesports.com/logo.png" },
    ],
  },
};
</script>
