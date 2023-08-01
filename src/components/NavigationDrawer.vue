<script>

    export default {
        data () {
        return {
            drawer: true,
            rail: true,
        }
        },
        components:{
        }
    }
</script>

<template>
    <v-card>
        <v-layout>
        <v-navigation-drawer
            v-model="drawer"
            :rail="rail"
            permanent
            @click="rail = false"
            color="secondary"
        >
            <v-list-item
                prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
                title="John Leider"
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
                    prepend-icon="mdi-account"
                    title="Main Feed"
                    to="/"
                    value="account"
                />
                <v-list-item
                    prepend-icon="mdi-account"
                    title="My Games"
                    value="account"
                    to="/my_game"
                />
                <v-list-item
                    prepend-icon="mdi-account"
                    title="Wishlist"
                    value="account"
                    to="/wishlist"
                />
                <v-list-item
                    prepend-icon="mdi-account"
                    title="Preferences"
                    value="account"
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