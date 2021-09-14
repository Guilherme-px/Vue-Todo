<template>
    <div>
        <v-dialog persistent v-model="dialog" max-width="290">
            <v-card>
                <v-card-title class="text-h5">
                    Edit task
                </v-card-title>
                <v-divider></v-divider>
                <v-col cols="12">
                    <v-text-field
                        label="Enter the new task"
                        counter
                        maxlength="50"
                        v-model="title"
                        class="pa-4 mt-5"
                        color="black"
                    ></v-text-field>
                </v-col>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="light-blue darken-1" text @click="$emit('closeModal')">
                        Cancel
                    </v-btn>
                    <v-btn color="green darken-1" text @click="editTask()">
                        Save
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
            title: null,
        }
    },
    methods: {
        editTask() {
            let newTask = {
                title : this.title,
                id: this.task.id
            }
            this.$store.dispatch('editTask', newTask)
            this.$emit('closeModal')
        }
    },
    created() {
        this.title = this.task.title
    }
}
</script>

<style>

</style>