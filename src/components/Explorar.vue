<template>
    <v-container class="wrapper" fluid>
        <v-row class="definicion">
            <v-col>
                <h1 class="home__title">Teyvat</h1>
                <v-img src="../assets/descargaseparacion.png"></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrapper {
    background: url(https://genshin.hoyoverse.com/_nuxt/img/5c125a1.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
}

.definicion {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.home__title {
    font-weight: 400;
    font-size: 80px;
    line-height: 120px;
    height: 120px;
    text-shadow: 0 0 17px rgba(110, 159, 193, 0.24), 0 0 17px rgba(110, 159, 193, 0.24);
    justify-content: center;
}
</style>