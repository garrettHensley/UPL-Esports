<template>
  <b-container fluid>
    <h1 class="display-4 text-center">{{ selected }} Rules</h1>

    <rules-section :content="getContent" />
  </b-container>
</template>

<script>
import RulesSection from "@/components/RulesSection.vue";

export default {
  data() {
    return {
      selected: "UPL",
      src: {
        UPL: `<ol>
  <li>
    No bigotry is allowed of any kind.
  </li>
  <li>
    No threats, insults, aggression, or trolling. Treat people how you would
    want to be treated.
  </li>
  <li>
    No excessive spam. This includes text, emote spam, link spam, or image spam.
  </li>
  <li>
    NSFW content is NOT allowed (Not Safe For Work, i.e. porn, gore, suggestive
    content, etc.)
  </li>
  <li>
    English is the official language of the server and conversations must be
    centered on English. (exception for dedicated language channels)
  </li>
  <li>
    Advertising content or discord invites to other servers is not allowed
    unless somebody specifically asks for it.
  </li>
  <li>
    You can ping moderators anytime someone is breaking a rule, or message an
    individual mod. Do not ping the role as a whole for any other reason.
  </li>
  <li>
    Attempting to circumvent discipline actions that the mods give you will
    result in an ban.
  </li>
  <li>
    No malicious links allowed.
  </li>
  <li>
    No offensive or otherwise inappropriate nicknames or profile
    pictures(includes blank or invisible names and excessive use of noisy or
    unusual unicode characters).
  </li>
</li>
<div class="mt-2">
<em class="text-">
<p>
  In addition to these rules, the moderation team reserves the right to remove
  messages and users from the server that are detrimental to the discussion and
  community. Since this is the first page you are seeing, ignorance of the rules
  does not excuse breaking them.
</p>
<p>
  In addition to these rules, the moderation team reserves the right to remove
  messages and users from the server that are detrimental to the discussion and
  community. Since this is the first page you are seeing, ignorance of the rules
  does not excuse breaking them.
</p></em></div>
`,
        "Among Us": `<div class="my-1 text-center">
  <ul>
    <li>
      Participants are responsible to ensure matches is properly started &
      submitted.
    </li>
    <li>
      Any form of cheating would be delt harshly & may result in a
      <strong>pernament ban</strong>.
    </li>
    <li>
      Should a member notice any cheating, report to
      <em>#support-help</em> ticket system.
    </li>
    <li>
      Bystanders to any form of cheating may be considered as accomplices.
    </li>
  </ul>
</div>
<div class="my-1 text-center">
  <h3>How it Works</h3>
  <p>
    How it works: The MMR system takes an average of each team’s Impostor or
    Crewmate MMR to formulate a predicted likelihood of either team winning. The
    prediction takes into account the average impostor/crewmate winrate. MMR is
    redistibuted to the winning team based on their predicted likelihood of
    winning/losing,
  </p>
  <h3 class="main">Leaderboards</h3>
  <div class="row text-center lead">
    <div class="col">
      <a href="https://scoreboard.uplesports.com/amongus/">Overall</a>
    </div>
    <div class="col">
      <a href="https://scoreboard.uplesports.com/amongus/?impostor">Impostor</a>
    </div>
    <div class="col">
      <a href="https://scoreboard.uplesports.com/amongus/?crewmate">Crewmate</a>
    </div>
  </div>
</div>
`,
        "Dota Underlords": `<ol class="text-center">
  <li>
    Seasonal leagues will be held with 4 weekly tournaments and a season’s
    finals.
  </li>
  <li>Weekly tournaments will have players playing 2 to 4 matches.</li>
  <li>Each weekly tournament is expected run approximately 3.5 to 4 hours.</li>
  <li>After each match, players are awarded tournament points.</li>
  <li>
    Placement in each weekly tournament is determined by total tournament
    points.
  </li>
  <li>
    At the end of each tournament, top 32 players are awarded league points.
  </li>
  <li>After 4 weeks the top 32 league point holders qualify for the finals.</li>
  <li>
    Players in finals will play same number of matches as the weekly
    tournaments.
  </li>
</ol>
<div class="row w-75 mx-auto">
  <div class="col">
    <h4>Tournament Points</h4>
    <ul class="list-group">
      <li class="list-group-item bg-dark text-light">1st:15</li>
      <li class="list-group-item bg-dark text-light">2nd:12</li>
      <li class="list-group-item bg-dark text-light">3rd:09</li>
      <li class="list-group-item bg-dark text-light">4th:07</li>
      <li class="list-group-item bg-dark text-light">5th:05</li>
      <li class="list-group-item bg-dark text-light">6th:03</li>
      <li class="list-group-item bg-dark text-light">7th:02</li>
      <li class="list-group-item bg-dark text-light">8th:01</li>
    </ul>
  </div>
  <div class="col">
    <h4>League points</h4>
    <ul class="list-group">
      <li class="list-group-item bg-dark main">1st:16</li>
      <li class="list-group-item bg-dark main">2nd:16</li>
      <li class="list-group-item bg-dark main">3rd:15</li>
      <li class="list-group-item bg-dark main">4th:15</li>
      <li class="list-group-item bg-dark main">…</li>
      <li class="list-group-item bg-dark main">30th:2</li>
      <li class="list-group-item bg-dark main">31th:1</li>
      <li class="list-group-item bg-dark main">32th:1</li>
    </ul>
  </div>
</div>
<div class="my-1">
  <h3>Tournament Player Progression and Elimination</h3>
  <ul>
    <li>
      Up to 128 checked in players are randomly distributed to fill 16 lobbies.
    </li>
    <li>
      After each match, players are regrouped with players of similar tournament
      scores.
    </li>
    <li>Match 3 will retain 12 lobbies for the top 96 players.</li>
    <li>Match 4 will retain 8 lobbies for the top 64 players.</li>
  </ul>
</div>
<div class="my-1">
  <h3>Season Finals Player Progression and Elimination</h3>
  <ul>
    <li>Top 32 league point players will be evenly seeded into 4 lobbies.</li>
    <li>
      After each match, players are regrouped with players of similar tournament
      scores.
    </li>
    <li>Match 3 will retain 2 lobbies for the top 16 players.</li>
    <li>Match 4 will retain 1 lobby for the top 8 players.</li>
  </ul>
</div>
<div class="my-1">
  <h3>Tie Breakers</h3>
  <div>
    <strong class="main">Tournament Score</strong>
  </div>
  <ul>
    <li>
      The group/bracket they have recently been lobbied in. Higher is better.
    </li>
    <li>
      If still undetermined, their recent match against each other break ties
    </li>
  </ul>
  <div><strong class="main">League Score</strong></div>
  <ul>
    <li>Their highest maximum Tournament Score</li>
    <li>
      If still undetermined, their next highest tournament scores are compared.
    </li>
  </ul>
</div>
<div class="my-1">
  <div>
    <strong class="main">Check in</strong>
    <ul>
      <li>
        Check in opens for registered players 1 hour before the tournament
        start.
      </li>
      <li>Check in closes 15mins before tournament start.</li>
      <li>
        Players not checked in, forfeit their spot and are replaced by players
        on the Waiting List.
      </li>
    </ul>
  </div>
  <div>
    <div><strong class="main">Before Match 1 - Tournament Start</strong></div>
    <ul>
      <li>
        Lobby codes are announced to players approximately 5mins before
        tournament start.
      </li>
      <li>
        Players are required to assemble in their lobbies as soon as possible.
      </li>
      <li>
        Match 1 is automatically started at about 5 minutes after tournament
        starting time.
      </li>
      <li>Players not ready or not present are left out of the match.</li>
    </ul>
  </div>
  <div>
    <div><strong class="main">Sub-sequential Matches</strong></div>
    <ul>
      <li>
        Players are required to enter into lobbies as soon they are declared.
      </li>
      <li>
        Unless a 10mins break is declare or a moderator mention otherwise,
        matches will be forcefully started in 5mins.
      </li>
    </ul>
  </div>
  <div>
    <em><small>10 minute Breaks are given every 2 matches.</small></em>
  </div>
</div>
`,
      },
    };
  },
  components: {
    RulesSection,
  },
  created() {
    this.setSelector();
  },
  methods: {
    setSelector() {
      this.selected = this.validateSelection;
    },
  },
  computed: {
    getContent() {
      return this.src[this.selected];
    },
    validateSelection() {
      // if selection is invalid then default to UPL rules
      switch (this.$route.params.id.toUpperCase()) {
        case "UPL":
          return "UPL";
        case "UNDERLORDS":
          return "Dota Underlords";
        case "AMONGUS":
          return "Among Us";
        default:
          return "UPL";
      }
    },
  },
};
</script>
