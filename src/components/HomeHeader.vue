<template>
  <div class="home container text-center p-1 pb-4">
    <!-- Logo and text -->
    <HomeHeaderLogo />
    <!-- Portal for all current games -->
  </div>
</template>

<script>
import HomeHeaderLogo from "@/components/HomeHeaderLogo.vue";
export default {
  name: "Home",
  components: {
    HomeHeaderLogo,
  },
};
</script>
<style scoped></style>
