<template>
    <v-container class="wrapper" fluid>
        <section class="city">
            <div class="city__content">
                <img src="https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210717/2021071716071765435.png"
                    class="city__icon">
                <h1 class="city__name">Inazuma</h1>
                <div class="city__desc">
                    <p>Un archipiélago situado en el extremo oriente de Teyvat.<br>
                        Encara tormentas perpetuas, adéntrate en la isla de las flores de cerezo, en sus playas, los
                        imponentes acantilados y las solitarias montañas, y presencia la eternidad perseguida por Su
                        Excelencia, la todapoderosa Narukami.</p>
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
    background: url(https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210719/2021071920324227852.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    margin-top: 1650px;
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