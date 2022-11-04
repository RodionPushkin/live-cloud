import {createRouter, createWebHistory} from 'vue-router'
import store from '../store/index'

const authGuard = async (to, from, next) => {
    let isAuthorized
    let auth = await store.getters.USER
    if (auth?.email) {
        isAuthorized = true
    } else {
        isAuthorized = false
    }
    if (isAuthorized) {
        if (to.path == "/auth") {
            next({path: "/"})
        } else {
            next()
        }
    } else {
        if (to.path == "/auth") {
            next()
        } else if (to.path == "/") {
            next({path: "/auth"})
        }
    }
};
const routes = [
    {
        path: '/',
        name: 'главная',
        beforeEnter: authGuard,
        component: () => import('../views/home/index.vue')
    },
    {
        path: '/auth',
        name: 'авторизация',
        beforeEnter: authGuard,
        component: () => import('../views/auth/index.vue')
    },
    {path: '/:pathMatch(.*)*', component: () => import('../views/404/index.vue')}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
