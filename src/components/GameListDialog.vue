
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
        gameName: String,
    },
    methods:{
        saveNewList(){
            this.MyGames.AddNewList(this.newListName, this.id, this.gameName);
            this.CheckLists();
            this.newListName = '';
        },
        CheckLists(){
            this.savedLists = this.MyGames.CheckGameInList(this.id)
            this.savedLists = this.savedLists.map(i => i.name)
        },
        async Save(){
            await this.MyGames.SaveChanges(this.savedLists, this.id, this.gameName);
            await this.$emit('ToggleList');
        },

    },
    mounted(){
        this.CheckLists();
    },
    watch: {
        MyGames: {
            handler(oldData, newData){
                this.CheckLists();
            },
            deep: true,
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
                <div class="d-flex mt-4">
                    <v-text-field
                        class="mr-4"
                        label="New List"
                        type="input"
                        v-model="newListName"
                        @keydown.enter="saveNewList()"
                        :hint="!MyGames.e ? `Must be at least 4 characters long` : MyGames.e"
                        :error="MyGames.e?.bool"
                        :error-messages="MyGames.e?.message"
                    />
                    <v-btn
                        icon="mdi-plus"
                        class="mr-2 mt-1"
                        @click="saveNewList()"
                        fab
                    />
                </div>
                <v-divider class="mt-2 mb-8"/>
                <div v-if="MyGames.myLists.length != 0">
                    <v-select
                        v-model="savedLists"
                        :items="MyGames.myLists"
                        item-title="name"
                        item-value="name"
                        label="Game Lists"
                        variant="outlined"
                        multiple
                        class="text-capitalize mt-2"
                    />
                </div>
            </v-card-text>
            <v-card-actions class="justify-center mb-4">
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
