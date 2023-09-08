
<script>
import { MyGamesStore } from '../stores/MyGamesStore';

    export default {
        data(){
            return{
                listStore: MyGamesStore(),
                NewListName: null,
                editName: false,
                clear: false,
                clearing: false,
            }
        },
        props: {
            editDialog: Boolean,
            listName: String,
            id: String,
        },
        methods:{
            ClearList(){
                this.clear = false;
                const clearSave = true;
                this.clearing = true;
                this.listStore.ClearListGames(this.id, clearSave)

                setTimeout(() => {
                    this.clearing = false;
                }, 1000)
            },
            SaveListName(){
                let rename = false;
                if(this.NewListName !== null && this.NewListName !== this.listName){
                    rename = true
                }

                this.listStore.ListEditName(this.id, rename, this.NewListName,)
                this.editName = false;
            },
        },
        mounted(){
        },
    }

</script>

// TODO: I need to pass id to this component so you can select the list in the pinia store and change the name of list or be able to clear the games, then go to the list view and make it watch for changes

<template>
    <v-dialog
        v-if="editDialog"
        activator="parent"
        width="50rem"
    >
        <v-card>
            <v-card-text>
                <div class="d-flex justify-end">
                    <v-btn @click="$emit('ToggleEdit')" class="mr-4" icon="mdi-close" size="small" />
                </div>

                <div class="d-flex" v-if="editName">
                    <v-text-field
                        class="mr-4 "
                        label="New List"
                        type="input"
                        v-model="NewListName"
                        @keydown.enter="SaveListName()"
                    />
                    <v-btn
                        icon="mdi-close"
                        class="mr-2 mt-1"
                        @click="editName=false"
                        fab
                    />
                    <v-btn
                        icon="mdi-check"
                        class="mr-2 mt-1"
                        @click="SaveListName()"
                        fab
                    />
                </div>

                <div class="d-flex mb-4 listName" v-else @click="editName=true">
                    <p class="text-h6 ma-4 text-uppercase" v-if="NewListName">{{ NewListName }}</p>
                    <p class="text-h6 ma-4 text-uppercase" v-else>{{ listName }}</p>
                </div>

                <v-divider class="mt-2 mb-8"/>

                <div class="d-flex justify-center mb-4" v-if="!clear && !clearing" @click="clear=true">
                    <v-btn size="large" class="clear elevation-0">Clear All Games?</v-btn>
                </div>

                <div class="mt-4  mb-4" v-if="clear">
                    <div class="sad">
                        <p class="text mt-8 text-h5 text-uppercase font-bold">Are you sure?</p>
                        <img src="https://media2.giphy.com/media/7SF5scGB2AFrgsXP63/giphy.gif" alt="sad pikachu gif">
                    </div>
                    <div class="sad mt-2">
                        <v-btn class="clear" @click="ClearList()">Yes</v-btn>
                        <v-btn class="clear" @click="clear=false">No</v-btn>
                    </div>
                </div>

                <div class="mt-4 mb-6 sad" v-if="clearing">
                    <img src="https://media.tenor.com/-TqZlozEieYAAAAC/pikachu-sad.gif" alt="sad pikachu gif">
                </div>

            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<style scoped lang="scss">
    .middle{
        align-items: center;
    }
    .listName:hover{
        background-color: rgba(0, 0, 0, 0.255);
        cursor: pointer;
        width: 100%;
        border-radius: 10px;
    }
    .clear{
        background-color: #00000063;
    }
    .clear:hover{
        background-color: #000000a8;
    }

    .sad{
        .text{
            position: absolute;
            text-shadow: #162b1e 0px 0 10px;
            font-weight: bold;
        }
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        position: relative;
        color: white;
        img{
            border-radius: 10px;
        }
    }
    .v-text-field input {
        text-transform: uppercase;
    }
</style>
