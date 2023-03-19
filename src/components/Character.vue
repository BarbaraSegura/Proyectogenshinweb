<template>
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
export default {
    data: () => ({
        model: null,
    }),
}
</script>

<style lang="scss" scoped>
.wrapper {
    background: url(../assets/wp8732334-mondstadt-wallpapers.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

.carrousel {
    padding-top: 450px;
}
</style>