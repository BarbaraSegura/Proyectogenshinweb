<template>
    <div>
        {{ prueba }}
    </div>
    <div class="wrapper">
        <div class="container">
            <div class="carrousel"><v-sheet class="mx-auto" elevation="8" max-width="800">
                    <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                        <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
                            <v-card color="grey-lighten-1" :class="['ma-4', selectedClass]" height="150" width="100"
                                @click="toggle">
                                <div class="d-flex fill-height align-center justify-center">
                                    <v-scale-transition>
                                        <v-icon v-if="isSelected" color="white" size="48"></v-icon>
                                    </v-scale-transition>
                                </div>
                            </v-card>
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </div>
        </div>
    </div>
</template>

<script>
import nombre from '../services/api'

export default {
    data: () => ({
        model: null,
        prueba: [],
    }),

    async created() {
        const personaje = await nombre.getCharacters()
        this.prueba = personaje
    }
}


</script>

<style lang="scss" scoped>
.wrapper {
    background: url(https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200211/2020021114281584004.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

.carrousel {
    padding-top: 450px;
}
</style>