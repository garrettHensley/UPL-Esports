<template>
  <div>
    <b-navbar id="nav">
      <b-navbar-nav>
        <b-nav-item href="#"
          ><router-link to="/" class="text-light">Home</router-link></b-nav-item
        >
        <b-nav-item href="#" disabled>
          <router-link to="/about" class="text-light">About</router-link>
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
</style>
