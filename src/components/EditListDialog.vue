
<script>
import { MyGamesStore } from '../stores/MyGamesStore';

    export default {
        data(){
            return{
                listStore: MyGamesStore(),
                NewListName: null,
                editName: false,
                clear: false,
                clearSave: false,
                clearing: false,
            }
        },
        props: {
            editDialog: Boolean,
            listName: String,
            id: String,
        },
        methods:{
            DeleteList(){
                this.clear = false;
                this.clearSave = true;
                this.clearing = true;

                setTimeout(() => {
                    this.clearing = false;
                }, 1000)
            },
            saveNewList(){
                this.editName = false;
            },
            Save(){
                let rename = false;
                if(this.NewListName !== null && this.NewListName !== this.listName){
                    rename = true
                }

                this.listStore.ListEdit(this.id, rename, this.clearSave, this.NewListName,)
                setTimeout(() => {
                    this.$emit('ToggleEdit');
                }, 500)
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
                <div class="d-flex mt-4" v-if="editName">
                    <v-text-field
                        class="mr-4"
                        label="New List"
                        type="input"
                        v-model="NewListName"
                        @keydown.enter="saveNewList()"
                    />
                    <v-btn
                        icon="mdi-close"
                        class="mr-2 mt-1"
                        @click="editName=false"
                        fab
                    />
                </div>

                <div class="d-flex mb-2 mt-4 listName" v-else @click="editName=true">
                    <p class="text-h6 ma-4" v-if="NewListName">{{ NewListName }}</p>
                    <p class="text-h6 ma-4" v-else>{{ listName }}</p>
                </div>

                <v-divider class="mt-2 mb-8"/>

                <div class="d-flex justify-center" v-if="!clear && !clearing" @click="clear=true">
                    <v-btn size="large" class="clear elevation-0">Clear All Games?</v-btn>
                </div>

                <div class="mt-4" v-if="clear">
                    <div class="sad">
                        <p class="text mt-8 text-h5 text-uppercase font-bold">Are you sure?</p>
                        <img src="https://media2.giphy.com/media/7SF5scGB2AFrgsXP63/giphy.gif" alt="sad pikachu gif">
                    </div>
                    <div class="sad mt-2">
                        <v-btn class="clear" @click="DeleteList()">Yes</v-btn>
                        <v-btn class="clear" @click="clear=false">No</v-btn>
                    </div>
                </div>

                <div class="mt-4 sad" v-if="clearing">
                    <img src="https://media.tenor.com/-TqZlozEieYAAAAC/pikachu-sad.gif" alt="sad pikachu gif">
                </div>

            </v-card-text>
            <v-card-actions class="justify-center mb-2 mt-4">
                <v-btn color="primary" @click="$emit('ToggleEdit')" class="mr-4">Close Dialog</v-btn>
                <v-btn @click="Save()" class="ml-4">Save</v-btn>
            </v-card-actions>
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
</style>
