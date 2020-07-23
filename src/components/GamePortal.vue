<template>
  <b-container class="mt-4">
    <b-card-group>
      <b-card
        title="Underlords"
        style="max-width: 20rem; height: 25rem;"
        id="underlords"
        class="mx-auto"
      >
        <a
          href="#UL"
          style="position: absolute;
              top: 0; left: 0;
              height: 100%; width: 100%;"
        ></a>
      </b-card>

      <b-card
        title="Artifact"
        style="max-width: 20rem; height: 25rem;"
        id="artifact"
        class="mx-auto"
      >
        <a
          href="#AR"
          style="position: absolute;
              top: 0; left: 0;
              height: 100%; width: 100%;"
        ></a>
      </b-card>
      <b-card
        title="Teamfight Tactics"
        style="max-width: 20rem; height: 25rem;"
        id="teamfighttactics"
        class="mx-auto"
      >
        <a
          href="#TFT"
          style="position: absolute;
              top: 0; left: 0;
              height: 100%; width: 100%;"
        ></a>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
export default {};
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
#teamfighttactics {
  background-image: url("~@/assets/TFTCard.jpg");
  background-size: cover;
  background-position-x: -20em;
  color: white;
  padding-top: 5em;
}

h4 {
  backdrop-filter: blur(0.5rem) saturate(80%);

  font-size: 2rem;
}
</style>
