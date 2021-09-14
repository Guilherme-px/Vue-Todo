<template>
    <div>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon>
                    <v-icon dark>mdi-dots-vertical </v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, i) in items" :key="i" @click="item.click()">
                    <v-icon left>{{ item.icon }}</v-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <ModalEdit :task="task" v-if="items[0].modal" @closeModal="items[0].modal = false" />
        <ModalDelete :task="task" v-if="items[1].modal" @closeModal="items[1].modal = false" />
    </div>
</template>

<script>
import ModalDelete from '../modal/ModalDelete'
import ModalEdit from '../modal/ModalEdit'

export default {
    components: { ModalEdit, ModalDelete },
    props: ['task'],
    data() {
        return {
            items: [
            { 
                icon: "mdi-pencil",
                title: 'To edit',
                modal: false,
                click() {
                    this.modal = true
                }
            },
            { 
                icon: "mdi-trash-can", 
                title: 'Delete',
                modal: false,
                click() {
                    this.modal = true
                }
            },
            ],
        }
    }
}
</script>

<style>

</style>