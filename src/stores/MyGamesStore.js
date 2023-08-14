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
        AddNewList(name, id, gameName){
            let CAP = ''
            const NewListID = "id" + Math.random().toString(16).slice(2)

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
                        id: NewListID,
                        name: CAP,
                        games: [{
                            id: Number(id),
                            name: gameName,
                        }]
                    }
                );
            } else {
                this.e = {
                    bool: true,
                    message: 'List name already exists'
                };
                setTimeout(() => {
                    this.e = null;
                }, 3000)
            }

        },
        CheckGameInList(id){
            let isSaved = this.MyListsGames.filter(i => i.games.map(g => g.id).includes(Number(id)))
            console.log(isSaved)
            return isSaved;
        },
        SaveChanges(list, id, gameName){
            console.log('save?')
            let res = null;

            for(let i = 0; i < list.length; i++){
                res = list[i].filter(i => i.games.map(g => g.id).includes(id));
            }
            console.log(res)

            console.log(`saved ${gameName}, ${id}`)

        }
    }
})