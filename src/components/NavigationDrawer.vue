<script>
    import { useGameStore } from '../stores/GameStore';
    import IMG1 from '../assets/avatars/avatars_1.png';

    export default {
        data () {
            return {
                drawer: true,
                rail: true,
                pref: useGameStore,
                img: null,
                username: null,
                IMG1:IMG1,
            }
        },
        props:{
            profile_image: String,
            user: String,

        },
        methods: {
        },
        watch: {
            pref: {
                handler(){
                }
            }
        },
        mounted(){
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
                v-if="user"
                :prepend-avatar="profile_image"
                :title="user"
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
                :prepend-avatar="IMG1"
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