<template>
  <div id="app">
    <Nav />
    <router-view />
    <link rel="icon" href="../icon.ico" />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";


// Website title
document.title = "UPL Esports";

export default {
  components: {
    Nav,
  },
};
</script>

<style>
@import "./assets/style.css";

html {
}
html body {
  background-color: #292828;
}
</style>
