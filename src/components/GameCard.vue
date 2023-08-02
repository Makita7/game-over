<script setup>
</script>

<template>
    <div class="card mb-6">
        <div class="mt-2 mr-3 align-last">
            <v-icon icon="mdi-close-circle" size="large" />
            <v-icon icon="mdi-plus-circle" size="large" />
        </div>

        <div style="width:25rem; height:197px; background-color: grey; border-radius:10px;" class="mr-auto ml-auto mt-2">
            hi

        </div>
        <div class="d-flex">
            <v-col class="wrap">
                <v-chip color="genre" size="small" variant="elevated" class="text-capitalize ma-1 pill">Genre</v-chip>
                <v-chip color="genre" size="small" variant="elevated" class="text-capitalize ma-1 pill">Genre</v-chip>
                <v-chip color="genre" size="small" variant="elevated" class="text-capitalize ma-1 pill">Genre</v-chip>

            </v-col>
            <v-col class="wrap align-last" >
                <div>
                    <v-chip variant="elevated" size="small" color="platform" class="text-capitalize ma-1 pill">Platform</v-chip>

                </div>
                <div class="mt-1">
                    <v-chip variant="elevated" size="small" color="tag" class="text-capitalize ma-1 pill">Tags</v-chip>

                </div>

            </v-col>
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
        z-index: -3;
        position: relative;
        .wrap{
            flex-wrap: wrap;
        }
        .align-last{
            text-align-last: right;
        }
        .pill{
            font-weight: 700;
            letter-spacing: 1.2px;
        }
    }
</style>