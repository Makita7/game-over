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
            // console.log(isSaved)
            return isSaved;
        },
        SaveChanges(list, id, gameName){

            let res = this.MyListsGames.filter(i => i.games.map(g => g.id).includes(Number(id)));

            // for(let i = 0; i < list.length; i++){
            // }

            //TODO: to add if it's already inside games then you do nothing but if it isn't then you add.


            // check if the list
            let AddTo = this.MyListsGames.filter(i => list.includes(i.name));

            // let MustDelete = this.MyListsGames.filter(i => !i.name.includes(list));
            let MustDelete = this.MyListsGames.filter(i => !list.includes(i.name));

            for(let i = 0; i < MustDelete.length; i++){
                const index = this.MyListsGames.indexOf(MustDelete[i]);
                const Gameindex = this.MyListsGames[index].games.map(g => g.id).indexOf(Number(id)); //here is the error it always returns -1 even thought the games are there

                this.MyListsGames[index].games.splice( Gameindex, 1 );
            }

            //TODO: use a map method with splice to find the elements with the id of must delete items



            console.log(MustDelete)
            console.log(this.MyListsGames)

        }
    }
})