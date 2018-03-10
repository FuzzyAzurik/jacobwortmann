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
            <router-view/>
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
                    icon: "face",
                    path: "/profile",
                },
                {
                    title: "Resume",
                    icon: "work",
                    path: "/resume",
                },
                {
                    title: "Projects",
                    icon: "folder",
                    items: [
                        {
                            title: "Electro",
                            icon: "power",
                            path: "/electro"
                        }
                    ]
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
