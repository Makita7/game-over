<script>
    import GameCard from '../components/GameCard.vue';
    // import axios from 'axios';

    export default{
        data(){
            return{
                link: 'https://api.rawg.io/api/games',
            }
        },
        components:{
            GameCard
        }
    }

</script>

<template>
    <div class="d-flex justify-space-around wrap">
        <GameCard/>
        <GameCard/>
        <GameCard/>
        <GameCard/>
        <GameCard/>
    </div>
</template>

<style>
</style>
