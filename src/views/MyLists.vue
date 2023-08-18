
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
        <p class="text-h3">Lists</p>
        {{ listStore.MyListsGames }}
    </div>
</template>

<style>
</style>
