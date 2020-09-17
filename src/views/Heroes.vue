<template>
  <div class="container mt-2">
    <h1 class="display-3 text-center main">UPL Invitational</h1>
    <heroesnav :activeItem="activeItem" />
    <div id="rules" v-if="page == 'rules'">
      <hr />
      <div id="general">
        <h3>General Information</h3>
        <p>
          The Administration of UPL and the tournament referees will be teams
          contact for questions and concerns. The Administration is allowed to
          ignore or overrule any of the following rules in order to make the
          competition as fair as possible. In cases not covered by these rules,
          the Administration has sole discretion and obligation to make what it
          deems the fairest possible ruling. All teams and their players will
          need to join UPL’s discord server
          <a href="discord.gg/7BTS6MZ" class="accent">discord.gg/7BTS6MZ</a>.
          Follow the instructions in the get roles server to gain access to the
          HOTS channels. Then each team will be given access to their own voice
          channel and a general teams channel for scheduling, announcements, and
          other communications from the administration. All teams will be
          required to play their matches using UPL’s assigned voice channels.
        </p>
        <p class="text-muted">
          <em
            ><small
              >NOTE PLAYER AUDIO MAY BE USED DURING BROADCASTING YOU ARE SOLELY
              RESPONSIBLE TO KEEP WHAT YOU SAY IN THE UPL CHANNEL APPROPRIATE
              AND BROADCASTABLE FAILURE WILL TO DO SO WILL BE MET WITH PENALTIES
              INCLUDING UP TO REMOVAL FROM THE TOURNAMENT.</small
            ></em
          >
        </p>
      </div>
      <div id="overview">
        <h3>Tournament Overview</h3>
        <p>
          The UPL invitational will be a 2 matches a week bo3 format per match
          format starting the week of oct 11th. Every week each team will play
          on Tuesday and Thursday starting at 7pm EST with the next match
          starting promptly 10 minutes after the previous one ended. Teams will
          accumulate points throughout the season based on the results on their
          match results 3 points for a 2-0 domination, 2 points for winning 2-1,
          1 point for losing 2-1 and 0 for losing 2-0. Top 8 teams will go into
          a bracket with the top 4 teams will go into the upper bracket and the
          4 bottom teams will go into the bottom half of the bracket as in the
          link. 1st seed will get a choice between 3rd and 4th seed for their
          match. Loser finals and grand finals will be a bo5.
        </p>
      </div>
      <div id="ties">
        <h3>Ties</h3>
        <p>
          If two or more teams are tied for one of the playoff slots, the
          following metrics will be used to seed the teams.
        </p>
        <ol>
          <li>Head-to-head match results between tied teams</li>
          <li>
            Sonneborn-berger score (combined match score of the teams you’ve
            beaten)
          </li>
          <li>Comparative match results against each team from the top down</li>
        </ol>
        <p class="text-muted">
          <em>
            If a tie is partially broken with any of the secondary metrics, the
            process resets and the remaining teams are evaluated based on the
            list in order. In the case that the above process cannot break a tie
            that affects bracket placement or elimination, The Administration
            will decide when and how tiebreakers games will be played.
          </em>
        </p>
      </div>
      <div id="rosters">
        <h3>Rosters</h3>
        <p>
          Teams can submit up to a 7-man roster at the start of the season and 1
          coach. 2 off roster subs are allowed per match and can not be from
          another team. Everyone must play on their account with the most games
          played and only the original owner may play on that account. Rosters
          need to be turned in by September 25th midnight est to Majesty or
          Zexerous.
        </p>
      </div>
      <div id="prize">
        <h3>Prize Pool</h3>
        <p>
          The prize pool will start at 1000$ and will increase by 25% of all
          donations to the tournament. 25% will go to UPL up to but not
          exceeding overhead cost past that amount will be added to the prize
          pool and the rest will be split between the casters or less per
          negotiations of pay. Per the tournament license crowdfunding will be
          stopped when the prize pool reaches 10,000$ regardless of anything
          else. The Administration reserves the right to use disciplinary
          sanctions and penalize teams or players in extreme circumstances for
          violations of these rules or any conduct that harms the integrity or
          business of UPL. Each team will have to designate a person to receive
          the winnings on behalf of their team and they will be responsible for
          giving it out to their team. All questions on the prize pool can be
          directed to Rayeangel.
        </p>
      </div>
      <div id="broadcasts">
        <p>
          Unless otherwise indicated by the lead administrator, all Tournament
          matches will be played LIVE, with live broadcasts by official
          Tournament stream. Only those commentators that are announced as
          official have the right to broadcast matches. Players can POV stream
          on a 1 minute delay as long as they have UPL’s logo on screen.
          Spectators in the lobby reside there only at the referee’s permission.
          Managers and other teams’ players are not allowed to be in the lobby
          (except by explicit approval from both teams). Live broadcasts will be
          made available on the official Tournament site as well as partners’
          sites. In order to prevent unfair play in online matches, broadcasts
          will be set with 30 seconds delay. The Administration may choose to
          increase this delay at its discretion. Using rude lexis and insulting
          opponents / organizers during official Tournament matches is strictly
          prohibited. Teams / players are encouraged to promote the official
          tournament broadcasts.
        </p>
      </div>
      <div id="referee">
        <h3>Refereeing</h3>
        <p>
          All rule breaks should be brought to the attention of the admin by a
          team representative/captain as soon as possible and will be dealt with
          accordingly. Punishments will include everything from a warning up to
          and including expulsion from the tournament. All decisions made by
          admins are final.
        </p>
      </div>
      <div id="penalties">
        <h3>Disciplinary Penalties and Fines</h3>
        <div class="ml-2">
          <h5>Lateness</h5>
          <p>
            The schedule for the Tournament is follow-by, with each match
            scheduled to begin 20 minutes after the preceding match.
          </p>
          <p>
            All teams are expected to join the lobby at least 15 minutes before
            the start of each match. Any team who does not have all 5 players in
            the lobby by the scheduled match time will be penalized according to
            the following rules:
          </p>
          <ul>
            <li>10 minutes late - Game 1 Forfeit (or match forfeit in BO1)</li>
            <li>20 minutes late - Match Forfeit (or series forfeit in BO3)</li>
          </ul>
          <p>
            <em>
              In some cases, these penalties may be waived if the delay is a
              result of forces outside of the team’s control or matches in
              tournaments the Administration is coordinating with directly.</em
            >
          </p>
        </div>
        <div class="ml-2">
          <h5>Pauses/Disconnects</h5>
          <p>
            In online matches, players are responsible for securing their
            internet connections and preparing a backup solution in case of a
            technical outage. Each team is allotted 10 minutes of in-game pause
            time per game. After this time has elapsed, the game must be
            unpaused and the team without remaining time may not pause again.
          </p>
          <p>
            In-game pauses are reserved for unexpected technical issues or
            emergencies. Whenever the game is paused, the team pausing must
            immediately provide a valid reason to the administrator and their
            opponents. Failure to do so may result in a forfeit of the game in
            question. The Administration reserves the right to examine a pattern
            of behavior in a team’s pauses and issue a warning if it believes
            in-game pauses are being abused.
          </p>
        </div>
        <div class="ml-2">
          <h5>Cheating or using unauthorized programs</h5>
          <p>
            Teams found to be engaging in cheating, unethical behavior,
            obtaining any form of unfair competitive advantage, or using
            unauthorized programs will forfeit all affected matches. The
            Administration will have total discretion and final say over what
            counts as cheating. In extreme cases, and at the sole discretion of
            the Administration, cheating may result in a team being immediately
            disqualified from the Tournament or even being barred from future
            UPL events. Macro scripts are expressly forbidden.
          </p>
        </div>
        <div class="ml-2">
          <h5>Stream viewing</h5>
          <p>
            Players are expressly prohibited from viewing broadcasts of their
            games during an ongoing match. This rule takes effect from the
            moment the lobby begins to load into the game, includes any pauses
            in the midst of gameplay, and extends until the game officially ends
            and the game end score screen is displayed.
          </p>
          <p>
            Broadcasts as defined for our purposes include live video streams
            (including but not limited to those broadcast platforms such as
            Twitch, YoutubeLive, Facebook, etc), stream chat rooms (including
            but not limited to Twitch chat), and text-based live report threads.
          </p>
          <p>
            While we recognize that players may not have the intention of
            cheating when viewing streams, there is no way for an administrator
            to determine definitively what a player’s intentions were when
            viewing a broadcast of an ongoing game. Therefore, any players found
            in violation of this rule will be punished; the severity of the
            punishment will be up to the administration’s discretion.
          </p>
        </div>
        <div class="ml-2">
          <h5>Betting / Gambling</h5>
          <p>
            Players, managers, and other affiliates of participating teams are
            expressly prohibited from making bets of any kind that are in any
            way related to the event on matches, real money bets (including but
            not limited to GG.bet, Betway, Rivalry, Pinnacle, Parimatch,
            LOOT.BET, etc).
          </p>
          <p>
            Indirect methods of betting (such as players / managers / other team
            affiliates who knowingly consort with 3rd parties to arrange bets on
            matches) will be treated the same way by the Administration as the
            direct methods outlined above.
          </p>
          <p>
            In extreme cases, and at the sole discretion of the Administration,
            illegal betting may result in a team being immediately disqualified
            from the Tournament or even the team being barred from future
            events.
          </p>
        </div>
      </div>
      <div>
        <h3>Hots Rules</h3>
        <p>All teams must follow blizzards terms of service at all times</p>
        <p>All matches will be played on the NA server.</p>
        <p>
          Teams who abuse gameplay bugs may be assigned a forfeit loss. If a
          team discovers a game-affecting bug (or potential exploit clearly
          outside of the developers’ intended game design) during a game, they
          are expected to pause the game and immediately inform their opponent
          The Administration will evaluate all alleged bug abuses and has full
          discretion to award a forfeit loss to any team found guilty of abusing
          a critical bug or exploit that affected the outcome of the match.
        </p>
        <p>
          If a team calls “GG” while the game is in a state where it may be
          reasonably believed that the team is legitimately conceding the game,
          they are required to immediately revoke that call or forfeit the game.
        </p>
        <p>
          In cases where a game crashes or needs to be restarted, the
          Administration will exercise its best judgement to decide the correct
          course of action.
        </p>
        <p>
          In general, for games which have just begun, a remake with all picks /
          bans remaining the same will be used. In all cases, the tournament
          administration has ultimate discretion as to how to address a game
          that has crashed or needs to be restarted. The above regulations are
          only general guidelines, not hard / fast rules.
        </p>
      </div>
      <div id="maps">
        <h3>Maps</h3>
        <p>Map Selections will be determined by the following rules:</p>
        <p>
          Map bans/picks are done by a “digital coinflip” on the Discord server
          or higher seed in the bracket. Upper bracket winner is considered
          highest seed in grand finals.
        </p>
        <p>Coinflip Winner chooses first map pick OR first draft pick.</p>
        <p>
          Map Ban/Pick Order: The team selecting the first map (first map team)
          selects a map to ban, then the other team (first pick team) selects a
          map to ban; then the first map team selects another map to ban, and
          the first pick team selects another map to ban. After the four bans,
          the team with map choice selects the game one map from the remaining
          maps in the pool.
        </p>
        <p>
          After the first game, in all subsequent games, the losing team chooses
          to either select the map or to have first pick during the draft. The
          team that picks the map will go second during that game’s hero
          selection process.
        </p>
        <p>
          Maps may not be repeated during a match. Teams are required to inform
          the opposing team of their selection within 2 minutes of the previous
          game ending.
        </p>
        <p>
          If a banned map, or map not currently in rotation for the season, is
          picked the teams will have the first 2 minutes of the game to address
          the issue and remake the lobby. If the issue is brought up in the
          first 2 minutes, a new legal map must be chosen and the new draft will
          proceed as a brand-new draft. If the issue is not addressed in the
          2-minute time, the teams will continue to play and the score of the
          map will stand as if played on a legal map choice.
        </p>
        <p>
          A Team does not have the option of not-banning a map. You must ban 2
          maps.
        </p>
        <p>
          The Season map pool consists of ten (10) maps. They are as follows:
        </p>
        <ul>
          <li>Alterac Pass</li>
          <li>Battlefield of Eternity</li>
          <li>Braxis Holdout</li>
          <li>Cursed Hollow</li>
          <li>Dragon Shire</li>
          <li>Infernal Shrines</li>
          <li>Sky Temple</li>
          <li>Tomb of the Spider Queen</li>
          <li>Towers of Doom</li>
          <li>Volskaya Foundry</li>
        </ul>
      </div>
      <div id="skins">
        <h3>Heroes, Talents and Skins</h3>
        <p>
          New heroes will be banned for 2 weeks starting from the day that they
          become playable on the NA server. Reworked heroes will be handled on a
          case by case base and an announcement will be made in the discord
          regarding it.
        </p>
        <p>
          Talents, heroic abilities, and hero/talent interactions may be banned
          temporarily if they are found to be bugged. Talents, heroic abilities,
          and hero/talent interactions will be banned on a case by case basis,
          as determined by the Administration. A list of banned talents will be
          given and updated. Other talents that may have buggy interactions ie
          avalanche that will fall under bug abuse and will not be flat out
          banned. See rule on bug abuse.
        </p>
        <p>
          If a banned hero is selected in draft, the draft must be reset and
          begin again with the same picks and bans up until the banned hero was
          selected. If a banned hero is picked again by the same team after the
          draft has already been reset for this reason, the team picking the
          hero forfeits that map. If a banned hero pick is not addressed before
          the game begins, the team that has selected the banned hero forfeits
          that map. This map forfeit must be addressed within the game. If it is
          not addressed during the game, the match result will stand.
        </p>
        <p>
          If a banned talent or heroic ability is selected, or a banned
          hero/talent interaction is used, by a team, the map is forfeit by that
          team.
        </p>
        <p>The following skins are banned (all tints included)</p>
        <ul>
          <li>Archangel Diablo</li>
          <li>Cyberhawk Kael’thas</li>
          <li>Maraudin’ Muradin</li>
          <li>Striker Li-Ming</li>
          <li>Mecha Tyrael</li>
          <li>Cuddle Bear Stitches</li>
          <li>Techno Chromie</li>
          <li>Kandy King Muradin</li>
        </ul>
        <p>The following mounts are banned</p>
        <ul>
          <li>Countess Kerrigan Mount (Bat)</li>
          <li>Crimson Arthas Mount (Gargoyle)</li>
          <li>Invisible Horse</li>
        </ul>
        <p>
          <em
            >If neither team addresses a banned skin or mount within the first 2
            minutes, the game will continue without penalty to either team.</em
          >
        </p>
      </div>
      <hr />
      <div class="bg-dark lead rounded">
        <h3 class="text-center main-bg rounded-top">Admin Discord</h3>
        <div class="px-3 py-1">
          <p>Zexerous#0164</p>
          <p>Majesty#9412</p>
          <p>infa_fox#0537</p>
          <p>Rayeangel#1337 (financial questions only)</p>
        </div>
      </div>
    </div>
    <div id="bracket" v-if="page == 'bracket'">
      <h1>Coming Soon...</h1>
    </div>
    <div id="teams" v-if="page == 'teams'">
      <h1>Coming Soon...</h1>
    </div>
    <div id="matches" v-if="page == 'matches'">
      <h1>Coming Soon...</h1>
    </div>
  </div>
</template>

<script>
import heroesnav from "@/components/heroes/heroesnav.vue";
export default {
  components: {
    heroesnav,
  },
  data() {
    return {
      activeItem: "rules",
    };
  },
  computed: {
    page() {
      if (!this.$route.params.id) {
        return "rules";
      }
      let id = this.$route.params.id.toLowerCase();
      switch (id) {
        case "matches":
          return "matches";
        case "bracket":
          return "bracket";
        case "teams":
          return "teams";
        case "rules":
          return "rules"; // Go back to rules if params are invalid...
        //or maybe we should create a 404
        default:
          return "rules";
      }
    },
  },
  watch: {
    page() {
      this.activeItem = this.page;
    },
  },
};
</script>
