<template>
    <v-container class="wrapper" fluid>
        <section class="city">
            <div class="city__content">
                <img src="https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200319/2020031921295516631.png"
                    class="city__icon">
                <h1 class="city__name">Liyue</h1>
                <div class="city__desc">
                    <p>Una ciudad con un puerto próspero situado al este de Teyvat.<br>
                        Liyue yace imponente entre faldas montañosas, bosques de piedra, bastas planicies y una costa llena
                        de vida, que conforman una tierra llena de riquezas, con cambios de estación claramente definidos y
                        llenos de color. ¿Cuántos obsequios del Arconte Geo yacerán enterrados entre sus montañas?</p>
                </div>
            </div>
        </section>
    </v-container>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.wrapper {
    background: url(https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200320/2020032014583613234.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    margin-top: 800px;
}

.city {
    font-family: Tahoma, Helvetica, Arial, sans-serif;
    color: white;
    margin-top: 150px;
}

.city__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.city__icon {
    width: 100px;
    height: 100px;
}

.city__name {
    font-size: 4.6vh;
    font-weight: 400;
    margin: 16px 0;
    position: relative;
}

.city__desc {
    font-size: 16px;
    line-height: 1.5;
    max-width: 600px;
}
</style>