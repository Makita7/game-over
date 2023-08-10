import { defineStore } from "pinia";

export const MyGamesStore = defineStore("MyGames", {
    state: () => {
        return {
            myGames: [],
            myLists:[],
            MyListsGames: [],
            Owned: [],
            e: null,
        }
    },
    actions: {
        idExists(id){
            return this.MyListsGames.some(i => i.some(j => j == id))
        },
        SaveGame(game){
            this.myGames.push(game);
        },
        RemoveGame(game){
            this.myGames.filter(i => i.id !=game.id);
        },
        AddNewList(name, id){
            let CAP = ''

            function Capitalize(){
                CAP = name.trim().split(' ')

                for(let i = 0; i < CAP.length; i++){
                    let word = CAP[i].slice(1);
                    CAP[i] = CAP[i][0].toUpperCase() + word
                }

                CAP = CAP.join(' ');
            }

            Capitalize();

            const alreadyList = this.MyListsGames.some(i => i.name == CAP)

            if(!alreadyList){
                this.myLists.push(CAP);
                this.MyListsGames.push(
                    {
                        name: CAP,
                        games: [ Number(id) ]
                    }
                );
            } else {
                this.e = 'List name already exists';
                setTimeout(() => {
                    this.e = null;
                }, 3000)
            }

        },
        AddToList(game, list){
            const Index = this.myLists.findIndex(list);
            this.myLists[Index].push(game);
        },
        CheckGameInList(id){
            const isSaved = this.MyListsGames.filter(i => i.games.id == id)
            return isSaved;
        },
        SaveChanges(list, id){
            for(let i = 0; i < this.myLists.length; i++){
                console.log(this.MyListsGames[i].games.length)
                for(let j = 0; j < list.length; j++){
                    if(this.MyListsGames[i].name == list[j]){
                        if(this.MyListsGames[i].games != id){
                            this.MyListsGames[i].games.push(Number(id))
                        }
                    }
                }
            }

        }
    }
})