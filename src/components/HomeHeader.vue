<template>
  <div class="home container text-center p-5">
    <b-container class="m-3">
      <!-- Logo and text -->
      <b-row>
        <b-col class="text-light">
          <b-img src="../logo.png" id="logo" fluid alt="Logo" />
          <span class="lead">Esports</span>
        </b-col>
      </b-row>
    </b-container>
    <!-- Portal for all current games -->
    <b-row>
      <b-col>
        <b-card-group deck>
          <b-card title="Underlords" style="max-width: 20rem;" id="underlords">
            <p></p>
          </b-card>
          <b-card
            title="Artifact"
            style="max-width: 20rem; height: 25rem;"
            id="artifact"
          ></b-card>
          <b-card title="Prophecy" style="max-width: 20rem;" id="prophecy">
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
#artifact {
  background-image: url("~@/assets/ArtifactBG.png");
  background-size: cover;
  color: white;
  padding-top: 5em;
}
#underlords {
  background-image: url("~@/assets/ulcard.png");
  background-size: cover;
  color: white;
  padding-top: 5em;
}
#prophecy {
  background-image: url("~@/assets/unknown.png");
  background-size: cover;
  color: white;
  padding-top: 5em;
}
#logo {
  width: 10em;
}
h4 {
  backdrop-filter: blur(0.5rem);
  font-size: 2rem;
}
</style>
