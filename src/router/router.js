import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/conta',
            name: 'conta',
            component: () => import('../views/Conta.vue')
        }
    ]
})
