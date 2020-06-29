<template>
  <div>
    <b-navbar id="nav" class="text-light">
      <b-navbar-nav>
        <b-nav-item href="#"
          ><router-link to="/" class="text-light">Home</router-link></b-nav-item
        >
        <b-nav-item href="#" disabled>
          <router-link to="/about" class="text-light">About</router-link>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto text-light">
        <b-nav-item href="http://twitter.com/uplesports" target="_blank"
          ><span class="text-light">Twitter</span></b-nav-item
        >
        <b-nav-item href="http://discord.gg/7BTS6MZ " target="_blank"
          ><span class="text-light">Discord</span></b-nav-item
        >
        <b-nav-item href="http://twitch.tv/uplesports" target="_blank"
          ><span class="text-light">Twitch</span></b-nav-item
        >
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
</style>
