<template>
  <div>
    <HomeHeader />
    <ULplaceholder />
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader.vue";
import ULplaceholder from '@/components/ULplaceholder.vue';
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    HomeHeader,
    ULplaceholder
  },
};
</script>
<style scoped></style>
