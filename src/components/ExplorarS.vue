<template>
    <v-container class="wrapper" fluid>
        <section class="city">
            <div class="city__content">
                <img src="https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210717/2021071716071765435.png"
                    class="city__icon">
                <h1 class="city__name">Sumeru</h1>
                <div class="city__desc">
                    <p>La nación de eruditos situada en el medio oeste de Teyvat.<br>
                        Una tierra exótica en la que coexisten exuberantes bosques tropicales y áridos desiertos, donde
                        crecen y se marchitan innumerables frutos de la sabiduría. Todo viajero que llegue a esta nación
                        podrá adquirir valiosos conocimientos atravesando el bosque y subiendo los escalones que conducen
                        hacia el conocimiento o adentrándose en el desierto y descubriendo sus antiguas ruinas.</p>
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
    background: url(https://webstatic.hoyoverse.com/upload/contentweb/2022/08/16/8969f683b92839ac427c875d0d742be2_9007315741660033683.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    margin-top: 2500px;
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
}</style>