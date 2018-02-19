import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Electro from '@/components/Electro'
import Projects from '@/components/Projects'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: "electro-webapp",
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/projects',
            name: 'Projects',
            component: Projects
        },
        {
            path: '/electro',
            name: 'Electro',
            component: Electro
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})
