
<script>
    import { MyGamesStore } from '../stores/MyGamesStore';

    export default {
        data(){
            return{
                listStore: MyGamesStore(),
            }
        },
        methods:{
            LongList(length){
                if(length > 3){
                    return true
                }
            },
            scrollX(e) {
                this.$refs['scroll_container'].scrollLeft += e.deltaY;
            },
        },
    }
</script>



<template>
    <div class="lists">
        <p class="text-h3">Lists</p>
            <div v-for="l in listStore.MyListsGames" :key="l.id" class="overflow-x-auto">
                <v-divider class="mt-4 mb-2 mx-2" />
                <p class="text-h5 mb-3 mt-2 text-uppercase">{{ l.name }}</p>

                <div class="d-flex" @mousewheel="scrollX" ref="scroll_container" v-if="l.games.length != 0">
                    <div v-for="g in l.games" :key="g.id" class="ma-2 text-center">
                        <p class="text-h6 mb-2">{{ g.name }}</p>

                        <div class="imgCont">
                            <img :alt="g.name" :src="g.data?.background_image"  class="ma-2"/>
                        </div>

                        <v-btn
                            density="comfortable"
                            class="mt-4"
                            @click="listStore.DeletingGameList( l.id, g.id )"
                            size="small"
                            append-icon="mdi-close"
                        >
                            Remove
                        </v-btn>
                    </div>
                </div>

                <div class="text-center mb-4" v-else>
                    <p><i>No Games Saved to this List</i></p>
                </div>

            </div>
    </div>
</template>

<style scoped lang="scss">

.lists{
    .ifimages{
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
    }

    .imgCont{
        width: 25rem;
        height: 20rem;
        overflow: hidden;
        border-radius: 15px;
        display: flex;
        justify-content: space-evenly;
        img{
            height: 20rem;
        }
    }
}

</style>

