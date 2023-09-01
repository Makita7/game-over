
<script>
import { useGameStore } from '../stores/GameStore';

    export default {
        data(){
            return{
                gamestore: useGameStore(),
            }
        },
        props: {
            id: Number,
            data: Object,
        },
        methods: {
            SetInfo(){
                this.gamestore.SaveGameDetails(this.data);
            },
        },
    }
</script>


<template>
    <div class="ma-2 d-flex" style="justify-content: space-evenly;">
        <RouterLink :to="`/detail/${id}`" @click="SetInfo()" class="d-flex justify-end mt-1" style="text-decoration: none !important;">
            Details
            <v-icon aria-hidden="false" class="ml-2">
                mdi-eye
            </v-icon>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>

</style>