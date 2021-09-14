<template>
    <div>
        <v-col>
            <v-text-field
                color="black"
                clearable
                v-model="task"
                label="Task name"
                counter
                maxlength="50"
                @keyup.enter="saveTask"
            ></v-text-field>
        </v-col>
    </div>
</template>

<script>
export default {
    data() {
        return {
            task: null,
        }
    },
    methods: {
        saveTask() {
            this.$store.dispatch('setTask', this.task)
            this.task = null
        }
    },
}
</script>

<style scoped>

</style>