<template>
    <div>
        <TasksList />
        <div v-if="!$store.state.tasks.length" class="mt-16 animate__animated animate__bounce">
            <center>
                <v-icon size="100" color="primary">mdi-check</v-icon>
                <div>
                    <span class="text-h5 primary--text">No tasks</span>
                </div>
            </center>
        </div>
    </div>
</template>

<script>
import TasksList from '../components/tasks/TasksList'
import 'animate.css'

export default {
    components: { TasksList },
    created() {
        this.$store.commit('queryTasks')
    }
}
</script>

<style>

</style>