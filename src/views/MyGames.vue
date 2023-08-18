
<script>
import SeeMoreDetailBtn from '../components/SeeMoreDetailBtn.vue'
import { MyGamesStore } from '../stores/MyGamesStore'

export default {
    data(){
        return {
            listStore: MyGamesStore(),
        }
    },
    components: {
        SeeMoreDetailBtn
    },
}

</script>

<template>
    <div v-if="listStore.Owned" class="">
        <p class="text-h3 ml-2 mb-1">My Games</p>
        <v-divider class="mt-4 mb-2 mx-2" />

        <div class="d-flex cont">
            <div class="card" v-for="i in listStore.Owned" :key="i.id">
                <div class="d-flex topCard mb-3">
                    <p class="text-h6">{{ i.name }}</p>
                    <v-btn
                        density="comfortable"
                        class=""
                        @click="listStore.TogglingOwned(i.id, i.name, i.img, i.data)"
                        size="small"
                        append-icon="mdi-close"
                    >
                        Remove
                    </v-btn>
                </div>
                <div class="imgCont">
                    <img :alt="i.name" :src="i.img" />
                </div>
                <SeeMoreDetailBtn :id="i.id" :data="i.data"/>
            </div>
        </div>


    </div>
</template>

<style scoped lang="scss">
    .cont{
        flex-wrap: wrap;
    }
    .card{
        width: 22rem;
        padding: 1rem;
        img{
            width: 20rem;
        }
        .imgCont{
            height: 11rem;
            overflow: hidden;
        }
        .topCard{
            align-items: center;
            justify-content: space-between;
        }
    }
</style>
