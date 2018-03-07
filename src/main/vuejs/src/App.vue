<template>
    <v-app id="inspire" dark>
        <v-navigation-drawer clipped fixed v-model="drawer" app>
            <v-list dense>
                <div v-for="item in items" :key="item.title">
                    <v-list-tile v-if="item.items === undefined" :to="item.path" @click="">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-group v-else>
                        <v-list-tile slot="activator">
                            <v-list-tile-action>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile v-for="subItem in item.items" :key="subItem.title" :to="subItem.path">
                            <v-list-tile-content>
                                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-icon>{{ subItem.icon }}</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list-group>
                </div>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app fixed clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title>{{pageTitle}}</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container fluid fill-height>
                <v-layout justify-center>
                    <router-view/>
                </v-layout>
            </v-container>
        </v-content>
        <v-footer app fixed>
            <span>&copy; 2017</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            drawer: true,
            items: [
                {
                    title: "Profile",
                    icon: "dashboard",
                    path: "/profile",
                },
                {
                    title: "Projects",
                    icon: "dashboard",
                    items: [
                        {
                            title: "Electro",
                            icon: "power",
                            path: "/electro"
                        }
                    ]
                },
                {
                    title: "Resume",
                    icon: "dashboard",
                    path: "/resume",
                }
            ]
        }),
        props: {
            source: String
        }
    }
</script>

<style>

</style>
