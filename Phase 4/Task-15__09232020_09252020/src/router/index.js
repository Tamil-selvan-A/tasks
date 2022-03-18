import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/about/index.vue')
    },
    {
        path: '/about/team',
        name: 'Team',
        component: () =>
            import ('../views/about/team/index.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import ('../views/contact/index.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
            import ('../views/dashboard/index.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router