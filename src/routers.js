import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import LogIn from './components/LogIn.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        name: '/',
        component: Home,
        path: '/'
    },

    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup'
    },

    {
        name: 'Login',
        component: LogIn,
        path: '/login'
    },

    {
        name: 'About',
        component: About,
        path: '/about'
    },

    {
        name: 'Add',
        component: Add,
        path: '/add'
    },

    {
        name: 'Update',
        component: Update,
        path: '/update/:id'
    },

    {
        name: 'Contact',
        component: Contact,
        path: '/contact'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;