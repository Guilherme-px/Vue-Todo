<template>
    <div>
        <drop-list :items="dragTasks" @reorder="$event.apply(dragTasks)">
            <template v-slot:item="{item, reorder}">
                <drag :key="item.id" :data="item">
                    <Task :task="item" style="background-color: white"
                        :style="reorder ? {borderLeft: '2px solid #1976D2', marginLeft:'-2px'} : {}"/>
                    <v-divider/>
                </drag>
            </template>
        </drop-list>
    </div>
</template>

<script>
import { Drag, DropList } from "vue-easy-dnd";
import Task from './Task'

export default {
    components: {
        Drag,
        DropList,
        Task
    },
    computed: {
        dragTasks() {
            return this.$store.state.tasks
        }
    }
}
</script>

<style>

</style>