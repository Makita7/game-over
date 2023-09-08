
<script>
import { useGameStore } from '../stores/GameStore';

export default {
    data(){
        return{
            pref: useGameStore(),
            newUsername: null,
        }
    },
    props: {
        user: String,
        img: String,
        dialog: Boolean,
    }
}

</script>


<template>
    <v-dialog
        v-if="dialog"
        activator="parent"
        width="50rem"
    >
        <v-card>
            <v-card-text>
                <div class="d-flex mt-4">
                    <v-text-field
                        class="mr-4"
                        label="New List"
                        type="input"
                        v-model="newUsername"
                        @keydown.enter="saveNewList()"
                        :hint="`Must be at least 4 characters long`"
                    />
                    <v-btn
                        icon="mdi-close"
                        class="mr-2 mt-1"
                        @click="saveNewList()"
                        fab
                    />
                    <v-btn
                        icon="mdi-check"
                        class="mr-2 mt-1"
                        @click="saveNewList()"
                        fab
                    />
                </div>
                <v-divider class="mt-2 mb-8"/>
                <p class="text-center text-h6">Choose Avatar</p>
                <div class="d-flex justify-space-between" style="flex-wrap: wrap;">
                    <div  v-for="i in 12" :key="i.index">
                        {{ i }}
                        <img class="ma-4" :alt="`avatar image ${i}`" :src='"../assets/avatars/avatars_"+i+".png"' />
                    </div>
                </div>
            </v-card-text>
            <v-card-actions class="justify-center mb-4">
                <v-btn color="primary" @click="$emit('ToggleDialog')" class="mr-4">Close</v-btn>
                <v-btn @click="Save()" class="ml-4">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>


<style scoped lang="scss">
</style>