import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

let db = new Localbase('db')

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: []
    },
    mutations: {
        queryTasks(state) {
            db.collection('tasks')
                .get()
                .then(tasksDB => {
                    state.tasks = tasksDB
                })
        },
    },
    actions: {
        setTask({commit}, title) {
            db.collection('tasks').add({
                id: new Date().getTime(),
                title,
                status: false
            })
            .then(() => {
                commit('queryTasks')
            })
        },
        editTask({commit}, newTask) {
            db.collection('tasks')
                .doc({ id: newTask.id })
                .update({
                    title: newTask.title
                })
                .then(() => {
                    commit('queryTasks')
                })
        },
        complete({commit}, newTask) {
            db.collection('tasks')
                .doc({ id: newTask.id })
                .update({
                    status: !newTask.status
                })
                .then(() => {
                    commit('queryTasks')
                })
        },
        removeTask({commit}, id) {
            db.collection('tasks')
                .doc({ id: id})
                .delete()
                .then(() => {
                    commit('queryTasks')
                })
        }
    },
    modules: {
    }
})
