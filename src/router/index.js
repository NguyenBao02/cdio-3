import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path: '/',
        component: () => import('../components/KhachHang/index.vue')
    },
    {
        path: '/thanh-toan',
        component: () => import('../components/ThanhToan/index.vue')
    },
    {
        path: '/profile',
        component: () => import('../components/TrangProfile/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router