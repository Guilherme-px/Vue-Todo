<template>
    <div>
        <v-dialog persistent v-model="dialog" max-width="290">
            <v-card>
                <v-card-title class="text-h5">
                    Delete task
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="text-center pa-10 font-weight-bold">
                    Are you sure you want to delete this task?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="light-blue darken-1" text @click="$emit('closeModal')">
                        Cancel
                    </v-btn>
                    <v-btn color="red accent-4" text @click="removeTask()">
                        Delete
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: ['task'],
    data() {
        return {
            dialog: true,
        }
    },
    methods: {
        removeTask() {
            this.$store.dispatch('removeTask', this.task.id)
            this.$emit('closeModal')
        }
    }
}
</script>

<style>

</style>