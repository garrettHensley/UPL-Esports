<template>
  <b-container class="text-light">
    <h1>Data</h1>
    <p>{{news}}</p>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      news: null
    };
  },
  mounted() {
    axios
      .get("http://scoreboard.uplesports.com/api/")
      .then(reponse => (this.news = reponse.data));
  }
};
</script>

<style scoped>
</style>