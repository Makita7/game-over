
<script>
import { useGameStore } from '../stores/GameStore';

export default {
    data(){
        return{
            pref: useGameStore(),
            newUsername: null,
            editUser: false,
            user: null,
            img: null,
            images: [],
        }
    },
    props: {
        dialog: Boolean,
    },
    methods: {
        resetNewUser(){
            this.newUsername = null;
            setTimeout(() => {
                this.editUser = false;
            },200)
            this.$emit('newUsername');
        },
        SaveUser(){
            this.pref.RenameUser(this.newUsername);
            setTimeout(() => {
                this.editUser = false;
            },300)
        },
        OpenEdit() {
            this.newUsername = this.pref.username
            this.editUser = true;
        },
        MakeImgRoutes(){
            for(let i = 0; i < 12; i++){
                const num = i + 1
                this.images.push( new URL(`../assets/avatars/avatars_${num}.png`, import.meta.url).href);
            }
        },
        SetprofileImg(i){
            this.pref.profile_image = i;
        },
    },
    watch: {
        pref: {
            handler(){
                this.user = this.pref.username
                this.img = this.pref.profile_image
            },
            deep: true,
        },
    },
    mounted() {
        this.MakeImgRoutes();
        this.user = this.pref.username
        if(this.pref.profile_image !== null){
            this.img = this.pref.profile_image;
        }else{
            this.img = '../assets/avatars/avatars_1.png';
        }
    }
}

</script>


<template>
    <v-dialog
        v-if="dialog"
        activator="parent"
        width="65rem"
    >
        <v-card>
            <v-card-text>
                <div class="d-flex">
                    <v-spacer></v-spacer>
                    <v-btn fab icon="mdi-close" @click="$emit('ToggleDialog')"/>
                </div>


                <div v-if="user && !editUser" class="d-flex align-center justify-center" style="margin-top: -1rem;">
                    <p class="mr-4">username:</p>
                    <p class="text-h5">{{ user }}</p>
                    <v-btn icon="mdi-pencil" class="ml-4" fab @click="editUser = true" />
                </div>
                <div v-if="!user && !editUser" class="d-flex align-center justify-center" style="margin-top: -1rem;">
                    <p class="text-h5">No Username Found</p>
                    <v-btn icon="mdi-pencil" class="ml-4" fab @click="editUser = true" />
                </div>
                <div class="d-flex mt-4" v-if="editUser" style="margin-top: -1rem;">
                    <v-text-field
                        class="mr-4"
                        label="New Username"
                        type="input"
                        v-model="newUsername"
                        @keydown.enter="SaveUser(newUsername)"
                        :hint="`Must be at least 4 characters long`"
                    />
                    <v-btn
                        icon="mdi-close"
                        class="mr-2 mt-1"
                        @click="resetNewUser()"
                        fab
                    />
                    <v-btn
                        icon="mdi-check"
                        class="mr-2 mt-1"
                        @click="SaveUser(newUsername)"
                        fab
                    />
                </div>
                <v-divider class="mt-2 mb-8"/>
                <p class="text-center text-h6">Choose Avatar</p>
                <div class="d-flex justify-space-between" style="flex-wrap: wrap;">
                    <img
                        v-for="(i, index) in images"
                        :key="i.index"
                        class="ma-4"
                        style="height: 12rem;"
                        :alt="`avatar image ${index}`"
                        :src="i"
                        @click="SetprofileImg(i)"
                    />
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>


<style scoped lang="scss">
</style>