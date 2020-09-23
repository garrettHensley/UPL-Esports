<template>
  <div>
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />

    <b-container fluid id="app" class="text-white">
      <Nav />
      <router-view />
      <Footer />
    </b-container>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
// Website title
document.title = "UPL Esports";

export default {
  components: {
    Nav,
    Footer,
  },
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

<style lang="scss">
@import "@/assets/style.scss";

html body {
  background: linear-gradient(4deg, $accent 1%, rgba(97, 6, 255, 1) 100%);
  background-repeat: no-repeat;
  background-attachment: fixed;
}
html hr {
  border: 0.05em solid $brand;
}
html a {
  text-decoration: none;
}
.main {
  color: #4fc8ff;
}
.main-bg {
  background-color: #4fc8ff;
}
.accent {
  color: #ec00de;
}
.accent-bg {
  background-color: $accent;
}
.shade-bg {
  background-color: $dark-shade;
}
.container-fluid {
  padding: 0 !important;
}
.jumbotron {
  background-color: transparent;
}
.card {
  background-color: #292828 !important;
  border-radius: 0;
  -webkit-box-shadow: 0.7em 0.7em 1em -0.5em rgba(41, 40, 40, 1);
  -moz-box-shadow: 0.7em 0.7em 1em -0.5em rgba(41, 40, 40, 1);
  box-shadow: 0.7em 0.7em 1em -0.5em rgba(41, 40, 40, 1);
}
.card-title {
  color: #4fc8ff;
}
.card-footer {
  color: #ec00de;
}
.card-header {
  font-size: 1.5em;
}
.blur {
  backdrop-filter: blur(0.2em);
}
</style>
