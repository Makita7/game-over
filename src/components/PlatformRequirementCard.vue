<script>

export default {
    data(){
        return{
            newReq: `"${this.req}"`
        }
    },
    props: {
        name: String,
        id: Number,
        req: String,
    },
}

</script>

<template>
    <div class="card ma-1 pa-2 mb-5">
        <p class="text-h5 text-center mt-4 mb-4">{{ name }}</p>
        <p v-html="req" class="cont"></p>
    </div>
</template>

<style lang="scss" scoped>
    .card{
        border: solid 2px #383A79;
        background-color: #181144;
        border-radius: 15px;
        width: 30rem;
        min-height: 20rem;
    }
    .cont {
        margin-left: 2rem;
        margin-right: 2rem;
        margin-bottom: 2rem;
    }
</style>