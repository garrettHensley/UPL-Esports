<template>
  <b-container
    
    id="AR"
    class="text-light"
    :style="{ backgroundImage: `url(${stuff.background})` }"
  >
    <h1 class="display-4">{{ stuff.title }}</h1>
    <div v-html="stuff.content"></div>
  </b-container>
</template>

<script>
export default {
  props: {
    stuff: Object,
  },
  data() {
    return {
      background: {
        backgroundImage: `url(${require(this.stuff.background)})`,
      },
    };
  },
};

/*
background-image: linear-gradient(
      rgba(44, 44, 44, 0.9),
      rgba(44, 44, 44, 0.6)
    ),
    url("~@/assets/wallpaper/AR.jpg");
*/
</script>

<style scoped>
#AR {
  background-position: 10rem;
}
</style>
