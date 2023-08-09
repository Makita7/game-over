import { defineStore } from "pinia";

export const MyGamesStore = defineStore("MyGames", {
    state: () => {
        return {
            myGames: [],
            myLists:[],
            Owned: [],
        }
    },
    actios: {
        SaveGame(game){
            this.myGames.push(game);
        },
        RemoveGame(game){
            this.myGames.filter(i => i.id !=game.id);
        },
        AddNewList(name){
            this.myLists.push(name);
        },
        AddToList(game, list){
            const Index = this.myLists.findIndex(list);
            this.myLists[Index].push(game);
        }
    }
})