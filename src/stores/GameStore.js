
import { defineStore } from "pinia";

export const useGameStore = defineStore("GameDetails", {
    state: () => {
        return {
            gameDetail: []
        };
    },
    actions: {
        SaveGameDetails(data){
            this.gameDetail.push(data)
        }
    }
})