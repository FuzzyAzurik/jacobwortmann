<template>
    <v-app id="inspire" dark>
        <v-navigation-drawer fixed v-model="drawer" app>
            <v-list dense>
                <div v-for="item in items" :key="item.title">
                    <v-list-tile v-if="item.items === undefined" :to="item.path" @click="pageTitle = item.title">
                        <v-list-tile-action>
                            <v-icon small>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-group v-else>
                        <v-list-tile slot="activator">
                            <v-list-tile-action>
                                <v-icon small>{{ item.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile v-for="subItem in item.items" :key="subItem.title" :to="subItem.path" @click="pageTitle = subItem.title">
                            <v-list-tile-content>
                                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-icon small>{{ subItem.icon }}</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list-group>
                </div>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app fixed clipped>
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
            pageTitle: "",
            items: [
                {
                    title: "Profile",
                    icon: "fas fa-user",
                    path: "/profile",
                },
                {
                    title: "Resume",
                    icon: "fas fa-address-card",
                    path: "/resume",
                },
                {
                    title: "Projects",
                    icon: "fas fa-boxes",
                    items: [
                        {
                            title: "Electro",
                            icon: "fas fa-bolt",
                            path: "/electro"
                        }
                    ]
                }
            ]
        }),
        props: {
            source: String,
        }
    }
</script>

<style>

</style>
