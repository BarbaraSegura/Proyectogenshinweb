<template>
    <v-container class="wrapper" fluid>
        <section class="city">
            <div class="city__content">
                <img src="https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200319/2020031919275348054.png"
                    class="city__icon">
                <h1 class="city__name">Mondstadt</h1>
                <div class="city__desc">
                    <p>La Capital de la Libertad al noreste de Teyvat. Entre cadenas montañosas y planicies amplias, el
                        viento de libertad trae consigo el aroma de diente de león y acaricia el Lago de Sidra, llevando a
                        la ciudad en medio del lago la bendición y el favor de Barbatos.</p>
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
    background: url(https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200320/2020032014490020732.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
}

.city {
    font-family: Tahoma, Helvetica, Arial, sans-serif;
    color: white;
    margin-top: 100px;
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

