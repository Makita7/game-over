<script>

    export default {
        data(){
            return{
            }
        },
        props: {
            id: Number,
            img: String,
            tags: Array,
            platforms: Array,
            genres: Array,
            title: String,
        },
        components:{
        }
    }
</script>

<template>
    <div class="card mb-6 fadingIn ms-1">
        <div class="mt-2 mr-3 align-last pl-2">
            <div class="label ml-3">
                <p class="text-capitalize font-italic">saved to List_Name</p>
            </div>
            <v-spacer/>
            <!-- <v-btn variant="text" class="iconSize" icon="mdi-close-circle" /> -->
            <v-btn variant="text" class="iconSize" icon="mdi-plus-circle" />
        </div>

        <div class="mr-auto ml-auto mt-2 imgContainer">
            <img style="width:100%;" :src="img" :alt="title" />

        </div>
        <div>
            <div class="wrap ml-3 mt-3">
                <v-chip
                    v-for="g in genres.slice(0,4)"
                    :key="g.id"
                    color="genre"
                    size="small"
                    variant="elevated"
                    class="text-capitalize ma-1 pill"
                >
                    {{ g.name }}
                </v-chip>
                <v-chip
                    v-if="genres > 4"
                    variant="elevated"
                    size="small"
                    color="platform"
                    class="text-capitalize ma-1 pill"
                >
                    ...
                </v-chip>
            </div>

            <v-divider class="mt-2 mb-2"/>

            <div class="wrap ml-3" >
                <v-chip
                    v-for="p in platforms.slice(0,4)"
                    :key="p.platform.id"
                    variant="elevated"
                    size="small"
                    color="platform"
                    class="text-capitalize ma-1 pill"
                >
                    {{ p.platform.name }}
                </v-chip>
                <v-chip
                    v-if="platforms > 4"
                    variant="elevated"
                    size="small"
                    color="platform"
                    class="text-capitalize ma-1 pill"
                >
                    ...
                </v-chip>

            </div>

            <v-divider class="mt-2 mb-2"/>

            <div class="wrap mt-1 ml-3 mb-3" >
                <v-chip
                    v-for="t in tags.slice(0,3)"
                    :key="t.id"
                    variant="elevated"
                    size="small"
                    color="tag"
                    class="text-capitalize ma-1 pill"
                >
                    {{ t.name }}
                </v-chip>
                <v-chip
                    v-if="tags.length > 3"
                    variant="elevated"
                    size="small"
                    color="tag"
                    class="text-capitalize ma-1 pill"
                >
                    ...
                </v-chip>

            </div>
        </div>
    </div>
        <RouterLink :to="`/detail/${id}`">Link</RouterLink>
</template>

<style scoped lang="scss">
    .card{
        border: solid 2px #383A79;
        background-color: #181144;
        border-radius: 15px;
        width: 28rem;
        min-height: 20rem;
        z-index: -3;
        position: relative;
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
            font-size: 1.3rem;
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

    }
</style>