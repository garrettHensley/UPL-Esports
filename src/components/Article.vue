<template>
  <b-container>
    <b-container>
      <h1 class="display-4">{{article.title}}</h1>
      <p class="lead">
        {{article.description}}
      </p>
      <p class="text-muted">
          {{article.date}} by <em>{{article.author}}</em>
      </p>
    </b-container>
    <b-container id="article" class="py-1">
      <vue-markdown :source="article.content"></vue-markdown>
    </b-container>
  </b-container>
</template>

<style scoped>
#article {
  background-color: #2a3032;
}
</style>

<script>
import VueMarkdown from "vue-markdown";

//title, description, author, content, date

export default {
  props: {
    article: Object
  },
  components: {
    VueMarkdown
  }
};
</script>

<style scoped>
</style>