<script>
    import { useGameStore } from '../stores/GameStore';

    export default {
        data () {
            return {
                drawer: true,
                rail: true,
                pref: useGameStore,
                img: null,
                username: null
            }
        },
        methods: {
            GetData(){
                this.username = this.pref.username;
                this.img = `../assets/avatars/avatars_${this.pref.profile_image}.png`;
            }
        },
        watch: {
            pref: {
                handler(){
                    this.username = this.pref.username;
                    this.img = this.pref.profile_image;
                }
            }
        }
    }
</script>

<template>
    <v-card>
        <v-layout>
        <v-navigation-drawer
            v-model="drawer"
            ref="rail"
            :rail="rail"
            permanent
            @click="rail = !rail"
            color="secondary"
        >
            <v-list-item
                v-if="username"
                :prepend-avatar="img || '../assets/avatars/avatars_1.png'"
                :title="username"
                nav
            >
            <template v-slot:append>
                <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
                ></v-btn>
            </template>
            </v-list-item>


            <v-list-item
                v-else
                prepend-avatar="../assets/avatars/avatars_1.png"
                title="No username"
                nav
            >
            <template v-slot:append>
                <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
                ></v-btn>
            </template>
            </v-list-item>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-list-item
                    prepend-icon="mdi-play"
                    title="Main Feed"
                    to="/"
                    value="main"
                />
                <v-list-item
                    prepend-icon="mdi-nintendo-game-boy"
                    title="My Games"
                    value="/games"
                    to="/game"
                />
                <v-list-item
                    prepend-icon="mdi-format-list-bulleted"
                    title="Lists"
                    value="lists"
                    to="/lists"
                />
                <v-list-item
                    prepend-icon="mdi-cog"
                    title="Preferences"
                    value="preferences"
                    to="/preferences"
                />
            </v-list>
        </v-navigation-drawer>
        </v-layout>
    </v-card>
</template>

<style scoped>
.nav{
    background-color: #0D092B;
    color: white;
}
</style>