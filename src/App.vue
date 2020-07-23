<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

// Website title
document.title = "UPL Esports";

export default {
  components: {
    Nav
  }
  /*
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Inclusive & Competetive Gaming | UPL Esports",
    // all titles will be injected into this template
    titleTemplate: "Inclusive & Competetive Gaming | UPL Esports",
    meta: [
      {
        property: "og:title",
        content: "Inclusive & Competitive Gaming | UPL Esports"
      },
      {
        property: "og:image",
        content: "http://uplesports.com/logo.png"
      },
    ]
  }
  */
};
</script>

<style>
@import "./assets/style.css";

html {
}
html body {
  background-color: #292828;
}
.main {
  color: #4fc8ff;
}
.accent {
  color: #ec00de;
}
</style>
