<template>
<b-container id="article" class="py-1 pb-3 mb-3">
    <div v-if="article">
        <b-container>
            <h1 class="display-4 my-1 main">{{ article.title }}</h1>
            <p class="lead my-1 accent">{{ article.description }}</p>
            <p class="text-">
                <span>{{ article.date }}</span> by
                <em>
                    <a :href="'http://twitter.com/' + article.author" target="_blank">
                        <strong class="lead main mx-1">{{ article.author }}</strong>
                    </a>
                </em>
            </p>
            <hr />
        </b-container>
        <b-container class="py-1">
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
        <ShareNetwork network="twitter" :url="`https://uplesports.com${$route.path}`" :title="`${article.title} | UPL Esports`" quote="The hot reload is so fast it\'s near instant. - Evan You" hashtags="esports,underlords" :twitter-user="article.author">
            <a href class="lead">Share on Twitter</a>
        </ShareNetwork>
    </div>
    <div class="text-center mt-2">
        <b-button href="/news/" size="lg">Back</b-button>
    </div>
</b-container>
</template>

<style scoped>
#article {
    background-color: #2a3032;
    -webkit-box-shadow: 0.7em 0.7em 1em -0.5em rgba(41, 40, 40, 1);
    -moz-box-shadow: 0.7em 0.7em 1em -0.5em rgba(41, 40, 40, 1);
    box-shadow: 0.7em 0.7em 1em -0.5em rgba(41, 40, 40, 1);
}
</style>

<script>
import VueMarkdown from "vue-markdown";

//title, description, author, content, date, id

export default {
    props: {
        article: Object
    },
    data() {
        return {
            something: "nothing"
        };
    },
    components: {
        VueMarkdown
    },
    metaInfo() {
        return {
            title: this.article.title
        };
    }
};
</script>

<style scoped>
#article {
  background: #292828;
}
hr {
  border: 0.05em solid #4fc8ff;
}
.btn {
  background-color: #4fc8ff;
}
.btn:hover,
.btn:focus {
  background-color: #ec00de;
}
</style>
