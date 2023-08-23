<script>
import PillComp from '../components/PillComp.vue';
import PRCard from '../components/PlatformRequirementCard.vue';
import { useGameStore } from '../stores/GameStore';
import { MyGamesStore } from '../stores/MyGamesStore';
import { OrbitSpinner } from 'epic-spinners';
import GameListDialog from '../components/GameListDialog.vue';

export default{
    data(){
        return{
            store: useGameStore(),
            data: [],
            image: '',
            platformReq: [],
            loading: true,
            dialog: false,
            listStore: MyGamesStore(),
            list: false,
            listItems: [],
            owned: null,
            input: '',
            dialogList: false,
            id: this.$route.params.id,
        }
    },
    components: {
        PillComp,
        PRCard,
        OrbitSpinner,
        GameListDialog,
    },
    methods: {
        GetData(){
            this.data = JSON.parse( localStorage.getItem('cardDetail') );
            this.GetPlatformReq();
        },
        OpenDialog(img){
            this.image = img;
            this.dialog = true;
        },
        GetPlatformReq(){
            this.platformReq = this.data[0].platforms.filter(i => i.requirements_en !== null);
        },
        ToggleList(){
            this.dialogList = !this.dialogList
        },
        GetLists(){
            this.listItems = this.listStore.CheckGameInList(this.id);
            if( this.listItems.length > 0 ){
                this.list = true
            }
        },
        Toggle(){
            this.listStore.TogglingOwned(
                this.id,
                this.data[0].name,
                this.data[0].background_image,
                this.data[0],
            )
        },
    },
    mounted() {
        window.scroll({ top: 0})
        this.data = this.store.gameDetail.filter(i => i.id == this.$route.params.id);
        this.owned = this.listStore.checkOwned(this.id)
        setTimeout(() => {
            this.GetPlatformReq();
            this.GetLists();
            this.loading = false;
        }, 2000)
    },
    watch: {
        listStore: {
            handler(){
                this.GetLists();
            },
            deep: true,
        }
    }
}
</script>

<template>
    <div class="filter" v-if="loading">
        <OrbitSpinner
            :animation-duration="1200"
            :size="55"
            color="#ffffff"
            class="mt-4 ml-auto mr-auto "
        />
    </div>

    <div class="details" v-else>
        <div class="d-flex mb-2 middle">
            <p class="text-h3">{{ data[0].name }}</p>
            <v-spacer/>
            <p class="text-subtitle-1 mr-2">Rating: </p>
            <v-chip class="pill">{{ data[0].rating }}</v-chip>
        </div>
        <div class="d-flex middle">
            <v-col>
                <v-img :src="data[0].background_image" class="img"/>
            </v-col>
            <v-col class="wrap">
                <div class="d-flex between mb-2" style="align-items: center;">
                    <div class="d-flex">
                        <div class="d-flex" v-if="list">
                            <p class="text-overline ml-2 mr-2">Lists:</p>
                            <v-chip
                                class="pill text-capitalize mr-2"
                                @click="ToggleList()"
                                v-for="l in listItems"
                                :key="l.id"
                            >
                                {{ l.name }}
                            </v-chip>
                            <GameListDialog @toggle-list="ToggleList" :dialogList="dialogList" :gameName="data[0].name" :data="data[0]" />
                        </div>
                        <div>
                            <v-chip
                                class="pill text-capitalize mr-2"
                                @click="ToggleList()"
                            >
                                <v-icon icon="mdi-plus"/>
                                <GameListDialog @toggle-list="ToggleList" :dialogList="dialogList" :gameName="data[0].name" :data="data[0]" />
                            </v-chip>
                        </div>
                    </div>


                    <!-- <div v-if="owned" class="d-flex">
                        <p class="text-uppercase">owned</p>
                        <v-icon class="ml-2">mdi-check-circle</v-icon>
                    </div> -->

                    <!-- TODO: toggle not working here -->

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
                <div class="">
                    <p class="text-overline ml-2">Genre</p>
                    <PillComp
                        v-for="g in data[0].genres"
                        :key="g.id"
                        color="genre"
                        :name="g.name"
                    />
                </div>
                <v-divider class="mt-2 mb-2"/>
                <div class="">
                    <p class="text-overline ml-2">Tags</p>
                    <PillComp
                        v-for="t in data[0].tags"
                        :key="t.id"
                        color="tag"
                        :name="t.name"
                    />
                </div>
                <v-divider class="mt-2 mb-2"/>
                <div class="">
                    <p class="text-overline ml-2">Platforms</p>
                    <PillComp
                        v-for="p in data[0].platforms"
                        :key="p.platform.id"
                        color="platform"
                        :name="p.platform.name"
                    />
                </div>
            </v-col>
        </div>
        <v-divider class="mt-4 mb-4"/>

        <div class="d-flex middle between">
            <div class="d-flex">
                <p class="text-subtitle-1 mr-2">Playtime: </p>
                <v-chip class="pill">{{ data[0].playtime }} hours</v-chip>
            </div>
            <div class="d-flex">
                <p class="text-subtitle-1 mr-2">Reviews: </p>
                <v-chip class="pill">{{ data[0].ratings_count }}</v-chip>
            </div>
            <div class="d-flex">
                <p class="text-subtitle-1 mr-2">Release Date: </p>
                <v-chip class="pill">{{ data[0].released }}</v-chip>
            </div>
            <div class="d-flex">
                <p class="text-subtitle-1 mr-2">ESRB Rating: </p>
                <v-chip class="pill">{{ data[0].esrb_rating.name }}</v-chip>
            </div>
        </div>

        <v-divider class="mt-4 mb-4"/>

        <div class="d-flex wrap around">
            <PRCard
                v-for="r in platformReq"
                :key="r.id"
                :name="r.platform.name"
                :id="r.platform.id"
                :req="r.requirements_en.minimum"
            />
        </div>


        <v-divider class="mt-4 mb-4"/>
        <div>
            <p class="text-subtitle-1 text-uppercase">screenshots:</p>
            <div class="d-flex wrap around">
                <img
                    class="screenshots ma-2"
                    v-for="i in data[0].short_screenshots"
                    :key="i.id"
                    :src="i.image"
                    @click="OpenDialog(i.image)"
                />

                <v-dialog
                    v-model="dialog"
                    width="auto"
                >
                    <v-card width="60rem" style="border-radius: 20px;">
                        <v-img :src="image" alt="big screenthot"/>
                    </v-card>
                </v-dialog>
            </div>
        </div>
    </div>

    <div v-if="!data"> Sorry an error has ocurred, No data Available </div>
</template>


<style scoped lang="scss">
.details{
    .middle{
        display: flex !important;
        align-items: center;
    }
    .img{
        border-radius: 1rem !important;
    }
    .wrap{
        flex-wrap: wrap !important;
    }
    .around{
        justify-content: space-around;
    }
    .between{
        justify-content: space-between;
    }
    .screenshots{
        width: 400px;
    }
}
img{
    border-radius: 10px;
}
</style>