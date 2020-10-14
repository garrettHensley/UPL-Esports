<template>
<b-container id="footer" fluid>
    <b-jumbotron class="text-center shade-bg text-light">
        <p>© 2020 UPL Esports. All Rights Reserved.</p>
        <p>
            UPL Esports is an independent organization, and is not affiliated with
            Valve, Blizzard, or Riot Games
        </p>
    </b-jumbotron>
</b-container>
</template>

<script>
export default {
    name: "footer",
}
</script>

<style lang="scss" scoped>
#footer {
    position: relative !important;
    bottom: 0;
}

.jumbotron {
    background-color: #292828;
    margin-bottom: 0;
}

.container-fluid {
    padding: 0 !important;
}
</style>
