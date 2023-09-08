
import { defineStore } from "pinia";

export const useGameStore = defineStore("GameDetails", {
    state: () => {
        return {
            gameDetail: [],
            currentpage: 'https://api.rawg.io/api/games?key=d151343fa3374641b091728b469565b0',
            username: null,
            profileimage: null,
        };
    },
    actions: {
        SaveGameDetails(data){
            this.gameDetail.push(data)
        },
        SetPage(link){
            this.currentpage = link
        },
    }
})