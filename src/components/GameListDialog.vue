
<script>
import { MyGamesStore } from '../stores/MyGamesStore';

export default {
    data(){
        return{
            MyGames: MyGamesStore(),
            newListName: '',
            savedLists: [],
            id: this.$route.params.id,
        }
    },
    props: {
        dialogList: Boolean,
    },
    methods:{
        saveNewList(){
            this.MyGames.AddNewList(this.newListName, this.id);
            this.CheckLists();
            this.newListName = '';
        },
        CheckLists(){
            this.savedLists = this.MyGames.CheckGameInList(this.id);
        },
        async Save(){
            await this.MyGames.SaveChanges(this.savedLists, this.id);
            await this.$emit('ToggleList');
        },
        something(){
            console.table(this.MyGames.MyListsGames);
            console.table(this.MyGames.MyListsGames.filter(i => i.games.includes(this.id)))
        }
    },
    mounted(){
        this.CheckLists();
    },
    watch: {
        storeSavedLists: function(oldList, newList) {
            if(oldList.value != newList.value){
                this.CheckLists();
                this.something()
            }
        }
    }
}

</script>

<template>
    <v-dialog
        v-if="dialogList"
        activator="parent"
        width="80%"
    >
        <v-card>
            <v-card-text>
                <div v-if="MyGames.myLists.length != 0">
                    <v-select
                        v-model="savedLists"
                        :items="MyGames.myLists"
                        label="Game Lists"
                        variant="outlined"
                        multiple
                        class="text-capitalize mt-2"
                    />
                    saved Lists: {{savedLists}} <br/>
                    store lists: {{ MyGames.myLists }} <br/>
                    store list games: {{ MyGames.MyListsGames }} <br/>
                    {{ MyGames.MyListsGames.filter(i => i.games.includes(id)) }}

                </div>
                <v-divider class="mt-2 mb-2"/>
                <div class="d-flex mt-4">
                    <v-text-field
                        class="mr-4"
                        label="New List"
                        type="input"
                        v-model="newListName"
                        @keydown.enter="saveNewList()"
                        hint="Must be at least 4 characters long"
                    />
                    <v-btn
                        icon="mdi-plus"
                        class="mr-2 mt-1"
                        @click="saveNewList()"
                        fab
                    />
                </div>
            </v-card-text>
            <v-card-actions class="justify-center">
                <v-btn color="primary" @click="$emit('ToggleList')" class="mr-4">Close Dialog</v-btn>
                <v-btn @click="Save()" class="ml-4">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style scoped lang="scss">
.middle{
    align-items: center;
}
</style>