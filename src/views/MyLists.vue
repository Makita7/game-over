
<script>
    import { MyGamesStore } from '../stores/MyGamesStore';
    import SeeMoreDetailBtn from '../components/SeeMoreDetailBtn.vue';
    import EditListDialog from '../components/EditListDialog.vue';

    export default {
        data(){
            return{
                listStore: MyGamesStore(),
                editDialog: false,
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
            ToggleEdit(){
                this.editDialog = !this.editDialog
            },
        },
        components: {
            SeeMoreDetailBtn,
            EditListDialog,
        },
        mounted(){
            window.scroll({ top: 0})
        }
    }
</script>



<template>
    <div class="lists">
        <p class="text-h3">Lists</p>
            <div v-for="l in listStore.MyListsGames" :key="l.id" class="overflow-x-auto">
                <v-divider class="mt-4 mb-4 mx-2" />
                <div class="d-flex justify-space-between">
                    <p class="text-h5 mb-3 mt-2 text-uppercase">{{ l.name }}</p>
                    <v-btn
                        class='elevation-0'
                        text
                        density="comfortable"
                        icon="mdi-pencil"
                        @click="ToggleEdit()"
                    />
                    <EditListDialog @toggle-edit="ToggleEdit" :editDialog="editDialog" :listName="l.name" :id="l.id" />
                </div>

                <div class="d-flex" @mousewheel="scrollX" ref="scroll_container" v-if="l.games.length != 0">
                    <div v-for="g in l.games" :key="g.id" class="ma-2 text-center">
                        <div class="d-flex justify-space-between">
                            <p class="text-h6 mb-2">{{ g.name }}</p>
                            <SeeMoreDetailBtn :id="g.id" :data="g.data"/>
                        </div>

                        <div class="imgCont">
                            <img :alt="g.name" :src="g.data?.background_image"  class=""/>
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

                <div class="text-center mb-6" v-else>
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
        width: 22rem;
        height: 11rem;
        overflow: hidden;
        border-radius: 8px;
        img{
            width: 100%;
            height: auto;
        }
    }
}

</style>

