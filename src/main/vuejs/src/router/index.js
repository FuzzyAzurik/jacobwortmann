import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/components/Resume'
import Profile from '@/components/Profile'
import Electro from '@/components/electro/Electro'
import Projects from '@/components/Projects'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/resume',
            name: 'Resume',
            component: Resume
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
        }
    ]
})
