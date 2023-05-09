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
                    <h1>Puerto</h1>
                    <p>La fundación del puerto fue la piedra angular de la actividad comercial de Liyue. Siendo el puerto
                        comercial más grande de Teyvat, la cantidad de productos que vienen y van a través del puerto es
                        inimaginable. Cada año, durante el Rito de la Linterna, las miles de linternas que flotan sobre el mar hacia el
                        cielo nocturno son una maravilla que uno no debe perderse.</p>
                    <v-img src="https://uploadstatic.mihoyo.com/contentweb/20200319/2020031910400027780.png"
                        aspect-ratio="1.77"></v-img>
                    <br>
                    <h1>Desfiladero Jueyun</h1>
                    <p>Ubicado al noroeste de Liyue, es una cordillera remota donde las nubes y la niebla se acumulan todo
                        el año.</p>
                    <p>Las montañas ofrecen una vista espléndida, pero debido al terreno accidentado, pocas personas han
                        puesto un pie ahí. Se rumora que es el escondite de los Adeptus que protegen a Liyue. Es por eso que
                        es un lugar muy buscado por aquellos que aspiran a obtener el favor de los dioses. En vista de los
                        peligros que hay ahí fuera, es mejor no acercarse y limitarse a observar de lejos desde la Posada
                        Wangshu.</p>
                    <v-img src="https://uploadstatic.mihoyo.com/contentweb/20200319/2020031918335144810.jpg"
                        aspect-ratio="1.77"></v-img>
                    <br>
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
    margin-top: 850px;
    margin-left: 630px;
}</style>