<script>

export default {
    data(){
        return{

        }
    },
    props: {
        name: String,
        img: String,
    }
}

</script>

<template>
    <div class="card ma-1">
        <p>{{ name }}</p>
        <v-img :src="img" :alt="name" />
    </div>
</template>

<style lang="scss" scoped>
    .card{
        border: solid 2px #383A79;
        background-color: #181144;
        border-radius: 15px;
        width: 28rem;
        min-height: 20rem;
    }
</style>