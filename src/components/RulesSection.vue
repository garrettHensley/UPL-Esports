<template>
  <div class="w-75 mx-auto">
    <span v-html="content" />
  </div>
</template>

<script>
export default {
  props: {
    content: String,
  },
};
</script>

<style scoped>
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
