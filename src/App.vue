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
.main {
  color: #4fc8ff;
}
.accent {
  color: #ec00de;
}
</style>
