<template>
  <b-container class="text-light my-4">
    <!-- 
      If $route.params.id is truthy then <Article>
        find(
          element => element.id = route.params.id
        )
    -->
    <div v-if="$route.params.id">
      <Article :article="
      news.find(element => element.id==$route.params.id)
      " />
    </div>
    <div v-else>
      <div>
        <h1 class="display-4 text-center">News</h1>
        <div>
          <b-container
            v-for="article in news"
            :key="article.index"
            class="articles border-bottom border-dark"
          >
            <a :href="'news/'+article.id" class="text-light">
              <b-row>
                <b-col cols="1" class="d-flex align-items-center justify-content-center p-0">
                  <b-img src="../logo.png" class="preview-image" fluid alt="Logo" />
                </b-col>
                <b-col class="p-1">
                  <h1>{{article.title}}</h1>
                  <p>
                    <em>{{article.description}}</em>
                  </p>
                </b-col>
              </b-row>
            </a>
          </b-container>
        </div>
      </div>
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
      news: null
    };
  },
  components: {
    Article
  },
  methods: {
    setTitle: function() {
      if (!this.$route.params.id) {
        document.title = "News - UPL Esports";
      }
    }
  },
  mounted() {
    console.log(this.$route.params.id);
    this.setTitle();
    axios
      .get("https://uplesports.herokuapp.com/articles")
      .then(reponse => (this.news = reponse.data));
  }
};
</script>

