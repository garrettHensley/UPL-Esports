<template>
  <div>
    <b-navbar id="nav" class="text-light">
      <b-navbar-nav>
        <b-nav-item href="#">
          <router-link to="/" class="text-light">Home</router-link>
        </b-nav-item>
        <b-nav-item href="#">
          <router-link to="/news" class="text-light">News</router-link>
        </b-nav-item>
        <b-nav-item href="#" disabled>
          <router-link to="/scoreboard" class="text-muted">Scoreboard</router-link>
        </b-nav-item>
        <b-nav-item href="#" disabled>
          <router-link to="/about" class="text-muted">About</router-link>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto text-light">
        <b-nav-item href="http://twitter.com/uplesports" target="_blank">
          <b-img src="../twitter.png" class="nav-image" alt="Twitter" fluid />
        </b-nav-item>
        <b-nav-item href="http://discord.gg/7BTS6MZ" alt="Discord" target="_blank">
          <b-img src="../discord.png" class="nav-image" fluid />
        </b-nav-item>
        <b-nav-item href="http://twitch.tv/uplesports" alt="Twitch" target="_blank">
          <b-img src="../twitch.png" class="nav-image" fluid />
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  background-color: #2a3032;
}
.nav-image {
  width: 2.2rem;
}
</style>
