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
            class="articles border-bottom border-dark hover"
            href="http://google.com"
          >
            <a :href="'#/news/'+article.id" class="text-light">
              <b-row>
                <b-col cols="1" class="d-flex align-items-center justify-content-center p-0">
                  <b-img src="../logo.png" class="preview-image" fluid alt="Logo" />
                </b-col>
                <b-col class="p-1">
                  <h1 class="main">{{article.title}}</h1>
                  <p class="lead accent mb-0">{{article.description}}</p>
                  <p class="mb-1">
                    <span>{{article.date}}</span> by
                    <em>
                      <strong class="lead main mx-1">{{article.author}}</strong>
                    </em>
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
a {
  text-decoration: none;
}
.hover:hover {
  box-shadow: .2em .2em .2em .2em rgba(37, 37, 37, 0.315); 
}
</style>

<script>
import axios from "axios";
import Article from "@/components/Article.vue";
// http://localhost:8080/news/#/news/2
// http://localhost:8080/#/news/2
// works apprently?

export default {
  data() {
    return {
      news: null,
      destinationID: this.$route.params.id
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
    console.log("this.$route.params.id");
    this.setTitle();
    axios
      .get("https://uplesports.herokuapp.com/articles")
      .then(reponse => (this.news = reponse.data));
  }
};
</script>

