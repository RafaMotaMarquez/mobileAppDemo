import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes = [{
        path: '/',
        redirect: '/tabs/users'
    },
    {
        path: '/users/:id',
        component: () =>
            import ('../views/UserDetails.vue')
    },
    {
        path: '/tabs/',
        component: TabsPage,
        children: [{
                path: '',
                redirect: '/tabs/users'
            },
            {
                path: 'users',
                component: () =>
                    import ('@/views/TabUserList.vue')
            },
            {
                path: 'users-grid',
                component: () =>
                    import ('@/views/TabUserGrid.vue')
            },
            {
                path: 'users-report',
                component: () =>
                    import ('@/views/TabUserReport.vue')
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router