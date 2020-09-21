<template>
  <b-container class="text-light" fluid>
    <!-- 
      If $route.params.id is truthy then <Article>
        find(
          element => element.id = route.params.id
        )
    -->

    <div v-if="$route.params.id">
      <Article :article="getArticle()" />
    </div>
    <div v-else>
      <div>
        <b-card-group deck>
          <b-container
            v-for="article in news"
            :key="article.index"
            class="listItem"
            href="http://google.com"
          >
            <a
              :href="'/news/' + article.id"
              class="text-light text-decoration-none"
            >
              <b-card :header="article.title" class="mb-2">
                <p class="lead">{{ article.description }}</p>
                <p class="mb-0">
                  <span class="accent">{{ article.date }}</span> by
                  <em>
                    <strong class="lead main mx-1">{{ article.author }}</strong>
                  </em>
                </p>
              </b-card>
            </a>
          </b-container>
        </b-card-group>
      </div>
    </div>
  </b-container>
</template>

<style scoped>
.articles {
  background-color: #2a3032;
  padding-left: 2em;
  padding-bottom: 0.5em;
}

.card-header {
  color: #4fc8ff;
}
a {
  text-decoration: none;
}
.hover:hover {
  box-shadow: 0.1em 0.5em 1em 1em rgba(58, 58, 58, 0.315);
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
      destinationID: this.$route.params.id,
    };
  },
  components: {
    Article,
  },
  methods: {
    getArticle: function() {
      if (this.$route.params.id) {
        return this.news.find((element) => element.id == this.$route.params.id);
      } else return undefined;
    },
  },
  mounted() {
    console.log("hello");
    axios
      .get("https://uplesports.herokuapp.com/articles")
      .then((reponse) => (this.news = reponse.data.reverse()));
    // ⌛ EVENTUALLY need to rework this so not everything is loaded up if 💲route.param.id is truthy, and only load a bit of that info ⌛
    //⌛ the way it is now will become growingly problematic the more articles and content we have ⌛
  },
};
</script>
