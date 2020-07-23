<template>
  <div>
    <ContentPlaceholder id="UL" :stuff="Underlords" />
    <ContentPlaceholder id="AR" :stuff="Artifact" />
    <ContentPlaceholder id="TFT" :stuff="TFT" />
  </div>
</template>

<script>
import ContentPlaceholder from "@/components/ContentPlaceholder.vue";
export default {
  components: {
    ContentPlaceholder
  },
  data() {
    return {
      Artifact: {
        title: "Artifact",
        background: "~@/assets/wallpaper/AR.jpg",
        content: `<p>
      <em>
        A collaboration between legendary card game designer Richard Garfield
        and Valve, Artifact is a digital card game that combines
        deeply-strategic, competitive gameplay with the rich setting of Dota 2.
        The result is an immersive and visually-stunning trading card game
        unlike any other.
      </em>
    </p>
    <p>
      <em>
        We've hosted many Artifact tournaments in the past, under Brainscans
        Network: a name known by many competitive Artifact players. Kicking it
        off with it's Beta Bonanza tounament, and Launch Day tournament followed
        by a series of month long leagues.
      </em>
    </p>
    <p>
      <em>
        UPL is currently waiting for Artifact 2.0 to enter open beta, before we begin hosting tournaments. 
      </em>
    </p>`
      },
      Underlords: {
        title: "Underlords",
        content: `<p>
      <em>
        In Dota Underlords, strategic decisions matter more than twitch
        reflexes. Underlords includes compelling singleplayer and multiplayer
        modes, and offers level progression with rewards. Play a strategic
        Standard game, a quick Knockout match, or co-op Duos match with a
        friend.
      </em>
    </p>
    <p>
      <em>
        UPL got it's beginnings with Underlords, kicking it off with the
        Underlords Pro League which has been a staple in competitive Underlords
        since it's inception. UPL Underlords has ran 8 succesfful month-long
        seasons, gathering in hundreds of players weekly for competitive play.
      </em>
    </p>`
      },
      TFT: {
        title: "Teamfight Tactics",
        content: `<p>
      <em>
        Assemble an army of your favorite champions in Teamfight Tactics, the PvP strategy autobattler from the studio behind League of Legends.
      </em>
    </p>
    <p>
      <em>
        In Teamfight Tactics, you’ll draft, deploy, and upgrade from a revolving roster of League of Legends champions in a round-based battle for survival. Band together with Rebels or devastate with Dark Stars—the strategy is all up to you.
      </em>
    </p>`
      }
    };
  }
};
</script>

<style scoped></style>
