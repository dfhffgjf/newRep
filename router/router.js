import {createRouter, createWebHistory} from "vue-router";

import Works from "@/Works";

const routes = [
    {
        path: '/home',
        component: Works
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router