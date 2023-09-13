<script>
import EditPrefDialog from '../components/EditPrefDialog.vue';
import { useGameStore } from '../stores/GameStore';

    export default {
        data() {
            return{
                pref: useGameStore(),
                username: null,
                img: null,
                dialog: false,
                imgDef: new URL(`../assets/avatars/avatars_1.png`, import.meta.url).href,
            }
        },
        components: {
            EditPrefDialog
        },
        mounted() {
            // window.scroll({ top: 0});
        },
        methods: {
            ToggleDialog(){
                this.dialog = !this.dialog
            },
        },
    }

</script>

<template>
    <div>
        <p class="text-h3">Preferences</p>
        <v-divider class="mt-4 mb-2 mx-2" />
        <div v-if="this.pref.username" class="">
            <div class="d-flex justify-center">
                <img :alt="username" :src="pref.profile_image" class="mx-auto"/>
            </div>
            <p class="text-h4 text-center mb-4">{{ this.pref.username }}</p>
            <div class="d-flex justify-center">
                <v-btn @click="ToggleDialog()" size="small" class="mt-2">Change</v-btn>
            </div>
            <EditPrefDialog
                @ToggleDialog="ToggleDialog"
                :dialog="dialog"
                :img="img"
            />
        </div>

        <div v-else class="d-flex justify-center">
            <v-btn @click="ToggleDialog()">Set Data</v-btn>
            <EditPrefDialog
                @ToggleDialog="ToggleDialog"
                :dialog="dialog"
            />
        </div>
    </div>
</template>

<style>
</style>
