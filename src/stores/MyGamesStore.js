import { defineStore } from "pinia";

/*  TODO: I have to save the owned and MyListsGames so that they aren't lost on refresh - Maybe localStorage
    I have to check why the select list is not getting the data when using checklist
*/


export const MyGamesStore = defineStore("MyGames", {
    state: () => {
        return {
            myLists:[],
            MyListsGames: [],
            Owned: [],
            e: null,
        }
    },
    actions: {
        AddNewList(name, id, gameName, data){
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
                            data: data
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

            localStorage.setItem('myLists', JSON.stringify(this.myLists));
            localStorage.setItem('MyListsGames', JSON.stringify(this.MyListsGames));

        },
        CheckGameInList(id){
            let isSaved = this.MyListsGames.filter(i => i.games.map(g => g.id).includes(Number(id)))
            return isSaved;
        },
        SaveChanges(list, id, gameName, data){

            let AddTo = this.MyListsGames.filter(i => list.includes(i.name));

            for(let i = 0; i < AddTo.length; i++){
                const index = this.MyListsGames.indexOf(AddTo[i]);
                if(index !== -1){
                    const GameIndex = this.MyListsGames[index].games.map( g => g.id).indexOf(Number(id));

                    if(GameIndex === -1){
                        this.MyListsGames[index].games.push({
                            id: Number(id),
                            name: gameName,
                            data: data,
                        });
                    }
                }
            }


            let MustDelete = this.MyListsGames.filter(i => !list.includes(i.name));

            for(let i = 0; i <= MustDelete.length; i++){
                const index = this.MyListsGames.indexOf(MustDelete[i]);
                if(index !== -1){
                    const Gameindex = this.MyListsGames[index].games.map(g => g.id).indexOf(Number(id));

                    if( Gameindex !== -1 ){
                        this.MyListsGames[index].games.splice( Gameindex, 1 );
                    }
                }
            }

            localStorage.setItem('MyListsGames', JSON.stringify(this.MyListsGames));

        },
        TogglingOwned(id, gameName, img, data){
            const isOwned = this.Owned.map(i => i.id).includes(id);

            if(isOwned === false){
                this.Owned.push({
                    id: Number(id),
                    name: gameName,
                    img: img,
                    data: data,
                })
            }else{
                const index = this.Owned.map(i => i.id).indexOf(id);
                this.Owned.splice(index, 1);
            }

            localStorage.setItem('Owned', JSON.stringify(this.Owned));

        },
        checkOwned(id){
            const nId = Number(id)
            const isOwned = this.Owned.map(i => i.id).includes(nId);
            return isOwned
        },
        DeletingGameList(listId, id){

            let index = null;

            const step1 = this.MyListsGames.map(l => l.id.indexOf(listId))
            index = step1.filter( i => i >= 0 )

            const Gameindex = this.MyListsGames[index].games.map(g => g.id).indexOf(Number(id));

            this.MyListsGames[index].games.splice( Gameindex, 1 );

            localStorage.setItem('MyListsGames', JSON.stringify(this.MyListsGames));
        },
        // LISTS METHODS:
        ListEditName(id, rename, newName){
            const exists = this.MyListsGames.map(l => l.id).includes(id)

            if(exists !== -1){
                for(let i = 0; i < this.MyListsGames.length; i++){
                    if(rename === true){
                        if(this.MyListsGames[i].id == id){
                            this.MyListsGames[i].name = newName;
                        }
                    }
                }

                localStorage.setItem('MyListsGames', JSON.stringify(this.MyListsGames));
            }
        },
        ClearListGames(id, clear){
            const exists = this.MyListsGames.map(l => l.id).includes(id)

            if(exists !== -1){
                for(let i = 0; i < this.MyListsGames.length; i++){
                    if(clear === true){
                        if(this.MyListsGames[i].id == id){
                            this.MyListsGames[i].games = []
                        }
                    }
                }

                localStorage.setItem('MyListsGames', JSON.stringify(this.MyListsGames));
            }

        }
    }
})