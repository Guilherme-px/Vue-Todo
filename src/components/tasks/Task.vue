<template>
    <div>
        <v-list-item :class="{'light-green accent-3' :task.status}" @click="$store.dispatch('complete', task)">
            <template v-slot:default="{}">
                <v-list-item-action>
                    <v-checkbox color="green darken-4" :input-value="task.status"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                    <v-list-item-title :class="{'text-decoration-line-through' :task.status}">
                        {{ task.title }}
                    </v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                    <TaskMenu :task="task" />
                </v-list-item-action>

            </template>
        </v-list-item>
        <v-divider></v-divider>
    </div>
</template>

<script>
import TaskMenu from './TasksMenu'

export default {
    components: { TaskMenu },
    props: ['task'],
    methods: {
        remove(id) {
            this.$store.commit('removeTask', id)
        }
    }
}
</script>

<style>

</style>