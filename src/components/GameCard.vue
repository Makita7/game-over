<script>
import PillComp from './PillComp.vue';
import { useGameStore } from '../stores/GameStore';
import { MyGamesStore } from '../stores/MyGamesStore';
import SeeMoreDetailBtn from './SeeMoreDetailBtn.vue';

//TODO: onwed will be an array of objects, I will add the games into it and on mount I have to check if the game is saved as owned or not

    export default {
        data(){
            return{
                gamestore: useGameStore(),
                listStore: MyGamesStore(),
                lists: null,
                owned: null,
            }
        },
        props: {
            id: Number,
            img: String,
            tags: Array,
            platforms: Array,
            genres: Array,
            title: String,
            data: Object,
        },
        components:{
            PillComp,
            SeeMoreDetailBtn,
        },
        methods: {
            SetInfo(){
                this.gamestore.SaveGameDetails(this.data);
            },
            Toggle(){
                this.listStore.TogglingOwned(
                    this.id,
                    this.title,
                    this.img,
                    this.data,
                )
            }
        },
        mounted(){
            this.lists = this.listStore.CheckGameInList(this.id);
            this.owned = this.listStore.checkOwned(this.id)
        },
        watch: {
            listStore: {
                handler(){
                    this.owned = this.listStore.checkOwned(this.id);
                },
                deep: true,
            }
        }
    }
</script>

<template>
    <div class="  fadingIn ms-1 mb-6 ">
        <div class="card">
            <div class="mt-2 mr-3 align-last pl-2">
                <!-- TODO: this isn't working... why? -->
                <div class="ml-3 d-flex" style="align-items: center;" v-if="lists">
                    <p class="mr-2"><i>Saved to:</i></p>
                    <div class="d-flex mt-1">
                        <div class="label mr-2" v-for="l in lists" :key="l.id">
                            <p class="text-capitalize font-italic">{{ l.name }}</p>
                        </div>
                    </div>
                </div>
                <div class="d-flex ml-3" style="align-items: center;" v-else>
                    <div class="label mr-2">
                        <p class="text-capitalize font-italic">Not saved to any Lists</p>
                    </div>
                </div>
                <v-spacer/>


                <div
                    @click="Toggle()"
                    class="d-flex pointer mr-4 justify-end"
                    style="align-items: center; height: 48px;"
                    v-if="owned"
                >
                    <p class="text-uppercase mr-0">owned</p>
                    <v-icon class="ml-4">mdi-check-circle</v-icon>
                </div>


                <div
                    @click="Toggle()"
                    class="d-flex pointer justify-end"
                    style="align-items: center;"
                    v-else
                >
                    <p class="text-uppercase mr-0">not owned</p>
                    <v-btn variant="text" class="iconSize" icon="mdi-plus-circle" />
                </div>

            </div>


            <div class="mr-auto ml-auto mt-2 imgContainer">
                <img style="width:100%;" :src="img" :alt="title" />

            </div>
            <div>
                <div class="wrap ml-3 mt-3">
                    <PillComp
                        v-for="g in genres.slice(0,4)"
                        :key="g.id"
                        color="genre"
                        :name="g.name"
                    />
                    <PillComp
                        v-if="genres > 4"
                        color="genre"
                        name="..."
                    />
                </div>

                <v-divider class="mt-2 mb-2"/>

                <div class="wrap ml-3" >
                    <PillComp
                        v-for="p in platforms.slice(0,4)"
                        :key="p.platform.id"
                        color="platform"
                        :name="p.platform.name"
                    />
                    <PillComp
                        v-if="platforms > 4"
                        color="platform"
                        name="..."
                    />

                </div>

                <v-divider class="mt-2 mb-2"/>

                <div class="wrap mt-1 ml-3 mb-3" >
                    <PillComp
                        v-for="t in tags.slice(0,3)"
                        :key="t.id"
                        color="tag"
                        :name="t.name"
                    />
                    <PillComp
                        v-if="tags.length > 3"
                        color="tag"
                        name="..."
                    />

                </div>
            </div>

            <SeeMoreDetailBtn :id="id" :data="data"/>

        </div>
    </div>
</template>

<style scoped lang="scss">
    .card{
        border: solid 2px #383A79;
        background-color: #181144;
        border-radius: 15px;
        width: 28rem;
        min-height: 20rem;
        .wrap{
            flex-wrap: wrap;
        }
        .align-last{
            display: flex;
            justify-content: flex-end;
        }
        .label{
            color: #370D0D;
            background-color: #E5E0EF;
            padding: 2px 16px;
            border-radius: 10px;
            margin: 0;
            font-size: 0.8rem;
            margin-top: auto;
            margin-bottom: auto;
            font-weight: 500;
        }

        .v-btn--icon.v-btn--size-default {
            --v-btn-size: 1.2rem;
        }
        .imgContainer{
            width:25rem;
            height:197px;
            background-color: grey;
            border-radius:10px;
            overflow: hidden;
        }
        .iconSize{
            font-size: 1rem;
        }
        .fadingIn{
            animation: fadeIn;
            transition: opacity 5s ease-in;
            -webkit-animation: fadeIn 5s  ease-in;
            -moz-animation: fadeIn 5s  ease-in;
            -ms-animation: fadeIn 5s  ease-in;
            -o-animation: fadeIn 5s  ease-in;
            opacity: 0;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        .pointer{
            cursor: pointer;
        }
    }
</style>