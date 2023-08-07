<script>

export default {
    data(){
        return{
        }
    },
    props: {
        name: String,
        color: String,
    },
}
</script>

<template>
    <v-chip
        :color="color"
        size="small"
        variant="elevated"
        class="text-capitalize ma-1 pill"
    >
        {{ name }}
    </v-chip>
</template>

<style scoped lang="scss">
</style>