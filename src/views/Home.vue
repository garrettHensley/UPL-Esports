<template>
  <div>
    <HomeHeader />
    <ULplaceholder />
    <ARplaceholder />
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader.vue";
import ULplaceholder from '@/components/ULplaceholder.vue';
import ARplaceholder from '@/components/ARplaceholder.vue';

export default {
  name: "Home",
  components: {
    HomeHeader,
    ULplaceholder,
    ARplaceholder,
  },
};
</script>
<style scoped></style>
