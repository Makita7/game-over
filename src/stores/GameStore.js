
import { defineStore } from "pinia";

export const useGameStore = defineStore("GameDetails", {
    state: () => {
        return {
            gameDetail: [],
            currentpage: 'https://api.rawg.io/api/games?key=d151343fa3374641b091728b469565b0',
            username: null,
            profile_image: null,
        };
    },
    actions: {
        SaveGameDetails(data){
            this.gameDetail.push(data);
        },
        SetPage(link){
            this.currentpage = link;
        },
        SetUsername(name){
            this.username = name;
            localStorage.setItem('username', this.username);
        },
        SetprofileImg(img){
            this.profile_image = img;
            localStorage.setItem('profile_image', this.profile_image);
        },
        RenameUser(newUser){
            this.username = newUser;
            localStorage.setItem('username', this.username);
        },
        GetUserData(){
            this.username = localStorage.getItem('username', this.username);
            this.profile_image = localStorage.getItem('profile_image', this.profile_image);
        }
    }
})