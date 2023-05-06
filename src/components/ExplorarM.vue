<template>
    <v-container>
        <v-row>
            <v-col>
                <div class="text-center">
                    <v-btn color="primary" @click="dialog = true">
                        Open Dialog
                    </v-btn>

                    <v-dialog v-model="dialog" width="auto">
                        <v-card>
                            <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore
                                et dolore magna aliqua.
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
export default {
    data() {
        return {
            dialog: false,
        }
    },
}
</script>

<style lang="scss" scoped></style>