<template>
  <b-container class="p-3 mx-auto rule-section">
    <span v-html="content" />
  </b-container>
</template>

<script>
export default {
  props: {
    content: String,
  },
};
</script>

<style scoped>
.rule-section {
  background-color: #292828;
  border-radius: 0;
  -webkit-box-shadow: 0.7em 0.7em 1em -0.5em rgba(41, 40, 40, 1);
  -moz-box-shadow: 0.7em 0.7em 1em -0.5em rgba(41, 40, 40, 1);
  box-shadow: 0.7em 0.7em 1em -0.5em rgba(41, 40, 40, 1);
}
/deep/ li {
  list-style-type: none;
}
/deep/ h1,
/deep/ h2,
/deep/ h3,
/deep/ h4 {
  color: #ec00de;
  text-align: center;
}
</style>
