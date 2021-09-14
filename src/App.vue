<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app>
            <v-img gradient="to right, rgba(19,84,122,.5), rgba(28,108,199,.4)" 
            src="./assets/bg.jpg" class="pt-5 text-center">
                <v-avatar size="100">
                    <v-img src="https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256_960_720.png" />
                </v-avatar>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6"> Vue js </v-list-item-title>
                        <v-list-item-subtitle> Todo App </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-img>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        
        <v-app-bar 
            app
            prominent
            color="#fcb69f"
            height="186"
            src="./assets/bg.jpg"
        >
            <template v-slot:img="{ props }">
                <v-img
                    v-bind="props"
                >       
                </v-img>
            </template>

            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <center>
                <v-input class="mt-16">
                    <InputTask />
                </v-input>
            </center>
        </v-app-bar>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import InputTask from './components/inputTask/InputTask.vue';
export default {
  components: { InputTask },
    props: ['task'],
    data: () => ({
        drawer: false,
        items: [
            { title: "Tasks", icon: "mdi-view-dashboard", to: "/" },
            { title: "About", icon: "mdi-help-box", to: "/about" },
        ],
    }),
};
</script>

<style scoped>

</style>