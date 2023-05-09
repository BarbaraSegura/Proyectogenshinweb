<template>
    <!-- <v-container class="wrapper" fluid> -->
    <v-row class="position">
        <v-col cols="12">
            <v-btn color="white" @click="dialog = true">Ver detalles</v-btn>
        </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="600">
        <v-card>
            <v-card-title class="headline">
                <v-btn icon @click="dialog = false" class="ml-auto">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <!-- <span class="detail__title">Mondstadt</span> -->
            </v-card-title>
            <v-card-text>
                <div class="detail__article">
                    <h1>Lago de Sidra</h1>
                    <p>Un lago natural de agua dulce que rodea a Mondstadt.<br>
                        Su superficie amplia y sus olas cristalinas poco han cambiado en milenios. El agua es tan clara
                        que se puede ver el fondo, y es dulce al tocar los labios. La reputación del vino de Mondstadt
                        proviene de este manantial, y han hecho del lago un símbolo de la ciudad.</p>
                    <v-img src="https://uploadstatic.mihoyo.com/contentweb/20200113/2020011311461397057.jpg"
                        aspect-ratio="1.77"></v-img>
                    <br>
                    <h1>Costa del Halcón</h1>
                    <p>Extendiéndose al este de Levantaviento, la Costa del Halcón y el Cabo del Juramento
                        forman los tres lados de tierra de la bahía al este de Mondstadt.<br>
                        Ya que la costa es amplia y de aguas superficiales, es un lugar popular para visitar
                        entre los habitantes de Mondstadt. Frecuentemente se pueden ver halcones surcando el
                        horizonte que divide el mar azul y la arena blanca.</p>
                    <v-img src="https://uploadstatic.mihoyo.com/contentweb/20200113/2020011311462187517.jpg"
                        aspect-ratio="1.77"></v-img>
                    <br>
                    <h1>Cabo del Juramento</h1>
                    <p>Un cabo ubicado en la esquina al sudeste de Mondstadt, a orillas de la Colina
                        Silbante.<br>
                        Se dice que una pareja de enamorados alguna vez hizo aquí un juramento, lo que dio pie a
                        una leyenda conmovedora. Es un lugar muy popular entre las parejas.<br>
                        Además de poder ver las salidas y puestas de sol, debido a su elevación, también se
                        puede ver el lado opuesto del cabo.</p>
                    <v-img src="https://uploadstatic.mihoyo.com/contentweb/20200113/2020011311463354982.jpg"
                        aspect-ratio="1.77"></v-img>
                    <br>
                    <h1>Viñedo del Amanecer</h1>
                    <p>El Viñedo del Amanecer se encuentra al sudoeste de Mondstadt, el cual ha continuado por
                        generaciones la tradición de la elaboración de vino.<br>
                        Los campos de uva que se extienden por todo el lugar son utilizados para la producción
                        de todo tipo de vinos que gozan de gran popularidad en Teyvat.<br>
                        Año tras año, una parte de la producción del vino se destina a su venta en Mondstadt, y
                        otra parte se distribuye a todos los rincones a través de la ruta comercial al sur de la
                        ciudad</p>
                    <v-img src="https://uploadstatic.mihoyo.com/contentweb/20200319/2020031910130187113.png"
                        aspect-ratio="1.77"></v-img>
                    <br>
                    <h1>Aguaclara</h1>
                    <p>Un pequeño y tranquilo pueblo al sur de Mondstadt situado frente al lago que rodea la ciudad.<br>
                        La mayoría de sus residentes son cazadores que proporcionan carne fresca para todos los grandes
                        restaurantes de Mondstadt.<br>
                        Aguaclara atrae a muchos viajeros gracias a su entorno bucólico y encanto rústico. Si se tiene la
                        oportunidad de probar carne cocinada por un chef experto, uno podrá experimentar distintas emociones
                        increíbles.</p>
                    <v-img src="https://uploadstatic.mihoyo.com/contentweb/20200113/2020011311473147933.jpg"
                        aspect-ratio="1.77"></v-img>
                    <br>
                    <h1>Templo de los Mil Vientos</h1>
                    <p>Un conjunto de ruinas al noreste de Mondstadt.<br>
                        Se dice que antiguamente fue el lugar de culto al Arconte Anemo, pero el paso de los años lo han ido
                        consumiendo, hasta que hoy en día solo quedan ruinas. En algunos pilares de piedra todavía se pueden
                        apreciar grabados exquisitos de una gloria pasada.<br>
                        Como testigo de tiempos ya olvidados, una frase grabada en piedra dice: "Las semillas traídas por el
                        viento crecerán con el tiempo".</p>
                    <v-img src="https://uploadstatic.mihoyo.com/contentweb/20200113/2020011311494677355.jpg"
                        aspect-ratio="1.77"></v-img>
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
    <!--  </v-container> -->
</template>

<script>
export default {
    data() {
        return {
            dialog: false
        };
    }
};
</script>

<style scoped>
/* .wrapper {
    background: url(https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200320/2020032014490020732.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
} */
.v-card__title .v-icon {
    font-size: 16px;
    padding: 0;
}

.detail__title {
    font-size: 18px;
    font-weight: bold;
    margin-left: 12px;
}

.detail__article {
    margin-top: 16px;
}

.detail__article h1 {
    font-size: 20px;
    margin-bottom: 8px;
}

.detail__article p {
    font-size: 14px;
    margin-bottom: 16px;
}

.headline {
    align-items: center;
    display: flex;
}

.position {
    margin-top: 400px;
    margin-left: 630px;
}</style>

