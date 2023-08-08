<script>
    import 'vue'
    import GameCard from '../components/GameCard.vue';
    import { OrbitSpinner } from 'epic-spinners';
    import axios from 'axios';

    export default{
        data(){
            return{
                link: `https://api.rawg.io/api/games?key=d151343fa3374641b091728b469565b0`,
                data: [],
                loading: true,
            }
        },
        props:{
        },
        components:{
            GameCard,
            OrbitSpinner,
        },
        methods: {
            getGames(){
                const res = axios
                    .get(this.link)
                    .then( res => {
                        sessionStorage.setItem('games', JSON.stringify(res.data));
                        return this.data = res.data;
                    })
                    .catch(e => {
                        console.log(e);
                    })
            },
            loadingSpinner(){
                setTimeout(() => {
                    this.loading = false;
                }, 2500);
            },
            getMore(link){
                window.scroll({ top: 0})
                if(link !== null){
                    this.data = null;
                    this.loading = true;
                    const res = axios
                        .get(link)
                        .then( res => {
                            sessionStorage.setItem('games', JSON.stringify(res.data));
                            return this.data = res.data;
                        })
                        .catch(e => {
                            console.log(e)
                        })
                }
                this.loadingSpinner();
            },
        },
        mounted() {
            if(sessionStorage.getItem('games') === true){
                this.data = sessionStorage.getItem('games');
                this.loadingSpinner();
            }else{
                this.getGames();
                this.loadingSpinner();
            }
        },
    }

</script>

<template>
    <div class="filter" v-if="loading">
        <OrbitSpinner
            :animation-duration="1200"
            :size="55"
            color="#ffffff"
            class="mt-4 ml-auto mr-auto "
        />
    </div>
    <div class="d-flex justify-space-around wrap fadeIn" v-if="!loading">
        <GameCard
            v-for="i in data.results"
            :key="i.id"

            :id="i.id"
            :img="i.background_image"
            :genres="i.genres"
            :tags="i.tags"
            :platforms="i.platforms"
            :title="i.name"

            :data="i"
        />
    </div>
    <v-row class="justify-space-between ml-1 mr-1 pt-1 mb-2" v-if="!loading">
        <v-btn @click="getMore(data.previous)" >Prev</v-btn>
        <v-btn @click="getMore(data.next)" >Next</v-btn>
    </v-row>

    <div v-if="!data">No data</div>
</template>

<style scoped>
    .filter{
        background-color: rgba(6, 4, 38, 0.406);
        height: 100vh;
        widows: 100vh;
        z-index: +100;
        position: relative;
    }
</style>
