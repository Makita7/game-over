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
            }
        },
        components: {
            EditPrefDialog
        },
        mounted() {
            window.scroll({ top: 0})
            if(this.pref.username !== null){
                this.username = this.pref.username,
                this.img = `../assets/avatars/avatars_${this.pref.profileimage}.png`
            }
        },
        methods: {
            ToggleDialog(){
                this.dialog = !this.dialog
            }
        }
    }

</script>

<template>
    <div>
        <p class="text-h3">Preferences</p>
        <v-divider class="mt-4 mb-2 mx-2" />
        <div v-if="username" class="d-flex justify-center">
            <img :alt="username" :src="img"/>
            <p>{{ username }}</p>
            <v-btn @click="ToggleDialog()">Change</v-btn>
            <EditPrefDialog
                @ToggleDialog="ToggleDialog"
                :dialog="dialog"
                :img="img"
                :user="username"
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
