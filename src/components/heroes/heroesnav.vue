<template>
  <b-nav pills align="center">
    <b-nav-item to="../heroes/rules" :active="activeItem == 'rules'"
      >Rules</b-nav-item
    >
    <b-nav-item to="../heroes/bracket" :active="activeItem == 'bracket'"
      >Bracket</b-nav-item
    >
    <b-nav-item to="../heroes/teams" :active="activeItem == 'teams'"
      >Teams</b-nav-item
    >
    <b-nav-item to="../heroes/matches" :active="activeItem == 'matches'"
      >Match History</b-nav-item
    >
  </b-nav>
</template>

<script>
export default {
  name: "heroes-nav",
  props: {
    activeItem: String,
  },
};
</script>

<style scoped>
.active {
  color: #292828 !important;
  background-color: #4fc8ff !important;
  border: none;
}
</style>
