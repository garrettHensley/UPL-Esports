<template>
  <b-container class="text-light my-4">
    <div v-if="!articleShow">
      <h1 class="display-4 text-center">News</h1>
      <div>
        <b-container
          v-for="(article, index) in news"
          :key="article.index"
          @click="displayArticle(index)"
          class="articles border-bottom border-dark"
        >
        <b-row>
          <b-col cols='1' class="d-flex align-items-center justify-content-center p-0">
            <b-img src="../logo.png" class="preview-image" fluid alt="Logo"/>
          </b-col>
          <b-col class="p-1">
          <h1>{{article.title}}</h1>
          <p>
            <em>{{article.description}}...</em>
          </p>
          </b-col>
        </b-row>
        </b-container>
      </div>
      <Article title />
    </div>
    <div v-if="articleShow">
      <b-container>
        <Article :article="news[currentArticle]" />
        <div class="text-center">
        <b-button @click="displayArticle" class="btn-dark">Back</b-button>
        </div>
      </b-container>
    </div>
  </b-container>
</template>

<style scoped>
.articles {
  background-color: #2a3032;
}
</style>

<script>
import axios from "axios";
import Article from "@/components/Article.vue";

export default {
  data() {
    return {
      news: null,
      articleShow: false,
      currentArticle: null
    };
  },
  components: {
    Article
  },
  mounted() {
    axios
      .get("https://uplesports.herokuapp.com/articles")
      .then(reponse => (this.news = reponse.data));
  },
  methods: {
    displayArticle: function(index) {
      this.articleShow = !this.articleShow;
      if (this.articleShow) {
        this.currentArticle = index;
      }
      else {
          this.currentArticle = null;
      }
    }
  }
};
</script>

