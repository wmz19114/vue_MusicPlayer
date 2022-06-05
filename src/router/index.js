import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import layout from "../views/layout.vue"


const routes = [{
        path: "/",
        name: "layout",
        component: layout,
        children: [{
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/topic',
                name: 'Topic',
                component: () =>
                    import ("../views/topic.vue")
            },
            {
                path: '/my',
                name: 'my',
                component: () =>
                    import ("../views/my.vue")
            },
            {
                path: '/search',
                name: 'search',
                component: () =>
                    import ("../views/search.vue")
            }
        ]
    }

]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),

    routes,
    linkActiveClass: "active"
})

export default router