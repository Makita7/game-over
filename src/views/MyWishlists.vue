
<script>
    import { MyGamesStore } from '../stores/MyGamesStore';

    export default {
        data(){
            return{
                listStore: MyGamesStore(),
            }
        }
    }
</script>



<template>
    <div>
        <h1>wishlists</h1>
        {{ listStore.MyListsGames }}
    </div>
</template>

<style>
</style>
