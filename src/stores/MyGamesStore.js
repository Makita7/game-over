import { defineStore } from "pinia";

/*  TODO: I have to save the owned and MyListsGames so that they aren't lost on refresh - Maybe localStorage
    I have to check why the select list is not getting the data when using checklist
*/


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
            // console.log(isSaved)
            return isSaved;
        },
        SaveChanges(list, id, gameName){

            let AddTo = this.MyListsGames.filter(i => list.includes(i.name));

            for(let i = 0; i < AddTo.length; i++){
                const index = this.MyListsGames.indexOf(AddTo[i]);
                const GameIndex = this.MyListsGames[index].games.map( g => g.id).indexOf(Number(id));

                if(GameIndex === -1){
                    this.MyListsGames[index].games.push({
                        id: Number(id),
                        name: gameName,
                    });
                }
            }


            let MustDelete = this.MyListsGames.filter(i => !list.includes(i.name));

            for(let i = 0; i < MustDelete.length; i++){
                const index = this.MyListsGames.indexOf(MustDelete[i]);
                const Gameindex = this.MyListsGames[index].games.map(g => g.id).indexOf(Number(id));

                this.MyListsGames[index].games.splice( Gameindex, 1 );
            }


        }
    }
})