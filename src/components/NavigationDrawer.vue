<script>
    export default {
        data () {
            return {
                drawer: true,
                rail: true,
            }
        },
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
                prepend-avatar="https://i.pinimg.com/564x/65/3b/52/653b529d011d70aa018179c25c89072a.jpg"
                title="Username"
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