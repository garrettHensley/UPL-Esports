<template>
  <div class="home container text-center p-1 pb-4">
    <!-- Logo and text -->
    <HomeHeaderLogo />
    <!-- Portal for all current games -->
    <GamePortal />
  </div>
</template>

<script>
import HomeHeaderLogo from "@/components/HomeHeaderLogo.vue";
import GamePortal from '@/components/GamePortal.vue';
export default {
  name: "Home",
  components: {
    HomeHeaderLogo,
    GamePortal
  },
};
</script>
<style scoped>

</style>
