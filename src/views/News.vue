<template>
  <b-container id="news" class="text-light">
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
        <h1 class="display-4 text-center">News</h1>
        <div>
          <b-container
            v-for="article in news"
            :key="article.index"
            class="articles border-bottom border-dark hover"
            href="http://google.com"
          >
            <a
              :href="'/news/' + article.id"
              class="text-light text-decoration-none"
            >
              <b-row>
                <b-col class="p-1">
                  <h1 class="main">{{ article.title }}</h1>
                  <p class="lead accent mb-0">{{ article.description }}</p>
                  <p class="mb-1">
                    <span>{{ article.date }}</span> by
                    <em>
                      <strong class="lead main mx-1">{{
                        article.author
                      }}</strong>
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
  metaInfo: {
    title: "News & Esports Info for Dota Underlords, Artifact, and more",
    meta: [
      { name: "twitter:card", content: "summary" }, //need to make all this shit dynamic eventually
      {
        name: "twitter:title",
        content: "News - UPL Esports",
      },
      {
        name: "twitter:description",
        content: "News & Esports Info for Dota Underlords, Artifact, and more.",
      },
      { name: "twitter:image", content: "http://uplesports.com/logo.png" },
    ],
  },
};
</script>
