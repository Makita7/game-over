
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
            if(localStorage.getItem('username') !== null){
                this.username = localStorage.getItem('username', this.username);
            }
            if(localStorage.getItem('profile_image') !== null){
                this.profile_image = localStorage.getItem('profile_image', this.profile_image);
            }
        }
    }
})