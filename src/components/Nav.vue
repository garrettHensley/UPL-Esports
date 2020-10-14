<template>
<div>
    <b-navbar id="nav" toggleable="sm" class="text-light" :class="{ 'fixed-top': isHome }">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#">
                    <router-link to="/" class="text-white">Home</router-link>
                </b-nav-item>
                <b-nav-item href="#">
                    <router-link to="/news" class="text-white">News</router-link>
                </b-nav-item>
                <b-nav-item target="_blank" href="https://scoreboard.uplesports.com/">
                    <a class="text-white">Scoreboard</a>
                </b-nav-item>
                <b-nav-item-dropdown text="Rules" right>
                    <b-dropdown-item href="../rules/">UPL</b-dropdown-item>
                    <b-dropdown-item href="../rules/underlords">Underlords</b-dropdown-item>
                    <b-dropdown-item href="../rules/amongus">Among Us</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto text-white">
                <b-nav-item href="http://twitter.com/uplesports" target="_blank">
                    <img :src="`${publicPath}twitter.png`" class="nav-image" alt="Twitter" fluid />
                </b-nav-item>
                <b-nav-item href="http://discord.gg/7BTS6MZ" alt="Discord" target="_blank">
                    <img :src="`${publicPath}discord.png`" class="nav-image" fluid />
                </b-nav-item>
                <b-nav-item href="http://twitch.tv/uplesports" alt="Twitch" target="_blank">
                    <img :src="`${publicPath}twitch.png`" class="nav-image" fluid />
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
export default {
    name: "u-nav",
    data() {
        return {
            img: {
                //twitter: require("@/assets/twitter.png"),
                //discord: require("@/assets/discord.png"),
                //twitch: require("@/assets/twitch.png")
            },
            publicPath: process.env.BASE_URL,
        }
    },
    computed: {
        isHome() {
            console.log(this.$route.name)
            return this.$route.name == "Home"
        },
    },
}
</script>

<style>
.nav-image {
    width: 2.2rem;
}

.nav-link {
    color: white !important;
}

.navbar-toggler>.navbar-toggler-icon {
    background: url("~@/assets/logo.png") !important;
    background-size: contain !important;
    z-index: 100 !important;
}
</style>
