import {createRouter, createWebHistory} from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import AppProjects from './pages/AppProjects.vue';


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/aboutUs',
            name: 'aboutus',
            component: AboutUs
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        }
    ]
})