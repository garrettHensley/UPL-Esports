<template>
  <b-container>
    <div v-if="article">
      <b-container>
        <h1 class="display-4 my-1 main">{{article.title}}</h1>
        <p class="lead my-1 accent">{{article.description}}</p>
        <p class="text-">
          <span>{{article.date}}</span> by
          <em>
            <a :href="'http://twitter.com/' + article.author" target="_blank">
              <strong class="lead main mx-1">{{article.author}}</strong>
            </a>
          </em>
        </p>
      </b-container>
      <b-container id="article" class="py-1">
        <vue-markdown :source="article.content"></vue-markdown>
      </b-container>
    </div>
    <div v-else>
      <b-container class="text-center mt-5 p-5">
        <h1 class="display-1">Page not found</h1>
        <p class="lead">womp womp womp...</p>
      </b-container>
    </div>
    <div class="text-center mt-2">
      <b-button href="/#/news/" size="lg">Back</b-button>
    </div>
  </b-container>
</template>

<style scoped>
#article {
  background-color: #2a3032;
}
</style>

<script>
import VueMarkdown from "vue-markdown";

//title, description, author, content, date, id

export default {
  props: {
    article: Object
  },
  components: {
    VueMarkdown
  },
  mounted() {
    this.setTitle(`${this.article.title} | UPL Esports | News`);
  },
  methods: {
    setTitle: function(str) {
      document.title = str;
    }
  }
};
</script>

<style scoped>
.main {
  color: #4fc8ff;
}
.accent {
  color: #ec00de;
}
</style>