<template>
    <div class="wrapper">
        <div class="container">
            <div class="home">
                <video class="video-slide" src="../assets/nahida-genshin-impact-moewalls.com (1).mp4" autoplay muted loop></video>
            </div>
        </div>    
            <div class="content">
                <div class="main-text">
                <p>¡Bievenido a Genshin Impact Wiki! La web que reune toda la información disponible sobre los personajes, habilidades, localizaciones, misiones ¡y más! de Genshin Impact.</p><br>

<p>Genshin Impact es un juego de rol de acción de mundo abierto desarrollado y publicado por Hoyoverse para plataformas PC, iOS / Android y PS4. El juego es Free-to-Play con un sistema de monetización interna, conocida dentro del juego como Gachapón.</p>
                </div>
            </div>
</div>
</template>

<style lang="scss" scoped>

.home {
    position: relative;
    width: 100%;
    height: 950px;
    //min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding-bottom: 50px;
}
.home:before {
    z-index: 777;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.wrapper {
    //background: url(../assets/anniversary-nahida-venti-raiden-zhongli-official-desktop-wallpaper-genshin.jpeg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    //padding-top: 250px;
}
.container {
    height: 550px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}
.content {
    padding-top: 0px;
}

.content .main-text{
    position: relative;
    z-index: 2;
    color: black;
    max-width: 100%;

}

</style>
