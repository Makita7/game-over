
<script>

export default {
    data(){
        return{
        }
    },
    props: {
        dialogList: Boolean,
    }
}

</script>

<template>
    <v-dialog
        v-if="dialogList"
        activator="parent"
        width="auto"
    >
        <v-card>
            <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" block @click="$emit('ToggleList')">Close Dialog</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style scoped lang="scss">

</style>